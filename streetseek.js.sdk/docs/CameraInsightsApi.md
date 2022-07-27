# StreetseekServer.CameraInsightsApi

All URIs are relative to *http://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cameraInsightsDailyAggregatorPost**](CameraInsightsApi.md#cameraInsightsDailyAggregatorPost) | **POST** /camera-insights/daily-aggregator | 
[**cameraInsightsDensityAverageTotalForDayDateByCameraIdCameraIdGet**](CameraInsightsApi.md#cameraInsightsDensityAverageTotalForDayDateByCameraIdCameraIdGet) | **GET** /camera-insights/density/average/total/for/day/{date}/by/camera/id/{cameraId} | 
[**cameraInsightsDensityAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet**](CameraInsightsApi.md#cameraInsightsDensityAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet) | **GET** /camera-insights/density/average/total/per/day/between/dates/start/{startDate}/end/{endDate}/by/camera/id/{cameraId} | 
[**cameraInsightsHeatmapTotalForDayDateByCameraIdCameraIdGet**](CameraInsightsApi.md#cameraInsightsHeatmapTotalForDayDateByCameraIdCameraIdGet) | **GET** /camera-insights/heatmap/total/for/day/{date}/by/camera/id/{cameraId} | 
[**cameraInsightsPersonCountDateByHourByCameraIdCameraIdGet**](CameraInsightsApi.md#cameraInsightsPersonCountDateByHourByCameraIdCameraIdGet) | **GET** /camera-insights/person-count/{date}/by/hour/by/camera/id/{cameraId} | 
[**cameraInsightsPersonCountDateMinuteIntervalIntervalByCameraIdCameraIdGet**](CameraInsightsApi.md#cameraInsightsPersonCountDateMinuteIntervalIntervalByCameraIdCameraIdGet) | **GET** /camera-insights/person-count/{date}/minute/interval/{interval}/by/camera/id/{cameraId} | 
[**cameraInsightsPersonCountTotalForDayDateByCameraIdCameraIdGet**](CameraInsightsApi.md#cameraInsightsPersonCountTotalForDayDateByCameraIdCameraIdGet) | **GET** /camera-insights/person-count/total/for/day/{date}/by/camera/id/{cameraId} | 
[**cameraInsightsPersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet**](CameraInsightsApi.md#cameraInsightsPersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet) | **GET** /camera-insights/person-count/total/per/day/between/dates/start/{startDate}/end/{endDate}/by/camera/id/{cameraId} | 
[**cameraInsightsSocialDistancingAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet**](CameraInsightsApi.md#cameraInsightsSocialDistancingAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet) | **GET** /camera-insights/social-distancing/average/{date}/minute/interval/{interval}/by/camera/id/{cameraId} | 
[**cameraInsightsSocialDistancingAverageTotalForDayDateByCameraIdCameraIdGet**](CameraInsightsApi.md#cameraInsightsSocialDistancingAverageTotalForDayDateByCameraIdCameraIdGet) | **GET** /camera-insights/social-distancing/average/total/for/day/{date}/by/camera/id/{cameraId} | 
[**cameraInsightsSocialDistancingAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet**](CameraInsightsApi.md#cameraInsightsSocialDistancingAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet) | **GET** /camera-insights/social-distancing/average/total/per/day/between/dates/start/{startDate}/end/{endDate}/by/camera/id/{cameraId} | 
[**cameraInsightsTimeSpentAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet**](CameraInsightsApi.md#cameraInsightsTimeSpentAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet) | **GET** /camera-insights/time-spent/average/{date}/minute/interval/{interval}/by/camera/id/{cameraId} | 
[**cameraInsightsTimeSpentAverageTotalForDayDateByCameraIdCameraIdGet**](CameraInsightsApi.md#cameraInsightsTimeSpentAverageTotalForDayDateByCameraIdCameraIdGet) | **GET** /camera-insights/time-spent/average/total/for/day/{date}/by/camera/id/{cameraId} | 
[**cameraInsightsTimeSpentAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet**](CameraInsightsApi.md#cameraInsightsTimeSpentAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet) | **GET** /camera-insights/time-spent/average/total/per/day/between/dates/start/{startDate}/end/{endDate}/by/camera/id/{cameraId} | 
[**cameraInsightsUploadInsightPost**](CameraInsightsApi.md#cameraInsightsUploadInsightPost) | **POST** /camera-insights/upload-insight | 
[**cameraInsightsWalkingPaceAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet**](CameraInsightsApi.md#cameraInsightsWalkingPaceAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet) | **GET** /camera-insights/walking-pace/average/{date}/minute/interval/{interval}/by/camera/id/{cameraId} | 
[**cameraInsightsWalkingPaceAverageTotalForDayDateByCameraIdCameraIdGet**](CameraInsightsApi.md#cameraInsightsWalkingPaceAverageTotalForDayDateByCameraIdCameraIdGet) | **GET** /camera-insights/walking-pace/average/total/for/day/{date}/by/camera/id/{cameraId} | 
[**cameraInsightsWalkingPaceAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet**](CameraInsightsApi.md#cameraInsightsWalkingPaceAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet) | **GET** /camera-insights/walking-pace/average/total/per/day/between/dates/start/{startDate}/end/{endDate}/by/camera/id/{cameraId} | 



## cameraInsightsDailyAggregatorPost

> String cameraInsightsDailyAggregatorPost(opts)



Aggregate all metrics up to a day

### Example

```javascript
import StreetseekServer from 'streetseek_server';

let apiInstance = new StreetseekServer.CameraInsightsApi();
let opts = {
  'inlineObject': new StreetseekServer.InlineObject() // InlineObject | 
};
apiInstance.cameraInsightsDailyAggregatorPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: text/plain


## cameraInsightsDensityAverageTotalForDayDateByCameraIdCameraIdGet

> TotalCameraDensity cameraInsightsDensityAverageTotalForDayDateByCameraIdCameraIdGet(_date, cameraId)



### Example

```javascript
import StreetseekServer from 'streetseek_server';

let apiInstance = new StreetseekServer.CameraInsightsApi();
let _date = "_date_example"; // String | Date to retrieve data from.
let cameraId = "cameraId_example"; // String | Numeric ID of camera.
apiInstance.cameraInsightsDensityAverageTotalForDayDateByCameraIdCameraIdGet(_date, cameraId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_date** | **String**| Date to retrieve data from. | 
 **cameraId** | **String**| Numeric ID of camera. | 

### Return type

[**TotalCameraDensity**](TotalCameraDensity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cameraInsightsDensityAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet

> [TotalCameraDensity] cameraInsightsDensityAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet(startDate, endDate, cameraId)



Get total average density for each day between 2 dates.

### Example

```javascript
import StreetseekServer from 'streetseek_server';

let apiInstance = new StreetseekServer.CameraInsightsApi();
let startDate = "startDate_example"; // String | First date to retrieve.
let endDate = "endDate_example"; // String | Last date in range.
let cameraId = "cameraId_example"; // String | Numeric ID of camera.
apiInstance.cameraInsightsDensityAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet(startDate, endDate, cameraId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**| First date to retrieve. | 
 **endDate** | **String**| Last date in range. | 
 **cameraId** | **String**| Numeric ID of camera. | 

### Return type

[**[TotalCameraDensity]**](TotalCameraDensity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cameraInsightsHeatmapTotalForDayDateByCameraIdCameraIdGet

> Heatmap cameraInsightsHeatmapTotalForDayDateByCameraIdCameraIdGet(_date, cameraId)



### Example

```javascript
import StreetseekServer from 'streetseek_server';

let apiInstance = new StreetseekServer.CameraInsightsApi();
let _date = "_date_example"; // String | Date to retrieve data from.
let cameraId = "cameraId_example"; // String | Numeric ID of camera.
apiInstance.cameraInsightsHeatmapTotalForDayDateByCameraIdCameraIdGet(_date, cameraId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_date** | **String**| Date to retrieve data from. | 
 **cameraId** | **String**| Numeric ID of camera. | 

### Return type

[**Heatmap**](Heatmap.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cameraInsightsPersonCountDateByHourByCameraIdCameraIdGet

> [CameraPersonCount] cameraInsightsPersonCountDateByHourByCameraIdCameraIdGet(_date, cameraId)



Get persons counted for a full day on a given date on an hourly interval.

### Example

```javascript
import StreetseekServer from 'streetseek_server';

let apiInstance = new StreetseekServer.CameraInsightsApi();
let _date = "_date_example"; // String | Date from which to retrieve data.
let cameraId = "cameraId_example"; // String | Date from which to retrieve data.
apiInstance.cameraInsightsPersonCountDateByHourByCameraIdCameraIdGet(_date, cameraId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_date** | **String**| Date from which to retrieve data. | 
 **cameraId** | **String**| Date from which to retrieve data. | 

### Return type

[**[CameraPersonCount]**](CameraPersonCount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cameraInsightsPersonCountDateMinuteIntervalIntervalByCameraIdCameraIdGet

> [CameraPersonCount] cameraInsightsPersonCountDateMinuteIntervalIntervalByCameraIdCameraIdGet(_date, interval, cameraId)



Get persons counted for a full day on a given date with a chosen minute based interval.

### Example

```javascript
import StreetseekServer from 'streetseek_server';

let apiInstance = new StreetseekServer.CameraInsightsApi();
let _date = "_date_example"; // String | Date to retrieve data from.
let interval = 56; // Number | Interval of data number in range [5 ... 50]
let cameraId = "cameraId_example"; // String | Numeric ID of camera.
apiInstance.cameraInsightsPersonCountDateMinuteIntervalIntervalByCameraIdCameraIdGet(_date, interval, cameraId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_date** | **String**| Date to retrieve data from. | 
 **interval** | **Number**| Interval of data number in range [5 ... 50] | 
 **cameraId** | **String**| Numeric ID of camera. | 

### Return type

[**[CameraPersonCount]**](CameraPersonCount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cameraInsightsPersonCountTotalForDayDateByCameraIdCameraIdGet

> TotalCameraPersonCount cameraInsightsPersonCountTotalForDayDateByCameraIdCameraIdGet(_date, cameraId)



Get total persons counted for a given day based on a camera id.

### Example

```javascript
import StreetseekServer from 'streetseek_server';

let apiInstance = new StreetseekServer.CameraInsightsApi();
let _date = "_date_example"; // String | Date to retrieve data from.
let cameraId = "cameraId_example"; // String | Numeric ID of camera.
apiInstance.cameraInsightsPersonCountTotalForDayDateByCameraIdCameraIdGet(_date, cameraId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_date** | **String**| Date to retrieve data from. | 
 **cameraId** | **String**| Numeric ID of camera. | 

### Return type

[**TotalCameraPersonCount**](TotalCameraPersonCount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cameraInsightsPersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet

> [TotalCameraPersonCount] cameraInsightsPersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet(startDate, endDate, cameraId)



Get total persons per day between 2 dates.

### Example

```javascript
import StreetseekServer from 'streetseek_server';

let apiInstance = new StreetseekServer.CameraInsightsApi();
let startDate = "startDate_example"; // String | First date to retrieve.
let endDate = "endDate_example"; // String | Last date in range.
let cameraId = "cameraId_example"; // String | Numeric ID of camera.
apiInstance.cameraInsightsPersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet(startDate, endDate, cameraId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**| First date to retrieve. | 
 **endDate** | **String**| Last date in range. | 
 **cameraId** | **String**| Numeric ID of camera. | 

### Return type

[**[TotalCameraPersonCount]**](TotalCameraPersonCount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cameraInsightsSocialDistancingAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet

> [CameraSocialDistAvg] cameraInsightsSocialDistancingAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet(_date, interval, cameraId)



Get average social distance compliance for a full day on a given date with a chosen minute based interval.

### Example

```javascript
import StreetseekServer from 'streetseek_server';

let apiInstance = new StreetseekServer.CameraInsightsApi();
let _date = "_date_example"; // String | Date to retrieve data from.
let interval = 56; // Number | Interval of data number in range [5 ... 50]
let cameraId = "cameraId_example"; // String | Numeric ID of camera.
apiInstance.cameraInsightsSocialDistancingAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet(_date, interval, cameraId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_date** | **String**| Date to retrieve data from. | 
 **interval** | **Number**| Interval of data number in range [5 ... 50] | 
 **cameraId** | **String**| Numeric ID of camera. | 

### Return type

[**[CameraSocialDistAvg]**](CameraSocialDistAvg.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cameraInsightsSocialDistancingAverageTotalForDayDateByCameraIdCameraIdGet

> TotalCameraSocialDistanceAvg cameraInsightsSocialDistancingAverageTotalForDayDateByCameraIdCameraIdGet(_date, cameraId)



### Example

```javascript
import StreetseekServer from 'streetseek_server';

let apiInstance = new StreetseekServer.CameraInsightsApi();
let _date = "_date_example"; // String | Date to retrieve data from.
let cameraId = "cameraId_example"; // String | Numeric ID of camera.
apiInstance.cameraInsightsSocialDistancingAverageTotalForDayDateByCameraIdCameraIdGet(_date, cameraId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_date** | **String**| Date to retrieve data from. | 
 **cameraId** | **String**| Numeric ID of camera. | 

### Return type

[**TotalCameraSocialDistanceAvg**](TotalCameraSocialDistanceAvg.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cameraInsightsSocialDistancingAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet

> [TotalCameraSocialDistanceAvg] cameraInsightsSocialDistancingAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet(startDate, endDate, cameraId)



Get total average social distancing compliance per day between 2 dates.

### Example

```javascript
import StreetseekServer from 'streetseek_server';

let apiInstance = new StreetseekServer.CameraInsightsApi();
let startDate = "startDate_example"; // String | First date to retrieve.
let endDate = "endDate_example"; // String | Last date in range.
let cameraId = "cameraId_example"; // String | Numeric ID of camera.
apiInstance.cameraInsightsSocialDistancingAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet(startDate, endDate, cameraId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**| First date to retrieve. | 
 **endDate** | **String**| Last date in range. | 
 **cameraId** | **String**| Numeric ID of camera. | 

### Return type

[**[TotalCameraSocialDistanceAvg]**](TotalCameraSocialDistanceAvg.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cameraInsightsTimeSpentAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet

> [CameraTimeSpent] cameraInsightsTimeSpentAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet(_date, interval, cameraId)



### Example

```javascript
import StreetseekServer from 'streetseek_server';

let apiInstance = new StreetseekServer.CameraInsightsApi();
let _date = "_date_example"; // String | Date to retrieve data from.
let interval = 56; // Number | Interval of data number in range [5 ... 50]
let cameraId = "cameraId_example"; // String | Numeric ID of camera.
apiInstance.cameraInsightsTimeSpentAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet(_date, interval, cameraId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_date** | **String**| Date to retrieve data from. | 
 **interval** | **Number**| Interval of data number in range [5 ... 50] | 
 **cameraId** | **String**| Numeric ID of camera. | 

### Return type

[**[CameraTimeSpent]**](CameraTimeSpent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cameraInsightsTimeSpentAverageTotalForDayDateByCameraIdCameraIdGet

> TotalCameraTimeSpent cameraInsightsTimeSpentAverageTotalForDayDateByCameraIdCameraIdGet(_date, cameraId)



### Example

```javascript
import StreetseekServer from 'streetseek_server';

let apiInstance = new StreetseekServer.CameraInsightsApi();
let _date = "_date_example"; // String | Date to retrieve data from.
let cameraId = "cameraId_example"; // String | Numeric ID of camera.
apiInstance.cameraInsightsTimeSpentAverageTotalForDayDateByCameraIdCameraIdGet(_date, cameraId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_date** | **String**| Date to retrieve data from. | 
 **cameraId** | **String**| Numeric ID of camera. | 

### Return type

[**TotalCameraTimeSpent**](TotalCameraTimeSpent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cameraInsightsTimeSpentAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet

> [TotalCameraTimeSpent] cameraInsightsTimeSpentAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet(startDate, endDate, cameraId)



Get total average time spent for each day between 2 dates.

### Example

```javascript
import StreetseekServer from 'streetseek_server';

let apiInstance = new StreetseekServer.CameraInsightsApi();
let startDate = "startDate_example"; // String | First date to retrieve.
let endDate = "endDate_example"; // String | Last date in range.
let cameraId = "cameraId_example"; // String | Numeric ID of camera.
apiInstance.cameraInsightsTimeSpentAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet(startDate, endDate, cameraId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**| First date to retrieve. | 
 **endDate** | **String**| Last date in range. | 
 **cameraId** | **String**| Numeric ID of camera. | 

### Return type

[**[TotalCameraTimeSpent]**](TotalCameraTimeSpent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cameraInsightsUploadInsightPost

> String cameraInsightsUploadInsightPost(opts)



Post camera insight

### Example

```javascript
import StreetseekServer from 'streetseek_server';

let apiInstance = new StreetseekServer.CameraInsightsApi();
let opts = {
  'cameraInsights': new StreetseekServer.CameraInsights() // CameraInsights | 
};
apiInstance.cameraInsightsUploadInsightPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cameraInsights** | [**CameraInsights**](CameraInsights.md)|  | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: text/plain


## cameraInsightsWalkingPaceAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet

> [CameraWalkingPace] cameraInsightsWalkingPaceAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet(_date, interval, cameraId)



### Example

```javascript
import StreetseekServer from 'streetseek_server';

let apiInstance = new StreetseekServer.CameraInsightsApi();
let _date = "_date_example"; // String | Date to retrieve data from.
let interval = 56; // Number | Interval of data number in range [5 ... 50]
let cameraId = "cameraId_example"; // String | Numeric ID of camera.
apiInstance.cameraInsightsWalkingPaceAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet(_date, interval, cameraId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_date** | **String**| Date to retrieve data from. | 
 **interval** | **Number**| Interval of data number in range [5 ... 50] | 
 **cameraId** | **String**| Numeric ID of camera. | 

### Return type

[**[CameraWalkingPace]**](CameraWalkingPace.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cameraInsightsWalkingPaceAverageTotalForDayDateByCameraIdCameraIdGet

> TotalCameraWalkingPace cameraInsightsWalkingPaceAverageTotalForDayDateByCameraIdCameraIdGet(_date, cameraId)



### Example

```javascript
import StreetseekServer from 'streetseek_server';

let apiInstance = new StreetseekServer.CameraInsightsApi();
let _date = "_date_example"; // String | Date to retrieve data from.
let cameraId = "cameraId_example"; // String | Numeric ID of camera.
apiInstance.cameraInsightsWalkingPaceAverageTotalForDayDateByCameraIdCameraIdGet(_date, cameraId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_date** | **String**| Date to retrieve data from. | 
 **cameraId** | **String**| Numeric ID of camera. | 

### Return type

[**TotalCameraWalkingPace**](TotalCameraWalkingPace.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cameraInsightsWalkingPaceAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet

> [TotalCameraWalkingPace] cameraInsightsWalkingPaceAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet(startDate, endDate, cameraId)



Get total average walking pace per day between 2 dates.

### Example

```javascript
import StreetseekServer from 'streetseek_server';

let apiInstance = new StreetseekServer.CameraInsightsApi();
let startDate = "startDate_example"; // String | First date to retrieve.
let endDate = "endDate_example"; // String | Last date in range.
let cameraId = "cameraId_example"; // String | Numeric ID of camera.
apiInstance.cameraInsightsWalkingPaceAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet(startDate, endDate, cameraId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**| First date to retrieve. | 
 **endDate** | **String**| Last date in range. | 
 **cameraId** | **String**| Numeric ID of camera. | 

### Return type

[**[TotalCameraWalkingPace]**](TotalCameraWalkingPace.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

