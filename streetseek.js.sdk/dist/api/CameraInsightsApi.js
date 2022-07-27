"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CameraInsights = _interopRequireDefault(require("../model/CameraInsights"));

var _CameraPersonCount = _interopRequireDefault(require("../model/CameraPersonCount"));

var _CameraSocialDistAvg = _interopRequireDefault(require("../model/CameraSocialDistAvg"));

var _CameraTimeSpent = _interopRequireDefault(require("../model/CameraTimeSpent"));

var _CameraWalkingPace = _interopRequireDefault(require("../model/CameraWalkingPace"));

var _Heatmap = _interopRequireDefault(require("../model/Heatmap"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject"));

var _TotalCameraDensity = _interopRequireDefault(require("../model/TotalCameraDensity"));

var _TotalCameraPersonCount = _interopRequireDefault(require("../model/TotalCameraPersonCount"));

var _TotalCameraSocialDistanceAvg = _interopRequireDefault(require("../model/TotalCameraSocialDistanceAvg"));

var _TotalCameraTimeSpent = _interopRequireDefault(require("../model/TotalCameraTimeSpent"));

var _TotalCameraWalkingPace = _interopRequireDefault(require("../model/TotalCameraWalkingPace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* CameraInsights service.
* @module api/CameraInsightsApi
* @version 1.0.0
*/
var CameraInsightsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CameraInsightsApi. 
  * @alias module:api/CameraInsightsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CameraInsightsApi(apiClient) {
    _classCallCheck(this, CameraInsightsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Aggregate all metrics up to a day
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject} opts.inlineObject 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
   */


  _createClass(CameraInsightsApi, [{
    key: "cameraInsightsDailyAggregatorPostWithHttpInfo",
    value: function cameraInsightsDailyAggregatorPostWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['inlineObject'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['text/plain'];
      var returnType = 'String';
      return this.apiClient.callApi('/camera-insights/daily-aggregator', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Aggregate all metrics up to a day
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.inlineObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */

  }, {
    key: "cameraInsightsDailyAggregatorPost",
    value: function cameraInsightsDailyAggregatorPost(opts) {
      return this.cameraInsightsDailyAggregatorPostWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} _date Date to retrieve data from.
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TotalCameraDensity} and HTTP response
     */

  }, {
    key: "cameraInsightsDensityAverageTotalForDayDateByCameraIdCameraIdGetWithHttpInfo",
    value: function cameraInsightsDensityAverageTotalForDayDateByCameraIdCameraIdGetWithHttpInfo(_date, cameraId) {
      var postBody = null; // verify the required parameter '_date' is set

      if (_date === undefined || _date === null) {
        throw new Error("Missing the required parameter '_date' when calling cameraInsightsDensityAverageTotalForDayDateByCameraIdCameraIdGet");
      } // verify the required parameter 'cameraId' is set


      if (cameraId === undefined || cameraId === null) {
        throw new Error("Missing the required parameter 'cameraId' when calling cameraInsightsDensityAverageTotalForDayDateByCameraIdCameraIdGet");
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
      var returnType = _TotalCameraDensity["default"];
      return this.apiClient.callApi('/camera-insights/density/average/total/for/day/{date}/by/camera/id/{cameraId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} _date Date to retrieve data from.
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TotalCameraDensity}
     */

  }, {
    key: "cameraInsightsDensityAverageTotalForDayDateByCameraIdCameraIdGet",
    value: function cameraInsightsDensityAverageTotalForDayDateByCameraIdCameraIdGet(_date, cameraId) {
      return this.cameraInsightsDensityAverageTotalForDayDateByCameraIdCameraIdGetWithHttpInfo(_date, cameraId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get total average density for each day between 2 dates.
     * @param {String} startDate First date to retrieve.
     * @param {String} endDate Last date in range.
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TotalCameraDensity>} and HTTP response
     */

  }, {
    key: "cameraInsightsDensityAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGetWithHttpInfo",
    value: function cameraInsightsDensityAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGetWithHttpInfo(startDate, endDate, cameraId) {
      var postBody = null; // verify the required parameter 'startDate' is set

      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling cameraInsightsDensityAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet");
      } // verify the required parameter 'endDate' is set


      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling cameraInsightsDensityAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet");
      } // verify the required parameter 'cameraId' is set


      if (cameraId === undefined || cameraId === null) {
        throw new Error("Missing the required parameter 'cameraId' when calling cameraInsightsDensityAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet");
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
      var returnType = [_TotalCameraDensity["default"]];
      return this.apiClient.callApi('/camera-insights/density/average/total/per/day/between/dates/start/{startDate}/end/{endDate}/by/camera/id/{cameraId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get total average density for each day between 2 dates.
     * @param {String} startDate First date to retrieve.
     * @param {String} endDate Last date in range.
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TotalCameraDensity>}
     */

  }, {
    key: "cameraInsightsDensityAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet",
    value: function cameraInsightsDensityAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet(startDate, endDate, cameraId) {
      return this.cameraInsightsDensityAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGetWithHttpInfo(startDate, endDate, cameraId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} _date Date to retrieve data from.
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Heatmap} and HTTP response
     */

  }, {
    key: "cameraInsightsHeatmapTotalForDayDateByCameraIdCameraIdGetWithHttpInfo",
    value: function cameraInsightsHeatmapTotalForDayDateByCameraIdCameraIdGetWithHttpInfo(_date, cameraId) {
      var postBody = null; // verify the required parameter '_date' is set

      if (_date === undefined || _date === null) {
        throw new Error("Missing the required parameter '_date' when calling cameraInsightsHeatmapTotalForDayDateByCameraIdCameraIdGet");
      } // verify the required parameter 'cameraId' is set


      if (cameraId === undefined || cameraId === null) {
        throw new Error("Missing the required parameter 'cameraId' when calling cameraInsightsHeatmapTotalForDayDateByCameraIdCameraIdGet");
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
      var returnType = _Heatmap["default"];
      return this.apiClient.callApi('/camera-insights/heatmap/total/for/day/{date}/by/camera/id/{cameraId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} _date Date to retrieve data from.
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Heatmap}
     */

  }, {
    key: "cameraInsightsHeatmapTotalForDayDateByCameraIdCameraIdGet",
    value: function cameraInsightsHeatmapTotalForDayDateByCameraIdCameraIdGet(_date, cameraId) {
      return this.cameraInsightsHeatmapTotalForDayDateByCameraIdCameraIdGetWithHttpInfo(_date, cameraId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get persons counted for a full day on a given date on an hourly interval.
     * @param {String} _date Date from which to retrieve data.
     * @param {String} cameraId Date from which to retrieve data.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CameraPersonCount>} and HTTP response
     */

  }, {
    key: "cameraInsightsPersonCountDateByHourByCameraIdCameraIdGetWithHttpInfo",
    value: function cameraInsightsPersonCountDateByHourByCameraIdCameraIdGetWithHttpInfo(_date, cameraId) {
      var postBody = null; // verify the required parameter '_date' is set

      if (_date === undefined || _date === null) {
        throw new Error("Missing the required parameter '_date' when calling cameraInsightsPersonCountDateByHourByCameraIdCameraIdGet");
      } // verify the required parameter 'cameraId' is set


      if (cameraId === undefined || cameraId === null) {
        throw new Error("Missing the required parameter 'cameraId' when calling cameraInsightsPersonCountDateByHourByCameraIdCameraIdGet");
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
      var returnType = [_CameraPersonCount["default"]];
      return this.apiClient.callApi('/camera-insights/person-count/{date}/by/hour/by/camera/id/{cameraId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get persons counted for a full day on a given date on an hourly interval.
     * @param {String} _date Date from which to retrieve data.
     * @param {String} cameraId Date from which to retrieve data.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CameraPersonCount>}
     */

  }, {
    key: "cameraInsightsPersonCountDateByHourByCameraIdCameraIdGet",
    value: function cameraInsightsPersonCountDateByHourByCameraIdCameraIdGet(_date, cameraId) {
      return this.cameraInsightsPersonCountDateByHourByCameraIdCameraIdGetWithHttpInfo(_date, cameraId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get persons counted for a full day on a given date with a chosen minute based interval.
     * @param {String} _date Date to retrieve data from.
     * @param {Number} interval Interval of data number in range [5 ... 50]
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CameraPersonCount>} and HTTP response
     */

  }, {
    key: "cameraInsightsPersonCountDateMinuteIntervalIntervalByCameraIdCameraIdGetWithHttpInfo",
    value: function cameraInsightsPersonCountDateMinuteIntervalIntervalByCameraIdCameraIdGetWithHttpInfo(_date, interval, cameraId) {
      var postBody = null; // verify the required parameter '_date' is set

      if (_date === undefined || _date === null) {
        throw new Error("Missing the required parameter '_date' when calling cameraInsightsPersonCountDateMinuteIntervalIntervalByCameraIdCameraIdGet");
      } // verify the required parameter 'interval' is set


      if (interval === undefined || interval === null) {
        throw new Error("Missing the required parameter 'interval' when calling cameraInsightsPersonCountDateMinuteIntervalIntervalByCameraIdCameraIdGet");
      } // verify the required parameter 'cameraId' is set


      if (cameraId === undefined || cameraId === null) {
        throw new Error("Missing the required parameter 'cameraId' when calling cameraInsightsPersonCountDateMinuteIntervalIntervalByCameraIdCameraIdGet");
      }

      var pathParams = {
        'date': _date,
        'interval': interval,
        'cameraId': cameraId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_CameraPersonCount["default"]];
      return this.apiClient.callApi('/camera-insights/person-count/{date}/minute/interval/{interval}/by/camera/id/{cameraId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get persons counted for a full day on a given date with a chosen minute based interval.
     * @param {String} _date Date to retrieve data from.
     * @param {Number} interval Interval of data number in range [5 ... 50]
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CameraPersonCount>}
     */

  }, {
    key: "cameraInsightsPersonCountDateMinuteIntervalIntervalByCameraIdCameraIdGet",
    value: function cameraInsightsPersonCountDateMinuteIntervalIntervalByCameraIdCameraIdGet(_date, interval, cameraId) {
      return this.cameraInsightsPersonCountDateMinuteIntervalIntervalByCameraIdCameraIdGetWithHttpInfo(_date, interval, cameraId).then(function (response_and_data) {
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
    key: "cameraInsightsPersonCountTotalForDayDateByCameraIdCameraIdGetWithHttpInfo",
    value: function cameraInsightsPersonCountTotalForDayDateByCameraIdCameraIdGetWithHttpInfo(_date, cameraId) {
      var postBody = null; // verify the required parameter '_date' is set

      if (_date === undefined || _date === null) {
        throw new Error("Missing the required parameter '_date' when calling cameraInsightsPersonCountTotalForDayDateByCameraIdCameraIdGet");
      } // verify the required parameter 'cameraId' is set


      if (cameraId === undefined || cameraId === null) {
        throw new Error("Missing the required parameter 'cameraId' when calling cameraInsightsPersonCountTotalForDayDateByCameraIdCameraIdGet");
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
      return this.apiClient.callApi('/camera-insights/person-count/total/for/day/{date}/by/camera/id/{cameraId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get total persons counted for a given day based on a camera id.
     * @param {String} _date Date to retrieve data from.
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TotalCameraPersonCount}
     */

  }, {
    key: "cameraInsightsPersonCountTotalForDayDateByCameraIdCameraIdGet",
    value: function cameraInsightsPersonCountTotalForDayDateByCameraIdCameraIdGet(_date, cameraId) {
      return this.cameraInsightsPersonCountTotalForDayDateByCameraIdCameraIdGetWithHttpInfo(_date, cameraId).then(function (response_and_data) {
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
    key: "cameraInsightsPersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGetWithHttpInfo",
    value: function cameraInsightsPersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGetWithHttpInfo(startDate, endDate, cameraId) {
      var postBody = null; // verify the required parameter 'startDate' is set

      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling cameraInsightsPersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet");
      } // verify the required parameter 'endDate' is set


      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling cameraInsightsPersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet");
      } // verify the required parameter 'cameraId' is set


      if (cameraId === undefined || cameraId === null) {
        throw new Error("Missing the required parameter 'cameraId' when calling cameraInsightsPersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet");
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
      return this.apiClient.callApi('/camera-insights/person-count/total/per/day/between/dates/start/{startDate}/end/{endDate}/by/camera/id/{cameraId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get total persons per day between 2 dates.
     * @param {String} startDate First date to retrieve.
     * @param {String} endDate Last date in range.
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TotalCameraPersonCount>}
     */

  }, {
    key: "cameraInsightsPersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet",
    value: function cameraInsightsPersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet(startDate, endDate, cameraId) {
      return this.cameraInsightsPersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGetWithHttpInfo(startDate, endDate, cameraId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get average social distance compliance for a full day on a given date with a chosen minute based interval.
     * @param {String} _date Date to retrieve data from.
     * @param {Number} interval Interval of data number in range [5 ... 50]
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CameraSocialDistAvg>} and HTTP response
     */

  }, {
    key: "cameraInsightsSocialDistancingAverageDateMinuteIntervalIntervalByCameraIdCameraIdGetWithHttpInfo",
    value: function cameraInsightsSocialDistancingAverageDateMinuteIntervalIntervalByCameraIdCameraIdGetWithHttpInfo(_date, interval, cameraId) {
      var postBody = null; // verify the required parameter '_date' is set

      if (_date === undefined || _date === null) {
        throw new Error("Missing the required parameter '_date' when calling cameraInsightsSocialDistancingAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet");
      } // verify the required parameter 'interval' is set


      if (interval === undefined || interval === null) {
        throw new Error("Missing the required parameter 'interval' when calling cameraInsightsSocialDistancingAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet");
      } // verify the required parameter 'cameraId' is set


      if (cameraId === undefined || cameraId === null) {
        throw new Error("Missing the required parameter 'cameraId' when calling cameraInsightsSocialDistancingAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet");
      }

      var pathParams = {
        'date': _date,
        'interval': interval,
        'cameraId': cameraId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_CameraSocialDistAvg["default"]];
      return this.apiClient.callApi('/camera-insights/social-distancing/average/{date}/minute/interval/{interval}/by/camera/id/{cameraId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get average social distance compliance for a full day on a given date with a chosen minute based interval.
     * @param {String} _date Date to retrieve data from.
     * @param {Number} interval Interval of data number in range [5 ... 50]
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CameraSocialDistAvg>}
     */

  }, {
    key: "cameraInsightsSocialDistancingAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet",
    value: function cameraInsightsSocialDistancingAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet(_date, interval, cameraId) {
      return this.cameraInsightsSocialDistancingAverageDateMinuteIntervalIntervalByCameraIdCameraIdGetWithHttpInfo(_date, interval, cameraId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} _date Date to retrieve data from.
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TotalCameraSocialDistanceAvg} and HTTP response
     */

  }, {
    key: "cameraInsightsSocialDistancingAverageTotalForDayDateByCameraIdCameraIdGetWithHttpInfo",
    value: function cameraInsightsSocialDistancingAverageTotalForDayDateByCameraIdCameraIdGetWithHttpInfo(_date, cameraId) {
      var postBody = null; // verify the required parameter '_date' is set

      if (_date === undefined || _date === null) {
        throw new Error("Missing the required parameter '_date' when calling cameraInsightsSocialDistancingAverageTotalForDayDateByCameraIdCameraIdGet");
      } // verify the required parameter 'cameraId' is set


      if (cameraId === undefined || cameraId === null) {
        throw new Error("Missing the required parameter 'cameraId' when calling cameraInsightsSocialDistancingAverageTotalForDayDateByCameraIdCameraIdGet");
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
      var returnType = _TotalCameraSocialDistanceAvg["default"];
      return this.apiClient.callApi('/camera-insights/social-distancing/average/total/for/day/{date}/by/camera/id/{cameraId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} _date Date to retrieve data from.
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TotalCameraSocialDistanceAvg}
     */

  }, {
    key: "cameraInsightsSocialDistancingAverageTotalForDayDateByCameraIdCameraIdGet",
    value: function cameraInsightsSocialDistancingAverageTotalForDayDateByCameraIdCameraIdGet(_date, cameraId) {
      return this.cameraInsightsSocialDistancingAverageTotalForDayDateByCameraIdCameraIdGetWithHttpInfo(_date, cameraId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get total average social distancing compliance per day between 2 dates.
     * @param {String} startDate First date to retrieve.
     * @param {String} endDate Last date in range.
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TotalCameraSocialDistanceAvg>} and HTTP response
     */

  }, {
    key: "cameraInsightsSocialDistancingAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGetWithHttpInfo",
    value: function cameraInsightsSocialDistancingAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGetWithHttpInfo(startDate, endDate, cameraId) {
      var postBody = null; // verify the required parameter 'startDate' is set

      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling cameraInsightsSocialDistancingAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet");
      } // verify the required parameter 'endDate' is set


      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling cameraInsightsSocialDistancingAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet");
      } // verify the required parameter 'cameraId' is set


      if (cameraId === undefined || cameraId === null) {
        throw new Error("Missing the required parameter 'cameraId' when calling cameraInsightsSocialDistancingAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet");
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
      var returnType = [_TotalCameraSocialDistanceAvg["default"]];
      return this.apiClient.callApi('/camera-insights/social-distancing/average/total/per/day/between/dates/start/{startDate}/end/{endDate}/by/camera/id/{cameraId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get total average social distancing compliance per day between 2 dates.
     * @param {String} startDate First date to retrieve.
     * @param {String} endDate Last date in range.
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TotalCameraSocialDistanceAvg>}
     */

  }, {
    key: "cameraInsightsSocialDistancingAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet",
    value: function cameraInsightsSocialDistancingAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet(startDate, endDate, cameraId) {
      return this.cameraInsightsSocialDistancingAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGetWithHttpInfo(startDate, endDate, cameraId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} _date Date to retrieve data from.
     * @param {Number} interval Interval of data number in range [5 ... 50]
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CameraTimeSpent>} and HTTP response
     */

  }, {
    key: "cameraInsightsTimeSpentAverageDateMinuteIntervalIntervalByCameraIdCameraIdGetWithHttpInfo",
    value: function cameraInsightsTimeSpentAverageDateMinuteIntervalIntervalByCameraIdCameraIdGetWithHttpInfo(_date, interval, cameraId) {
      var postBody = null; // verify the required parameter '_date' is set

      if (_date === undefined || _date === null) {
        throw new Error("Missing the required parameter '_date' when calling cameraInsightsTimeSpentAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet");
      } // verify the required parameter 'interval' is set


      if (interval === undefined || interval === null) {
        throw new Error("Missing the required parameter 'interval' when calling cameraInsightsTimeSpentAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet");
      } // verify the required parameter 'cameraId' is set


      if (cameraId === undefined || cameraId === null) {
        throw new Error("Missing the required parameter 'cameraId' when calling cameraInsightsTimeSpentAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet");
      }

      var pathParams = {
        'date': _date,
        'interval': interval,
        'cameraId': cameraId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_CameraTimeSpent["default"]];
      return this.apiClient.callApi('/camera-insights/time-spent/average/{date}/minute/interval/{interval}/by/camera/id/{cameraId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} _date Date to retrieve data from.
     * @param {Number} interval Interval of data number in range [5 ... 50]
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CameraTimeSpent>}
     */

  }, {
    key: "cameraInsightsTimeSpentAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet",
    value: function cameraInsightsTimeSpentAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet(_date, interval, cameraId) {
      return this.cameraInsightsTimeSpentAverageDateMinuteIntervalIntervalByCameraIdCameraIdGetWithHttpInfo(_date, interval, cameraId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} _date Date to retrieve data from.
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TotalCameraTimeSpent} and HTTP response
     */

  }, {
    key: "cameraInsightsTimeSpentAverageTotalForDayDateByCameraIdCameraIdGetWithHttpInfo",
    value: function cameraInsightsTimeSpentAverageTotalForDayDateByCameraIdCameraIdGetWithHttpInfo(_date, cameraId) {
      var postBody = null; // verify the required parameter '_date' is set

      if (_date === undefined || _date === null) {
        throw new Error("Missing the required parameter '_date' when calling cameraInsightsTimeSpentAverageTotalForDayDateByCameraIdCameraIdGet");
      } // verify the required parameter 'cameraId' is set


      if (cameraId === undefined || cameraId === null) {
        throw new Error("Missing the required parameter 'cameraId' when calling cameraInsightsTimeSpentAverageTotalForDayDateByCameraIdCameraIdGet");
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
      var returnType = _TotalCameraTimeSpent["default"];
      return this.apiClient.callApi('/camera-insights/time-spent/average/total/for/day/{date}/by/camera/id/{cameraId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} _date Date to retrieve data from.
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TotalCameraTimeSpent}
     */

  }, {
    key: "cameraInsightsTimeSpentAverageTotalForDayDateByCameraIdCameraIdGet",
    value: function cameraInsightsTimeSpentAverageTotalForDayDateByCameraIdCameraIdGet(_date, cameraId) {
      return this.cameraInsightsTimeSpentAverageTotalForDayDateByCameraIdCameraIdGetWithHttpInfo(_date, cameraId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get total average time spent for each day between 2 dates.
     * @param {String} startDate First date to retrieve.
     * @param {String} endDate Last date in range.
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TotalCameraTimeSpent>} and HTTP response
     */

  }, {
    key: "cameraInsightsTimeSpentAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGetWithHttpInfo",
    value: function cameraInsightsTimeSpentAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGetWithHttpInfo(startDate, endDate, cameraId) {
      var postBody = null; // verify the required parameter 'startDate' is set

      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling cameraInsightsTimeSpentAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet");
      } // verify the required parameter 'endDate' is set


      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling cameraInsightsTimeSpentAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet");
      } // verify the required parameter 'cameraId' is set


      if (cameraId === undefined || cameraId === null) {
        throw new Error("Missing the required parameter 'cameraId' when calling cameraInsightsTimeSpentAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet");
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
      var returnType = [_TotalCameraTimeSpent["default"]];
      return this.apiClient.callApi('/camera-insights/time-spent/average/total/per/day/between/dates/start/{startDate}/end/{endDate}/by/camera/id/{cameraId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get total average time spent for each day between 2 dates.
     * @param {String} startDate First date to retrieve.
     * @param {String} endDate Last date in range.
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TotalCameraTimeSpent>}
     */

  }, {
    key: "cameraInsightsTimeSpentAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet",
    value: function cameraInsightsTimeSpentAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet(startDate, endDate, cameraId) {
      return this.cameraInsightsTimeSpentAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGetWithHttpInfo(startDate, endDate, cameraId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Post camera insight
     * @param {Object} opts Optional parameters
     * @param {module:model/CameraInsights} opts.cameraInsights 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */

  }, {
    key: "cameraInsightsUploadInsightPostWithHttpInfo",
    value: function cameraInsightsUploadInsightPostWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['cameraInsights'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['text/plain'];
      var returnType = 'String';
      return this.apiClient.callApi('/camera-insights/upload-insight', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Post camera insight
     * @param {Object} opts Optional parameters
     * @param {module:model/CameraInsights} opts.cameraInsights 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */

  }, {
    key: "cameraInsightsUploadInsightPost",
    value: function cameraInsightsUploadInsightPost(opts) {
      return this.cameraInsightsUploadInsightPostWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} _date Date to retrieve data from.
     * @param {Number} interval Interval of data number in range [5 ... 50]
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CameraWalkingPace>} and HTTP response
     */

  }, {
    key: "cameraInsightsWalkingPaceAverageDateMinuteIntervalIntervalByCameraIdCameraIdGetWithHttpInfo",
    value: function cameraInsightsWalkingPaceAverageDateMinuteIntervalIntervalByCameraIdCameraIdGetWithHttpInfo(_date, interval, cameraId) {
      var postBody = null; // verify the required parameter '_date' is set

      if (_date === undefined || _date === null) {
        throw new Error("Missing the required parameter '_date' when calling cameraInsightsWalkingPaceAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet");
      } // verify the required parameter 'interval' is set


      if (interval === undefined || interval === null) {
        throw new Error("Missing the required parameter 'interval' when calling cameraInsightsWalkingPaceAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet");
      } // verify the required parameter 'cameraId' is set


      if (cameraId === undefined || cameraId === null) {
        throw new Error("Missing the required parameter 'cameraId' when calling cameraInsightsWalkingPaceAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet");
      }

      var pathParams = {
        'date': _date,
        'interval': interval,
        'cameraId': cameraId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_CameraWalkingPace["default"]];
      return this.apiClient.callApi('/camera-insights/walking-pace/average/{date}/minute/interval/{interval}/by/camera/id/{cameraId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} _date Date to retrieve data from.
     * @param {Number} interval Interval of data number in range [5 ... 50]
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CameraWalkingPace>}
     */

  }, {
    key: "cameraInsightsWalkingPaceAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet",
    value: function cameraInsightsWalkingPaceAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet(_date, interval, cameraId) {
      return this.cameraInsightsWalkingPaceAverageDateMinuteIntervalIntervalByCameraIdCameraIdGetWithHttpInfo(_date, interval, cameraId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} _date Date to retrieve data from.
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TotalCameraWalkingPace} and HTTP response
     */

  }, {
    key: "cameraInsightsWalkingPaceAverageTotalForDayDateByCameraIdCameraIdGetWithHttpInfo",
    value: function cameraInsightsWalkingPaceAverageTotalForDayDateByCameraIdCameraIdGetWithHttpInfo(_date, cameraId) {
      var postBody = null; // verify the required parameter '_date' is set

      if (_date === undefined || _date === null) {
        throw new Error("Missing the required parameter '_date' when calling cameraInsightsWalkingPaceAverageTotalForDayDateByCameraIdCameraIdGet");
      } // verify the required parameter 'cameraId' is set


      if (cameraId === undefined || cameraId === null) {
        throw new Error("Missing the required parameter 'cameraId' when calling cameraInsightsWalkingPaceAverageTotalForDayDateByCameraIdCameraIdGet");
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
      var returnType = _TotalCameraWalkingPace["default"];
      return this.apiClient.callApi('/camera-insights/walking-pace/average/total/for/day/{date}/by/camera/id/{cameraId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} _date Date to retrieve data from.
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TotalCameraWalkingPace}
     */

  }, {
    key: "cameraInsightsWalkingPaceAverageTotalForDayDateByCameraIdCameraIdGet",
    value: function cameraInsightsWalkingPaceAverageTotalForDayDateByCameraIdCameraIdGet(_date, cameraId) {
      return this.cameraInsightsWalkingPaceAverageTotalForDayDateByCameraIdCameraIdGetWithHttpInfo(_date, cameraId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get total average walking pace per day between 2 dates.
     * @param {String} startDate First date to retrieve.
     * @param {String} endDate Last date in range.
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TotalCameraWalkingPace>} and HTTP response
     */

  }, {
    key: "cameraInsightsWalkingPaceAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGetWithHttpInfo",
    value: function cameraInsightsWalkingPaceAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGetWithHttpInfo(startDate, endDate, cameraId) {
      var postBody = null; // verify the required parameter 'startDate' is set

      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling cameraInsightsWalkingPaceAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet");
      } // verify the required parameter 'endDate' is set


      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling cameraInsightsWalkingPaceAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet");
      } // verify the required parameter 'cameraId' is set


      if (cameraId === undefined || cameraId === null) {
        throw new Error("Missing the required parameter 'cameraId' when calling cameraInsightsWalkingPaceAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet");
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
      var returnType = [_TotalCameraWalkingPace["default"]];
      return this.apiClient.callApi('/camera-insights/walking-pace/average/total/per/day/between/dates/start/{startDate}/end/{endDate}/by/camera/id/{cameraId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get total average walking pace per day between 2 dates.
     * @param {String} startDate First date to retrieve.
     * @param {String} endDate Last date in range.
     * @param {String} cameraId Numeric ID of camera.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TotalCameraWalkingPace>}
     */

  }, {
    key: "cameraInsightsWalkingPaceAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet",
    value: function cameraInsightsWalkingPaceAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet(startDate, endDate, cameraId) {
      return this.cameraInsightsWalkingPaceAverageTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGetWithHttpInfo(startDate, endDate, cameraId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return CameraInsightsApi;
}();

exports["default"] = CameraInsightsApi;