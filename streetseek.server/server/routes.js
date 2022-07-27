import CameraConfigurationRouter from './api/controllers/CameraConfiguration/router';
import CameraInsightsRouter from './api/controllers/CameraInsights/router';
import CameraInsightGeneratorRouter from './api/controllers/CameraInsightGenerator/router';

export default function routes(app) {
  app.use('/api/v1/camera-configuration', CameraConfigurationRouter);
  app.use('/api/v1/camera-insights', CameraInsightsRouter);
  app.use('/api/v1/camera-insight-generator', CameraInsightGeneratorRouter);
}
