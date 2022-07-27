# StreetseekServer.CameraConfigurationApi

All URIs are relative to *http://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cameraConfigurationCameraCameraIdGet**](CameraConfigurationApi.md#cameraConfigurationCameraCameraIdGet) | **GET** /camera-configuration/camera/{cameraId} | 
[**cameraConfigurationCameraNameByIdCameraIdGet**](CameraConfigurationApi.md#cameraConfigurationCameraNameByIdCameraIdGet) | **GET** /camera-configuration/camera/name/by/id/{cameraId} | 
[**cameraConfigurationCamerasGet**](CameraConfigurationApi.md#cameraConfigurationCamerasGet) | **GET** /camera-configuration/cameras | 
[**cameraConfigurationSetAppConfigPost**](CameraConfigurationApi.md#cameraConfigurationSetAppConfigPost) | **POST** /camera-configuration/set-app-config | 
[**cameraConfigurationSetBuildConfigPost**](CameraConfigurationApi.md#cameraConfigurationSetBuildConfigPost) | **POST** /camera-configuration/set-build-config | 
[**cameraConfigurationSetupCameraPost**](CameraConfigurationApi.md#cameraConfigurationSetupCameraPost) | **POST** /camera-configuration/setup-camera | 



## cameraConfigurationCameraCameraIdGet

> CameraBody cameraConfigurationCameraCameraIdGet(cameraId)



Get camera details by ID.

### Example

```javascript
import StreetseekServer from 'streetseek_server';

let apiInstance = new StreetseekServer.CameraConfigurationApi();
let cameraId = "cameraId_example"; // String | Numeric ID of camera
apiInstance.cameraConfigurationCameraCameraIdGet(cameraId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cameraId** | **String**| Numeric ID of camera | 

### Return type

[**CameraBody**](CameraBody.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cameraConfigurationCameraNameByIdCameraIdGet

> CameraName cameraConfigurationCameraNameByIdCameraIdGet(cameraId)



Get a cameras name by the ID.

### Example

```javascript
import StreetseekServer from 'streetseek_server';

let apiInstance = new StreetseekServer.CameraConfigurationApi();
let cameraId = "cameraId_example"; // String | Numeric ID of camera
apiInstance.cameraConfigurationCameraNameByIdCameraIdGet(cameraId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cameraId** | **String**| Numeric ID of camera | 

### Return type

[**CameraName**](CameraName.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cameraConfigurationCamerasGet

> [CameraBody] cameraConfigurationCamerasGet()



Get all camera details.

### Example

```javascript
import StreetseekServer from 'streetseek_server';

let apiInstance = new StreetseekServer.CameraConfigurationApi();
apiInstance.cameraConfigurationCamerasGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[CameraBody]**](CameraBody.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cameraConfigurationSetAppConfigPost

> String cameraConfigurationSetAppConfigPost(opts)



Set an app config for a given camera.

### Example

```javascript
import StreetseekServer from 'streetseek_server';

let apiInstance = new StreetseekServer.CameraConfigurationApi();
let opts = {
  'cameraAppConfig': new StreetseekServer.CameraAppConfig() // CameraAppConfig | 
};
apiInstance.cameraConfigurationSetAppConfigPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cameraAppConfig** | [**CameraAppConfig**](CameraAppConfig.md)|  | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: text/plain


## cameraConfigurationSetBuildConfigPost

> String cameraConfigurationSetBuildConfigPost(opts)



Set a build config for a given camera.

### Example

```javascript
import StreetseekServer from 'streetseek_server';

let apiInstance = new StreetseekServer.CameraConfigurationApi();
let opts = {
  'cameraBuildConfig': new StreetseekServer.CameraBuildConfig() // CameraBuildConfig | 
};
apiInstance.cameraConfigurationSetBuildConfigPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cameraBuildConfig** | [**CameraBuildConfig**](CameraBuildConfig.md)|  | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: text/plain


## cameraConfigurationSetupCameraPost

> String cameraConfigurationSetupCameraPost(opts)



Set up a new camera.

### Example

```javascript
import StreetseekServer from 'streetseek_server';

let apiInstance = new StreetseekServer.CameraConfigurationApi();
let opts = {
  'camera': new StreetseekServer.Camera() // Camera | 
};
apiInstance.cameraConfigurationSetupCameraPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **camera** | [**Camera**](Camera.md)|  | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: text/plain

