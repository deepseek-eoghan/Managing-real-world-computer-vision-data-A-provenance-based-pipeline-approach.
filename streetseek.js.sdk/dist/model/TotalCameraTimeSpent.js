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
 * The TotalCameraTimeSpent model module.
 * @module model/TotalCameraTimeSpent
 * @version 1.0.0
 */
var TotalCameraTimeSpent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TotalCameraTimeSpent</code>.
   * A time spent average for a given day.
   * @alias module:model/TotalCameraTimeSpent
   * @param cameraId {Number} 
   * @param _date {String} 
   * @param estTimeSpent {Number} 
   */
  function TotalCameraTimeSpent(cameraId, _date, estTimeSpent) {
    _classCallCheck(this, TotalCameraTimeSpent);

    TotalCameraTimeSpent.initialize(this, cameraId, _date, estTimeSpent);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TotalCameraTimeSpent, null, [{
    key: "initialize",
    value: function initialize(obj, cameraId, _date, estTimeSpent) {
      obj['cameraId'] = cameraId;
      obj['date'] = _date;
      obj['estTimeSpent'] = estTimeSpent;
    }
    /**
     * Constructs a <code>TotalCameraTimeSpent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TotalCameraTimeSpent} obj Optional instance to populate.
     * @return {module:model/TotalCameraTimeSpent} The populated <code>TotalCameraTimeSpent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TotalCameraTimeSpent();

        if (data.hasOwnProperty('cameraId')) {
          obj['cameraId'] = _ApiClient["default"].convertToType(data['cameraId'], 'Number');
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'String');
        }

        if (data.hasOwnProperty('estTimeSpent')) {
          obj['estTimeSpent'] = _ApiClient["default"].convertToType(data['estTimeSpent'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return TotalCameraTimeSpent;
}();
/**
 * @member {Number} cameraId
 */


TotalCameraTimeSpent.prototype['cameraId'] = undefined;
/**
 * @member {String} date
 */

TotalCameraTimeSpent.prototype['date'] = undefined;
/**
 * @member {Number} estTimeSpent
 */

TotalCameraTimeSpent.prototype['estTimeSpent'] = undefined;
var _default = TotalCameraTimeSpent;
exports["default"] = _default;