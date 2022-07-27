"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CameraInsights model module.
 * @module model/CameraInsights
 * @version 1.0.0
 */
var CameraInsights = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CameraInsights</code>.
   * A camera capture input object.
   * @alias module:model/CameraInsights
   * @param cameraId {Number} 
   * @param startFrameTime {Number} 
   * @param endFrameTime {Number} 
   * @param personCount {Number} 
   * @param personCountRight {Number} 
   * @param personCountLeft {Number} 
   * @param avgPersonSpeed {Number} 
   * @param estTimeSpent {Number} 
   * @param socialDistCompliance {Number} 
   * @param medianDensity {Number} 
   * @param heatmap {Array} 
   */
  function CameraInsights(cameraId, startFrameTime, endFrameTime, personCount, personCountRight, personCountLeft, avgPersonSpeed, estTimeSpent, socialDistCompliance, medianDensity, heatmap) {
    _classCallCheck(this, CameraInsights);

    CameraInsights.initialize(this, cameraId, startFrameTime, endFrameTime, personCount, personCountRight, personCountLeft, avgPersonSpeed, estTimeSpent, socialDistCompliance, medianDensity, heatmap);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CameraInsights, null, [{
    key: "initialize",
    value: function initialize(obj, cameraId, startFrameTime, endFrameTime, personCount, personCountRight, personCountLeft, avgPersonSpeed, estTimeSpent, socialDistCompliance, medianDensity, heatmap) {
      obj['cameraId'] = cameraId;
      obj['startFrameTime'] = startFrameTime;
      obj['endFrameTime'] = endFrameTime;
      obj['personCount'] = personCount;
      obj['personCountRight'] = personCountRight;
      obj['personCountLeft'] = personCountLeft;
      obj['avgPersonSpeed'] = avgPersonSpeed;
      obj['estTimeSpent'] = estTimeSpent;
      obj['socialDistCompliance'] = socialDistCompliance;
      obj['medianDensity'] = medianDensity;
      obj['heatmap'] = heatmap;
    }
    /**
     * Constructs a <code>CameraInsights</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CameraInsights} obj Optional instance to populate.
     * @return {module:model/CameraInsights} The populated <code>CameraInsights</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CameraInsights();

        if (data.hasOwnProperty('cameraId')) {
          obj['cameraId'] = _ApiClient["default"].convertToType(data['cameraId'], 'Number');
        }

        if (data.hasOwnProperty('startFrameTime')) {
          obj['startFrameTime'] = _ApiClient["default"].convertToType(data['startFrameTime'], 'Number');
        }

        if (data.hasOwnProperty('endFrameTime')) {
          obj['endFrameTime'] = _ApiClient["default"].convertToType(data['endFrameTime'], 'Number');
        }

        if (data.hasOwnProperty('personCount')) {
          obj['personCount'] = _ApiClient["default"].convertToType(data['personCount'], 'Number');
        }

        if (data.hasOwnProperty('personCountRight')) {
          obj['personCountRight'] = _ApiClient["default"].convertToType(data['personCountRight'], 'Number');
        }

        if (data.hasOwnProperty('personCountLeft')) {
          obj['personCountLeft'] = _ApiClient["default"].convertToType(data['personCountLeft'], 'Number');
        }

        if (data.hasOwnProperty('avgPersonSpeed')) {
          obj['avgPersonSpeed'] = _ApiClient["default"].convertToType(data['avgPersonSpeed'], 'Number');
        }

        if (data.hasOwnProperty('estTimeSpent')) {
          obj['estTimeSpent'] = _ApiClient["default"].convertToType(data['estTimeSpent'], 'Number');
        }

        if (data.hasOwnProperty('socialDistCompliance')) {
          obj['socialDistCompliance'] = _ApiClient["default"].convertToType(data['socialDistCompliance'], 'Number');
        }

        if (data.hasOwnProperty('medianDensity')) {
          obj['medianDensity'] = _ApiClient["default"].convertToType(data['medianDensity'], 'Number');
        }

        if (data.hasOwnProperty('heatmap')) {
          obj['heatmap'] = _ApiClient["default"].convertToType(data['heatmap'], Array);
        }
      }

      return obj;
    }
  }]);

  return CameraInsights;
}();
/**
 * @member {Number} cameraId
 */


CameraInsights.prototype['cameraId'] = undefined;
/**
 * @member {Number} startFrameTime
 */

CameraInsights.prototype['startFrameTime'] = undefined;
/**
 * @member {Number} endFrameTime
 */

CameraInsights.prototype['endFrameTime'] = undefined;
/**
 * @member {Number} personCount
 */

CameraInsights.prototype['personCount'] = undefined;
/**
 * @member {Number} personCountRight
 */

CameraInsights.prototype['personCountRight'] = undefined;
/**
 * @member {Number} personCountLeft
 */

CameraInsights.prototype['personCountLeft'] = undefined;
/**
 * @member {Number} avgPersonSpeed
 */

CameraInsights.prototype['avgPersonSpeed'] = undefined;
/**
 * @member {Number} estTimeSpent
 */

CameraInsights.prototype['estTimeSpent'] = undefined;
/**
 * @member {Number} socialDistCompliance
 */

CameraInsights.prototype['socialDistCompliance'] = undefined;
/**
 * @member {Number} medianDensity
 */

CameraInsights.prototype['medianDensity'] = undefined;
/**
 * @member {Array} heatmap
 */

CameraInsights.prototype['heatmap'] = undefined;
var _default = CameraInsights;
exports["default"] = _default;