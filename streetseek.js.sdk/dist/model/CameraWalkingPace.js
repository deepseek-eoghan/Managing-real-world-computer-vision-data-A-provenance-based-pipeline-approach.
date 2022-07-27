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
 * The CameraWalkingPace model module.
 * @module model/CameraWalkingPace
 * @version 1.0.0
 */
var CameraWalkingPace = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CameraWalkingPace</code>.
   * A walking pace object.
   * @alias module:model/CameraWalkingPace
   * @param cameraId {Number} 
   * @param captureStart {String} 
   * @param avgPersonSpeed {Number} 
   */
  function CameraWalkingPace(cameraId, captureStart, avgPersonSpeed) {
    _classCallCheck(this, CameraWalkingPace);

    CameraWalkingPace.initialize(this, cameraId, captureStart, avgPersonSpeed);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CameraWalkingPace, null, [{
    key: "initialize",
    value: function initialize(obj, cameraId, captureStart, avgPersonSpeed) {
      obj['cameraId'] = cameraId;
      obj['captureStart'] = captureStart;
      obj['avgPersonSpeed'] = avgPersonSpeed;
    }
    /**
     * Constructs a <code>CameraWalkingPace</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CameraWalkingPace} obj Optional instance to populate.
     * @return {module:model/CameraWalkingPace} The populated <code>CameraWalkingPace</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CameraWalkingPace();

        if (data.hasOwnProperty('cameraId')) {
          obj['cameraId'] = _ApiClient["default"].convertToType(data['cameraId'], 'Number');
        }

        if (data.hasOwnProperty('captureStart')) {
          obj['captureStart'] = _ApiClient["default"].convertToType(data['captureStart'], 'String');
        }

        if (data.hasOwnProperty('avgPersonSpeed')) {
          obj['avgPersonSpeed'] = _ApiClient["default"].convertToType(data['avgPersonSpeed'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CameraWalkingPace;
}();
/**
 * @member {Number} cameraId
 */


CameraWalkingPace.prototype['cameraId'] = undefined;
/**
 * @member {String} captureStart
 */

CameraWalkingPace.prototype['captureStart'] = undefined;
/**
 * @member {Number} avgPersonSpeed
 */

CameraWalkingPace.prototype['avgPersonSpeed'] = undefined;
var _default = CameraWalkingPace;
exports["default"] = _default;