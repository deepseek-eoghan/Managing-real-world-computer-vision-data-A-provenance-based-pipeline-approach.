/**
 * Streetseek Server
 * streetseek.server
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CameraCapture from '../model/CameraCapture';
import CameraPersonCount from '../model/CameraPersonCount';
import TotalCameraPersonCount from '../model/TotalCameraPersonCount';

/**
* CameraCapture service.
* @module api/CameraCaptureApi
* @version 1.0.0
*/
export default class CameraCaptureApi {

    /**
    * Constructs a new CameraCaptureApi. 
    * @alias module:api/CameraCaptureApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get persons counted for a full day on a given date on an hourly interval.
     * @param {String} _date Date from which to retrieve data.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CameraPersonCount>} and HTTP response
     */
    cameraCapturePersonCountDateByHourGetWithHttpInfo(_date) {
      let postBody = null;
      // verify the required parameter '_date' is set
      if (_date === undefined || _date === null) {
        throw new Error("Missing the required parameter '_date' when calling cameraCapturePersonCountDateByHourGet");
      }

      let pathParams = {
        'date': _date
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [CameraPersonCount];
      return this.apiClient.callApi(
        '/camera-capture/person-count/{date}/by/hour', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get persons counted for a full day on a given date on an hourly interval.
     * @param {String} _date Date from which to retrieve data.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CameraPersonCount>}
     */
    cameraCapturePersonCountDateByHourGet(_date) {
      return this.cameraCapturePersonCountDateByHourGetWithHttpInfo(_date)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get persons counted for a full day on a given date with a chosen minute based interval.
     * @param {String} _date Date to retrieve data from.
     * @param {Number} interval Interval of data number in range [5 ... 50]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CameraPersonCount>} and HTTP response
     */
    cameraCapturePersonCountDateMinuteIntervalIntervalGetWithHttpInfo(_date, interval) {
      let postBody = null;
      // verify the required parameter '_date' is set
      if (_date === undefined || _date === null) {
        throw new Error("Missing the required parameter '_date' when calling cameraCapturePersonCountDateMinuteIntervalIntervalGet");
      }
      // verify the required parameter 'interval' is set
      if (interval === undefined || interval === null) {
        throw new Error("Missing the required parameter 'interval' when calling cameraCapturePersonCountDateMinuteIntervalIntervalGet");
      }

      let pathParams = {
        'date': _date,
        'interval': interval
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [CameraPersonCount];
      return this.apiClient.callApi(
        '/camera-capture/person-count/{date}/minute/interval/{interval}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get persons counted for a full day on a given date with a chosen minute based interval.
     * @param {String} _date Date to retrieve data from.
     * @param {Number} interval Interval of data number in range [5 ... 50]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CameraPersonCount>}
     */
    cameraCapturePersonCountDateMinuteIntervalIntervalGet(_date, interval) {
      return this.cameraCapturePersonCountDateMinuteIntervalIntervalGetWithHttpInfo(_date, interval)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get total persons counted for a given day based on a camera id.
     * @param {String} _date Date to retrieve data from.
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TotalCameraPersonCount} and HTTP response
     */
    cameraCapturePersonCountTotalForDayDateByCameraIdCameraIdGetWithHttpInfo(_date, cameraId) {
      let postBody = null;
      // verify the required parameter '_date' is set
      if (_date === undefined || _date === null) {
        throw new Error("Missing the required parameter '_date' when calling cameraCapturePersonCountTotalForDayDateByCameraIdCameraIdGet");
      }
      // verify the required parameter 'cameraId' is set
      if (cameraId === undefined || cameraId === null) {
        throw new Error("Missing the required parameter 'cameraId' when calling cameraCapturePersonCountTotalForDayDateByCameraIdCameraIdGet");
      }

      let pathParams = {
        'date': _date,
        'cameraId': cameraId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TotalCameraPersonCount;
      return this.apiClient.callApi(
        '/camera-capture/person-count/total/for/day/{date}/by/camera/id/{cameraId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get total persons counted for a given day based on a camera id.
     * @param {String} _date Date to retrieve data from.
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TotalCameraPersonCount}
     */
    cameraCapturePersonCountTotalForDayDateByCameraIdCameraIdGet(_date, cameraId) {
      return this.cameraCapturePersonCountTotalForDayDateByCameraIdCameraIdGetWithHttpInfo(_date, cameraId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get total persons per day between 2 dates.
     * @param {String} startDate First date to retrieve.
     * @param {String} endDate Last date in range.
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TotalCameraPersonCount>} and HTTP response
     */
    cameraCapturePersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateForCameraCameraIdGetWithHttpInfo(startDate, endDate, cameraId) {
      let postBody = null;
      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling cameraCapturePersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateForCameraCameraIdGet");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling cameraCapturePersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateForCameraCameraIdGet");
      }
      // verify the required parameter 'cameraId' is set
      if (cameraId === undefined || cameraId === null) {
        throw new Error("Missing the required parameter 'cameraId' when calling cameraCapturePersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateForCameraCameraIdGet");
      }

      let pathParams = {
        'startDate': startDate,
        'endDate': endDate,
        'cameraId': cameraId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [TotalCameraPersonCount];
      return this.apiClient.callApi(
        '/camera-capture/person-count/total/per/day/between/dates/start/{startDate}/end/{endDate}/for/camera/{cameraId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get total persons per day between 2 dates.
     * @param {String} startDate First date to retrieve.
     * @param {String} endDate Last date in range.
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TotalCameraPersonCount>}
     */
    cameraCapturePersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateForCameraCameraIdGet(startDate, endDate, cameraId) {
      return this.cameraCapturePersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateForCameraCameraIdGetWithHttpInfo(startDate, endDate, cameraId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Post camera capture details
     * @param {Object} opts Optional parameters
     * @param {module:model/CameraCapture} opts.cameraCapture 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    cameraCaptureUploadCapturePostWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['cameraCapture'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['text/plain'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/camera-capture/upload-capture', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Post camera capture details
     * @param {Object} opts Optional parameters
     * @param {module:model/CameraCapture} opts.cameraCapture 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    cameraCaptureUploadCapturePost(opts) {
      return this.cameraCaptureUploadCapturePostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
