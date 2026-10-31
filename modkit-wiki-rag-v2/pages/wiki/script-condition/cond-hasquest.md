---
document_id: "77b54e606db92702b2905307ed372678fee48de6ccb4d0b0a8dce5d267175990"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasquest"
title: "Condition_HasQuest"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:12+00:00"
content_sha256: "2cac1e7e975949ade9a7b2b5d4f564de043573ed8e21ecfd2cac052ff38e29f1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasquest"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject character has a specific quest, optionally filtered by quest state.

# Parameters

| ParameterDescriptionBaseObjectThe character whose quest list will be checked (Self or Target).CompareTypeSupported compare types: Equal (has the quest), NotEqual (does not have the quest).S1The Quest ID to check.S2Optional quest state filter (e.g., InProgress). Omit to check for any state. |
| --- |
| BaseObjectThe character whose quest list will be checked (Self or Target).CompareTypeSupported compare types: Equal (has the quest), NotEqual (does not have the quest).S1The Quest ID to check.S2Optional quest state filter (e.g., InProgress). Omit to check for any state. |
| CompareTypeSupported compare types: Equal (has the quest), NotEqual (does not have the quest).S1The Quest ID to check.S2Optional quest state filter (e.g., InProgress). Omit to check for any state. |
| S1The Quest ID to check.S2Optional quest state filter (e.g., InProgress). Omit to check for any state. |
| S2Optional quest state filter (e.g., InProgress). Omit to check for any state. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self has the JobLess questSelfHasQuestEqualCheck if Self does not have the JobLess questSelfHasQuestNotEqualCheck if Target has a specific questTargetHasQuestEqualCheck if Self has a quest in InProgress stateSelfHasQuestEqual |
| --- |
| Check if Self has the JobLess questSelfHasQuestEqualCheck if Self does not have the JobLess questSelfHasQuestNotEqualCheck if Target has a specific questTargetHasQuestEqualCheck if Self has a quest in InProgress stateSelfHasQuestEqual |
| Check if Self does not have the JobLess questSelfHasQuestNotEqualCheck if Target has a specific questTargetHasQuestEqualCheck if Self has a quest in InProgress stateSelfHasQuestEqual |
| Check if Target has a specific questTargetHasQuestEqualCheck if Self has a quest in InProgress stateSelfHasQuestEqual |
| Check if Self has a quest in InProgress stateSelfHasQuestEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoQuest, Memory & Milestone[CanSendCollectionInformation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cansendcollectioninformation)[DoodleCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-doodlecount)[HasMemory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmemory)[HasMemoryWithTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmemorywithtarget)[HasMilestone](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmilestone)[IsCollectedCollectionTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscollectedcollectiontag)[IsPublishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispublishing)[IsQuestRequiredItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isquestrequireditem)
