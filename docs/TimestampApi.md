# OriginStamp.TimestampApi

All URIs are relative to *https://api.originstamp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTimestamp**](TimestampApi.md#createTimestamp) | **POST** /v4/timestamp/create | Submission
[**getHashStatus**](TimestampApi.md#getHashStatus) | **GET** /v4/timestamp/{hash_string} | Status
[**getSeedStatus**](TimestampApi.md#getSeedStatus) | **GET** /v4/timestamp/status/seed/{seed_id} | Seed Status


<a name="createTimestamp"></a>
# **createTimestamp**
> DefaultOfTimestampResponse createTimestamp(authorization, timestampRequest)

Submission

With this interface you can submit your hash. If your API key is valid, your hash is added  seeds and scheduled for timestamping. You are also able to submit additional information, such as a comment or notification target. If the hash already exists, the 'created' field in the response is set to 'false' and any notification(s) for this hash will be ignored. To later query the status of the hash for a certain blockchain you can use the 'seed_id' field of its inner timestamp structure. This field can be used to query the timestamping status of the selected seed. This is recommended if a large number of hashes were transmitted in a certain time frame. Once a hash is successfully created for a certain crypto currency, we can notify your desired target with the timestamp information (via POST Request). A webhook is triggered as soon as the tamper-proof timestamp with the selected crypto currency has been created. 

### Example
```javascript
var OriginStamp = require('originstamp-client-javascript');

var apiInstance = new OriginStamp.TimestampApi();

var authorization = "authorization_example"; // String | A valid API key is essential for authorization to handle the request.

var timestampRequest = new OriginStamp.TimestampRequest("<hash>"); // TimestampRequest | DTO for the hash submission. Add all relevant information concerning your hash submission.
timestampRequest.comment = "<comment>";
timestampRequest.notifications = null;

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTimestamp(authorization, timestampRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| A valid API key is essential for authorization to handle the request. | 
 **timestampRequest** | [**TimestampRequest**](TimestampRequest.md)| DTO for the hash submission. Add all relevant information concerning your hash submission. | 

### Return type

[**DefaultOfTimestampResponse**](DefaultOfTimestampResponse.md)

### Authorization

[API Key Authorization](../README.md#API Key Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getHashStatus"></a>
# **getHashStatus**
> DefaultOfTimestampResponse getHashStatus(authorization, hashString)

Status

This interface returns information of a certain hash read from the URL path. If the status of several hashes is to be checked, it is preferable to use the seed status interface. This reduces the required requests and can be tailored to a desired blockchain. All 'created' fields are always set to false for a status request.

### Example
```javascript
var OriginStamp = require('originstamp-client-javascript');

var apiInstance = new OriginStamp.TimestampApi();

var authorization = "authorization_example"; // String | A valid API key is essential for authorization to handle the request.

var hashString = "hashString_example"; // String | The hash in string representation.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getHashStatus(authorization, hashString, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| A valid API key is essential for authorization to handle the request. | 
 **hash_string** | **String**| The hash in string representation. | 

### Return type

[**DefaultOfTimestampResponse**](DefaultOfTimestampResponse.md)

### Authorization

[API Key Authorization](../README.md#API Key Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSeedStatus"></a>
# **getSeedStatus**
> DefaultOfTimestampData getSeedStatus(authorization, seedId)

Seed Status

With this interface you can request the status for a certain seed. This is used when checking the status of previously submitted hashes and avoids sending individual status requests for each hash.

### Example
```javascript
var OriginStamp = require('originstamp-client-javascript');

var apiInstance = new OriginStamp.TimestampApi();

var authorization = "authorization_example"; // String | A valid API key is essential for authorization to handle the request.

var seedId = "seedId_example"; // String | ID of the timestamp seed


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSeedStatus(authorization, seedId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| A valid API key is essential for authorization to handle the request. | 
 **seed_id** | **String**| ID of the timestamp seed | 

### Return type

[**DefaultOfTimestampData**](DefaultOfTimestampData.md)

### Authorization

[API Key Authorization](../README.md#API Key Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

