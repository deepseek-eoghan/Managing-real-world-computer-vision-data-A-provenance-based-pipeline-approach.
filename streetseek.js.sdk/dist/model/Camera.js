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
 * The Camera model module.
 * @module model/Camera
 * @version 1.0.0
 */
var Camera = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Camera</code>.
   * A camera input object
   * @alias module:model/Camera
   * @param name {String} 
   * @param created {String} 
   * @param cameraType {Number} 
   * @param streamName {String} 
   * @param status {Number} 
   */
  function Camera(name, created, cameraType, streamName, status) {
    _classCallCheck(this, Camera);

    Camera.initialize(this, name, created, cameraType, streamName, status);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Camera, null, [{
    key: "initialize",
    value: function initialize(obj, name, created, cameraType, streamName, status) {
      obj['name'] = name;
      obj['created'] = created;
      obj['cameraType'] = cameraType;
      obj['streamName'] = streamName;
      obj['status'] = status;
    }
    /**
     * Constructs a <code>Camera</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Camera} obj Optional instance to populate.
     * @return {module:model/Camera} The populated <code>Camera</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Camera();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'String');
        }

        if (data.hasOwnProperty('cameraType')) {
          obj['cameraType'] = _ApiClient["default"].convertToType(data['cameraType'], 'Number');
        }

        if (data.hasOwnProperty('streamName')) {
          obj['streamName'] = _ApiClient["default"].convertToType(data['streamName'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Camera;
}();
/**
 * @member {String} name
 */


Camera.prototype['name'] = undefined;
/**
 * @member {String} created
 */

Camera.prototype['created'] = undefined;
/**
 * @member {Number} cameraType
 */

Camera.prototype['cameraType'] = undefined;
/**
 * @member {String} streamName
 */

Camera.prototype['streamName'] = undefined;
/**
 * @member {Number} status
 */

Camera.prototype['status'] = undefined;
var _default = Camera;
exports["default"] = _default;