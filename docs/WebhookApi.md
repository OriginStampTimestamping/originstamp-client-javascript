# OriginStampApiDocumentation.WebhookApi

All URIs are relative to *https://api.originstamp.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getWebhookStatus**](WebhookApi.md#getWebhookStatus) | **POST** /v3/webhook/information | Webhook
[**registerWebhookNotification**](WebhookApi.md#registerWebhookNotification) | **POST** /v3/webhook/register | Webhook
[**triggerTimestampWebhook**](WebhookApi.md#triggerTimestampWebhook) | **POST** /v3/webhook/start | Dev


<a name="getWebhookStatus"></a>
# **getWebhookStatus**
> DefaultOfWebhookResponse getWebhookStatus(authorization, webhookRequest)

Webhook

RESTful interface to receive the status of a webhook. Based on the input parameters (target URL, hash and currency), we look up the most recent entry in the notification queue.This method is intended to support the webhook integration.

### Example
```javascript
var OriginStampApiDocumentation = require('origin_stamp_api_documentation');
var defaultClient = OriginStampApiDocumentation.ApiClient.default;

// Configure API key authorization: API Key Authorization
var API Key Authorization = defaultClient.authentications['API Key Authorization'];
API Key Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key Authorization.apiKeyPrefix = 'Token';

var apiInstance = new OriginStampApiDocumentation.WebhookApi();

var authorization = "authorization_example"; // String | A valid API key is essential for authorization to handle the request.

var webhookRequest = new OriginStampApiDocumentation.WebhookRequest(); // WebhookRequest | DTO for registering webhook information.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWebhookStatus(authorization, webhookRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| A valid API key is essential for authorization to handle the request. | 
 **webhookRequest** | [**WebhookRequest**](WebhookRequest.md)| DTO for registering webhook information. | 

### Return type

[**DefaultOfWebhookResponse**](DefaultOfWebhookResponse.md)

### Authorization

[API Key Authorization](../README.md#API Key Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="registerWebhookNotification"></a>
# **registerWebhookNotification**
> ModelDefault registerWebhookNotification(authorization, webhookRequest)

Webhook

Method which allows a subscription for a webhook notification. If this method is called, a new entry is added to notification queue that is triggered as soon as a tamper-proof timestamp or the hash is created. An empty data payload means that the entry was created successfully.

### Example
```javascript
var OriginStampApiDocumentation = require('origin_stamp_api_documentation');
var defaultClient = OriginStampApiDocumentation.ApiClient.default;

// Configure API key authorization: API Key Authorization
var API Key Authorization = defaultClient.authentications['API Key Authorization'];
API Key Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key Authorization.apiKeyPrefix = 'Token';

var apiInstance = new OriginStampApiDocumentation.WebhookApi();

var authorization = "authorization_example"; // String | A valid API key is essential for authorization to handle the request.

var webhookRequest = new OriginStampApiDocumentation.WebhookRequest(); // WebhookRequest | DTO for querying webhook information.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registerWebhookNotification(authorization, webhookRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| A valid API key is essential for authorization to handle the request. | 
 **webhookRequest** | [**WebhookRequest**](WebhookRequest.md)| DTO for querying webhook information. | 

### Return type

[**ModelDefault**](ModelDefault.md)

### Authorization

[API Key Authorization](../README.md#API Key Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="triggerTimestampWebhook"></a>
# **triggerTimestampWebhook**
> DefaultOfstring triggerTimestampWebhook(authorization, manualWebhookRequest)

Dev

With this interface you can trigger manual webhook to see how a webhook looks like. Please use a hash, that was already timestamped before such as https://redir.originstamp.com/hash/9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08 . Usually, the webhook is triggered as soon as the tamper-proof time stamp with the selected crypto currency has been created.

### Example
```javascript
var OriginStampApiDocumentation = require('origin_stamp_api_documentation');
var defaultClient = OriginStampApiDocumentation.ApiClient.default;

// Configure API key authorization: API Key Authorization
var API Key Authorization = defaultClient.authentications['API Key Authorization'];
API Key Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key Authorization.apiKeyPrefix = 'Token';

var apiInstance = new OriginStampApiDocumentation.WebhookApi();

var authorization = "authorization_example"; // String | A valid API key is essential for authorization to handle the request.

var manualWebhookRequest = new OriginStampApiDocumentation.ManualWebhookRequest(); // ManualWebhookRequest | DTO for webhook request.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.triggerTimestampWebhook(authorization, manualWebhookRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| A valid API key is essential for authorization to handle the request. | 
 **manualWebhookRequest** | [**ManualWebhookRequest**](ManualWebhookRequest.md)| DTO for webhook request. | 

### Return type

[**DefaultOfstring**](DefaultOfstring.md)

### Authorization

[API Key Authorization](../README.md#API Key Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

