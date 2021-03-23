# OriginStampApiDocumentation.SchedulerApi

All URIs are relative to *https://api.originstamp.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getActiveCurrencies**](SchedulerApi.md#getActiveCurrencies) | **GET** /v3/currencies/get | Get active currencies


<a name="getActiveCurrencies"></a>
# **getActiveCurrencies**
> DefaultOfListOfCurrencyModel getActiveCurrencies(authorization)

Get active currencies

Returns an array with all active currencies.

### Example
```javascript
var OriginStampApiDocumentation = require('origin_stamp_api_documentation');
var defaultClient = OriginStampApiDocumentation.ApiClient.default;

// Configure API key authorization: API Key Authorization
var API Key Authorization = defaultClient.authentications['API Key Authorization'];
API Key Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key Authorization.apiKeyPrefix = 'Token';

var apiInstance = new OriginStampApiDocumentation.SchedulerApi();

var authorization = "authorization_example"; // String | A valid API key is essential for authorization to handle the request.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getActiveCurrencies(authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| A valid API key is essential for authorization to handle the request. | 

### Return type

[**DefaultOfListOfCurrencyModel**](DefaultOfListOfCurrencyModel.md)

### Authorization

[API Key Authorization](../README.md#API Key Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

