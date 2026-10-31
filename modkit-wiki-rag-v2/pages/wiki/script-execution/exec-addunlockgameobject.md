---
document_id: "ac0cadff5cb4e975d5f272568afc58c95f0be786b24727da1370089c77b7552b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addunlockgameobject"
title: "Execute_AddUnlockGameObject"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:12+00:00"
content_sha256: "ff1bfb1bd3b043467dc5c34c639d52e9f32ecfb4b257ccc6197ca235fbd95a22"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addunlockgameobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Unlocks a furniture or game object for the BaseObject character, recording the unlock reason based on the script execution context (e.g., Ambition, Skill, Job).

# Parameters

| ParameterDescriptionBaseObjectThe character to unlock the game object for (Self or Target).S1The Object ID to unlock (as defined in Object.json). |
| --- |
| BaseObjectThe character to unlock the game object for (Self or Target).S1The Object ID to unlock (as defined in Object.json). |
| S1The Object ID to unlock (as defined in Object.json). |

# Examples

| DescriptionBaseObjectCommandUnlock grandfather clock for SelfSelfAddUnlockGameObjectUnlock a skill-reward object for TargetTargetAddUnlockGameObjectUnlock an ambition reward object for SelfSelfAddUnlockGameObject |
| --- |
| Unlock grandfather clock for SelfSelfAddUnlockGameObjectUnlock a skill-reward object for TargetTargetAddUnlockGameObjectUnlock an ambition reward object for SelfSelfAddUnlockGameObject |
| Unlock a skill-reward object for TargetTargetAddUnlockGameObjectUnlock an ambition reward object for SelfSelfAddUnlockGameObject |
| Unlock an ambition reward object for SelfSelfAddUnlockGameObject |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoQuest, Memory & Milestone[AddDoodle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adddoodle)[AddMilestone](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmilestone)[AddUnlockCAZObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addunlockcazobject)[ClearDoodles](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cleardoodles)[ProfileUnlock](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-profileunlock)[SendCollectionInformation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-sendcollectioninformation)
