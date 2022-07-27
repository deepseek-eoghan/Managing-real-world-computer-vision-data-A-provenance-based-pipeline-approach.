import json
import boto3

def lambda_handler(event, context):
    
    dynamodb_client = boto3.client('dynamodb')
    table_name = 'Inference'
    existing_tables = dynamodb_client.list_tables()['TableNames']

    if table_name not in existing_tables:
        inference_table = create_inference_table()
    
    return {
        'statusCode': 200,
    }

def create_inference_table():
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.create_table(
        TableName='Inference',
        KeySchema=[
            {
                'AttributeName': 'unixtimestamp',
                'KeyType': 'HASH'  # Partition key
            },
            {
                'AttributeName': 'cam_id',
                'KeyType': 'RANGE'  # Sort key
            },
        ],
        AttributeDefinitions=[
            {
                'AttributeName': 'unixtimestamp',
                'AttributeType': 'N'
            },
            {
                'AttributeName': 'cam_id',
                'AttributeType': 'S'
            }

        ],
        ProvisionedThroughput={
            'ReadCapacityUnits': 10,
            'WriteCapacityUnits': 10
        }
    )
    return table

