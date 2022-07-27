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
    instance = new StreetseekServer.InsightsGeneratorConfig();
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

  describe('InsightsGeneratorConfig', function() {
    it('should create an instance of InsightsGeneratorConfig', function() {
      // uncomment below and update the code to test InsightsGeneratorConfig
      //var instane = new StreetseekServer.InsightsGeneratorConfig();
      //expect(instance).to.be.a(StreetseekServer.InsightsGeneratorConfig);
    });

    it('should have the property cameraId (base name: "cameraId")', function() {
      // uncomment below and update the code to test the property cameraId
      //var instane = new StreetseekServer.InsightsGeneratorConfig();
      //expect(instance).to.be();
    });

    it('should have the property streamName (base name: "streamName")', function() {
      // uncomment below and update the code to test the property streamName
      //var instane = new StreetseekServer.InsightsGeneratorConfig();
      //expect(instance).to.be();
    });

    it('should have the property resolutionWidth (base name: "resolutionWidth")', function() {
      // uncomment below and update the code to test the property resolutionWidth
      //var instane = new StreetseekServer.InsightsGeneratorConfig();
      //expect(instance).to.be();
    });

    it('should have the property resolutionHeight (base name: "resolutionHeight")', function() {
      // uncomment below and update the code to test the property resolutionHeight
      //var instane = new StreetseekServer.InsightsGeneratorConfig();
      //expect(instance).to.be();
    });

    it('should have the property cornerMaskX1 (base name: "cornerMaskX1")', function() {
      // uncomment below and update the code to test the property cornerMaskX1
      //var instane = new StreetseekServer.InsightsGeneratorConfig();
      //expect(instance).to.be();
    });

    it('should have the property cornerMaskY1 (base name: "cornerMaskY1")', function() {
      // uncomment below and update the code to test the property cornerMaskY1
      //var instane = new StreetseekServer.InsightsGeneratorConfig();
      //expect(instance).to.be();
    });

    it('should have the property cornerMaskX2 (base name: "cornerMaskX2")', function() {
      // uncomment below and update the code to test the property cornerMaskX2
      //var instane = new StreetseekServer.InsightsGeneratorConfig();
      //expect(instance).to.be();
    });

    it('should have the property cornerMaskY2 (base name: "cornerMaskY2")', function() {
      // uncomment below and update the code to test the property cornerMaskY2
      //var instane = new StreetseekServer.InsightsGeneratorConfig();
      //expect(instance).to.be();
    });

    it('should have the property cornerMaskX3 (base name: "cornerMaskX3")', function() {
      // uncomment below and update the code to test the property cornerMaskX3
      //var instane = new StreetseekServer.InsightsGeneratorConfig();
      //expect(instance).to.be();
    });

    it('should have the property cornerMaskY3 (base name: "cornerMaskY3")', function() {
      // uncomment below and update the code to test the property cornerMaskY3
      //var instane = new StreetseekServer.InsightsGeneratorConfig();
      //expect(instance).to.be();
    });

    it('should have the property cornerMaskX4 (base name: "cornerMaskX4")', function() {
      // uncomment below and update the code to test the property cornerMaskX4
      //var instane = new StreetseekServer.InsightsGeneratorConfig();
      //expect(instance).to.be();
    });

    it('should have the property cornerMaskY4 (base name: "cornerMaskY4")', function() {
      // uncomment below and update the code to test the property cornerMaskY4
      //var instane = new StreetseekServer.InsightsGeneratorConfig();
      //expect(instance).to.be();
    });

    it('should have the property minPointsInPath (base name: "minPointsInPath")', function() {
      // uncomment below and update the code to test the property minPointsInPath
      //var instane = new StreetseekServer.InsightsGeneratorConfig();
      //expect(instance).to.be();
    });

    it('should have the property writePathsToDynamo (base name: "writePathsToDynamo")', function() {
      // uncomment below and update the code to test the property writePathsToDynamo
      //var instane = new StreetseekServer.InsightsGeneratorConfig();
      //expect(instance).to.be();
    });

    it('should have the property roundPlaces (base name: "roundPlaces")', function() {
      // uncomment below and update the code to test the property roundPlaces
      //var instane = new StreetseekServer.InsightsGeneratorConfig();
      //expect(instance).to.be();
    });

    it('should have the property maxSnakeLen (base name: "maxSnakeLen")', function() {
      // uncomment below and update the code to test the property maxSnakeLen
      //var instane = new StreetseekServer.InsightsGeneratorConfig();
      //expect(instance).to.be();
    });

    it('should have the property heatmapColumns (base name: "heatmapColumns")', function() {
      // uncomment below and update the code to test the property heatmapColumns
      //var instane = new StreetseekServer.InsightsGeneratorConfig();
      //expect(instance).to.be();
    });

    it('should have the property countLineX1 (base name: "countLineX1")', function() {
      // uncomment below and update the code to test the property countLineX1
      //var instane = new StreetseekServer.InsightsGeneratorConfig();
      //expect(instance).to.be();
    });

    it('should have the property countLineY1 (base name: "countLineY1")', function() {
      // uncomment below and update the code to test the property countLineY1
      //var instane = new StreetseekServer.InsightsGeneratorConfig();
      //expect(instance).to.be();
    });

    it('should have the property countLineX2 (base name: "countLineX2")', function() {
      // uncomment below and update the code to test the property countLineX2
      //var instane = new StreetseekServer.InsightsGeneratorConfig();
      //expect(instance).to.be();
    });

    it('should have the property countLineY2 (base name: "countLineY2")', function() {
      // uncomment below and update the code to test the property countLineY2
      //var instane = new StreetseekServer.InsightsGeneratorConfig();
      //expect(instance).to.be();
    });

    it('should have the property transformationShapeWidth (base name: "transformationShapeWidth")', function() {
      // uncomment below and update the code to test the property transformationShapeWidth
      //var instane = new StreetseekServer.InsightsGeneratorConfig();
      //expect(instance).to.be();
    });

    it('should have the property transformationShapeHeight (base name: "transformationShapeHeight")', function() {
      // uncomment below and update the code to test the property transformationShapeHeight
      //var instane = new StreetseekServer.InsightsGeneratorConfig();
      //expect(instance).to.be();
    });

    it('should have the property cameraRoiLength (base name: "cameraRoiLength")', function() {
      // uncomment below and update the code to test the property cameraRoiLength
      //var instane = new StreetseekServer.InsightsGeneratorConfig();
      //expect(instance).to.be();
    });

    it('should have the property roiGroundCoverage (base name: "roiGroundCoverage")', function() {
      // uncomment below and update the code to test the property roiGroundCoverage
      //var instane = new StreetseekServer.InsightsGeneratorConfig();
      //expect(instance).to.be();
    });

    it('should have the property speedDivider (base name: "speedDivider")', function() {
      // uncomment below and update the code to test the property speedDivider
      //var instane = new StreetseekServer.InsightsGeneratorConfig();
      //expect(instance).to.be();
    });

    it('should have the property socialDistanceGuideline (base name: "socialDistanceGuideline")', function() {
      // uncomment below and update the code to test the property socialDistanceGuideline
      //var instane = new StreetseekServer.InsightsGeneratorConfig();
      //expect(instance).to.be();
    });

    it('should have the property clearPathsFrameInterval (base name: "clearPathsFrameInterval")', function() {
      // uncomment below and update the code to test the property clearPathsFrameInterval
      //var instane = new StreetseekServer.InsightsGeneratorConfig();
      //expect(instance).to.be();
    });

  });

}));
