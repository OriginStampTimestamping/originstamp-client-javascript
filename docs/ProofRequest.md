# OriginStamp.ProofRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **Number** | 0: Bitcoin 1: Ethereum 2: AION 100: Südkurier | 
**hash_string** | **String** | Hash in HEX representation for which the proof should be created. We allow the use of SHA-256. Note: We handle the hashes in lower-case. | 
**proof_type** | **Number** | Specifies which type of file should be returned. Possible value(s):  0: proof with a seed file (txt) or proof with a merkle tree (xml) 1: proof with a PDF file   Other formats will follow. | 


