import CameraConfigurationService from '../../services/CameraConfiguration/camera.configuration.service';

export class Controller {
  setupCamera(req, res) {
    CameraConfigurationService.storeCameraData(req.body)
      .then(() => res.status(200).send('Camera setup correctly'))
      .catch(error => res.status(500).send(`Camera setup failed. \n ${error}`));
  }

  setCameraBuildConfigs(req, res) {
    CameraConfigurationService.storeBuildConfigs(req.body)
      .then(() =>
        res.status(200).send('Camera build configuration set correctly')
      )
      .catch(() => res.status(500).send('Camera build configuration failed'));
  }

  setCameraAppConfigs(req, res) {
    CameraConfigurationService.storeAppConfigs(req.body)
      .then(() =>
        res.status(200).send('Camera app configuration set correctly')
      )
      .catch(() => res.status(500).send('Camera app configurations failed'));
  }

  getAllCameraDetails(req, res) {
    CameraConfigurationService.retrieveAllCameraConfigurations().then(r =>
      res.json(r)
    );
  }

  getCameraNameById(req, res) {
    CameraConfigurationService.retrieveCameraNameById(
      req.params.cameraId
    ).then(r => res.json(r));
  }

  getCameraConfigurationById(req, res) {
    CameraConfigurationService.retrieveSingularCameraDetails(
      req.params.cameraId
    ).then(r => res.json(r));
  }
}

export default new Controller();
