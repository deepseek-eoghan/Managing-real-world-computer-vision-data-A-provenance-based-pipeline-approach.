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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.StreetseekServer);
  }
}(this, function(expect, StreetseekServer) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new StreetseekServer.CameraInsightsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CameraInsightsApi', function() {
    describe('cameraInsightsPersonCountDateByHourByCameraIdCameraIdGet', function() {
      it('should call cameraInsightsPersonCountDateByHourByCameraIdCameraIdGet successfully', function(done) {
        //uncomment below and update the code to test cameraInsightsPersonCountDateByHourByCameraIdCameraIdGet
        //instance.cameraInsightsPersonCountDateByHourByCameraIdCameraIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cameraInsightsPersonCountDateMinuteIntervalIntervalByCameraIdCameraIdGet', function() {
      it('should call cameraInsightsPersonCountDateMinuteIntervalIntervalByCameraIdCameraIdGet successfully', function(done) {
        //uncomment below and update the code to test cameraInsightsPersonCountDateMinuteIntervalIntervalByCameraIdCameraIdGet
        //instance.cameraInsightsPersonCountDateMinuteIntervalIntervalByCameraIdCameraIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cameraInsightsPersonCountTotalForDayDateByCameraIdCameraIdGet', function() {
      it('should call cameraInsightsPersonCountTotalForDayDateByCameraIdCameraIdGet successfully', function(done) {
        //uncomment below and update the code to test cameraInsightsPersonCountTotalForDayDateByCameraIdCameraIdGet
        //instance.cameraInsightsPersonCountTotalForDayDateByCameraIdCameraIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cameraInsightsPersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet', function() {
      it('should call cameraInsightsPersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet successfully', function(done) {
        //uncomment below and update the code to test cameraInsightsPersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet
        //instance.cameraInsightsPersonCountTotalPerDayBetweenDatesStartStartDateEndEndDateByCameraIdCameraIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cameraInsightsSocialDistancingAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet', function() {
      it('should call cameraInsightsSocialDistancingAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet successfully', function(done) {
        //uncomment below and update the code to test cameraInsightsSocialDistancingAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet
        //instance.cameraInsightsSocialDistancingAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cameraInsightsSocialDistancingAverageTotalForDayDateByCameraIdCameraIdGet', function() {
      it('should call cameraInsightsSocialDistancingAverageTotalForDayDateByCameraIdCameraIdGet successfully', function(done) {
        //uncomment below and update the code to test cameraInsightsSocialDistancingAverageTotalForDayDateByCameraIdCameraIdGet
        //instance.cameraInsightsSocialDistancingAverageTotalForDayDateByCameraIdCameraIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cameraInsightsTimeSpentAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet', function() {
      it('should call cameraInsightsTimeSpentAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet successfully', function(done) {
        //uncomment below and update the code to test cameraInsightsTimeSpentAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet
        //instance.cameraInsightsTimeSpentAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cameraInsightsTimeSpentAverageTotalForDayDateByCameraIdCameraIdGet', function() {
      it('should call cameraInsightsTimeSpentAverageTotalForDayDateByCameraIdCameraIdGet successfully', function(done) {
        //uncomment below and update the code to test cameraInsightsTimeSpentAverageTotalForDayDateByCameraIdCameraIdGet
        //instance.cameraInsightsTimeSpentAverageTotalForDayDateByCameraIdCameraIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cameraInsightsUploadInsightPost', function() {
      it('should call cameraInsightsUploadInsightPost successfully', function(done) {
        //uncomment below and update the code to test cameraInsightsUploadInsightPost
        //instance.cameraInsightsUploadInsightPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cameraInsightsWalkingPaceAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet', function() {
      it('should call cameraInsightsWalkingPaceAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet successfully', function(done) {
        //uncomment below and update the code to test cameraInsightsWalkingPaceAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet
        //instance.cameraInsightsWalkingPaceAverageDateMinuteIntervalIntervalByCameraIdCameraIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cameraInsightsWalkingPaceAverageTotalForDayDateByCameraIdCameraIdGet', function() {
      it('should call cameraInsightsWalkingPaceAverageTotalForDayDateByCameraIdCameraIdGet successfully', function(done) {
        //uncomment below and update the code to test cameraInsightsWalkingPaceAverageTotalForDayDateByCameraIdCameraIdGet
        //instance.cameraInsightsWalkingPaceAverageTotalForDayDateByCameraIdCameraIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
