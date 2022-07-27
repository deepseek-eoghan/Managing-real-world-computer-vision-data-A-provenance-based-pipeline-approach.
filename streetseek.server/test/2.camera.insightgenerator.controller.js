import chai from 'chai';
import request from 'supertest';
import Server from '../server';

const expect = chai.expect;

describe('Camera Configuration', () => {
  it('should get an insight generator config based on a stream name', () =>
    request(Server)
      .get(
        '/api/v1/camera-insight-generator/config/by/stream-name/bertram_gilfoyle'
      )
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('object')
          .that.has.all.keys(
            'cameraId',
            'streamName',
            'resolutionWidth',
            'resolutionHeight',
            'cornerMaskX1',
            'cornerMaskY1',
            'cornerMaskX2',
            'cornerMaskY2',
            'cornerMaskX3',
            'cornerMaskY3',
            'cornerMaskX4',
            'cornerMaskY4',
            'minPointsInPath',
            'writePathsToDynamo',
            'roundPlaces',
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
