---
document_id: "c5acc0187581ba32f987ea061461293844314985c809c5f4dc3253c51915a26d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscollectedcollectiontag"
title: "Condition_IsCollectedCollectionTag"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:24+00:00"
content_sha256: "8d2f39792cd0030d25def96d1ae0697f83ab70a8fcb3fd436734ca5164c385a4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-iscollectedcollectiontag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Returns whether all Family Collection items designated with a specific Collect Tag have been fully collected by the BaseObject. In Collection.json, arbitrary values can be assigned to the Collect Tag column to group Family Collection items.

# Parameters

| ParameterDescriptionBaseObjectThe entity to check the collection tag completion status for.CompareTypeSupported compare types: Equal, NotEqual.S1Collect Tag value as assigned in Collection.json. |
| --- |
| BaseObjectThe entity to check the collection tag completion status for.CompareTypeSupported compare types: Equal, NotEqual.S1Collect Tag value as assigned in Collection.json. |
| CompareTypeSupported compare types: Equal, NotEqual.S1Collect Tag value as assigned in Collection.json. |
| S1Collect Tag value as assigned in Collection.json. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if self has collected all items tagged as rare_jewelSelfIsCollectedCollectionTagEqualCheck if self has NOT collected all items tagged as rare_jewelSelfIsCollectedCollectionTagNotEqualCheck if target has collected all items tagged as common_fishTargetIsCollectedCollectionTagEqual |
| --- |
| Check if self has collected all items tagged as rare_jewelSelfIsCollectedCollectionTagEqualCheck if self has NOT collected all items tagged as rare_jewelSelfIsCollectedCollectionTagNotEqualCheck if target has collected all items tagged as common_fishTargetIsCollectedCollectionTagEqual |
| Check if self has NOT collected all items tagged as rare_jewelSelfIsCollectedCollectionTagNotEqualCheck if target has collected all items tagged as common_fishTargetIsCollectedCollectionTagEqual |
| Check if target has collected all items tagged as common_fishTargetIsCollectedCollectionTagEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoQuest, Memory & Milestone[CanSendCollectionInformation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cansendcollectioninformation)[DoodleCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-doodlecount)[HasMemory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmemory)[HasMemoryWithTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmemorywithtarget)[HasMilestone](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmilestone)[HasQuest](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasquest)[IsPublishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispublishing)[IsQuestRequiredItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isquestrequireditem)
