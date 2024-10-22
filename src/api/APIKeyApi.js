
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
    define(['ApiClient', 'model/DefaultUsageResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DefaultUsageResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.OriginStamp) {
      root.OriginStamp = {};
    }
    root.OriginStamp.APIKeyApi = factory(root.OriginStamp.ApiClient, root.OriginStamp.DefaultUsageResponse);
  }
}(this, function(ApiClient, DefaultUsageResponse) {
  'use strict';

  /**
   * APIKey service.
   * @module api/APIKeyApi
   * @version 3.0
   */

  /**
   * Constructs a new APIKeyApi. 
   * @alias module:api/APIKeyApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getApiKeyUsage operation.
     * @callback module:api/APIKeyApi~getApiKeyUsageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DefaultUsageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Usage
     * With this interface you can receive the current usage of your API key. The usage statistic refers to the associated account.
     * @param {String} authorization A valid API key is essential for authorization to handle the request.
     * @param {module:api/APIKeyApi~getApiKeyUsageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DefaultUsageResponse}
     */
    this.getApiKeyUsage = function(authorization, callback) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling getApiKeyUsage");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = ['API Key Authorization'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = DefaultUsageResponse;

      return this.apiClient.callApi(
        '/v3/api_key/usage', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
