import json
import boto3

def lambda_handler(event, context):
    client = boto3.client('sagemaker')
    response = client.delete_endpoint(
        EndpointName=event["endpoint"]
    )
    return {
        'statusCode': 200,
        'body': json.dumps(response)
    }
