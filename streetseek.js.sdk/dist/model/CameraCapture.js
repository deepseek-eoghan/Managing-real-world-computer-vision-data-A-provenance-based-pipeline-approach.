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
 * The CameraCapture model module.
 * @module model/CameraCapture
 * @version 1.0.0
 */
var CameraCapture = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CameraCapture</code>.
   * A camera capture input object.
   * @alias module:model/CameraCapture
   * @param cameraId {Number} 
   * @param created {String} 
   * @param personCount {Number} 
   * @param density {Number} 
   */
  function CameraCapture(cameraId, created, personCount, density) {
    _classCallCheck(this, CameraCapture);

    CameraCapture.initialize(this, cameraId, created, personCount, density);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CameraCapture, null, [{
    key: "initialize",
    value: function initialize(obj, cameraId, created, personCount, density) {
      obj['cameraId'] = cameraId;
      obj['created'] = created;
      obj['personCount'] = personCount;
      obj['density'] = density;
    }
    /**
     * Constructs a <code>CameraCapture</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CameraCapture} obj Optional instance to populate.
     * @return {module:model/CameraCapture} The populated <code>CameraCapture</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CameraCapture();

        if (data.hasOwnProperty('cameraId')) {
          obj['cameraId'] = _ApiClient["default"].convertToType(data['cameraId'], 'Number');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'String');
        }

        if (data.hasOwnProperty('personCount')) {
          obj['personCount'] = _ApiClient["default"].convertToType(data['personCount'], 'Number');
        }

        if (data.hasOwnProperty('density')) {
          obj['density'] = _ApiClient["default"].convertToType(data['density'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CameraCapture;
}();
/**
 * @member {Number} cameraId
 */


CameraCapture.prototype['cameraId'] = undefined;
/**
 * @member {String} created
 */

CameraCapture.prototype['created'] = undefined;
/**
 * @member {Number} personCount
 */

CameraCapture.prototype['personCount'] = undefined;
/**
 * @member {Number} density
 */

CameraCapture.prototype['density'] = undefined;
var _default = CameraCapture;
exports["default"] = _default;