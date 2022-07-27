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
 * The CameraAppConfig model module.
 * @module model/CameraAppConfig
 * @version 1.0.0
 */
var CameraAppConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CameraAppConfig</code>.
   * An application configuration associated with a cameras software settings.
   * @alias module:model/CameraAppConfig
   * @param cameraId {Number} 
   * @param created {String} 
   * @param cornerMaskX1 {Number} 
   * @param cornerMaskY1 {Number} 
   * @param cornerMaskX2 {Number} 
   * @param cornerMaskY2 {Number} 
   * @param cornerMaskX3 {Number} 
   * @param cornerMaskY3 {Number} 
   * @param cornerMaskX4 {Number} 
   * @param cornerMaskY4 {Number} 
   * @param maxSnakeLen {Number} 
   * @param heatmapColumns {Number} 
   * @param countLineX1 {Number} 
   * @param countLineY1 {Number} 
   * @param countLineX2 {Number} 
   * @param countLineY2 {Number} 
   * @param transformationShapeWidth {Number} 
   * @param transformationShapeHeight {Number} 
   * @param cameraRoiLength {Number} 
   * @param roiGroundCoverage {Number} 
   * @param speedDivider {Number} 
   * @param socialDistanceGuideline {Number} 
   * @param clearPathsFrameInterval {Number} 
   */
  function CameraAppConfig(cameraId, created, cornerMaskX1, cornerMaskY1, cornerMaskX2, cornerMaskY2, cornerMaskX3, cornerMaskY3, cornerMaskX4, cornerMaskY4, maxSnakeLen, heatmapColumns, countLineX1, countLineY1, countLineX2, countLineY2, transformationShapeWidth, transformationShapeHeight, cameraRoiLength, roiGroundCoverage, speedDivider, socialDistanceGuideline, clearPathsFrameInterval) {
    _classCallCheck(this, CameraAppConfig);

    CameraAppConfig.initialize(this, cameraId, created, cornerMaskX1, cornerMaskY1, cornerMaskX2, cornerMaskY2, cornerMaskX3, cornerMaskY3, cornerMaskX4, cornerMaskY4, maxSnakeLen, heatmapColumns, countLineX1, countLineY1, countLineX2, countLineY2, transformationShapeWidth, transformationShapeHeight, cameraRoiLength, roiGroundCoverage, speedDivider, socialDistanceGuideline, clearPathsFrameInterval);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CameraAppConfig, null, [{
    key: "initialize",
    value: function initialize(obj, cameraId, created, cornerMaskX1, cornerMaskY1, cornerMaskX2, cornerMaskY2, cornerMaskX3, cornerMaskY3, cornerMaskX4, cornerMaskY4, maxSnakeLen, heatmapColumns, countLineX1, countLineY1, countLineX2, countLineY2, transformationShapeWidth, transformationShapeHeight, cameraRoiLength, roiGroundCoverage, speedDivider, socialDistanceGuideline, clearPathsFrameInterval) {
      obj['cameraId'] = cameraId;
      obj['created'] = created;
      obj['cornerMaskX1'] = cornerMaskX1;
      obj['cornerMaskY1'] = cornerMaskY1;
      obj['cornerMaskX2'] = cornerMaskX2;
      obj['cornerMaskY2'] = cornerMaskY2;
      obj['cornerMaskX3'] = cornerMaskX3;
      obj['cornerMaskY3'] = cornerMaskY3;
      obj['cornerMaskX4'] = cornerMaskX4;
      obj['cornerMaskY4'] = cornerMaskY4;
      obj['maxSnakeLen'] = maxSnakeLen;
      obj['heatmapColumns'] = heatmapColumns;
      obj['countLineX1'] = countLineX1;
      obj['countLineY1'] = countLineY1;
      obj['countLineX2'] = countLineX2;
      obj['countLineY2'] = countLineY2;
      obj['transformationShapeWidth'] = transformationShapeWidth;
      obj['transformationShapeHeight'] = transformationShapeHeight;
      obj['cameraRoiLength'] = cameraRoiLength;
      obj['roiGroundCoverage'] = roiGroundCoverage;
      obj['speedDivider'] = speedDivider;
      obj['socialDistanceGuideline'] = socialDistanceGuideline;
      obj['clearPathsFrameInterval'] = clearPathsFrameInterval;
    }
    /**
     * Constructs a <code>CameraAppConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CameraAppConfig} obj Optional instance to populate.
     * @return {module:model/CameraAppConfig} The populated <code>CameraAppConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CameraAppConfig();

        if (data.hasOwnProperty('cameraId')) {
          obj['cameraId'] = _ApiClient["default"].convertToType(data['cameraId'], 'Number');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'String');
        }

        if (data.hasOwnProperty('cornerMaskX1')) {
          obj['cornerMaskX1'] = _ApiClient["default"].convertToType(data['cornerMaskX1'], 'Number');
        }

        if (data.hasOwnProperty('cornerMaskY1')) {
          obj['cornerMaskY1'] = _ApiClient["default"].convertToType(data['cornerMaskY1'], 'Number');
        }

        if (data.hasOwnProperty('cornerMaskX2')) {
          obj['cornerMaskX2'] = _ApiClient["default"].convertToType(data['cornerMaskX2'], 'Number');
        }

        if (data.hasOwnProperty('cornerMaskY2')) {
          obj['cornerMaskY2'] = _ApiClient["default"].convertToType(data['cornerMaskY2'], 'Number');
        }

        if (data.hasOwnProperty('cornerMaskX3')) {
          obj['cornerMaskX3'] = _ApiClient["default"].convertToType(data['cornerMaskX3'], 'Number');
        }

        if (data.hasOwnProperty('cornerMaskY3')) {
          obj['cornerMaskY3'] = _ApiClient["default"].convertToType(data['cornerMaskY3'], 'Number');
        }

        if (data.hasOwnProperty('cornerMaskX4')) {
          obj['cornerMaskX4'] = _ApiClient["default"].convertToType(data['cornerMaskX4'], 'Number');
        }

        if (data.hasOwnProperty('cornerMaskY4')) {
          obj['cornerMaskY4'] = _ApiClient["default"].convertToType(data['cornerMaskY4'], 'Number');
        }

        if (data.hasOwnProperty('maxSnakeLen')) {
          obj['maxSnakeLen'] = _ApiClient["default"].convertToType(data['maxSnakeLen'], 'Number');
        }

        if (data.hasOwnProperty('heatmapColumns')) {
          obj['heatmapColumns'] = _ApiClient["default"].convertToType(data['heatmapColumns'], 'Number');
        }

        if (data.hasOwnProperty('countLineX1')) {
          obj['countLineX1'] = _ApiClient["default"].convertToType(data['countLineX1'], 'Number');
        }

        if (data.hasOwnProperty('countLineY1')) {
          obj['countLineY1'] = _ApiClient["default"].convertToType(data['countLineY1'], 'Number');
        }

        if (data.hasOwnProperty('countLineX2')) {
          obj['countLineX2'] = _ApiClient["default"].convertToType(data['countLineX2'], 'Number');
        }

        if (data.hasOwnProperty('countLineY2')) {
          obj['countLineY2'] = _ApiClient["default"].convertToType(data['countLineY2'], 'Number');
        }

        if (data.hasOwnProperty('transformationShapeWidth')) {
          obj['transformationShapeWidth'] = _ApiClient["default"].convertToType(data['transformationShapeWidth'], 'Number');
        }

        if (data.hasOwnProperty('transformationShapeHeight')) {
          obj['transformationShapeHeight'] = _ApiClient["default"].convertToType(data['transformationShapeHeight'], 'Number');
        }

        if (data.hasOwnProperty('cameraRoiLength')) {
          obj['cameraRoiLength'] = _ApiClient["default"].convertToType(data['cameraRoiLength'], 'Number');
        }

        if (data.hasOwnProperty('roiGroundCoverage')) {
          obj['roiGroundCoverage'] = _ApiClient["default"].convertToType(data['roiGroundCoverage'], 'Number');
        }

        if (data.hasOwnProperty('speedDivider')) {
          obj['speedDivider'] = _ApiClient["default"].convertToType(data['speedDivider'], 'Number');
        }

        if (data.hasOwnProperty('socialDistanceGuideline')) {
          obj['socialDistanceGuideline'] = _ApiClient["default"].convertToType(data['socialDistanceGuideline'], 'Number');
        }

        if (data.hasOwnProperty('clearPathsFrameInterval')) {
          obj['clearPathsFrameInterval'] = _ApiClient["default"].convertToType(data['clearPathsFrameInterval'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CameraAppConfig;
}();
/**
 * @member {Number} cameraId
 */


CameraAppConfig.prototype['cameraId'] = undefined;
/**
 * @member {String} created
 */

CameraAppConfig.prototype['created'] = undefined;
/**
 * @member {Number} cornerMaskX1
 */

CameraAppConfig.prototype['cornerMaskX1'] = undefined;
/**
 * @member {Number} cornerMaskY1
 */

CameraAppConfig.prototype['cornerMaskY1'] = undefined;
/**
 * @member {Number} cornerMaskX2
 */

CameraAppConfig.prototype['cornerMaskX2'] = undefined;
/**
 * @member {Number} cornerMaskY2
 */

CameraAppConfig.prototype['cornerMaskY2'] = undefined;
/**
 * @member {Number} cornerMaskX3
 */

CameraAppConfig.prototype['cornerMaskX3'] = undefined;
/**
 * @member {Number} cornerMaskY3
 */

CameraAppConfig.prototype['cornerMaskY3'] = undefined;
/**
 * @member {Number} cornerMaskX4
 */

CameraAppConfig.prototype['cornerMaskX4'] = undefined;
/**
 * @member {Number} cornerMaskY4
 */

CameraAppConfig.prototype['cornerMaskY4'] = undefined;
/**
 * @member {Number} maxSnakeLen
 */

CameraAppConfig.prototype['maxSnakeLen'] = undefined;
/**
 * @member {Number} heatmapColumns
 */

CameraAppConfig.prototype['heatmapColumns'] = undefined;
/**
 * @member {Number} countLineX1
 */

CameraAppConfig.prototype['countLineX1'] = undefined;
/**
 * @member {Number} countLineY1
 */

CameraAppConfig.prototype['countLineY1'] = undefined;
/**
 * @member {Number} countLineX2
 */

CameraAppConfig.prototype['countLineX2'] = undefined;
/**
 * @member {Number} countLineY2
 */

CameraAppConfig.prototype['countLineY2'] = undefined;
/**
 * @member {Number} transformationShapeWidth
 */

CameraAppConfig.prototype['transformationShapeWidth'] = undefined;
/**
 * @member {Number} transformationShapeHeight
 */

CameraAppConfig.prototype['transformationShapeHeight'] = undefined;
/**
 * @member {Number} cameraRoiLength
 */

CameraAppConfig.prototype['cameraRoiLength'] = undefined;
/**
 * @member {Number} roiGroundCoverage
 */

CameraAppConfig.prototype['roiGroundCoverage'] = undefined;
/**
 * @member {Number} speedDivider
 */

CameraAppConfig.prototype['speedDivider'] = undefined;
/**
 * @member {Number} socialDistanceGuideline
 */

CameraAppConfig.prototype['socialDistanceGuideline'] = undefined;
/**
 * @member {Number} clearPathsFrameInterval
 */

CameraAppConfig.prototype['clearPathsFrameInterval'] = undefined;
var _default = CameraAppConfig;
exports["default"] = _default;