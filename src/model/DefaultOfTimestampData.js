
/*
 * OriginStamp Client
 *
 * OpenAPI spec version: 3.0
 * OriginStamp Documentation: https://docs.originstamp.com
 * Contact: mail@originstamp.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TimestampData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TimestampData'));
  } else {
    // Browser globals (root is window)
    if (!root.OriginStamp) {
      root.OriginStamp = {};
    }
    root.OriginStamp.DefaultOfTimestampData = factory(root.OriginStamp.ApiClient, root.OriginStamp.TimestampData);
  }
}(this, function(ApiClient, TimestampData) {
  'use strict';

  /**
   * The DefaultOfTimestampData model module.
   * @module model/DefaultOfTimestampData
   * @version 3.0
   */

  /**
   * Constructs a new <code>DefaultOfTimestampData</code>.
   * The default service response object uses error code and message to indicate errors. These errors are handled by the client.
   * @alias module:model/DefaultOfTimestampData
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DefaultOfTimestampData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DefaultOfTimestampData} obj Optional instance to populate.
   * @return {module:model/DefaultOfTimestampData} The populated <code>DefaultOfTimestampData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('data'))
        obj.data = TimestampData.constructFromObject(data['data']);
      if (data.hasOwnProperty('error_code'))
        obj.errorCode = ApiClient.convertToType(data['error_code'], 'Number');
      if (data.hasOwnProperty('error_message'))
        obj.errorMessage = ApiClient.convertToType(data['error_message'], 'String');
    }
    return obj;
  }

  /**
   * Generic response object which contains the response data, e.g. timestamp information.
   * @member {module:model/TimestampData} data
   */
  exports.prototype.data = undefined;

  /**
   * Contains the error of the request. If the error code is 0, everything is fine.
   * @member {Number} errorCode
   */
  exports.prototype.errorCode = undefined;

  /**
   * Contains the error message, that possibly occurred. If it is empty, everything is fine.
   * @member {String} errorMessage
   */
  exports.prototype.errorMessage = undefined;


  return exports;

}));
