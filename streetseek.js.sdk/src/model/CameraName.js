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
 * The CameraName model module.
 * @module model/CameraName
 * @version 1.0.0
 */
class CameraName {
    /**
     * Constructs a new <code>CameraName</code>.
     * A name for a given camera.
     * @alias module:model/CameraName
     * @param cameraName {String} 
     */
    constructor(cameraName) { 
        
        CameraName.initialize(this, cameraName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cameraName) { 
        obj['cameraName'] = cameraName;
    }

    /**
     * Constructs a <code>CameraName</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CameraName} obj Optional instance to populate.
     * @return {module:model/CameraName} The populated <code>CameraName</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CameraName();

            if (data.hasOwnProperty('cameraName')) {
                obj['cameraName'] = ApiClient.convertToType(data['cameraName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} cameraName
 */
CameraName.prototype['cameraName'] = undefined;






export default CameraName;

