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
    instance = new StreetseekServer.CameraCapture();
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

  describe('CameraCapture', function() {
    it('should create an instance of CameraCapture', function() {
      // uncomment below and update the code to test CameraCapture
      //var instane = new StreetseekServer.CameraCapture();
      //expect(instance).to.be.a(StreetseekServer.CameraCapture);
    });

    it('should have the property cameraId (base name: "cameraId")', function() {
      // uncomment below and update the code to test the property cameraId
      //var instane = new StreetseekServer.CameraCapture();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new StreetseekServer.CameraCapture();
      //expect(instance).to.be();
    });

    it('should have the property personCount (base name: "personCount")', function() {
      // uncomment below and update the code to test the property personCount
      //var instane = new StreetseekServer.CameraCapture();
      //expect(instance).to.be();
    });

    it('should have the property density (base name: "density")', function() {
      // uncomment below and update the code to test the property density
      //var instane = new StreetseekServer.CameraCapture();
      //expect(instance).to.be();
    });

  });

}));
