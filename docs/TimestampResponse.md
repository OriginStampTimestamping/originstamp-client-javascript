# OriginStamp.TimestampResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **String** | The comment which was added in the submission of the hash. | [optional] 
**created** | **Boolean** | Field is set to true if it is a novel hash.If the flag is false, the hash was already submitted before. | [optional] 
**date_created** | **Number** | The time when your hash was submitted to OriginStamp. The date is returned in the following format: [ms] since 1.1.1970 (unix epoch), timezone: UTC. This is not considered as a true timestamp. | [optional] 
**hash_string** | **String** | The submitted hash in hex representation. | [optional] 
**timestamps** | [**[TimestampData]**](TimestampData.md) | Contains all the timestamp data of your hash until now. | [optional] 


