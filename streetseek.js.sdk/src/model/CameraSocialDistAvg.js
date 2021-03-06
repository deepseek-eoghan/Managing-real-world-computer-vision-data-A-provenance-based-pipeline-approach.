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
 * The CameraSocialDistAvg model module.
 * @module model/CameraSocialDistAvg
 * @version 1.0.0
 */
class CameraSocialDistAvg {
    /**
     * Constructs a new <code>CameraSocialDistAvg</code>.
     * Average social distance compliance
     * @alias module:model/CameraSocialDistAvg
     * @param cameraId {Number} 
     * @param captureStart {String} 
     * @param personsCounted {Number} 
     */
    constructor(cameraId, captureStart, personsCounted) { 
        
        CameraSocialDistAvg.initialize(this, cameraId, captureStart, personsCounted);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cameraId, captureStart, personsCounted) { 
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
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CameraSocialDistAvg();

            if (data.hasOwnProperty('cameraId')) {
                obj['cameraId'] = ApiClient.convertToType(data['cameraId'], 'Number');
            }
            if (data.hasOwnProperty('captureStart')) {
                obj['captureStart'] = ApiClient.convertToType(data['captureStart'], 'String');
            }
            if (data.hasOwnProperty('personsCounted')) {
                obj['personsCounted'] = ApiClient.convertToType(data['personsCounted'], 'Number');
            }
        }
        return obj;
    }


}

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






export default CameraSocialDistAvg;

