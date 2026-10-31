---
document_id: "b63387bad816ca3f8020979343693c3392f669290504bbaeddffc63056d5aa37"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotionlevel"
title: "Condition_EmotionLevel"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:57+00:00"
content_sha256: "38a0c6985e26de8d54b3224156d5fff761189072aa142c61e6171f4aa369bf31"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-emotionlevel"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the level of the character's currently active emotion. First verifies that the character's current emotion type matches the value specified in S1. If it matches, the emotion's level is compared against the provided value(s) using CompareType. If the current emotion does not match S1, returns true only when CompareType is NotEqual.

# Parameters

| ParameterDescriptionBaseObjectThe character whose current emotion level will be checkedCompareTypeComparison operator for emotion level (Equal, NotEqual, Greater, Less, InRange, OutRange, etc.)S1EmotionType to match against the current emotion (e.g., Excited, Sad)F1Primary comparison value (emotion level threshold)F2Upper bound for range comparisons (InRange, OutRange) |
| --- |
| BaseObjectThe character whose current emotion level will be checkedCompareTypeComparison operator for emotion level (Equal, NotEqual, Greater, Less, InRange, OutRange, etc.)S1EmotionType to match against the current emotion (e.g., Excited, Sad)F1Primary comparison value (emotion level threshold)F2Upper bound for range comparisons (InRange, OutRange) |
| CompareTypeComparison operator for emotion level (Equal, NotEqual, Greater, Less, InRange, OutRange, etc.)S1EmotionType to match against the current emotion (e.g., Excited, Sad)F1Primary comparison value (emotion level threshold)F2Upper bound for range comparisons (InRange, OutRange) |
| S1EmotionType to match against the current emotion (e.g., Excited, Sad)F1Primary comparison value (emotion level threshold)F2Upper bound for range comparisons (InRange, OutRange) |
| F1Primary comparison value (emotion level threshold)F2Upper bound for range comparisons (InRange, OutRange) |
| F2Upper bound for range comparisons (InRange, OutRange) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1F1F2Check if Self's current Excited level is 2 or higherSelfEmotionLevelGreaterOrEqualExcited2Check if Target is not currently Sad at any levelTargetEmotionLevelNotEqualSad1Check if Self's current Calm level is between 1 and 3SelfEmotionLevelInRangeCalm13 |
| --- |
| Check if Self's current Excited level is 2 or higherSelfEmotionLevelGreaterOrEqualExcited2Check if Target is not currently Sad at any levelTargetEmotionLevelNotEqualSad1Check if Self's current Calm level is between 1 and 3SelfEmotionLevelInRangeCalm13 |
| Check if Target is not currently Sad at any levelTargetEmotionLevelNotEqualSad1Check if Self's current Calm level is between 1 and 3SelfEmotionLevelInRangeCalm13 |
| Check if Self's current Calm level is between 1 and 3SelfEmotionLevelInRangeCalm13 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoEmotion, Trait & Preference[ComparePreference](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-comparepreference)[Emotion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotion)[EmotionRestrict](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotionrestrict)[EmotionTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotiontendency)[HasPreference](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haspreference)[IsGiftPreferenceState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isgiftpreferencestate)[IsPreferenceLike](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispreferencelike)[MainPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-mainperspective)[OwnedEmotionLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ownedemotionlevel)[PerspectivePoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-perspectivepoint)[PerspectivePointDiff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-perspectivepointdiff)[Trait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-trait)
