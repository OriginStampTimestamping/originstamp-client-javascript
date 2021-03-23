# OriginStamp.APIKeyApi

All URIs are relative to *https://api.originstamp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApiKeyUsage**](APIKeyApi.md#getApiKeyUsage) | **GET** /v3/api_key/usage | Usage


<a name="getApiKeyUsage"></a>
# **getApiKeyUsage**
> DefaultUsageResponse getApiKeyUsage(authorization)

Usage

With this interface you can receive the current usage of your API key. The usage statistic refers to the associated account.

### Example
```javascript
var OriginStamp = require('originstamp-client-javascript');

var apiInstance = new OriginStamp.APIKeyApi();

var authorization = "authorization_example"; // String | A valid API key is essential for authorization to handle the request.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getApiKeyUsage(authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| A valid API key is essential for authorization to handle the request. | 

### Return type

[**DefaultUsageResponse**](DefaultUsageResponse.md)

### Authorization

[API Key Authorization](../README.md#API Key Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

