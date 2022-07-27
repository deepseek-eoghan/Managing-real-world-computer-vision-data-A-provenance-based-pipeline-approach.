from __future__ import print_function
import base64
import json
import boto3
import os
from botocore.exceptions import ClientError
import re
from decimal import Decimal
from datetime import datetime
import time

#Lambda function is written based on output from an Amazon SageMaker example: 
#https://github.com/awslabs/amazon-sagemaker-examples/blob/master/introduction_to_amazon_algorithms/object_detection_pascalvoc_coco/object_detection_image_json_format.ipynb

round_to_spaces = 4

def lambda_handler(event, context):
  for record in event['Records']:
    payload = base64.b64decode(record['kinesis']['data'])
    #Get Json format of Kinesis Data Stream Output
    result = json.loads(payload)
    #Get FragmentMetaData
    fragment = result['fragmentMetaData']
    print("fragment: " + fragment)
    #Get FrameMetaData
    frame = result['frameMetaData']
    print("frame: " + frame)
    #Get StreamName
    streamName = result['streamName']
    print("streamName: " + streamName)
    #Get SageMaker response in Json format
    sageMakerOutput = json.loads(base64.b64decode(result['sageMakerOutput']))
    print("sagemaker raw output: " + str(sageMakerOutput))

    fragmentString = str(fragment)
    x = re.split("\s", fragmentString)
    producerTimestamp = x[2]
    producerTimestamp = re.sub('[producerSideTimestampMillis=,]', '', producerTimestamp)

    detectList = []
  
    for i in sageMakerOutput['detections']:
      y2=round(Decimal(i['y2']), round_to_spaces)
      y1=round(Decimal(i['y1']), round_to_spaces)
      score=round(Decimal(i['score']), round_to_spaces)
      x2=round(Decimal(i['x2']), round_to_spaces)
      x1=round(Decimal(i['x1']), round_to_spaces)
      Class=Decimal(i['class'])
      detect = {
        "y2":y2,
        "y1":y1,
        "score":score,
        "x2":x2,
        "x1":x1,
        "class":Class
      }
      detectList.append(detect)
  
    cameraId= streamName + "_" + str(datetime.date(datetime.now()))
    print(cameraId)
    
    dynamodb = boto3.resource('dynamodb')

    table = dynamodb.Table('Inference-Outputs')
    response = table.put_item(
       Item={
              "unixtimestamp": Decimal(producerTimestamp),
              "cam_id": cameraId,
              "frame_id": sageMakerOutput['uuid'],
              "detections": detectList
            }
    )
    
    currentTimestamp = int(round(time.time() * 1000))
    dynamodbDelay = currentTimestamp - int(producerTimestamp)
    dynamodbDelay = dynamodbDelay/1000

    print("Latency Producer to DynamoDB: " + str(dynamodbDelay) )

  return 'Successfully processed {} records.'.format(len(event['Records']))
