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


import ApiClient from './ApiClient';
import Camera from './model/Camera';
import CameraAppConfig from './model/CameraAppConfig';
import CameraBody from './model/CameraBody';
import CameraBuildConfig from './model/CameraBuildConfig';
import CameraInsights from './model/CameraInsights';
import CameraName from './model/CameraName';
import CameraPersonCount from './model/CameraPersonCount';
import CameraSocialDistAvg from './model/CameraSocialDistAvg';
import CameraTimeSpent from './model/CameraTimeSpent';
import CameraWalkingPace from './model/CameraWalkingPace';
import Heatmap from './model/Heatmap';
import InlineObject from './model/InlineObject';
import InsightsGeneratorConfig from './model/InsightsGeneratorConfig';
import TotalCameraDensity from './model/TotalCameraDensity';
import TotalCameraPersonCount from './model/TotalCameraPersonCount';
import TotalCameraSocialDistanceAvg from './model/TotalCameraSocialDistanceAvg';
import TotalCameraTimeSpent from './model/TotalCameraTimeSpent';
import TotalCameraWalkingPace from './model/TotalCameraWalkingPace';
import CameraConfigurationApi from './api/CameraConfigurationApi';
import CameraInsightGeneratorApi from './api/CameraInsightGeneratorApi';
import CameraInsightsApi from './api/CameraInsightsApi';
import SpecificationApi from './api/SpecificationApi';


/**
* streetseek_server.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var StreetseekServer = require('index'); // See note below*.
* var xxxSvc = new StreetseekServer.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new StreetseekServer.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new StreetseekServer.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new StreetseekServer.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Camera model constructor.
     * @property {module:model/Camera}
     */
    Camera,

    /**
     * The CameraAppConfig model constructor.
     * @property {module:model/CameraAppConfig}
     */
    CameraAppConfig,

    /**
     * The CameraBody model constructor.
     * @property {module:model/CameraBody}
     */
    CameraBody,

    /**
     * The CameraBuildConfig model constructor.
     * @property {module:model/CameraBuildConfig}
     */
    CameraBuildConfig,

    /**
     * The CameraInsights model constructor.
     * @property {module:model/CameraInsights}
     */
    CameraInsights,

    /**
     * The CameraName model constructor.
     * @property {module:model/CameraName}
     */
    CameraName,

    /**
     * The CameraPersonCount model constructor.
     * @property {module:model/CameraPersonCount}
     */
    CameraPersonCount,

    /**
     * The CameraSocialDistAvg model constructor.
     * @property {module:model/CameraSocialDistAvg}
     */
    CameraSocialDistAvg,

    /**
     * The CameraTimeSpent model constructor.
     * @property {module:model/CameraTimeSpent}
     */
    CameraTimeSpent,

    /**
     * The CameraWalkingPace model constructor.
     * @property {module:model/CameraWalkingPace}
     */
    CameraWalkingPace,

    /**
     * The Heatmap model constructor.
     * @property {module:model/Heatmap}
     */
    Heatmap,

    /**
     * The InlineObject model constructor.
     * @property {module:model/InlineObject}
     */
    InlineObject,

    /**
     * The InsightsGeneratorConfig model constructor.
     * @property {module:model/InsightsGeneratorConfig}
     */
    InsightsGeneratorConfig,

    /**
     * The TotalCameraDensity model constructor.
     * @property {module:model/TotalCameraDensity}
     */
    TotalCameraDensity,

    /**
     * The TotalCameraPersonCount model constructor.
     * @property {module:model/TotalCameraPersonCount}
     */
    TotalCameraPersonCount,

    /**
     * The TotalCameraSocialDistanceAvg model constructor.
     * @property {module:model/TotalCameraSocialDistanceAvg}
     */
    TotalCameraSocialDistanceAvg,

    /**
     * The TotalCameraTimeSpent model constructor.
     * @property {module:model/TotalCameraTimeSpent}
     */
    TotalCameraTimeSpent,

    /**
     * The TotalCameraWalkingPace model constructor.
     * @property {module:model/TotalCameraWalkingPace}
     */
    TotalCameraWalkingPace,

    /**
    * The CameraConfigurationApi service constructor.
    * @property {module:api/CameraConfigurationApi}
    */
    CameraConfigurationApi,

    /**
    * The CameraInsightGeneratorApi service constructor.
    * @property {module:api/CameraInsightGeneratorApi}
    */
    CameraInsightGeneratorApi,

    /**
    * The CameraInsightsApi service constructor.
    * @property {module:api/CameraInsightsApi}
    */
    CameraInsightsApi,

    /**
    * The SpecificationApi service constructor.
    * @property {module:api/SpecificationApi}
    */
    SpecificationApi
};