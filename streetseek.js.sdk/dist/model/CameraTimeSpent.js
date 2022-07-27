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
 * The CameraTimeSpent model module.
 * @module model/CameraTimeSpent
 * @version 1.0.0
 */
var CameraTimeSpent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CameraTimeSpent</code>.
   * A time spent object.
   * @alias module:model/CameraTimeSpent
   * @param cameraId {Number} 
   * @param captureStart {String} 
   * @param estTimeSpent {Number} 
   */
  function CameraTimeSpent(cameraId, captureStart, estTimeSpent) {
    _classCallCheck(this, CameraTimeSpent);

    CameraTimeSpent.initialize(this, cameraId, captureStart, estTimeSpent);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CameraTimeSpent, null, [{
    key: "initialize",
    value: function initialize(obj, cameraId, captureStart, estTimeSpent) {
      obj['cameraId'] = cameraId;
      obj['captureStart'] = captureStart;
      obj['estTimeSpent'] = estTimeSpent;
    }
    /**
     * Constructs a <code>CameraTimeSpent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CameraTimeSpent} obj Optional instance to populate.
     * @return {module:model/CameraTimeSpent} The populated <code>CameraTimeSpent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CameraTimeSpent();

        if (data.hasOwnProperty('cameraId')) {
          obj['cameraId'] = _ApiClient["default"].convertToType(data['cameraId'], 'Number');
        }

        if (data.hasOwnProperty('captureStart')) {
          obj['captureStart'] = _ApiClient["default"].convertToType(data['captureStart'], 'String');
        }

        if (data.hasOwnProperty('estTimeSpent')) {
          obj['estTimeSpent'] = _ApiClient["default"].convertToType(data['estTimeSpent'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CameraTimeSpent;
}();
/**
 * @member {Number} cameraId
 */


CameraTimeSpent.prototype['cameraId'] = undefined;
/**
 * @member {String} captureStart
 */

CameraTimeSpent.prototype['captureStart'] = undefined;
/**
 * @member {Number} estTimeSpent
 */

CameraTimeSpent.prototype['estTimeSpent'] = undefined;
var _default = CameraTimeSpent;
exports["default"] = _default;