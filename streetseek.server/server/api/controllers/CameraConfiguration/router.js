import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .post('/setup-camera', controller.setupCamera)
  .post('/set-build-config', controller.setCameraBuildConfigs)
  .post('/set-app-config', controller.setCameraAppConfigs)
  .get('/cameras', controller.getAllCameraDetails)
  .get('/camera/:cameraId', controller.getCameraConfigurationById)
  .get('/camera/name/by/id/:cameraId', controller.getCameraNameById);
