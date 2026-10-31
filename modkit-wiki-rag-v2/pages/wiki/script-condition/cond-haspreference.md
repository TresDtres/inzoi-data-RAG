---
document_id: "ffb320a72b337226f85b28e90d1fbe0b8e736bb8c9faf62727fe1cf0fdb67511"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haspreference"
title: "Condition_HasPreference"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:12+00:00"
content_sha256: "4d8857ee774d94ed84124771ebecdce032532cd0fe16227e968e7347fbb7db1f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-haspreference"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject character has a specific preference by ID.

# Parameters

| ParameterDescriptionBaseObjectThe character whose preference list will be checked (Self or Target).CompareTypeSupported compare types: Equal (has the preference), NotEqual (does not have the preference).S1The Preference ID to check. |
| --- |
| BaseObjectThe character whose preference list will be checked (Self or Target).CompareTypeSupported compare types: Equal (has the preference), NotEqual (does not have the preference).S1The Preference ID to check. |
| CompareTypeSupported compare types: Equal (has the preference), NotEqual (does not have the preference).S1The Preference ID to check. |
| S1The Preference ID to check. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self has the Coffee preferenceSelfHasPreferenceEqualCheck if Self does not have the Coffee preferenceSelfHasPreferenceNotEqualCheck if Target has the Music preferenceTargetHasPreferenceEqualCheck if Target does not have the Sports preferenceTargetHasPreferenceNotEqual |
| --- |
| Check if Self has the Coffee preferenceSelfHasPreferenceEqualCheck if Self does not have the Coffee preferenceSelfHasPreferenceNotEqualCheck if Target has the Music preferenceTargetHasPreferenceEqualCheck if Target does not have the Sports preferenceTargetHasPreferenceNotEqual |
| Check if Self does not have the Coffee preferenceSelfHasPreferenceNotEqualCheck if Target has the Music preferenceTargetHasPreferenceEqualCheck if Target does not have the Sports preferenceTargetHasPreferenceNotEqual |
| Check if Target has the Music preferenceTargetHasPreferenceEqualCheck if Target does not have the Sports preferenceTargetHasPreferenceNotEqual |
| Check if Target does not have the Sports preferenceTargetHasPreferenceNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoEmotion, Trait & Preference[ComparePreference](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-comparepreference)[Emotion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotion)[EmotionLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotionlevel)[EmotionRestrict](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotionrestrict)[EmotionTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotiontendency)[IsGiftPreferenceState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isgiftpreferencestate)[IsPreferenceLike](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispreferencelike)[MainPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-mainperspective)[OwnedEmotionLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ownedemotionlevel)[PerspectivePoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-perspectivepoint)[PerspectivePointDiff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-perspectivepointdiff)[Trait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-trait)
