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
 * The TotalCameraPersonCount model module.
 * @module model/TotalCameraPersonCount
 * @version 1.0.0
 */
class TotalCameraPersonCount {
    /**
     * Constructs a new <code>TotalCameraPersonCount</code>.
     * A sum of all counts on a given day for a chosen camera id.
     * @alias module:model/TotalCameraPersonCount
     * @param cameraId {Number} 
     * @param _date {String} 
     * @param personCount {Number} 
     */
    constructor(cameraId, _date, personCount) { 
        
        TotalCameraPersonCount.initialize(this, cameraId, _date, personCount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cameraId, _date, personCount) { 
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
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TotalCameraPersonCount();

            if (data.hasOwnProperty('cameraId')) {
                obj['cameraId'] = ApiClient.convertToType(data['cameraId'], 'Number');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('personCount')) {
                obj['personCount'] = ApiClient.convertToType(data['personCount'], 'Number');
            }
        }
        return obj;
    }


}

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






export default TotalCameraPersonCount;

