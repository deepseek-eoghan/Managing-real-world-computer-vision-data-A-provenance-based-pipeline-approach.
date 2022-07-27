from deployment.tracker import *
import json
import sys
import os

def lambda_handler(event=None, context=None):
    
    # Tracker Setup
    tracker_config = setup(config_file = os.path.join(sys.path[0],"deployment/config.json"), event=event)

    # Check if test is local
    input_file, is_local_test, tracker_config = get_test_type(event, tracker_config)

    # Parse Input Object
    bbox_data, tracker_config = get_input(input_file, tracker_config, is_local_test)
    
    # Tracker Worker
    tracker_output_object = tracker_worker(bbox_data, tracker_config)
    
    # Write to MySQL Database
    write_to_database(tracker_output_object, tracker_config)
    
    return {
        'statusCode': 200,
        'body': json.dumps(tracker_output_object)
    }