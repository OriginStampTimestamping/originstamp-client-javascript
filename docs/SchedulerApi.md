# OriginStamp.SchedulerApi

All URIs are relative to *https://api.originstamp.com*

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
var OriginStamp = require('originstamp-client-javascript');

var apiInstance = new OriginStamp.SchedulerApi();

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

 - **Content-Type**: application/json
 - **Accept**: application/json

