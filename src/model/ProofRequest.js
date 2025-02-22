
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OriginStamp) {
      root.OriginStamp = {};
    }
    root.OriginStamp.ProofRequest = factory(root.OriginStamp.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ProofRequest model module.
   * @module model/ProofRequest
   * @version 3.0
   */

  /**
   * Constructs a new <code>ProofRequest</code>.
   * Request object for proof request.
   * @alias module:model/ProofRequest
   * @class
   * @param currency {Number} 0: Bitcoin 1: Ethereum 2: AION 100: Südkurier
   * @param hashString {String} Hash in HEX representation for which the proof should be created. We allow the use of SHA-256. Note: We handle the hashes in lower-case.
   * @param proof_type {Number} Specifies which type of file should be returned. Possible value(s):  0: proof with a seed file (txt) or proof with a merkle tree (xml) 1: proof with a PDF file   Other formats will follow.
   */
  var exports = function(currency, hashString, proofType) {
    this.currency = currency;
    this.hash_string = hashString;
    this.proof_type = proofType;
  };

  /**
   * Constructs a <code>ProofRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProofRequest} obj Optional instance to populate.
   * @return {module:model/ProofRequest} The populated <code>ProofRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'Number');
      if (data.hasOwnProperty('hash_string'))
        obj.hash_string = ApiClient.convertToType(data['hash_string'], 'String');
      if (data.hasOwnProperty('proof_type'))
        obj.proof_type = ApiClient.convertToType(data['proof_type'], 'Number');
    }
    return obj;
  }

  /**
   * 0: Bitcoin 1: Ethereum 2: AION 100: Südkurier
   * @member {Number} currency
   */
  exports.prototype.currency = undefined;

  /**
   * Hash in HEX representation for which the proof should be created. We allow the use of SHA-256. Note: We handle the hashes in lower-case.
   * @member {String} hash_string
   */
  exports.prototype.hash_string = undefined;

  /**
   * Specifies which type of file should be returned. Possible value(s):  0: proof with a seed file (txt) or proof with a merkle tree (xml) 1: proof with a PDF file   Other formats will follow.
   * @member {Number} proof_type
   */
  exports.prototype.proof_type = undefined;


  return exports;

}));
