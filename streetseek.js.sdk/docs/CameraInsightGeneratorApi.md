# StreetseekServer.CameraInsightGeneratorApi

All URIs are relative to *http://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cameraInsightGeneratorConfigByStreamNameStreamNameGet**](CameraInsightGeneratorApi.md#cameraInsightGeneratorConfigByStreamNameStreamNameGet) | **GET** /camera-insight-generator/config/by/stream-name/{streamName} | 



## cameraInsightGeneratorConfigByStreamNameStreamNameGet

> InsightsGeneratorConfig cameraInsightGeneratorConfigByStreamNameStreamNameGet(streamName)



### Example

```javascript
import StreetseekServer from 'streetseek_server';

let apiInstance = new StreetseekServer.CameraInsightGeneratorApi();
let streamName = "streamName_example"; // String | 
apiInstance.cameraInsightGeneratorConfigByStreamNameStreamNameGet(streamName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **streamName** | **String**|  | 

### Return type

[**InsightsGeneratorConfig**](InsightsGeneratorConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

