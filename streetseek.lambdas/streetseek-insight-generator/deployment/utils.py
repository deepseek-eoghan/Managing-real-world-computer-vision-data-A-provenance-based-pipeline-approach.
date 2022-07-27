import numpy as np
import cv2
import itertools
import math 
import boto3
from boto3.dynamodb.conditions import Key, Attr
import time
from datetime import datetime, timedelta
import os 
import sys
from decimal import Decimal

def compute_pnt_perspective_transformation(matrix,list_downoids):
    """ Apply the perspective transformation to every ground point which have been detected on the main frame.
    @ matrix : the 3x3 matrix 
    @ list_downoids : list that contains the points to transform
    return : list containing all the new points
    """

    # Compute the new coordinates of our points
    list_points_to_detect = np.float32(list_downoids).reshape(-1, 1, 2)
    transformed_points = cv2.perspectiveTransform(list_points_to_detect, np.float32(matrix))
    # Loop over the points and add them to the list that will be returned
    transformed_points_list = list()
    if(transformed_points is not None):
        for i in range(0,transformed_points.shape[0]):
            transformed_points_list.append([transformed_points[i][0][0],transformed_points[i][0][1]])
    return transformed_points_list

def build_streetseek_insights_object(total_line_crossed, 
                                    total_line_crossed_right, 
                                    total_line_crossed_left, 
                                    average_speedaverage_speed,
                                    est_time_spent_sec,
                                    heatmap_boxes,
                                    social_distancing_compliancy,
                                    median_density):

    return {
            "personCount":total_line_crossed, 
            "personCountRight":total_line_crossed_right,
            "personCountLeft":total_line_crossed_left,
            "avgPersonSpeed":average_speedaverage_speed,
            "estTimeSpent": est_time_spent_sec,
            "heatmap": heatmap_boxes,
            "socialDistCompliance": social_distancing_compliancy,
            "medianDensity": median_density
            }
            
def ceil_dt(dt, delta):
    return dt + (datetime.min - dt) % delta

def round_minutes_down(dt, resolution):
    new_minute = (dt.minute // resolution + 0) * resolution
    return (dt + timedelta(minutes=new_minute - dt.minute)).replace(second=0)

def get_data_from_dyamo(stream_name, interval_milli=300000):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('Inference-Outputs')
    
     # Get now() to the nearest 5 minute slot & 5 minutes before now.
    now = round_minutes_down(datetime.utcnow(), 5)
    end = int((now - timedelta(minutes=5)).timestamp() * 1e3)
    start = int((now - timedelta(minutes=10)).timestamp() * 1e3)
    
    # start = 1595321299000
    # end = 1595321312000
 
    timestamp_fe = Key('unixtimestamp').between(start, end)
    cam_id_fe = Key('cam_id').eq(stream_name + '_' + str(datetime.date(datetime.now())))

    response = table.query(
                    KeyConditionExpression = timestamp_fe & cam_id_fe
                )
    
    return response['Items'], start, end

def json_detection_to_array(json_detection, img_width, img_height):
    return np.array([json_detection['x1']*img_width, 
                    json_detection['y1']*img_height, 
                    json_detection['x2']*img_width, 
                    json_detection['y2']*img_height, 
                    json_detection['class'], 
                    json_detection['score']])

def get_count_line_crossed(point_list, tracker_config):
    a = tracker_config["count_line"][0]
    b = tracker_config["count_line"][1]

    position = ((b[0] - a[0])*(point_list[0][1] - a[1]) - (b[1] - a[1])*(point_list[0][0] - a[0]))
    prevposition = ((b[0] - a[0])*(point_list[0 - (tracker_config["min_points_in_path"]-1)][1] - a[1]) - (b[1] - a[1])*(point_list[0 - (tracker_config["min_points_in_path"]-1)][0] - a[0]))

    if(prevposition != 0 and position != 0):
        if(position > 0 and prevposition < 0):
            return "right"
        if(position < 0 and prevposition > 0):
            return "left"
    return None

def get_speed(point_list, speed_divider):
    dx, dy = 0, 0

    for x in range(len(point_list)-1):
        dx += point_list[x+1][0] - point_list[x][0]  
        dy += point_list[x+1][1] - point_list[x][1] 

    speed = math.sqrt(abs(dx * dx - dy * dy))

    return round(speed/speed_divider, 2)

def get_direction(point_list):
    x, y = "", ""
    dx, dy = 0, 0

    for x in range(len(point_list)-1):
        dx += point_list[x+1][0] - point_list[x][0]  
        dy += point_list[x+1][1] - point_list[x][1] 

    if(dx < 0):
        x = "right"
    if(dx > 0):
        x = "left"
    if(dy < 0):
        y = "down"
    if(dy > 0):
        y = "up"

    return (x,y)

def get_pedestrian_density(fg_mask):
    free = np.count_nonzero(fg_mask)
    dim = fg_mask.shape
    total = dim[0] * dim[1]
    capacity = (free/total)*100
    return capacity

def median(lst):
    n = len(lst)
    s = sorted(lst)
    return (sum(s[n//2-1:n//2+1])/2.0, s[n//2])[n % 2] if n else None

def get_test_type(event, tracker_config):
    input_file = None
    is_local_test = False
    if("local_test" in event):
        is_local_test = True
        if(event["data"] is not None):
            input_file = os.path.join(sys.path[0], event["data"])
        else:
            input_file = os.path.join(sys.path[0], "deployment/data.json")
    tracker_config["input_file"] = input_file
    return input_file, is_local_test, tracker_config

def convert_to_ratio_list(pedestrian_path, width, height, tracker_config):
    pedestrian_path_ratio = []
    round_to_places = 4
    for pnt in pedestrian_path:
        if tracker_config['input_file'] is None:
            pnt_1 = Decimal(Decimal(pnt[0])/Decimal(width))
            pnt_2 = Decimal(Decimal(pnt[1])/Decimal(height))
        else:
            pnt_1 = pnt[0]/width
            pnt_2 = pnt[1]/height

        pedestrian_path_ratio.append([round(pnt_1, round_to_places), 
                                    round(pnt_2, round_to_places)])
    
    return pedestrian_path_ratio
    