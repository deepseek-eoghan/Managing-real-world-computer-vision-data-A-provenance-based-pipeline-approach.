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
 * The CameraSocialDistAvg model module.
 * @module model/CameraSocialDistAvg
 * @version 1.0.0
 */
var CameraSocialDistAvg = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CameraSocialDistAvg</code>.
   * Average social distance compliance
   * @alias module:model/CameraSocialDistAvg
   * @param cameraId {Number} 
   * @param captureStart {String} 
   * @param personsCounted {Number} 
   */
  function CameraSocialDistAvg(cameraId, captureStart, personsCounted) {
    _classCallCheck(this, CameraSocialDistAvg);

    CameraSocialDistAvg.initialize(this, cameraId, captureStart, personsCounted);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CameraSocialDistAvg, null, [{
    key: "initialize",
    value: function initialize(obj, cameraId, captureStart, personsCounted) {
      obj['cameraId'] = cameraId;
      obj['captureStart'] = captureStart;
      obj['personsCounted'] = personsCounted;
    }
    /**
     * Constructs a <code>CameraSocialDistAvg</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CameraSocialDistAvg} obj Optional instance to populate.
     * @return {module:model/CameraSocialDistAvg} The populated <code>CameraSocialDistAvg</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CameraSocialDistAvg();

        if (data.hasOwnProperty('cameraId')) {
          obj['cameraId'] = _ApiClient["default"].convertToType(data['cameraId'], 'Number');
        }

        if (data.hasOwnProperty('captureStart')) {
          obj['captureStart'] = _ApiClient["default"].convertToType(data['captureStart'], 'String');
        }

        if (data.hasOwnProperty('personsCounted')) {
          obj['personsCounted'] = _ApiClient["default"].convertToType(data['personsCounted'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CameraSocialDistAvg;
}();
/**
 * @member {Number} cameraId
 */


CameraSocialDistAvg.prototype['cameraId'] = undefined;
/**
 * @member {String} captureStart
 */

CameraSocialDistAvg.prototype['captureStart'] = undefined;
/**
 * @member {Number} personsCounted
 */

CameraSocialDistAvg.prototype['personsCounted'] = undefined;
var _default = CameraSocialDistAvg;
exports["default"] = _default;