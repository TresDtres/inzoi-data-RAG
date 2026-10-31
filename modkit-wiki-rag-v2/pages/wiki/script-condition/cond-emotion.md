---
document_id: "4b7f3d286309aff3c140dc843c1e19adee2378c23be573724751667fbc0034b5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotion"
title: "Condition_Emotion"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:57+00:00"
content_sha256: "9b9ceba61a5bca11ee4a082c6e50e73088c9691df46179617cbfc5e2ecc4f502"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-emotion"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks a character's current emotion state. Resolves the target entity from BaseObject, retrieves its EmotionComponent, and compares the character's current EmotionType with the value specified in S1 using the given CompareType.

# Parameters

| ParameterDescriptionBaseObjectThe character whose current emotion will be checkedCompareTypeComparison operator for emotion matching (Equal, NotEqual, Greater, Less, etc.)S1EmotionType value to compare against (e.g., Excited, Sad, Calm) |
| --- |
| BaseObjectThe character whose current emotion will be checkedCompareTypeComparison operator for emotion matching (Equal, NotEqual, Greater, Less, etc.)S1EmotionType value to compare against (e.g., Excited, Sad, Calm) |
| CompareTypeComparison operator for emotion matching (Equal, NotEqual, Greater, Less, etc.)S1EmotionType value to compare against (e.g., Excited, Sad, Calm) |
| S1EmotionType value to compare against (e.g., Excited, Sad, Calm) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Target is currently excitedTargetEmotionEqualExcitedCheck if Self is not currently sadSelfEmotionNotEqualSadCheck if Self is currently calmSelfEmotionEqualCalm |
| --- |
| Check if Target is currently excitedTargetEmotionEqualExcitedCheck if Self is not currently sadSelfEmotionNotEqualSadCheck if Self is currently calmSelfEmotionEqualCalm |
| Check if Self is not currently sadSelfEmotionNotEqualSadCheck if Self is currently calmSelfEmotionEqualCalm |
| Check if Self is currently calmSelfEmotionEqualCalm |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoEmotion, Trait & Preference[ComparePreference](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-comparepreference)[EmotionLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotionlevel)[EmotionRestrict](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotionrestrict)[EmotionTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotiontendency)[HasPreference](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haspreference)[IsGiftPreferenceState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isgiftpreferencestate)[IsPreferenceLike](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispreferencelike)[MainPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-mainperspective)[OwnedEmotionLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ownedemotionlevel)[PerspectivePoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-perspectivepoint)[PerspectivePointDiff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-perspectivepointdiff)[Trait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-trait)
