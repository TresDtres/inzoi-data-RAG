---
document_id: "181947fe6dcffe274fa3b49092967d81db534932bd972094178ac85e87944af2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasphonenumber"
title: "Condition_HasPhoneNumber"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:12+00:00"
content_sha256: "bf7883e471cbdf6b7755db1bce74bfb5258d06b782f0bd19574e0dc3f9aaabf9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasphonenumber"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject has the NonBaseObject's phone number saved in its contact list.

# Parameters

| ParameterDescriptionBaseObjectThe entity to check whether it has the phone numberCompareTypeEqual (has the number) / NotEqual (does not have the number) |
| --- |
| BaseObjectThe entity to check whether it has the phone numberCompareTypeEqual (has the number) / NotEqual (does not have the number) |
| CompareTypeEqual (has the number) / NotEqual (does not have the number) |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self knows Target's numberSelfHasPhoneNumberEqualCheck if Self does not know Target's numberSelfHasPhoneNumberNotEqualCheck if Target knows Self's numberTargetHasPhoneNumberEqual |
| --- |
| Check if Self knows Target's numberSelfHasPhoneNumberEqualCheck if Self does not know Target's numberSelfHasPhoneNumberNotEqualCheck if Target knows Self's numberTargetHasPhoneNumberEqual |
| Check if Self does not know Target's numberSelfHasPhoneNumberNotEqualCheck if Target knows Self's numberTargetHasPhoneNumberEqual |
| Check if Target knows Self's numberTargetHasPhoneNumberEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoPhone & Messaging[Channel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-channel)[IsBlockingPhoneNumber](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isblockingphonenumber)
