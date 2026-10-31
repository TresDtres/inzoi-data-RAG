---
document_id: "c770203fb42f7d5a6b056b1b85b6b36082d4541c25b338471e8da4a16f2df372"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-profileunlock"
title: "Execute_ProfileUnlock"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:40+00:00"
content_sha256: "6d79de0a4541e68b6a1ed0c6e758c5901620af56d1d700417285ab255bd1e3fc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-profileunlock"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Unlocks the specified profile type of BaseObject for the non-BaseObject (the instigator/counterpart). The unlock is stored on the instigator's relationship component, allowing them to view BaseObject's profile information.

# Parameters

| ParameterDescriptionBaseObjectThe character whose profile is being unlocked (Self or Target)S1Profile type to unlock (Marriage, Trait, Job, TraitValue, Preference, RomanticOrientation, RomanceTarget, CriminalBehavior, Imprisonment) |
| --- |
| BaseObjectThe character whose profile is being unlocked (Self or Target)S1Profile type to unlock (Marriage, Trait, Job, TraitValue, Preference, RomanticOrientation, RomanceTarget, CriminalBehavior, Imprisonment) |
| S1Profile type to unlock (Marriage, Trait, Job, TraitValue, Preference, RomanticOrientation, RomanceTarget, CriminalBehavior, Imprisonment) |

# Examples

| DescriptionBaseObjectCommandS1Unlock Target's Trait profile for SelfTargetProfileUnlockTraitUnlock Target's Job profile for SelfTargetProfileUnlockJobUnlock Target's Preference profile for SelfTargetProfileUnlockPreferenceUnlock Self's Marriage profile for TargetSelfProfileUnlockMarriage |
| --- |
| Unlock Target's Trait profile for SelfTargetProfileUnlockTraitUnlock Target's Job profile for SelfTargetProfileUnlockJobUnlock Target's Preference profile for SelfTargetProfileUnlockPreferenceUnlock Self's Marriage profile for TargetSelfProfileUnlockMarriage |
| Unlock Target's Job profile for SelfTargetProfileUnlockJobUnlock Target's Preference profile for SelfTargetProfileUnlockPreferenceUnlock Self's Marriage profile for TargetSelfProfileUnlockMarriage |
| Unlock Target's Preference profile for SelfTargetProfileUnlockPreferenceUnlock Self's Marriage profile for TargetSelfProfileUnlockMarriage |
| Unlock Self's Marriage profile for TargetSelfProfileUnlockMarriage |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoQuest, Memory & Milestone[AddDoodle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adddoodle)[AddMilestone](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmilestone)[AddUnlockCAZObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addunlockcazobject)[AddUnlockGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addunlockgameobject)[ClearDoodles](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cleardoodles)[SendCollectionInformation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-sendcollectioninformation)
