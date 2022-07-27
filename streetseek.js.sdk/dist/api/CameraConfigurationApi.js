"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Camera = _interopRequireDefault(require("../model/Camera"));

var _CameraAppConfig = _interopRequireDefault(require("../model/CameraAppConfig"));

var _CameraBody = _interopRequireDefault(require("../model/CameraBody"));

var _CameraBuildConfig = _interopRequireDefault(require("../model/CameraBuildConfig"));

var _CameraName = _interopRequireDefault(require("../model/CameraName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* CameraConfiguration service.
* @module api/CameraConfigurationApi
* @version 1.0.0
*/
var CameraConfigurationApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CameraConfigurationApi. 
  * @alias module:api/CameraConfigurationApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CameraConfigurationApi(apiClient) {
    _classCallCheck(this, CameraConfigurationApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get camera details by ID.
   * @param {String} cameraId Numeric ID of camera
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CameraBody} and HTTP response
   */


  _createClass(CameraConfigurationApi, [{
    key: "cameraConfigurationCameraCameraIdGetWithHttpInfo",
    value: function cameraConfigurationCameraCameraIdGetWithHttpInfo(cameraId) {
      var postBody = null; // verify the required parameter 'cameraId' is set

      if (cameraId === undefined || cameraId === null) {
        throw new Error("Missing the required parameter 'cameraId' when calling cameraConfigurationCameraCameraIdGet");
      }

      var pathParams = {
        'cameraId': cameraId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CameraBody["default"];
      return this.apiClient.callApi('/camera-configuration/camera/{cameraId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get camera details by ID.
     * @param {String} cameraId Numeric ID of camera
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CameraBody}
     */

  }, {
    key: "cameraConfigurationCameraCameraIdGet",
    value: function cameraConfigurationCameraCameraIdGet(cameraId) {
      return this.cameraConfigurationCameraCameraIdGetWithHttpInfo(cameraId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a cameras name by the ID.
     * @param {String} cameraId Numeric ID of camera
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CameraName} and HTTP response
     */

  }, {
    key: "cameraConfigurationCameraNameByIdCameraIdGetWithHttpInfo",
    value: function cameraConfigurationCameraNameByIdCameraIdGetWithHttpInfo(cameraId) {
      var postBody = null; // verify the required parameter 'cameraId' is set

      if (cameraId === undefined || cameraId === null) {
        throw new Error("Missing the required parameter 'cameraId' when calling cameraConfigurationCameraNameByIdCameraIdGet");
      }

      var pathParams = {
        'cameraId': cameraId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CameraName["default"];
      return this.apiClient.callApi('/camera-configuration/camera/name/by/id/{cameraId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a cameras name by the ID.
     * @param {String} cameraId Numeric ID of camera
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CameraName}
     */

  }, {
    key: "cameraConfigurationCameraNameByIdCameraIdGet",
    value: function cameraConfigurationCameraNameByIdCameraIdGet(cameraId) {
      return this.cameraConfigurationCameraNameByIdCameraIdGetWithHttpInfo(cameraId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get all camera details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CameraBody>} and HTTP response
     */

  }, {
    key: "cameraConfigurationCamerasGetWithHttpInfo",
    value: function cameraConfigurationCamerasGetWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_CameraBody["default"]];
      return this.apiClient.callApi('/camera-configuration/cameras', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get all camera details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CameraBody>}
     */

  }, {
    key: "cameraConfigurationCamerasGet",
    value: function cameraConfigurationCamerasGet() {
      return this.cameraConfigurationCamerasGetWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Set an app config for a given camera.
     * @param {Object} opts Optional parameters
     * @param {module:model/CameraAppConfig} opts.cameraAppConfig 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */

  }, {
    key: "cameraConfigurationSetAppConfigPostWithHttpInfo",
    value: function cameraConfigurationSetAppConfigPostWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['cameraAppConfig'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['text/plain'];
      var returnType = 'String';
      return this.apiClient.callApi('/camera-configuration/set-app-config', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Set an app config for a given camera.
     * @param {Object} opts Optional parameters
     * @param {module:model/CameraAppConfig} opts.cameraAppConfig 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */

  }, {
    key: "cameraConfigurationSetAppConfigPost",
    value: function cameraConfigurationSetAppConfigPost(opts) {
      return this.cameraConfigurationSetAppConfigPostWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Set a build config for a given camera.
     * @param {Object} opts Optional parameters
     * @param {module:model/CameraBuildConfig} opts.cameraBuildConfig 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */

  }, {
    key: "cameraConfigurationSetBuildConfigPostWithHttpInfo",
    value: function cameraConfigurationSetBuildConfigPostWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['cameraBuildConfig'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['text/plain'];
      var returnType = 'String';
      return this.apiClient.callApi('/camera-configuration/set-build-config', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Set a build config for a given camera.
     * @param {Object} opts Optional parameters
     * @param {module:model/CameraBuildConfig} opts.cameraBuildConfig 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */

  }, {
    key: "cameraConfigurationSetBuildConfigPost",
    value: function cameraConfigurationSetBuildConfigPost(opts) {
      return this.cameraConfigurationSetBuildConfigPostWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Set up a new camera.
     * @param {Object} opts Optional parameters
     * @param {module:model/Camera} opts.camera 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */

  }, {
    key: "cameraConfigurationSetupCameraPostWithHttpInfo",
    value: function cameraConfigurationSetupCameraPostWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['camera'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['text/plain'];
      var returnType = 'String';
      return this.apiClient.callApi('/camera-configuration/setup-camera', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Set up a new camera.
     * @param {Object} opts Optional parameters
     * @param {module:model/Camera} opts.camera 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */

  }, {
    key: "cameraConfigurationSetupCameraPost",
    value: function cameraConfigurationSetupCameraPost(opts) {
      return this.cameraConfigurationSetupCameraPostWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return CameraConfigurationApi;
}();

exports["default"] = CameraConfigurationApi;