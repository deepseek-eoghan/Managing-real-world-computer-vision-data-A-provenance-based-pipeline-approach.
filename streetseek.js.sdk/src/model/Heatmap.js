/**
 * Streetseek Server
 * streetseek.server
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Heatmap model module.
 * @module model/Heatmap
 * @version 1.0.0
 */
class Heatmap {
    /**
     * Constructs a new <code>Heatmap</code>.
     * A heatmap object
     * @alias module:model/Heatmap
     * @param mapMatrix {Array} 
     */
    constructor(mapMatrix) { 
        
        Heatmap.initialize(this, mapMatrix);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, mapMatrix) { 
        obj['mapMatrix'] = mapMatrix;
    }

    /**
     * Constructs a <code>Heatmap</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Heatmap} obj Optional instance to populate.
     * @return {module:model/Heatmap} The populated <code>Heatmap</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Heatmap();

            if (data.hasOwnProperty('mapMatrix')) {
                obj['mapMatrix'] = ApiClient.convertToType(data['mapMatrix'], Array);
            }
        }
        return obj;
    }


}

/**
 * @member {Array} mapMatrix
 */
Heatmap.prototype['mapMatrix'] = undefined;






export default Heatmap;
