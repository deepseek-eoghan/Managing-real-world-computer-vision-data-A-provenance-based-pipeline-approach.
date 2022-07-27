import CameraInsightsService from '../../services/CameraInsights/camera.insights.service';

export class Controller {
  createCapture(req, res) {
    CameraInsightsService.storeCameraInsight(req.body)
      .then(() => res.status(200).send('Insight written'))
      .catch(() => res.status(500).send('Insight failed to write'));
  }

  getPersonCountHourlyByDay(req, res) {
    CameraInsightsService.retrievePersonCountForDayHourly(
      req.params.date,
      req.params.cameraId
    ).then(r => res.json(r));
  }

  getPersonCountByDayOnMinuteInterval(req, res) {
    CameraInsightsService.retrievePersonCountForDayOnInterval(
      req.params.date,
      req.params.interval,
      req.params.cameraId
    ).then(r => res.json(r));
  }

  getTotalPersonCountForDay(req, res) {
    CameraInsightsService.retrieveTotalPersonCountForDay(
      req.params.date,
      req.params.cameraId
    ).then(r => res.json(r));
  }

  getTotalPersonForEachDayInDateRange(req, res) {
    CameraInsightsService.generateTotalPersonCountForEachDayBetweenDates(
      req.params.startDate,
      req.params.endDate,
      req.params.cameraId
    ).then(r => res.json(r));
  }

  getSocialDistanceAverageForEachDayInDateRange(req, res) {
    CameraInsightsService.generateSocialDistanceAverageForEachDayBetweenDates(
      req.params.startDate,
      req.params.endDate,
      req.params.cameraId
    ).then(r => res.json(r));
  }

  getSocialDistanceAverageByDayOnMinuteInterval(req, res) {
    CameraInsightsService.retrieveSocialDistanceAverageByDayOnMinuteInterval(
      req.params.date,
      req.params.interval,
      req.params.cameraId
    ).then(r => res.json(r));
  }

  getTotalSocialDistanceAverageForDay(req, res) {
    CameraInsightsService.retrieveSocialDistanceAverageForDay(
      req.params.date,
      req.params.cameraId
    ).then(r => res.json(r));
  }

  getWalkingPaceAverageByDayOnMinuteInterval(req, res) {
    CameraInsightsService.retrieveWalkingPaceAverageByDayOnMinuteInterval(
      req.params.date,
      req.params.interval,
      req.params.cameraId
    ).then(r => res.json(r));
  }

  getTotalWalkingPaceAverageForDay(req, res) {
    CameraInsightsService.retrieveWalkingPaceAverageForDay(
      req.params.date,
      req.params.cameraId
    ).then(r => res.json(r));
  }

  getTimeSpentByDayOnMinuteInterval(req, res) {
    CameraInsightsService.retrieveTimeSpentForDayOnInterval(
      req.params.date,
      req.params.interval,
      req.params.cameraId
    ).then(r => res.json(r));
  }

  getTotalTimeSpentForDay(req, res) {
    CameraInsightsService.retrieveTimeSpentAverageForDay(
      req.params.date,
      req.params.cameraId
    ).then(r => res.json(r));
  }

  getTotalHeatMapForDay(req, res) {
    CameraInsightsService.retrieveHeatMapForDay(
      req.params.date,
      req.params.cameraId
    ).then(r => res.json(r));
  }

  setMetricDailyAggregation(req, res) {
    CameraInsightsService.generateMetricDailyAggregation(
      req.body.date,
      req.body.cameraId
    )
      .then(() => res.status(200).send('Daily aggregations written'))
      .catch(error =>
        res.status(500).send(`Daily aggregations failed to write \n ${error}`)
      );
  }

  getTotalDensityForDay(req, res) {
    CameraInsightsService.retrieveDensityForDay(
      req.params.date,
      req.params.cameraId
    ).then(r => res.json(r));
  }

  getWalkingPaceAverageForEachDayInDateRange(req, res) {
    CameraInsightsService.generateWalkingPaceAverageForEachDayBetweenDates(
      req.params.startDate,
      req.params.endDate,
      req.params.cameraId
    ).then(r => res.json(r));
  }

  getTimeSpentAverageForEachDayInDateRange(req, res) {
    CameraInsightsService.generateTimeSpentAverageForEachDayBetweenDates(
      req.params.startDate,
      req.params.endDate,
      req.params.cameraId
    ).then(r => res.json(r));
  }

  getDensityAverageForEachDayInDateRange(req, res) {
    CameraInsightsService.generateDensityAverageForEachDayBetweenDates(
      req.params.startDate,
      req.params.endDate,
      req.params.cameraId
    ).then(r => res.json(r));
  }
}
export default new Controller();
