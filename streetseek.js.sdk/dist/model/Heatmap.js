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
 * The Heatmap model module.
 * @module model/Heatmap
 * @version 1.0.0
 */
var Heatmap = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Heatmap</code>.
   * A heatmap object
   * @alias module:model/Heatmap
   * @param mapMatrix {Array} 
   */
  function Heatmap(mapMatrix) {
    _classCallCheck(this, Heatmap);

    Heatmap.initialize(this, mapMatrix);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Heatmap, null, [{
    key: "initialize",
    value: function initialize(obj, mapMatrix) {
      obj['mapMatrix'] = mapMatrix;
    }
    /**
     * Constructs a <code>Heatmap</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Heatmap} obj Optional instance to populate.
     * @return {module:model/Heatmap} The populated <code>Heatmap</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Heatmap();

        if (data.hasOwnProperty('mapMatrix')) {
          obj['mapMatrix'] = _ApiClient["default"].convertToType(data['mapMatrix'], Array);
        }
      }

      return obj;
    }
  }]);

  return Heatmap;
}();
/**
 * @member {Array} mapMatrix
 */


Heatmap.prototype['mapMatrix'] = undefined;
var _default = Heatmap;
exports["default"] = _default;