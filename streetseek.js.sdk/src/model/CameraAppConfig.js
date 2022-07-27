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
 * The CameraAppConfig model module.
 * @module model/CameraAppConfig
 * @version 1.0.0
 */
class CameraAppConfig {
    /**
     * Constructs a new <code>CameraAppConfig</code>.
     * An application configuration associated with a cameras software settings.
     * @alias module:model/CameraAppConfig
     * @param cameraId {Number} 
     * @param created {String} 
     * @param cornerMaskX1 {Number} 
     * @param cornerMaskY1 {Number} 
     * @param cornerMaskX2 {Number} 
     * @param cornerMaskY2 {Number} 
     * @param cornerMaskX3 {Number} 
     * @param cornerMaskY3 {Number} 
     * @param cornerMaskX4 {Number} 
     * @param cornerMaskY4 {Number} 
     * @param maxSnakeLen {Number} 
     * @param heatmapColumns {Number} 
     * @param countLineX1 {Number} 
     * @param countLineY1 {Number} 
     * @param countLineX2 {Number} 
     * @param countLineY2 {Number} 
     * @param transformationShapeWidth {Number} 
     * @param transformationShapeHeight {Number} 
     * @param cameraRoiLength {Number} 
     * @param roiGroundCoverage {Number} 
     * @param speedDivider {Number} 
     * @param socialDistanceGuideline {Number} 
     * @param clearPathsFrameInterval {Number} 
     */
    constructor(cameraId, created, cornerMaskX1, cornerMaskY1, cornerMaskX2, cornerMaskY2, cornerMaskX3, cornerMaskY3, cornerMaskX4, cornerMaskY4, maxSnakeLen, heatmapColumns, countLineX1, countLineY1, countLineX2, countLineY2, transformationShapeWidth, transformationShapeHeight, cameraRoiLength, roiGroundCoverage, speedDivider, socialDistanceGuideline, clearPathsFrameInterval) { 
        
        CameraAppConfig.initialize(this, cameraId, created, cornerMaskX1, cornerMaskY1, cornerMaskX2, cornerMaskY2, cornerMaskX3, cornerMaskY3, cornerMaskX4, cornerMaskY4, maxSnakeLen, heatmapColumns, countLineX1, countLineY1, countLineX2, countLineY2, transformationShapeWidth, transformationShapeHeight, cameraRoiLength, roiGroundCoverage, speedDivider, socialDistanceGuideline, clearPathsFrameInterval);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cameraId, created, cornerMaskX1, cornerMaskY1, cornerMaskX2, cornerMaskY2, cornerMaskX3, cornerMaskY3, cornerMaskX4, cornerMaskY4, maxSnakeLen, heatmapColumns, countLineX1, countLineY1, countLineX2, countLineY2, transformationShapeWidth, transformationShapeHeight, cameraRoiLength, roiGroundCoverage, speedDivider, socialDistanceGuideline, clearPathsFrameInterval) { 
        obj['cameraId'] = cameraId;
        obj['created'] = created;
        obj['cornerMaskX1'] = cornerMaskX1;
        obj['cornerMaskY1'] = cornerMaskY1;
        obj['cornerMaskX2'] = cornerMaskX2;
        obj['cornerMaskY2'] = cornerMaskY2;
        obj['cornerMaskX3'] = cornerMaskX3;
        obj['cornerMaskY3'] = cornerMaskY3;
        obj['cornerMaskX4'] = cornerMaskX4;
        obj['cornerMaskY4'] = cornerMaskY4;
        obj['maxSnakeLen'] = maxSnakeLen;
        obj['heatmapColumns'] = heatmapColumns;
        obj['countLineX1'] = countLineX1;
        obj['countLineY1'] = countLineY1;
        obj['countLineX2'] = countLineX2;
        obj['countLineY2'] = countLineY2;
        obj['transformationShapeWidth'] = transformationShapeWidth;
        obj['transformationShapeHeight'] = transformationShapeHeight;
        obj['cameraRoiLength'] = cameraRoiLength;
        obj['roiGroundCoverage'] = roiGroundCoverage;
        obj['speedDivider'] = speedDivider;
        obj['socialDistanceGuideline'] = socialDistanceGuideline;
        obj['clearPathsFrameInterval'] = clearPathsFrameInterval;
    }

    /**
     * Constructs a <code>CameraAppConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CameraAppConfig} obj Optional instance to populate.
     * @return {module:model/CameraAppConfig} The populated <code>CameraAppConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CameraAppConfig();

            if (data.hasOwnProperty('cameraId')) {
                obj['cameraId'] = ApiClient.convertToType(data['cameraId'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'String');
            }
            if (data.hasOwnProperty('cornerMaskX1')) {
                obj['cornerMaskX1'] = ApiClient.convertToType(data['cornerMaskX1'], 'Number');
            }
            if (data.hasOwnProperty('cornerMaskY1')) {
                obj['cornerMaskY1'] = ApiClient.convertToType(data['cornerMaskY1'], 'Number');
            }
            if (data.hasOwnProperty('cornerMaskX2')) {
                obj['cornerMaskX2'] = ApiClient.convertToType(data['cornerMaskX2'], 'Number');
            }
            if (data.hasOwnProperty('cornerMaskY2')) {
                obj['cornerMaskY2'] = ApiClient.convertToType(data['cornerMaskY2'], 'Number');
            }
            if (data.hasOwnProperty('cornerMaskX3')) {
                obj['cornerMaskX3'] = ApiClient.convertToType(data['cornerMaskX3'], 'Number');
            }
            if (data.hasOwnProperty('cornerMaskY3')) {
                obj['cornerMaskY3'] = ApiClient.convertToType(data['cornerMaskY3'], 'Number');
            }
            if (data.hasOwnProperty('cornerMaskX4')) {
                obj['cornerMaskX4'] = ApiClient.convertToType(data['cornerMaskX4'], 'Number');
            }
            if (data.hasOwnProperty('cornerMaskY4')) {
                obj['cornerMaskY4'] = ApiClient.convertToType(data['cornerMaskY4'], 'Number');
            }
            if (data.hasOwnProperty('maxSnakeLen')) {
                obj['maxSnakeLen'] = ApiClient.convertToType(data['maxSnakeLen'], 'Number');
            }
            if (data.hasOwnProperty('heatmapColumns')) {
                obj['heatmapColumns'] = ApiClient.convertToType(data['heatmapColumns'], 'Number');
            }
            if (data.hasOwnProperty('countLineX1')) {
                obj['countLineX1'] = ApiClient.convertToType(data['countLineX1'], 'Number');
            }
            if (data.hasOwnProperty('countLineY1')) {
                obj['countLineY1'] = ApiClient.convertToType(data['countLineY1'], 'Number');
            }
            if (data.hasOwnProperty('countLineX2')) {
                obj['countLineX2'] = ApiClient.convertToType(data['countLineX2'], 'Number');
            }
            if (data.hasOwnProperty('countLineY2')) {
                obj['countLineY2'] = ApiClient.convertToType(data['countLineY2'], 'Number');
            }
            if (data.hasOwnProperty('transformationShapeWidth')) {
                obj['transformationShapeWidth'] = ApiClient.convertToType(data['transformationShapeWidth'], 'Number');
            }
            if (data.hasOwnProperty('transformationShapeHeight')) {
                obj['transformationShapeHeight'] = ApiClient.convertToType(data['transformationShapeHeight'], 'Number');
            }
            if (data.hasOwnProperty('cameraRoiLength')) {
                obj['cameraRoiLength'] = ApiClient.convertToType(data['cameraRoiLength'], 'Number');
            }
            if (data.hasOwnProperty('roiGroundCoverage')) {
                obj['roiGroundCoverage'] = ApiClient.convertToType(data['roiGroundCoverage'], 'Number');
            }
            if (data.hasOwnProperty('speedDivider')) {
                obj['speedDivider'] = ApiClient.convertToType(data['speedDivider'], 'Number');
            }
            if (data.hasOwnProperty('socialDistanceGuideline')) {
                obj['socialDistanceGuideline'] = ApiClient.convertToType(data['socialDistanceGuideline'], 'Number');
            }
            if (data.hasOwnProperty('clearPathsFrameInterval')) {
                obj['clearPathsFrameInterval'] = ApiClient.convertToType(data['clearPathsFrameInterval'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} cameraId
 */
CameraAppConfig.prototype['cameraId'] = undefined;

/**
 * @member {String} created
 */
CameraAppConfig.prototype['created'] = undefined;

/**
 * @member {Number} cornerMaskX1
 */
CameraAppConfig.prototype['cornerMaskX1'] = undefined;

/**
 * @member {Number} cornerMaskY1
 */
CameraAppConfig.prototype['cornerMaskY1'] = undefined;

/**
 * @member {Number} cornerMaskX2
 */
CameraAppConfig.prototype['cornerMaskX2'] = undefined;

/**
 * @member {Number} cornerMaskY2
 */
CameraAppConfig.prototype['cornerMaskY2'] = undefined;

/**
 * @member {Number} cornerMaskX3
 */
CameraAppConfig.prototype['cornerMaskX3'] = undefined;

/**
 * @member {Number} cornerMaskY3
 */
CameraAppConfig.prototype['cornerMaskY3'] = undefined;

/**
 * @member {Number} cornerMaskX4
 */
CameraAppConfig.prototype['cornerMaskX4'] = undefined;

/**
 * @member {Number} cornerMaskY4
 */
CameraAppConfig.prototype['cornerMaskY4'] = undefined;

/**
 * @member {Number} maxSnakeLen
 */
CameraAppConfig.prototype['maxSnakeLen'] = undefined;

/**
 * @member {Number} heatmapColumns
 */
CameraAppConfig.prototype['heatmapColumns'] = undefined;

/**
 * @member {Number} countLineX1
 */
CameraAppConfig.prototype['countLineX1'] = undefined;

/**
 * @member {Number} countLineY1
 */
CameraAppConfig.prototype['countLineY1'] = undefined;

/**
 * @member {Number} countLineX2
 */
CameraAppConfig.prototype['countLineX2'] = undefined;

/**
 * @member {Number} countLineY2
 */
CameraAppConfig.prototype['countLineY2'] = undefined;

/**
 * @member {Number} transformationShapeWidth
 */
CameraAppConfig.prototype['transformationShapeWidth'] = undefined;

/**
 * @member {Number} transformationShapeHeight
 */
CameraAppConfig.prototype['transformationShapeHeight'] = undefined;

/**
 * @member {Number} cameraRoiLength
 */
CameraAppConfig.prototype['cameraRoiLength'] = undefined;

/**
 * @member {Number} roiGroundCoverage
 */
CameraAppConfig.prototype['roiGroundCoverage'] = undefined;

/**
 * @member {Number} speedDivider
 */
CameraAppConfig.prototype['speedDivider'] = undefined;

/**
 * @member {Number} socialDistanceGuideline
 */
CameraAppConfig.prototype['socialDistanceGuideline'] = undefined;

/**
 * @member {Number} clearPathsFrameInterval
 */
CameraAppConfig.prototype['clearPathsFrameInterval'] = undefined;






export default CameraAppConfig;

