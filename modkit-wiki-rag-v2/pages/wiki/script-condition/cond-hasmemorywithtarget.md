---
document_id: "dc8acb0bfb6c55d89b99f0d7b20f0a3c804b07489dde2a63ca526d26583d6513"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmemorywithtarget"
title: "Condition_HasMemoryWithTarget"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:09+00:00"
content_sha256: "d54255c1e115658918e92d612728bdfda2090e56d28f5e6bee77daf786653719"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasmemorywithtarget"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the BaseObject character has the specified memory with the NonBaseObject as the target. Unlike HasMemory (which searches all targets), this only checks the SocialContext entry for the NonBaseObject entity specifically.

# Parameters

| ParameterDescriptionBaseObjectThe character whose memory is checked (Self or Target).CompareTypeEqual: has the memory with the target / NotEqual: does not have it.S1Memory ID (Memory.Json) to check. |
| --- |
| BaseObjectThe character whose memory is checked (Self or Target).CompareTypeEqual: has the memory with the target / NotEqual: does not have it.S1Memory ID (Memory.Json) to check. |
| CompareTypeEqual: has the memory with the target / NotEqual: does not have it.S1Memory ID (Memory.Json) to check. |
| S1Memory ID (Memory.Json) to check. |

# Examples

| DescriptionBaseObjectCommandS1CompareTypeCheck if Self has a specific memory with TargetSelfHasMemoryWithTargetMemory_Fight_01EqualCheck if Target does not have a specific memory with SelfTargetHasMemoryWithTargetMemory_Fight_01NotEqual |
| --- |
| Check if Self has a specific memory with TargetSelfHasMemoryWithTargetMemory_Fight_01EqualCheck if Target does not have a specific memory with SelfTargetHasMemoryWithTargetMemory_Fight_01NotEqual |
| Check if Target does not have a specific memory with SelfTargetHasMemoryWithTargetMemory_Fight_01NotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoQuest, Memory & Milestone[CanSendCollectionInformation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cansendcollectioninformation)[DoodleCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-doodlecount)[HasMemory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmemory)[HasMilestone](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmilestone)[HasQuest](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasquest)[IsCollectedCollectionTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscollectedcollectiontag)[IsPublishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispublishing)[IsQuestRequiredItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isquestrequireditem)
