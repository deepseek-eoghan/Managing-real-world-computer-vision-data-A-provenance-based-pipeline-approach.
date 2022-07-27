# StreetseekServer.CameraCaptureApi

All URIs are relative to *http://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cameraCapturePersonCountDateByHourGet**](CameraCaptureApi.md#cameraCapturePersonCountDateByHourGet) | **GET** /camera-capture/person-count/{date}/by/hour | 
[**cameraCapturePersonCountDateMinuteIntervalIntervalGet**](CameraCaptureApi.md#cameraCapturePersonCountDateMinuteIntervalIntervalGet) | **GET** /camera-capture/person-count/{date}/minute/interval/{interval} | 
[**cameraCapturePersonCountTotalForDayDateByCameraIdCameraIdGet**](CameraCaptureApi.md#cameraCapturePersonCountTotalForDayDateByCameraIdCameraIdGet) | **GET** /camera-capture/person-count/total/for/day/{date}/by/camera/id/{cameraId} | 
[**cameraCapturePersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateForCameraCameraIdGet**](CameraCaptureApi.md#cameraCapturePersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateForCameraCameraIdGet) | **GET** /camera-capture/person-count/total/per/day/between/dates/start/{startDate}/end/{endDate}/for/camera/{cameraId} | 
[**cameraCaptureUploadCapturePost**](CameraCaptureApi.md#cameraCaptureUploadCapturePost) | **POST** /camera-capture/upload-capture | 



## cameraCapturePersonCountDateByHourGet

> [CameraPersonCount] cameraCapturePersonCountDateByHourGet(_date)



Get persons counted for a full day on a given date on an hourly interval.

### Example

```javascript
import StreetseekServer from 'streetseek_server';

let apiInstance = new StreetseekServer.CameraCaptureApi();
let _date = "_date_example"; // String | Date from which to retrieve data.
apiInstance.cameraCapturePersonCountDateByHourGet(_date).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_date** | **String**| Date from which to retrieve data. | 

### Return type

[**[CameraPersonCount]**](CameraPersonCount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cameraCapturePersonCountDateMinuteIntervalIntervalGet

> [CameraPersonCount] cameraCapturePersonCountDateMinuteIntervalIntervalGet(_date, interval)



Get persons counted for a full day on a given date with a chosen minute based interval.

### Example

```javascript
import StreetseekServer from 'streetseek_server';

let apiInstance = new StreetseekServer.CameraCaptureApi();
let _date = "_date_example"; // String | Date to retrieve data from.
let interval = 56; // Number | Interval of data number in range [5 ... 50]
apiInstance.cameraCapturePersonCountDateMinuteIntervalIntervalGet(_date, interval).then((data) => {
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

### Return type

[**[CameraPersonCount]**](CameraPersonCount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cameraCapturePersonCountTotalForDayDateByCameraIdCameraIdGet

> TotalCameraPersonCount cameraCapturePersonCountTotalForDayDateByCameraIdCameraIdGet(_date, cameraId)



Get total persons counted for a given day based on a camera id.

### Example

```javascript
import StreetseekServer from 'streetseek_server';

let apiInstance = new StreetseekServer.CameraCaptureApi();
let _date = "_date_example"; // String | Date to retrieve data from.
let cameraId = "cameraId_example"; // String | Numeric ID of camera.
apiInstance.cameraCapturePersonCountTotalForDayDateByCameraIdCameraIdGet(_date, cameraId).then((data) => {
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


## cameraCapturePersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateForCameraCameraIdGet

> [TotalCameraPersonCount] cameraCapturePersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateForCameraCameraIdGet(startDate, endDate, cameraId)



Get total persons per day between 2 dates.

### Example

```javascript
import StreetseekServer from 'streetseek_server';

let apiInstance = new StreetseekServer.CameraCaptureApi();
let startDate = "startDate_example"; // String | First date to retrieve.
let endDate = "endDate_example"; // String | Last date in range.
let cameraId = "cameraId_example"; // String | Numeric ID of camera.
apiInstance.cameraCapturePersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateForCameraCameraIdGet(startDate, endDate, cameraId).then((data) => {
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


## cameraCaptureUploadCapturePost

> String cameraCaptureUploadCapturePost(opts)



Post camera capture details

### Example

```javascript
import StreetseekServer from 'streetseek_server';

let apiInstance = new StreetseekServer.CameraCaptureApi();
let opts = {
  'cameraCapture': new StreetseekServer.CameraCapture() // CameraCapture | 
};
apiInstance.cameraCaptureUploadCapturePost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cameraCapture** | [**CameraCapture**](CameraCapture.md)|  | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: text/plain

