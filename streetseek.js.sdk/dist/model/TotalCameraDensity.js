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
 * The TotalCameraDensity model module.
 * @module model/TotalCameraDensity
 * @version 1.0.0
 */
var TotalCameraDensity = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TotalCameraDensity</code>.
   * A density average for a given day.
   * @alias module:model/TotalCameraDensity
   * @param cameraId {Number} 
   * @param _date {String} 
   * @param density {Number} 
   */
  function TotalCameraDensity(cameraId, _date, density) {
    _classCallCheck(this, TotalCameraDensity);

    TotalCameraDensity.initialize(this, cameraId, _date, density);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TotalCameraDensity, null, [{
    key: "initialize",
    value: function initialize(obj, cameraId, _date, density) {
      obj['cameraId'] = cameraId;
      obj['date'] = _date;
      obj['density'] = density;
    }
    /**
     * Constructs a <code>TotalCameraDensity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TotalCameraDensity} obj Optional instance to populate.
     * @return {module:model/TotalCameraDensity} The populated <code>TotalCameraDensity</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TotalCameraDensity();

        if (data.hasOwnProperty('cameraId')) {
          obj['cameraId'] = _ApiClient["default"].convertToType(data['cameraId'], 'Number');
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'String');
        }

        if (data.hasOwnProperty('density')) {
          obj['density'] = _ApiClient["default"].convertToType(data['density'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return TotalCameraDensity;
}();
/**
 * @member {Number} cameraId
 */


TotalCameraDensity.prototype['cameraId'] = undefined;
/**
 * @member {String} date
 */

TotalCameraDensity.prototype['date'] = undefined;
/**
 * @member {Number} density
 */

TotalCameraDensity.prototype['density'] = undefined;
var _default = TotalCameraDensity;
exports["default"] = _default;