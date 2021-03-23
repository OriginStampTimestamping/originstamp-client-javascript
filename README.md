# OriginStamp JavaScript Client

[![Build Status](https://travis-ci.com/OriginStampTimestamping/originstamp-client-javascript.svg?token=pQzQz38vk99v2uad9eWc&branch=master)](https://travis-ci.com/OriginStampTimestamping/originstamp-client-javascript)

![](https://resources.originstamp.com/images/logo/originstamp-logo-landscape-mc_248x53.png)

> A JavaScript implementation of the OriginStamp API. For endpoint documentation see [OriginStamp Documentation](https://docs.originstamp.com).

For more information, please visit [https://originstamp.com](https://originstamp.com).

## Installation

### npm

Install it via:

```shell
npm install originstamp-client-javascript --save
```


### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var OriginStamp = require('originstamp-client-javascript');

var api = new OriginStamp.APIKeyApi()

var authorization = "authorization_example"; // {String} A valid API key is essential for authorization to handle the request.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getApiKeyUsage(authorization, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.originstamp.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OriginStamp.APIKeyApi* | [**getApiKeyUsage**](docs/APIKeyApi.md#getApiKeyUsage) | **GET** /v3/api_key/usage | Usage
*OriginStamp.BulkApi* | [**createBulkTimestamp**](docs/BulkApi.md#createBulkTimestamp) | **POST** /v4/timestamp/bulk/create | Bulk Submission
*OriginStamp.BulkApi* | [**getSeedStatus**](docs/BulkApi.md#getSeedStatus) | **GET** /v4/timestamp/status/seed/{seed_id} | Seed Status
*OriginStamp.ProofApi* | [**getProof**](docs/ProofApi.md#getProof) | **POST** /v3/timestamp/proof/url | Proof
*OriginStamp.SchedulerApi* | [**getActiveCurrencies**](docs/SchedulerApi.md#getActiveCurrencies) | **GET** /v3/currencies/get | Get active currencies
*OriginStamp.TimestampApi* | [**createTimestamp**](docs/TimestampApi.md#createTimestamp) | **POST** /v4/timestamp/create | Submission
*OriginStamp.TimestampApi* | [**getHashStatus**](docs/TimestampApi.md#getHashStatus) | **GET** /v4/timestamp/{hash_string} | Status
*OriginStamp.TimestampApi* | [**getSeedStatus**](docs/TimestampApi.md#getSeedStatus) | **GET** /v4/timestamp/status/seed/{seed_id} | Seed Status
*OriginStamp.WebhookApi* | [**getWebhookStatus**](docs/WebhookApi.md#getWebhookStatus) | **POST** /v3/webhook/information | Webhook
*OriginStamp.WebhookApi* | [**registerWebhookNotification**](docs/WebhookApi.md#registerWebhookNotification) | **POST** /v3/webhook/register | Webhook
*OriginStamp.WebhookApi* | [**triggerTimestampWebhook**](docs/WebhookApi.md#triggerTimestampWebhook) | **POST** /v3/webhook/start | Dev


## Documentation for Models

 - [OriginStamp.CurrencyModel](docs/CurrencyModel.md)
 - [OriginStamp.DefaultOfDownloadLinkResponse](docs/DefaultOfDownloadLinkResponse.md)
 - [OriginStamp.DefaultOfListOfCurrencyModel](docs/DefaultOfListOfCurrencyModel.md)
 - [OriginStamp.DefaultOfTimestampData](docs/DefaultOfTimestampData.md)
 - [OriginStamp.DefaultOfTimestampResponse](docs/DefaultOfTimestampResponse.md)
 - [OriginStamp.DefaultOfVoid](docs/DefaultOfVoid.md)
 - [OriginStamp.DefaultOfWebhookResponse](docs/DefaultOfWebhookResponse.md)
 - [OriginStamp.DefaultOfstring](docs/DefaultOfstring.md)
 - [OriginStamp.DefaultUsageResponse](docs/DefaultUsageResponse.md)
 - [OriginStamp.DownloadLinkResponse](docs/DownloadLinkResponse.md)
 - [OriginStamp.ManualWebhookRequest](docs/ManualWebhookRequest.md)
 - [OriginStamp.Notification](docs/Notification.md)
 - [OriginStamp.ProofRequest](docs/ProofRequest.md)
 - [OriginStamp.TimestampBulkRequest](docs/TimestampBulkRequest.md)
 - [OriginStamp.TimestampData](docs/TimestampData.md)
 - [OriginStamp.TimestampRequest](docs/TimestampRequest.md)
 - [OriginStamp.TimestampResponse](docs/TimestampResponse.md)
 - [OriginStamp.UsageResponse](docs/UsageResponse.md)
 - [OriginStamp.WebhookRequest](docs/WebhookRequest.md)
 - [OriginStamp.WebhookResponse](docs/WebhookResponse.md)


## Documentation for Authorization


### API Key Authorization

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

## Author

mail@originstamp.com

