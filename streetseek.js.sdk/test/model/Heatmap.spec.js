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
    instance = new StreetseekServer.Heatmap();
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

  describe('Heatmap', function() {
    it('should create an instance of Heatmap', function() {
      // uncomment below and update the code to test Heatmap
      //var instane = new StreetseekServer.Heatmap();
      //expect(instance).to.be.a(StreetseekServer.Heatmap);
    });

    it('should have the property mapMatrix (base name: "mapMatrix")', function() {
      // uncomment below and update the code to test the property mapMatrix
      //var instane = new StreetseekServer.Heatmap();
      //expect(instance).to.be();
    });

  });

}));
