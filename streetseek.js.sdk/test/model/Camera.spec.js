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
    instance = new StreetseekServer.Camera();
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

  describe('Camera', function() {
    it('should create an instance of Camera', function() {
      // uncomment below and update the code to test Camera
      //var instane = new StreetseekServer.Camera();
      //expect(instance).to.be.a(StreetseekServer.Camera);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new StreetseekServer.Camera();
      //expect(instance).to.be();
    });

    it('should have the property cameraType (base name: "cameraType")', function() {
      // uncomment below and update the code to test the property cameraType
      //var instane = new StreetseekServer.Camera();
      //expect(instance).to.be();
    });

    it('should have the property lat (base name: "lat")', function() {
      // uncomment below and update the code to test the property lat
      //var instane = new StreetseekServer.Camera();
      //expect(instance).to.be();
    });

    it('should have the property lng (base name: "lng")', function() {
      // uncomment below and update the code to test the property lng
      //var instane = new StreetseekServer.Camera();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new StreetseekServer.Camera();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new StreetseekServer.Camera();
      //expect(instance).to.be();
    });

    it('should have the property height (base name: "height")', function() {
      // uncomment below and update the code to test the property height
      //var instane = new StreetseekServer.Camera();
      //expect(instance).to.be();
    });

    it('should have the property angle (base name: "angle")', function() {
      // uncomment below and update the code to test the property angle
      //var instane = new StreetseekServer.Camera();
      //expect(instance).to.be();
    });

  });

}));
