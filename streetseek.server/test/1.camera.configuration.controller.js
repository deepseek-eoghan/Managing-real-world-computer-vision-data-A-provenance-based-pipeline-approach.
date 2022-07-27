import chai from 'chai';
import request from 'supertest';
import Server from '../server';

const expect = chai.expect;

describe('Camera Configuration', () => {
  it('should create a new camera', () =>
    request(Server)
      .post('/api/v1/camera-configuration/setup-camera')
      .send({
        name: 'Bertram Gilfoyle',
        created: '2020-01-01 10:10:10',
        cameraType: 1,
        streamName: 'bertram_gilfoyle',
        status: 2,
      })
      .expect(200));

  it('should fail to create a new camera with a malformed post', () =>
    request(Server)
      .post('/api/v1/camera-configuration/setup-camera')
      .send({
        name: 12345,
        created: 'A malformed date string',
        cameraType: '1',
        streamName: 45,
        status: '2',
      })
      .expect(500));

  it('should create a build_config for the newly created camera', () =>
    request(Server)
      .post('/api/v1/camera-configuration/set-build-config')
      .send({
        cameraId: 1,
        lat: 52.6590258,
        lng: -8.6359593,
        height: 2.5,
        angle: 90,
      })
      .expect(200));

  it('should create fail to create a build_config for a non existent camera', () =>
    request(Server)
      .post('/api/v1/camera-configuration/set-build-config')
      .send({
        cameraId: 999,
        lat: 52.6590258,
        lng: -8.6359593,
        height: 2.5,
        angle: 90,
      })
      .expect(500));

  it('should create an app_config for the newly created camera', () =>
    request(Server)
      .post('/api/v1/camera-configuration/set-app-config')
      .send({
        cameraId: 1,
        created: '2020-01-01 10:10:10',
        cornerMaskX1: 0.01,
        cornerMaskY1: 0.02,
        cornerMaskX2: 0.03,
        cornerMaskY2: 0.04,
        cornerMaskX3: 0.05,
        cornerMaskY3: 0.06,
        cornerMaskX4: 0.07,
        cornerMaskY4: 0.08,
        minPointsInPath: 3,
        writePathsToDynamo: true,
        roundPlaces: 2,
        maxSnakeLen: 10,
        heatmapColumns: 25,
        countLineX1: 0.09,
        countLineY1: 0.1,
        countLineX2: 0.11,
        countLineY2: 0.12,
        transformationShapeWidth: 50,
        transformationShapeHeight: 40,
        cameraRoiLength: 20,
        roiGroundCoverage: 30.3,
        speedDivider: 5.5,
        socialDistanceGuideline: 40.4,
        clearPathsFrameInterval: 50,
      })
      .expect(200));

  it('should fail to create an app_config for a non-existent camera', () =>
    request(Server)
      .post('/api/v1/camera-configuration/set-app-config')
      .send({
        cameraId: 999,
        created: '2020-01-01 10:10:10',
        cornerMaskX1: 0.01,
        cornerMaskY1: 0.02,
        cornerMaskX2: 0.03,
        cornerMaskY2: 0.04,
        cornerMaskX3: 0.05,
        cornerMaskY3: 0.06,
        cornerMaskX4: 0.07,
        cornerMaskY4: 0.08,
        minPointsInPath: 3,
        writePathsToDynamo: true,
        roundPlaces: 2,
        maxSnakeLen: 10,
        heatmapColumns: 25,
        countLineX1: 0.09,
        countLineY1: 0.1,
        countLineX2: 0.11,
        countLineY2: 0.12,
        transformationShapeWidth: 50,
        transformationShapeHeight: 40,
        cameraRoiLength: 20,
        roiGroundCoverage: 30.3,
        speedDivider: 5.5,
        socialDistanceGuideline: 40.4,
        clearPathsFrameInterval: 50,
      })
      .expect(500));

  it('should get a cameras name by id', () =>
    request(Server)
      .get('/api/v1/camera-configuration/camera/name/by/id/1')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('cameraName', 'Bertram Gilfoyle');
      }));

  it('should get all camera configurations', () =>
    request(Server)
      .get('/api/v1/camera-configuration/cameras')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('array')
          .of.length(1);
      }));

  it('should get a singular cameras configuration by id', () =>
    request(Server)
      .get('/api/v1/camera-configuration/camera/1')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('object')
          .that.has.all.keys(
            'id',
            'name',
            'created',
            'model',
            'resolutionWidth',
            'resolutionHeight',
            'manufacturer',
            'status',
            'lat',
            'lng',
            'height',
            'angle',
            'cornerMaskX1',
            'cornerMaskY1',
            'cornerMaskX2',
            'cornerMaskY2',
            'cornerMaskX3',
            'cornerMaskY3',
            'cornerMaskX4',
            'cornerMaskY4',
            'maxSnakeLen',
            'heatmapColumns',
            'countLineX1',
            'countLineY1',
            'countLineX2',
            'countLineY2',
            'transformationShapeWidth',
            'transformationShapeHeight',
            'cameraRoiLength',
            'roiGroundCoverage',
            'speedDivider',
            'socialDistanceGuideline',
            'clearPathsFrameInterval'
          );
      }));
});
