---
document_id: "ba13c683e3394db389056eba3c9a2737332697697d7ddd2e66f6cdaf5d829b25"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashope"
title: "Condition_HasHope"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:06+00:00"
content_sha256: "a2d34da6aa6f40dbcf87cdf6073238e97ea71d4177017a9862f1c7e7014b2ea8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hashope"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the specified BaseObject (character) currently has a specific Hope (wish/ambition) active in their hope slots.

# Parameters

| ParameterDescriptionBaseObjectThe character to check (Self or Target).CompareTypeEqual (character has the Hope), NotEqual (character does not).S1The Hope ID to check (e.g., Preference_Cooking, Preference_Piano). |
| --- |
| BaseObjectThe character to check (Self or Target).CompareTypeEqual (character has the Hope), NotEqual (character does not).S1The Hope ID to check (e.g., Preference_Cooking, Preference_Piano). |
| CompareTypeEqual (character has the Hope), NotEqual (character does not).S1The Hope ID to check (e.g., Preference_Cooking, Preference_Piano). |
| S1The Hope ID to check (e.g., Preference_Cooking, Preference_Piano). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self wants to practice cookingSelfHasHopeEqualPreference_CookingCheck if Target is not wishing to play the pianoTargetHasHopeNotEqualPreference_PianoCheck if Self has a desire to play the guitarSelfHasHopeEqualPreference_GuitarCheck if Target does not want to cookTargetHasHopeNotEqualPreference_Cooking |
| --- |
| Check if Self wants to practice cookingSelfHasHopeEqualPreference_CookingCheck if Target is not wishing to play the pianoTargetHasHopeNotEqualPreference_PianoCheck if Self has a desire to play the guitarSelfHasHopeEqualPreference_GuitarCheck if Target does not want to cookTargetHasHopeNotEqualPreference_Cooking |
| Check if Target is not wishing to play the pianoTargetHasHopeNotEqualPreference_PianoCheck if Self has a desire to play the guitarSelfHasHopeEqualPreference_GuitarCheck if Target does not want to cookTargetHasHopeNotEqualPreference_Cooking |
| Check if Self has a desire to play the guitarSelfHasHopeEqualPreference_GuitarCheck if Target does not want to cookTargetHasHopeNotEqualPreference_Cooking |
| Check if Target does not want to cookTargetHasHopeNotEqualPreference_Cooking |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoAmbition & Hope[CompleteAmbition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-completeambition)[CurrentAmbition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-currentambition)[PlayingAmbition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-playingambition)
