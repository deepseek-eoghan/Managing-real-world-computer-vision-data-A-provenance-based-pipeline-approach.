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
 * The CameraBuildConfig model module.
 * @module model/CameraBuildConfig
 * @version 1.0.0
 */
var CameraBuildConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CameraBuildConfig</code>.
   * A build configuration associated with a cameras physical install.
   * @alias module:model/CameraBuildConfig
   * @param cameraId {Number} 
   * @param lat {Number} 
   * @param lng {Number} 
   * @param height {Number} 
   * @param angle {Number} 
   */
  function CameraBuildConfig(cameraId, lat, lng, height, angle) {
    _classCallCheck(this, CameraBuildConfig);

    CameraBuildConfig.initialize(this, cameraId, lat, lng, height, angle);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CameraBuildConfig, null, [{
    key: "initialize",
    value: function initialize(obj, cameraId, lat, lng, height, angle) {
      obj['cameraId'] = cameraId;
      obj['lat'] = lat;
      obj['lng'] = lng;
      obj['height'] = height;
      obj['angle'] = angle;
    }
    /**
     * Constructs a <code>CameraBuildConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CameraBuildConfig} obj Optional instance to populate.
     * @return {module:model/CameraBuildConfig} The populated <code>CameraBuildConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CameraBuildConfig();

        if (data.hasOwnProperty('cameraId')) {
          obj['cameraId'] = _ApiClient["default"].convertToType(data['cameraId'], 'Number');
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
      }

      return obj;
    }
  }]);

  return CameraBuildConfig;
}();
/**
 * @member {Number} cameraId
 */


CameraBuildConfig.prototype['cameraId'] = undefined;
/**
 * @member {Number} lat
 */

CameraBuildConfig.prototype['lat'] = undefined;
/**
 * @member {Number} lng
 */

CameraBuildConfig.prototype['lng'] = undefined;
/**
 * @member {Number} height
 */

CameraBuildConfig.prototype['height'] = undefined;
/**
 * @member {Number} angle
 */

CameraBuildConfig.prototype['angle'] = undefined;
var _default = CameraBuildConfig;
exports["default"] = _default;