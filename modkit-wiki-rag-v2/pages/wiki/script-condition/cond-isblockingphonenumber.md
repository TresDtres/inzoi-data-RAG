---
document_id: "bba58862fd5dc7153afebacb8cf8a6b9c313ba420946486669829927f47af9d1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isblockingphonenumber"
title: "Condition_IsBlockingPhoneNumber"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:21+00:00"
content_sha256: "3f1eba98f623b7568eeb23961f102812f851cff1ab21ab0337614309b25be3a7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isblockingphonenumber"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject is blocking the NonBaseObject’s phone number.

# Parameters

| ParameterDescriptionBaseObjectThe entity to check whether it is blocking the other’s numberCompareTypeEqual (is blocking) / NotEqual (is not blocking) |
| --- |
| BaseObjectThe entity to check whether it is blocking the other’s numberCompareTypeEqual (is blocking) / NotEqual (is not blocking) |
| CompareTypeEqual (is blocking) / NotEqual (is not blocking) |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self is blocking TargetSelfIsBlockingPhoneNumberEqualCheck if Self is not blocking TargetSelfIsBlockingPhoneNumberNotEqualCheck if Target is blocking SelfTargetIsBlockingPhoneNumberEqual |
| --- |
| Check if Self is blocking TargetSelfIsBlockingPhoneNumberEqualCheck if Self is not blocking TargetSelfIsBlockingPhoneNumberNotEqualCheck if Target is blocking SelfTargetIsBlockingPhoneNumberEqual |
| Check if Self is not blocking TargetSelfIsBlockingPhoneNumberNotEqualCheck if Target is blocking SelfTargetIsBlockingPhoneNumberEqual |
| Check if Target is blocking SelfTargetIsBlockingPhoneNumberEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoPhone & Messaging[Channel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-channel)[HasPhoneNumber](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasphonenumber)
