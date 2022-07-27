from deployment.sort import *
from deployment.utils import *
from collections import deque
import json
import requests
import boto3
from boto3.dynamodb.conditions import Key, Attr

def setup(config_file, event):
    print("Tracker Config")
    if "cam_id" in event:
        config = event
    else:
        with open(config_file) as json_file:
            config = json.load(json_file)
    print(config)

    width = config['transformation_shape'][0]
    height = config['transformation_shape'][1]
    img_params = np.float32([[0, 0],[width, 0],[0, height],[width, height]])

    # Ratio to pixels
    config['speed_divider'] =  config['speed_divider'] * config['img_width']
    config['social_distance_guideline'] =  config['social_distance_guideline'] * config['img_width']
    for i in range(len(config['count_line'])):
        config['count_line'][i][0] = int(config['count_line'][i][0] * config['img_width'])
        config['count_line'][i][1] = int(config['count_line'][i][1] * config['img_height'])

    for i in range(len(config['corner_points'])):
        config['corner_points'][i][0] = int(config['corner_points'][i][0] * config['img_width'])
        config['corner_points'][i][1] = int(config['corner_points'][i][1] * config['img_height'])
    
    config['transformation_matrix'] = cv2.getPerspectiveTransform(np.float32(config['corner_points']), img_params) 
    return config

def get_input(input_file, tracker_config, is_local_test):
    print("Getting Inputs from database")
    if is_local_test :
        with open(input_file) as json_file:
            data = json.load(json_file)
        return data, tracker_config
    else:
        data, start, end = get_data_from_dyamo(tracker_config["stream_name"])
        tracker_config["start_frame_time"] = start
        tracker_config["end_frame_time"] = end
        return data, tracker_config

def tracker_worker(bbox_data, tracker_config):
    KMPH_TO_MS = 3.6
    print("Begin Processing Bbox Data")
    mot_tracker = Sort()

    # Variables updated each frame
    prev_people_count = 0
    total_people_count = 0
    total_line_crossed_left = 0
    total_line_crossed_right = 0
    total_line_crossed = 0
    speed_summed = 0
    detections_count = 0
    frames = 0

    points_dict = {}
    tracked_ids = []
    line_crossing_ids = [] 

    # Density computation oval 
    oval_angle_rad = math.atan2((tracker_config['count_line'][0][1]*tracker_config['img_height'])-(tracker_config['count_line'][1][1]*tracker_config['img_height']), 
                                (tracker_config['count_line'][0][0]*tracker_config['img_width'])-(tracker_config['count_line'][1][0]*tracker_config['img_width']))
    oval_angle_deg = math.degrees(oval_angle_rad)
    density_array = []

    # Heatmap variables
    heatmap_rows = round(tracker_config['heatmap_cols'] * 
                        (tracker_config['img_height']/tracker_config['img_width']))
    heatmap_boxes = [0] * (tracker_config['heatmap_cols'] * heatmap_rows)

    heatmap_box_size = tracker_config['img_width']/tracker_config['heatmap_cols']
    half_img_height = round(tracker_config['img_height']/2)

    # Social Distancing Varaible
    social_distancing_count = 0
    not_social_distancing_count = 0
    
    # Used for clearing unused keys
    in_use_detection_keys = []

    for frame_index, inference_instance in enumerate(bbox_data):

        # variables for the sort algorithm
        peoplecount = 0
        totalSpeed = 0
        left = 0
        right = 0
        up = 0
        down = 0
        frames += 1

        # Clear unused paths
        if(frames%tracker_config["clear_paths_frame_interval"]==0):
            for stored_key in list(points_dict.keys()):
                if stored_key not in in_use_detection_keys:
                    del points_dict[stored_key] 
            in_use_detection_keys = []

        # array to hold ground points for social distancing measurement
        groundpoints_array = []

        # Density pedestrian mask
        pedestrian_mask = np.zeros((tracker_config['img_height'], tracker_config['img_width'], 3), dtype='uint8')
        pedestrian_mask = cv2.cvtColor(pedestrian_mask, cv2.COLOR_BGR2GRAY)
        thresh, pedestrian_mask = cv2.threshold(pedestrian_mask, 127, 255, cv2.THRESH_BINARY)

        # Build detections array for frame
        detections_list = []
        for prediction_index, detection in enumerate(inference_instance['detections']):
            detection.update((k, float(v)) for k, v in detection.items())
            detections_list.append(json_detection_to_array(detection, tracker_config['img_width'], tracker_config['img_height']))
        detections_array = np.array(detections_list)

        # Apply SORT algorithm
        detection_keys = []
        if detections_array is not None and len(detections_array):
            tracked_objects = mot_tracker.update(detections_array)
            
            for x1, y1, x2, y2, obj_id, cls_pred in tracked_objects:
                detections_count += 1

                # Object coordinates
                Id = int(obj_id)
                detection_keys.append(Id)
                if Id not in in_use_detection_keys:
                    in_use_detection_keys.append(Id)
                x1 = int(x1)
                x2 = int(x2)
                y1 = int(y1)
                y2 = int(y2)
                box_h = int(y2 - y1)
                box_w = int(x2 - x1)
                center = (int(x1 + (box_w / 2)), int(y1 + (box_h / 2)))
                feet = int(x1 + (box_w / 2)), int(y1 + box_h)

                ellipse_float = (feet, (box_w, box_w*0.6), oval_angle_deg)
                pedestrian_mask = cv2.ellipse(pedestrian_mask, ellipse_float, (255,255,255), -1) 

                feet = list(feet)

                groundpoints_array.append(feet)

                # STREETSEEK METRIC HEATMAP
                if(feet[1] < half_img_height):
                    feet[1] = (half_img_height - feet[1]) + half_img_height
                elif(feet[1]>half_img_height):
                    feet[1] = half_img_height - (feet[1] - half_img_height) 
                col_pos = math.floor(feet[0] / heatmap_box_size)
                row_pos = math.floor(feet[1] / heatmap_box_size)
                heatmap_index = (row_pos * tracker_config['heatmap_cols']) + col_pos
                heatmap_boxes[heatmap_index] += 1

                peoplecount += 1 
                if Id not in tracked_ids:
                    tracked_ids.append(Id)

                if Id in points_dict:
                    points_dict[Id].appendleft(center)
                else:
                    points_dict[Id] = deque(maxlen = tracker_config['max_snake_len'])
                    points_dict[Id].appendleft(center)

                if len(points_dict[Id]) > tracker_config['min_points_in_path']:

                    # STREETSEEK METRIC DIRECTION
                    xdir, ydir = get_direction(points_dict[Id])       
                    if(xdir == "left"):
                        left += 1
                    if(xdir == "right"):
                        right += 1
                    if(ydir == "up"):
                        up += 1
                    if(ydir == "down"):
                        down += 1

                    # STREETSEEK METRIC SPEED
                    speed = get_speed(points_dict[Id], tracker_config["speed_divider"])
                    speed_summed += speed

                    # STREETSEEK METRIC PEDESTRIAN COUNT
                    if(frames % (tracker_config['min_points_in_path']-1) == 0):
                        lineCrossed = get_count_line_crossed(points_dict[Id], tracker_config)
                        if lineCrossed != None:
                            if Id not in line_crossing_ids:
                                if lineCrossed == "left":
                                    total_line_crossed_left += 1
                                elif lineCrossed == "right":
                                    total_line_crossed_right += 1
                                total_line_crossed += 1
                                line_crossing_ids.append(Id)
                        else:
                            if Id in line_crossing_ids:
                                line_crossing_ids.remove(Id)

        # Add pedestrian paths to local JSON bbox_data obj
        frame_data_index = next((i for i, item in enumerate(bbox_data) 
            if item["frame_id"] == inference_instance["frame_id"]), None)
        bbox_data[frame_data_index]["paths"] = {}
        bbox_data[frame_data_index]["segment_pedestrian_count"] = total_line_crossed

        if(len(detection_keys)>0):
            for p in range(len(detection_keys)):
                pedestrian_path_ratio = convert_to_ratio_list(list(points_dict[detection_keys[p]]), 
                                                        tracker_config["img_width"], 
                                                        tracker_config["img_height"],
                                                        tracker_config)
                bbox_data[frame_data_index]["paths"][str(detection_keys[p])] = pedestrian_path_ratio
                bbox_data[frame_data_index]["detections"][p]["detection_id"] = str(detection_keys[p])
            
            decimal_detections = []
            for det in bbox_data[frame_data_index]["detections"]:
                det_obj = {
                    'y1': Decimal(str(det['y1'])),
                    'x1': Decimal(str(det['x1'])),
                    'y2': Decimal(str(det['y2'])),
                    'x2': Decimal(str(det['x2'])),
                    'score': Decimal(str(det['score'])),
                    'class': int(det['class'])
                }
                if("detection_id") in det:
                    det_obj['detection_id'] = det['detection_id']
                decimal_detections.append(det_obj)
                
            # Write updated item to Dynamo with paths, segement_pedestrian_count and ids
            if tracker_config["write_paths_to_dynamo"] == True and tracker_config["input_file"] == None:
                dynamodb = boto3.resource('dynamodb')
                table = dynamodb.Table('Inference-Outputs')

                response = table.update_item(
                    ExpressionAttributeNames={
                        '#PA': 'paths',
                        '#SPC': 'segment_pedestrian_count',
                        '#DET': 'detections',
                    },
                    ExpressionAttributeValues={
                        ':p': bbox_data[frame_data_index]["paths"],
                        ':d': decimal_detections,
                        ':c': total_line_crossed,
                    },
                    Key={'cam_id':inference_instance["cam_id"], 'unixtimestamp': inference_instance['unixtimestamp']},
                    ReturnValues='ALL_NEW',
                    TableName='Inference-Outputs',
                    UpdateExpression='SET #PA = :p, #SPC = :c, #DET = :d'
                )

        # STREETSEEK METRIC SOCIAL DISTANCE COMPLIANCY
        transformed_downoids = compute_pnt_perspective_transformation(tracker_config['transformation_matrix'],
                                                                        groundpoints_array)    
       
        # Check if 2 or more people have been detected (otherwise no need to detect)
        if len(transformed_downoids) >= 2:
            # Iterate over every possible 2 by 2 between the points combinations 
            list_indexes = list(itertools.combinations(range(len(transformed_downoids)), 2))
            for i,pair in enumerate(itertools.combinations(transformed_downoids, r=2)):
                # Check if the distance between each combination of points is less than the minimum distance chosen
                if math.sqrt( (pair[0][0] - pair[1][0])**2 + (pair[0][1] - pair[1][1])**2 ) < tracker_config['social_distance_guideline']:
                    not_social_distancing_count += 1
                else:
                    social_distancing_count += 1

        density_array.append(int((get_pedestrian_density(pedestrian_mask)/
                            tracker_config['roi_ground_coverage'])*100))
    # Post processing calculations  

    # STREETSEEK METRIC MEDIAN DENSITY
    median_density = median(density_array)

    # STREETSEEK METRIC SOCIAL DISTANCING COMPLIANCY
    social_distancing_compliancy = 100
    if (social_distancing_count + not_social_distancing_count) is not 0:
        social_distancing_compliancy = int(social_distancing_count / (social_distancing_count + not_social_distancing_count)*100)
    
    # STREETSEEK METRIC AVERAGE SPEED
    average_speed = 0
    if detections_count is not 0:
        average_speed = round(speed_summed/detections_count, tracker_config['round_places'])
    
    # STREETSEEK METRIC ESTIMATED TIME SPENT
    est_time_spent_sec = 0
    if (average_speed/KMPH_TO_MS) != 0.0:
        est_time_spent_sec = int(((tracker_config['camera_roi_length'])/(average_speed/KMPH_TO_MS)))

    # Write tracked pedestrian paths back out to local JSON data file
    if tracker_config["input_file"] is not None:
        with open(tracker_config["input_file"], 'w') as local_data_file:
            json.dump(bbox_data, local_data_file, indent=4)  
    
    # Return streetseek insights object
    return build_streetseek_insights_object(total_line_crossed, 
                                            total_line_crossed_right,
                                            total_line_crossed_left,
                                            average_speed,
                                            est_time_spent_sec,
                                            heatmap_boxes,
                                            social_distancing_compliancy,
                                            median_density)


def write_to_database(tracker_output_object, tracker_config):
    tracker_output_object["cameraId"] = tracker_config["cam_id"]
    tracker_output_object["startFrameTime"] = tracker_config["start_frame_time"]
    tracker_output_object["endFrameTime"] = tracker_config["end_frame_time"]

    print("Writing Tracker Output\n", tracker_output_object, "\nto database")
    
    response = requests.post('http://internal-api.streets.deepseek.ai/api/v1/camera-insights/upload-insight', json=tracker_output_object)
    print(response)