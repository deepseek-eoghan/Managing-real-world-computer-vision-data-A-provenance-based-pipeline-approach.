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
 * The CameraBody model module.
 * @module model/CameraBody
 * @version 1.0.0
 */
var CameraBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CameraBody</code>.
   * A camera object response body
   * @alias module:model/CameraBody
   * @param id {Number} 
   * @param name {String} 
   * @param created {String} 
   * @param model {String} 
   * @param resolutionWidth {Number} 
   * @param resolutionHeight {Number} 
   * @param manufacturer {String} 
   * @param status {String} 
   * @param lat {Number} 
   * @param lng {Number} 
   * @param height {Number} 
   * @param angle {Number} 
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
  function CameraBody(id, name, created, model, resolutionWidth, resolutionHeight, manufacturer, status, lat, lng, height, angle, cornerMaskX1, cornerMaskY1, cornerMaskX2, cornerMaskY2, cornerMaskX3, cornerMaskY3, cornerMaskX4, cornerMaskY4, maxSnakeLen, heatmapColumns, countLineX1, countLineY1, countLineX2, countLineY2, transformationShapeWidth, transformationShapeHeight, cameraRoiLength, roiGroundCoverage, speedDivider, socialDistanceGuideline, clearPathsFrameInterval) {
    _classCallCheck(this, CameraBody);

    CameraBody.initialize(this, id, name, created, model, resolutionWidth, resolutionHeight, manufacturer, status, lat, lng, height, angle, cornerMaskX1, cornerMaskY1, cornerMaskX2, cornerMaskY2, cornerMaskX3, cornerMaskY3, cornerMaskX4, cornerMaskY4, maxSnakeLen, heatmapColumns, countLineX1, countLineY1, countLineX2, countLineY2, transformationShapeWidth, transformationShapeHeight, cameraRoiLength, roiGroundCoverage, speedDivider, socialDistanceGuideline, clearPathsFrameInterval);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CameraBody, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, created, model, resolutionWidth, resolutionHeight, manufacturer, status, lat, lng, height, angle, cornerMaskX1, cornerMaskY1, cornerMaskX2, cornerMaskY2, cornerMaskX3, cornerMaskY3, cornerMaskX4, cornerMaskY4, maxSnakeLen, heatmapColumns, countLineX1, countLineY1, countLineX2, countLineY2, transformationShapeWidth, transformationShapeHeight, cameraRoiLength, roiGroundCoverage, speedDivider, socialDistanceGuideline, clearPathsFrameInterval) {
      obj['id'] = id;
      obj['name'] = name;
      obj['created'] = created;
      obj['model'] = model;
      obj['resolutionWidth'] = resolutionWidth;
      obj['resolutionHeight'] = resolutionHeight;
      obj['manufacturer'] = manufacturer;
      obj['status'] = status;
      obj['lat'] = lat;
      obj['lng'] = lng;
      obj['height'] = height;
      obj['angle'] = angle;
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
     * Constructs a <code>CameraBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CameraBody} obj Optional instance to populate.
     * @return {module:model/CameraBody} The populated <code>CameraBody</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CameraBody();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'String');
        }

        if (data.hasOwnProperty('model')) {
          obj['model'] = _ApiClient["default"].convertToType(data['model'], 'String');
        }

        if (data.hasOwnProperty('resolutionWidth')) {
          obj['resolutionWidth'] = _ApiClient["default"].convertToType(data['resolutionWidth'], 'Number');
        }

        if (data.hasOwnProperty('resolutionHeight')) {
          obj['resolutionHeight'] = _ApiClient["default"].convertToType(data['resolutionHeight'], 'Number');
        }

        if (data.hasOwnProperty('manufacturer')) {
          obj['manufacturer'] = _ApiClient["default"].convertToType(data['manufacturer'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('lat')) {
          obj['lat'] = _ApiClient["default"].convertToType(data['lat'], 'Number');
        }

        if (data.hasOwnProperty('lng')) {
          obj['lng'] = _ApiClient["default"].convertToType(data['lng'], 'Number');
        }

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
        }

        if (data.hasOwnProperty('angle')) {
          obj['angle'] = _ApiClient["default"].convertToType(data['angle'], 'Number');
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

  return CameraBody;
}();
/**
 * @member {Number} id
 */


CameraBody.prototype['id'] = undefined;
/**
 * @member {String} name
 */

CameraBody.prototype['name'] = undefined;
/**
 * @member {String} created
 */

CameraBody.prototype['created'] = undefined;
/**
 * @member {String} model
 */

CameraBody.prototype['model'] = undefined;
/**
 * @member {Number} resolutionWidth
 */

CameraBody.prototype['resolutionWidth'] = undefined;
/**
 * @member {Number} resolutionHeight
 */

CameraBody.prototype['resolutionHeight'] = undefined;
/**
 * @member {String} manufacturer
 */

CameraBody.prototype['manufacturer'] = undefined;
/**
 * @member {String} status
 */

CameraBody.prototype['status'] = undefined;
/**
 * @member {Number} lat
 */

CameraBody.prototype['lat'] = undefined;
/**
 * @member {Number} lng
 */

CameraBody.prototype['lng'] = undefined;
/**
 * @member {Number} height
 */

CameraBody.prototype['height'] = undefined;
/**
 * @member {Number} angle
 */

CameraBody.prototype['angle'] = undefined;
/**
 * @member {Number} cornerMaskX1
 */

CameraBody.prototype['cornerMaskX1'] = undefined;
/**
 * @member {Number} cornerMaskY1
 */

CameraBody.prototype['cornerMaskY1'] = undefined;
/**
 * @member {Number} cornerMaskX2
 */

CameraBody.prototype['cornerMaskX2'] = undefined;
/**
 * @member {Number} cornerMaskY2
 */

CameraBody.prototype['cornerMaskY2'] = undefined;
/**
 * @member {Number} cornerMaskX3
 */

CameraBody.prototype['cornerMaskX3'] = undefined;
/**
 * @member {Number} cornerMaskY3
 */

CameraBody.prototype['cornerMaskY3'] = undefined;
/**
 * @member {Number} cornerMaskX4
 */

CameraBody.prototype['cornerMaskX4'] = undefined;
/**
 * @member {Number} cornerMaskY4
 */

CameraBody.prototype['cornerMaskY4'] = undefined;
/**
 * @member {Number} maxSnakeLen
 */

CameraBody.prototype['maxSnakeLen'] = undefined;
/**
 * @member {Number} heatmapColumns
 */

CameraBody.prototype['heatmapColumns'] = undefined;
/**
 * @member {Number} countLineX1
 */

CameraBody.prototype['countLineX1'] = undefined;
/**
 * @member {Number} countLineY1
 */

CameraBody.prototype['countLineY1'] = undefined;
/**
 * @member {Number} countLineX2
 */

CameraBody.prototype['countLineX2'] = undefined;
/**
 * @member {Number} countLineY2
 */

CameraBody.prototype['countLineY2'] = undefined;
/**
 * @member {Number} transformationShapeWidth
 */

CameraBody.prototype['transformationShapeWidth'] = undefined;
/**
 * @member {Number} transformationShapeHeight
 */

CameraBody.prototype['transformationShapeHeight'] = undefined;
/**
 * @member {Number} cameraRoiLength
 */

CameraBody.prototype['cameraRoiLength'] = undefined;
/**
 * @member {Number} roiGroundCoverage
 */

CameraBody.prototype['roiGroundCoverage'] = undefined;
/**
 * @member {Number} speedDivider
 */

CameraBody.prototype['speedDivider'] = undefined;
/**
 * @member {Number} socialDistanceGuideline
 */

CameraBody.prototype['socialDistanceGuideline'] = undefined;
/**
 * @member {Number} clearPathsFrameInterval
 */

CameraBody.prototype['clearPathsFrameInterval'] = undefined;
var _default = CameraBody;
exports["default"] = _default;