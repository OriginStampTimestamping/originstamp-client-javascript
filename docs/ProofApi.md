# OriginStamp.ProofApi

All URIs are relative to *https://api.originstamp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProof**](ProofApi.md#getProof) | **POST** /v3/timestamp/proof/url | Proof


<a name="getProof"></a>
# **getProof**
> DefaultOfDownloadLinkResponse getProof(authorization, proofRequestUrl)

Proof

Generates the download URL for Proof (Seed / Merkle Tree). This interface must be used to obtain the proof or certificate of your tamper-proof timestamp. The parameters are as follows: Cryptocurrency (e.g., Bitcoin, Ethereum,..), type of evidence (e.g., certificate, merkle tree) and the associated hash. The entries are analyzed, e.g., whether a valid timestamp exists for the hash. Then the URL and the filename are returned, with which your proof can be saved. Please note that the download link is only valid for 5 minutes. When using cURL to fetch the proof with the download link make sure to specify \"application/octet-stream\" in the \"Accept\" header.

### Example
```javascript
var OriginStamp = require('originstamp-client-javascript');

var apiInstance = new OriginStamp.ProofApi();

var authorization = "authorization_example"; // String | A valid API key is essential for authorization to handle the request.

var proofRequestUrl = new OriginStamp.ProofRequest(); // ProofRequest | Information needed to return the proof.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProof(authorization, proofRequestUrl, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| A valid API key is essential for authorization to handle the request. | 
 **proofRequestUrl** | [**ProofRequest**](ProofRequest.md)| Information needed to return the proof. | 

### Return type

[**DefaultOfDownloadLinkResponse**](DefaultOfDownloadLinkResponse.md)

### Authorization

[API Key Authorization](../README.md#API Key Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

