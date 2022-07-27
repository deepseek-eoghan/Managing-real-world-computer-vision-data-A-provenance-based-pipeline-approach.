"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CameraCapture = _interopRequireDefault(require("../model/CameraCapture"));

var _CameraPersonCount = _interopRequireDefault(require("../model/CameraPersonCount"));

var _TotalCameraPersonCount = _interopRequireDefault(require("../model/TotalCameraPersonCount"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* CameraCapture service.
* @module api/CameraCaptureApi
* @version 1.0.0
*/
var CameraCaptureApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CameraCaptureApi. 
  * @alias module:api/CameraCaptureApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CameraCaptureApi(apiClient) {
    _classCallCheck(this, CameraCaptureApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get persons counted for a full day on a given date on an hourly interval.
   * @param {String} _date Date from which to retrieve data.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CameraPersonCount>} and HTTP response
   */


  _createClass(CameraCaptureApi, [{
    key: "cameraCapturePersonCountDateByHourGetWithHttpInfo",
    value: function cameraCapturePersonCountDateByHourGetWithHttpInfo(_date) {
      var postBody = null; // verify the required parameter '_date' is set

      if (_date === undefined || _date === null) {
        throw new Error("Missing the required parameter '_date' when calling cameraCapturePersonCountDateByHourGet");
      }

      var pathParams = {
        'date': _date
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_CameraPersonCount["default"]];
      return this.apiClient.callApi('/camera-capture/person-count/{date}/by/hour', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get persons counted for a full day on a given date on an hourly interval.
     * @param {String} _date Date from which to retrieve data.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CameraPersonCount>}
     */

  }, {
    key: "cameraCapturePersonCountDateByHourGet",
    value: function cameraCapturePersonCountDateByHourGet(_date) {
      return this.cameraCapturePersonCountDateByHourGetWithHttpInfo(_date).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get persons counted for a full day on a given date with a chosen minute based interval.
     * @param {String} _date Date to retrieve data from.
     * @param {Number} interval Interval of data number in range [5 ... 50]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CameraPersonCount>} and HTTP response
     */

  }, {
    key: "cameraCapturePersonCountDateMinuteIntervalIntervalGetWithHttpInfo",
    value: function cameraCapturePersonCountDateMinuteIntervalIntervalGetWithHttpInfo(_date, interval) {
      var postBody = null; // verify the required parameter '_date' is set

      if (_date === undefined || _date === null) {
        throw new Error("Missing the required parameter '_date' when calling cameraCapturePersonCountDateMinuteIntervalIntervalGet");
      } // verify the required parameter 'interval' is set


      if (interval === undefined || interval === null) {
        throw new Error("Missing the required parameter 'interval' when calling cameraCapturePersonCountDateMinuteIntervalIntervalGet");
      }

      var pathParams = {
        'date': _date,
        'interval': interval
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_CameraPersonCount["default"]];
      return this.apiClient.callApi('/camera-capture/person-count/{date}/minute/interval/{interval}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get persons counted for a full day on a given date with a chosen minute based interval.
     * @param {String} _date Date to retrieve data from.
     * @param {Number} interval Interval of data number in range [5 ... 50]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CameraPersonCount>}
     */

  }, {
    key: "cameraCapturePersonCountDateMinuteIntervalIntervalGet",
    value: function cameraCapturePersonCountDateMinuteIntervalIntervalGet(_date, interval) {
      return this.cameraCapturePersonCountDateMinuteIntervalIntervalGetWithHttpInfo(_date, interval).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get total persons counted for a given day based on a camera id.
     * @param {String} _date Date to retrieve data from.
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TotalCameraPersonCount} and HTTP response
     */

  }, {
    key: "cameraCapturePersonCountTotalForDayDateByCameraIdCameraIdGetWithHttpInfo",
    value: function cameraCapturePersonCountTotalForDayDateByCameraIdCameraIdGetWithHttpInfo(_date, cameraId) {
      var postBody = null; // verify the required parameter '_date' is set

      if (_date === undefined || _date === null) {
        throw new Error("Missing the required parameter '_date' when calling cameraCapturePersonCountTotalForDayDateByCameraIdCameraIdGet");
      } // verify the required parameter 'cameraId' is set


      if (cameraId === undefined || cameraId === null) {
        throw new Error("Missing the required parameter 'cameraId' when calling cameraCapturePersonCountTotalForDayDateByCameraIdCameraIdGet");
      }

      var pathParams = {
        'date': _date,
        'cameraId': cameraId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TotalCameraPersonCount["default"];
      return this.apiClient.callApi('/camera-capture/person-count/total/for/day/{date}/by/camera/id/{cameraId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get total persons counted for a given day based on a camera id.
     * @param {String} _date Date to retrieve data from.
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TotalCameraPersonCount}
     */

  }, {
    key: "cameraCapturePersonCountTotalForDayDateByCameraIdCameraIdGet",
    value: function cameraCapturePersonCountTotalForDayDateByCameraIdCameraIdGet(_date, cameraId) {
      return this.cameraCapturePersonCountTotalForDayDateByCameraIdCameraIdGetWithHttpInfo(_date, cameraId).then(function (response_and_data) {
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

  }, {
    key: "cameraCapturePersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateForCameraCameraIdGetWithHttpInfo",
    value: function cameraCapturePersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateForCameraCameraIdGetWithHttpInfo(startDate, endDate, cameraId) {
      var postBody = null; // verify the required parameter 'startDate' is set

      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling cameraCapturePersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateForCameraCameraIdGet");
      } // verify the required parameter 'endDate' is set


      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling cameraCapturePersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateForCameraCameraIdGet");
      } // verify the required parameter 'cameraId' is set


      if (cameraId === undefined || cameraId === null) {
        throw new Error("Missing the required parameter 'cameraId' when calling cameraCapturePersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateForCameraCameraIdGet");
      }

      var pathParams = {
        'startDate': startDate,
        'endDate': endDate,
        'cameraId': cameraId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_TotalCameraPersonCount["default"]];
      return this.apiClient.callApi('/camera-capture/person-count/total/per/day/between/dates/start/{startDate}/end/{endDate}/for/camera/{cameraId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get total persons per day between 2 dates.
     * @param {String} startDate First date to retrieve.
     * @param {String} endDate Last date in range.
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TotalCameraPersonCount>}
     */

  }, {
    key: "cameraCapturePersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateForCameraCameraIdGet",
    value: function cameraCapturePersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateForCameraCameraIdGet(startDate, endDate, cameraId) {
      return this.cameraCapturePersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateForCameraCameraIdGetWithHttpInfo(startDate, endDate, cameraId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Post camera capture details
     * @param {Object} opts Optional parameters
     * @param {module:model/CameraCapture} opts.cameraCapture 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */

  }, {
    key: "cameraCaptureUploadCapturePostWithHttpInfo",
    value: function cameraCaptureUploadCapturePostWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['cameraCapture'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['text/plain'];
      var returnType = 'String';
      return this.apiClient.callApi('/camera-capture/upload-capture', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Post camera capture details
     * @param {Object} opts Optional parameters
     * @param {module:model/CameraCapture} opts.cameraCapture 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */

  }, {
    key: "cameraCaptureUploadCapturePost",
    value: function cameraCaptureUploadCapturePost(opts) {
      return this.cameraCaptureUploadCapturePostWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return CameraCaptureApi;
}();

exports["default"] = CameraCaptureApi;