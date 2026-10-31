---
document_id: "f0e2e74c51dcfa9c44997096bf9b2e1678d496be99499dcdef9fb3e811e30e3d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isquestrequireditem"
title: "Condition_IsQuestRequiredItem"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:41+00:00"
content_sha256: "b372ba2ed1e8f9eccada1c88598c6e99f6fe0db7c23468b803cd8733e1226017"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isquestrequireditem"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject is the required item for the active freelance quest. Verifies that the BaseObject's ObjectId matches the RequestTarget.TargetId of the active freelance order.

# Parameters

| ParameterDescriptionBaseObjectThe item entity to check against the quest requirement.CompareTypeSupported compare types: Equal, NotEqual. |
| --- |
| BaseObjectThe item entity to check against the quest requirement.CompareTypeSupported compare types: Equal, NotEqual. |
| CompareTypeSupported compare types: Equal, NotEqual. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self is the required quest itemSelfIsQuestRequiredItemEqualCheck if Target is the required quest itemTargetIsQuestRequiredItemEqualCheck if Target is not the required quest itemTargetIsQuestRequiredItemNotEqual |
| --- |
| Check if Self is the required quest itemSelfIsQuestRequiredItemEqualCheck if Target is the required quest itemTargetIsQuestRequiredItemEqualCheck if Target is not the required quest itemTargetIsQuestRequiredItemNotEqual |
| Check if Target is the required quest itemTargetIsQuestRequiredItemEqualCheck if Target is not the required quest itemTargetIsQuestRequiredItemNotEqual |
| Check if Target is not the required quest itemTargetIsQuestRequiredItemNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoQuest, Memory & Milestone[CanSendCollectionInformation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cansendcollectioninformation)[DoodleCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-doodlecount)[HasMemory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmemory)[HasMemoryWithTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmemorywithtarget)[HasMilestone](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmilestone)[HasQuest](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasquest)[IsCollectedCollectionTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscollectedcollectiontag)[IsPublishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispublishing)
