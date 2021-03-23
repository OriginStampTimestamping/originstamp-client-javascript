# OriginStamp.BulkApi

All URIs are relative to *https://api.originstamp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBulkTimestamp**](BulkApi.md#createBulkTimestamp) | **POST** /v4/timestamp/bulk/create | Bulk Submission
[**getSeedStatus**](BulkApi.md#getSeedStatus) | **GET** /v4/timestamp/status/seed/{seed_id} | Seed Status


<a name="createBulkTimestamp"></a>
# **createBulkTimestamp**
> [DefaultOfTimestampResponse] createBulkTimestamp(authorization, timestampBulkRequest)

Bulk Submission

With this interface you can submit multiple hashes at once. If your API key is valid, your hashes are added to seeds and scheduled for timestamping. You are also able to submit additional information with every hash, such as a comment or notification target. If the hash already exists, the 'created' field in the response is set to 'false' and the notification(s) of the corresponding hash will be ignored. To later query the status of any hash for a certain blockchain you can use the 'seed_id' field of its inner timestamp structure. This field can be used to query the timestamping status of the selected seed. This is recommended if a large number of hashes were transmitted in a certain time frame. Once a hash is successfully created for a certain crypto currency, we can notify your desired target with the timestamp information (via POST Request). A webhook for a submitted hash is triggered as soon as the tamper-proof timestamp with the selected crypto currency has been created. 

### Example
```javascript
var OriginStamp = require('originstamp-client-javascript');

var apiInstance = new OriginStamp.BulkApi();

var authorization = "authorization_example"; // String | A valid API key is essential for authorization to handle the request.

var timestampBulkRequest = new OriginStamp.TimestampBulkRequest(); // TimestampBulkRequest | DTO for the bulk hash submission. Add all relevant information concerning your hash submissions.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createBulkTimestamp(authorization, timestampBulkRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| A valid API key is essential for authorization to handle the request. | 
 **timestampBulkRequest** | [**TimestampBulkRequest**](TimestampBulkRequest.md)| DTO for the bulk hash submission. Add all relevant information concerning your hash submissions. | 

### Return type

[**[DefaultOfTimestampResponse]**](DefaultOfTimestampResponse.md)

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
var defaultClient = OriginStamp.ApiClient.instance;

// Configure API key authorization: API Key Authorization
var API Key Authorization = defaultClient.authentications['API Key Authorization'];
API Key Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key Authorization.apiKeyPrefix = 'Token';

var apiInstance = new OriginStamp.BulkApi();

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
 **seedId** | **String**| ID of the timestamp seed | 

### Return type

[**DefaultOfTimestampData**](DefaultOfTimestampData.md)

### Authorization

[API Key Authorization](../README.md#API Key Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

