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
 * The InsightsGeneratorConfig model module.
 * @module model/InsightsGeneratorConfig
 * @version 1.0.0
 */
var InsightsGeneratorConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InsightsGeneratorConfig</code>.
   * A config object for the insights generator algorithm
   * @alias module:model/InsightsGeneratorConfig
   * @param cameraId {Number} 
   * @param streamName {String} 
   * @param resolutionWidth {Number} 
   * @param resolutionHeight {Number} 
   * @param cornerMaskX1 {Number} 
   * @param cornerMaskY1 {Number} 
   * @param cornerMaskX2 {Number} 
   * @param cornerMaskY2 {Number} 
   * @param cornerMaskX3 {Number} 
   * @param cornerMaskY3 {Number} 
   * @param cornerMaskX4 {Number} 
   * @param cornerMaskY4 {Number} 
   * @param minPointsInPath {Number} 
   * @param writePathsToDynamo {Number} 
   * @param roundPlaces {Number} 
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
  function InsightsGeneratorConfig(cameraId, streamName, resolutionWidth, resolutionHeight, cornerMaskX1, cornerMaskY1, cornerMaskX2, cornerMaskY2, cornerMaskX3, cornerMaskY3, cornerMaskX4, cornerMaskY4, minPointsInPath, writePathsToDynamo, roundPlaces, maxSnakeLen, heatmapColumns, countLineX1, countLineY1, countLineX2, countLineY2, transformationShapeWidth, transformationShapeHeight, cameraRoiLength, roiGroundCoverage, speedDivider, socialDistanceGuideline, clearPathsFrameInterval) {
    _classCallCheck(this, InsightsGeneratorConfig);

    InsightsGeneratorConfig.initialize(this, cameraId, streamName, resolutionWidth, resolutionHeight, cornerMaskX1, cornerMaskY1, cornerMaskX2, cornerMaskY2, cornerMaskX3, cornerMaskY3, cornerMaskX4, cornerMaskY4, minPointsInPath, writePathsToDynamo, roundPlaces, maxSnakeLen, heatmapColumns, countLineX1, countLineY1, countLineX2, countLineY2, transformationShapeWidth, transformationShapeHeight, cameraRoiLength, roiGroundCoverage, speedDivider, socialDistanceGuideline, clearPathsFrameInterval);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InsightsGeneratorConfig, null, [{
    key: "initialize",
    value: function initialize(obj, cameraId, streamName, resolutionWidth, resolutionHeight, cornerMaskX1, cornerMaskY1, cornerMaskX2, cornerMaskY2, cornerMaskX3, cornerMaskY3, cornerMaskX4, cornerMaskY4, minPointsInPath, writePathsToDynamo, roundPlaces, maxSnakeLen, heatmapColumns, countLineX1, countLineY1, countLineX2, countLineY2, transformationShapeWidth, transformationShapeHeight, cameraRoiLength, roiGroundCoverage, speedDivider, socialDistanceGuideline, clearPathsFrameInterval) {
      obj['cameraId'] = cameraId;
      obj['streamName'] = streamName;
      obj['resolutionWidth'] = resolutionWidth;
      obj['resolutionHeight'] = resolutionHeight;
      obj['cornerMaskX1'] = cornerMaskX1;
      obj['cornerMaskY1'] = cornerMaskY1;
      obj['cornerMaskX2'] = cornerMaskX2;
      obj['cornerMaskY2'] = cornerMaskY2;
      obj['cornerMaskX3'] = cornerMaskX3;
      obj['cornerMaskY3'] = cornerMaskY3;
      obj['cornerMaskX4'] = cornerMaskX4;
      obj['cornerMaskY4'] = cornerMaskY4;
      obj['minPointsInPath'] = minPointsInPath;
      obj['writePathsToDynamo'] = writePathsToDynamo;
      obj['roundPlaces'] = roundPlaces;
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
     * Constructs a <code>InsightsGeneratorConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InsightsGeneratorConfig} obj Optional instance to populate.
     * @return {module:model/InsightsGeneratorConfig} The populated <code>InsightsGeneratorConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InsightsGeneratorConfig();

        if (data.hasOwnProperty('cameraId')) {
          obj['cameraId'] = _ApiClient["default"].convertToType(data['cameraId'], 'Number');
        }

        if (data.hasOwnProperty('streamName')) {
          obj['streamName'] = _ApiClient["default"].convertToType(data['streamName'], 'String');
        }

        if (data.hasOwnProperty('resolutionWidth')) {
          obj['resolutionWidth'] = _ApiClient["default"].convertToType(data['resolutionWidth'], 'Number');
        }

        if (data.hasOwnProperty('resolutionHeight')) {
          obj['resolutionHeight'] = _ApiClient["default"].convertToType(data['resolutionHeight'], 'Number');
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

        if (data.hasOwnProperty('minPointsInPath')) {
          obj['minPointsInPath'] = _ApiClient["default"].convertToType(data['minPointsInPath'], 'Number');
        }

        if (data.hasOwnProperty('writePathsToDynamo')) {
          obj['writePathsToDynamo'] = _ApiClient["default"].convertToType(data['writePathsToDynamo'], 'Number');
        }

        if (data.hasOwnProperty('roundPlaces')) {
          obj['roundPlaces'] = _ApiClient["default"].convertToType(data['roundPlaces'], 'Number');
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

  return InsightsGeneratorConfig;
}();
/**
 * @member {Number} cameraId
 */


InsightsGeneratorConfig.prototype['cameraId'] = undefined;
/**
 * @member {String} streamName
 */

InsightsGeneratorConfig.prototype['streamName'] = undefined;
/**
 * @member {Number} resolutionWidth
 */

InsightsGeneratorConfig.prototype['resolutionWidth'] = undefined;
/**
 * @member {Number} resolutionHeight
 */

InsightsGeneratorConfig.prototype['resolutionHeight'] = undefined;
/**
 * @member {Number} cornerMaskX1
 */

InsightsGeneratorConfig.prototype['cornerMaskX1'] = undefined;
/**
 * @member {Number} cornerMaskY1
 */

InsightsGeneratorConfig.prototype['cornerMaskY1'] = undefined;
/**
 * @member {Number} cornerMaskX2
 */

InsightsGeneratorConfig.prototype['cornerMaskX2'] = undefined;
/**
 * @member {Number} cornerMaskY2
 */

InsightsGeneratorConfig.prototype['cornerMaskY2'] = undefined;
/**
 * @member {Number} cornerMaskX3
 */

InsightsGeneratorConfig.prototype['cornerMaskX3'] = undefined;
/**
 * @member {Number} cornerMaskY3
 */

InsightsGeneratorConfig.prototype['cornerMaskY3'] = undefined;
/**
 * @member {Number} cornerMaskX4
 */

InsightsGeneratorConfig.prototype['cornerMaskX4'] = undefined;
/**
 * @member {Number} cornerMaskY4
 */

InsightsGeneratorConfig.prototype['cornerMaskY4'] = undefined;
/**
 * @member {Number} minPointsInPath
 */

InsightsGeneratorConfig.prototype['minPointsInPath'] = undefined;
/**
 * @member {Number} writePathsToDynamo
 */

InsightsGeneratorConfig.prototype['writePathsToDynamo'] = undefined;
/**
 * @member {Number} roundPlaces
 */

InsightsGeneratorConfig.prototype['roundPlaces'] = undefined;
/**
 * @member {Number} maxSnakeLen
 */

InsightsGeneratorConfig.prototype['maxSnakeLen'] = undefined;
/**
 * @member {Number} heatmapColumns
 */

InsightsGeneratorConfig.prototype['heatmapColumns'] = undefined;
/**
 * @member {Number} countLineX1
 */

InsightsGeneratorConfig.prototype['countLineX1'] = undefined;
/**
 * @member {Number} countLineY1
 */

InsightsGeneratorConfig.prototype['countLineY1'] = undefined;
/**
 * @member {Number} countLineX2
 */

InsightsGeneratorConfig.prototype['countLineX2'] = undefined;
/**
 * @member {Number} countLineY2
 */

InsightsGeneratorConfig.prototype['countLineY2'] = undefined;
/**
 * @member {Number} transformationShapeWidth
 */

InsightsGeneratorConfig.prototype['transformationShapeWidth'] = undefined;
/**
 * @member {Number} transformationShapeHeight
 */

InsightsGeneratorConfig.prototype['transformationShapeHeight'] = undefined;
/**
 * @member {Number} cameraRoiLength
 */

InsightsGeneratorConfig.prototype['cameraRoiLength'] = undefined;
/**
 * @member {Number} roiGroundCoverage
 */

InsightsGeneratorConfig.prototype['roiGroundCoverage'] = undefined;
/**
 * @member {Number} speedDivider
 */

InsightsGeneratorConfig.prototype['speedDivider'] = undefined;
/**
 * @member {Number} socialDistanceGuideline
 */

InsightsGeneratorConfig.prototype['socialDistanceGuideline'] = undefined;
/**
 * @member {Number} clearPathsFrameInterval
 */

InsightsGeneratorConfig.prototype['clearPathsFrameInterval'] = undefined;
var _default = InsightsGeneratorConfig;
exports["default"] = _default;