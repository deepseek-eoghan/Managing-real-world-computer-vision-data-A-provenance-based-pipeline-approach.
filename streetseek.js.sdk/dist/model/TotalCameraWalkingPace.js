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
 * The TotalCameraWalkingPace model module.
 * @module model/TotalCameraWalkingPace
 * @version 1.0.0
 */
var TotalCameraWalkingPace = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TotalCameraWalkingPace</code>.
   * A walking pace average for a given day.
   * @alias module:model/TotalCameraWalkingPace
   * @param cameraId {Number} 
   * @param _date {String} 
   * @param avgPersonSpeed {Number} 
   */
  function TotalCameraWalkingPace(cameraId, _date, avgPersonSpeed) {
    _classCallCheck(this, TotalCameraWalkingPace);

    TotalCameraWalkingPace.initialize(this, cameraId, _date, avgPersonSpeed);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TotalCameraWalkingPace, null, [{
    key: "initialize",
    value: function initialize(obj, cameraId, _date, avgPersonSpeed) {
      obj['cameraId'] = cameraId;
      obj['date'] = _date;
      obj['avgPersonSpeed'] = avgPersonSpeed;
    }
    /**
     * Constructs a <code>TotalCameraWalkingPace</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TotalCameraWalkingPace} obj Optional instance to populate.
     * @return {module:model/TotalCameraWalkingPace} The populated <code>TotalCameraWalkingPace</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TotalCameraWalkingPace();

        if (data.hasOwnProperty('cameraId')) {
          obj['cameraId'] = _ApiClient["default"].convertToType(data['cameraId'], 'Number');
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'String');
        }

        if (data.hasOwnProperty('avgPersonSpeed')) {
          obj['avgPersonSpeed'] = _ApiClient["default"].convertToType(data['avgPersonSpeed'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return TotalCameraWalkingPace;
}();
/**
 * @member {Number} cameraId
 */


TotalCameraWalkingPace.prototype['cameraId'] = undefined;
/**
 * @member {String} date
 */

TotalCameraWalkingPace.prototype['date'] = undefined;
/**
 * @member {Number} avgPersonSpeed
 */

TotalCameraWalkingPace.prototype['avgPersonSpeed'] = undefined;
var _default = TotalCameraWalkingPace;
exports["default"] = _default;