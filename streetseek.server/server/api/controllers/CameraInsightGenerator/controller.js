import CameraInsightGeneratorService from '../../services/CameraInsightGenerator/camera.insightgenerator.service';

export class Controller {
  getInsightGeneratorConfiguration(req, res) {
    CameraInsightGeneratorService.retrieveInsightGeneratorConfig(
      req.params.streamName
    ).then(r => res.json(r));
  }
}

export default new Controller();
