---
document_id: "5600ee477c34814c775cbb102c1cb688b14a67b2ee1b1bd42096e41b288bdaba"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmemory"
title: "Condition_HasMemory"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:08+00:00"
content_sha256: "84db02488acc7789bdcffcba689b0fd46480e2a4bc4e26a73d9747bfb3cfadad"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasmemory"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the BaseObject character has experienced the specified memory. Searches SocialContext entries for any target whose latest memory matches the given MemoryDtId.

# Parameters

| ParameterDescriptionBaseObjectThe character to check (Self or Target).CompareTypeEqual: has the memory / NotEqual: does not have the memory.S1Memory ID (Memory.Json) to check. |
| --- |
| BaseObjectThe character to check (Self or Target).CompareTypeEqual: has the memory / NotEqual: does not have the memory.S1Memory ID (Memory.Json) to check. |
| CompareTypeEqual: has the memory / NotEqual: does not have the memory.S1Memory ID (Memory.Json) to check. |
| S1Memory ID (Memory.Json) to check. |

# Examples

| DescriptionBaseObjectCommandS1CompareTypeCheck if Self has a specific memorySelfHasMemoryMemory_Fight_01EqualCheck if Target does not have a specific memoryTargetHasMemoryMemory_Fight_01NotEqual |
| --- |
| Check if Self has a specific memorySelfHasMemoryMemory_Fight_01EqualCheck if Target does not have a specific memoryTargetHasMemoryMemory_Fight_01NotEqual |
| Check if Target does not have a specific memoryTargetHasMemoryMemory_Fight_01NotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoQuest, Memory & Milestone[CanSendCollectionInformation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cansendcollectioninformation)[DoodleCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-doodlecount)[HasMemoryWithTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmemorywithtarget)[HasMilestone](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmilestone)[HasQuest](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasquest)[IsCollectedCollectionTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscollectedcollectiontag)[IsPublishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispublishing)[IsQuestRequiredItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isquestrequireditem)
