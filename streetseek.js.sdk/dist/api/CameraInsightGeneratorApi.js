"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InsightsGeneratorConfig = _interopRequireDefault(require("../model/InsightsGeneratorConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* CameraInsightGenerator service.
* @module api/CameraInsightGeneratorApi
* @version 1.0.0
*/
var CameraInsightGeneratorApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CameraInsightGeneratorApi. 
  * @alias module:api/CameraInsightGeneratorApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CameraInsightGeneratorApi(apiClient) {
    _classCallCheck(this, CameraInsightGeneratorApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * @param {String} streamName 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InsightsGeneratorConfig} and HTTP response
   */


  _createClass(CameraInsightGeneratorApi, [{
    key: "cameraInsightGeneratorConfigByStreamNameStreamNameGetWithHttpInfo",
    value: function cameraInsightGeneratorConfigByStreamNameStreamNameGetWithHttpInfo(streamName) {
      var postBody = null; // verify the required parameter 'streamName' is set

      if (streamName === undefined || streamName === null) {
        throw new Error("Missing the required parameter 'streamName' when calling cameraInsightGeneratorConfigByStreamNameStreamNameGet");
      }

      var pathParams = {
        'streamName': streamName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InsightsGeneratorConfig["default"];
      return this.apiClient.callApi('/camera-insight-generator/config/by/stream-name/{streamName}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} streamName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InsightsGeneratorConfig}
     */

  }, {
    key: "cameraInsightGeneratorConfigByStreamNameStreamNameGet",
    value: function cameraInsightGeneratorConfigByStreamNameStreamNameGet(streamName) {
      return this.cameraInsightGeneratorConfigByStreamNameStreamNameGetWithHttpInfo(streamName).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return CameraInsightGeneratorApi;
}();

exports["default"] = CameraInsightGeneratorApi;