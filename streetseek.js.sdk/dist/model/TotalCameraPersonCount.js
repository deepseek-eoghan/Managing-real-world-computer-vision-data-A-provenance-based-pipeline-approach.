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
 * The TotalCameraPersonCount model module.
 * @module model/TotalCameraPersonCount
 * @version 1.0.0
 */
var TotalCameraPersonCount = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TotalCameraPersonCount</code>.
   * A sum of all counts on a given day for a chosen camera id.
   * @alias module:model/TotalCameraPersonCount
   * @param cameraId {Number} 
   * @param _date {String} 
   * @param personCount {Number} 
   */
  function TotalCameraPersonCount(cameraId, _date, personCount) {
    _classCallCheck(this, TotalCameraPersonCount);

    TotalCameraPersonCount.initialize(this, cameraId, _date, personCount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TotalCameraPersonCount, null, [{
    key: "initialize",
    value: function initialize(obj, cameraId, _date, personCount) {
      obj['cameraId'] = cameraId;
      obj['date'] = _date;
      obj['personCount'] = personCount;
    }
    /**
     * Constructs a <code>TotalCameraPersonCount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TotalCameraPersonCount} obj Optional instance to populate.
     * @return {module:model/TotalCameraPersonCount} The populated <code>TotalCameraPersonCount</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TotalCameraPersonCount();

        if (data.hasOwnProperty('cameraId')) {
          obj['cameraId'] = _ApiClient["default"].convertToType(data['cameraId'], 'Number');
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'String');
        }

        if (data.hasOwnProperty('personCount')) {
          obj['personCount'] = _ApiClient["default"].convertToType(data['personCount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return TotalCameraPersonCount;
}();
/**
 * @member {Number} cameraId
 */


TotalCameraPersonCount.prototype['cameraId'] = undefined;
/**
 * @member {String} date
 */

TotalCameraPersonCount.prototype['date'] = undefined;
/**
 * @member {Number} personCount
 */

TotalCameraPersonCount.prototype['personCount'] = undefined;
var _default = TotalCameraPersonCount;
exports["default"] = _default;