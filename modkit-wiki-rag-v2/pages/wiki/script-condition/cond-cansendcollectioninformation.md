---
document_id: "3edef844e811fbf753091f9131835fd9d52c1fc9b0b8a1cbe75fcdc9496144d4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cansendcollectioninformation"
title: "Condition_CanSendCollectionInformation"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:50+00:00"
content_sha256: "179985f0147845c87912d5531287867063f384d2d87b9eb4d0d1467de92959ab"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-cansendcollectioninformation"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Returns whether the BaseObject has Family Collection information that can be sent to the non-BaseObject entity.

# Parameters

| ParameterDescriptionBaseObjectThe entity that would be sending collection information (Self or Target).CompareTypeSupported compare types: Equal, NotEqual. |
| --- |
| BaseObjectThe entity that would be sending collection information (Self or Target).CompareTypeSupported compare types: Equal, NotEqual. |
| CompareTypeSupported compare types: Equal, NotEqual. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if self has collection info that can be sent to targetSelfCanSendCollectionInformationEqualCheck if self does NOT have collection info to send to targetSelfCanSendCollectionInformationNotEqualCheck if target has collection info that can be sent to selfTargetCanSendCollectionInformationEqual |
| --- |
| Check if self has collection info that can be sent to targetSelfCanSendCollectionInformationEqualCheck if self does NOT have collection info to send to targetSelfCanSendCollectionInformationNotEqualCheck if target has collection info that can be sent to selfTargetCanSendCollectionInformationEqual |
| Check if self does NOT have collection info to send to targetSelfCanSendCollectionInformationNotEqualCheck if target has collection info that can be sent to selfTargetCanSendCollectionInformationEqual |
| Check if target has collection info that can be sent to selfTargetCanSendCollectionInformationEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoQuest, Memory & Milestone[DoodleCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-doodlecount)[HasMemory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmemory)[HasMemoryWithTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmemorywithtarget)[HasMilestone](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmilestone)[HasQuest](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasquest)[IsCollectedCollectionTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscollectedcollectiontag)[IsPublishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispublishing)[IsQuestRequiredItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isquestrequireditem)
