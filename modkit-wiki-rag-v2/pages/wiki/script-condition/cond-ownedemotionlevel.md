---
document_id: "40a15073507a081e57193d24bc64cfe8028a942a976f7950dbc3c2ddb9fe578a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ownedemotionlevel"
title: "Condition_OwnedEmotionLevel"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:55+00:00"
content_sha256: "4548428c6ae8fc6cb8d06aff766d2128c74e05493e15b02bfbd4bf9625f79e98"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-ownedemotionlevel"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the level of an owned emotion for the specified character. Looks up the given EmotionType (S1) in the character’s owned emotion list and compares its stored level against the provided value(s) using CompareType. Unlike current emotion checks, this evaluates emotions regardless of whether they are currently active.

# Note

Returns false if the specified EmotionType is not present in the owned emotion list.

# Parameters

| ParameterDescriptionBaseObjectThe character whose owned emotion will be checkedCompareTypeComparison operator for emotion level (Equal, NotEqual, Greater, Less, InRange, OutRange, etc.)S1EmotionType to look up in the owned emotion list (e.g., Excited, Calm)F1Primary comparison value (emotion level threshold)F2Upper bound for range comparisons (InRange, OutRange) |
| --- |
| BaseObjectThe character whose owned emotion will be checkedCompareTypeComparison operator for emotion level (Equal, NotEqual, Greater, Less, InRange, OutRange, etc.)S1EmotionType to look up in the owned emotion list (e.g., Excited, Calm)F1Primary comparison value (emotion level threshold)F2Upper bound for range comparisons (InRange, OutRange) |
| CompareTypeComparison operator for emotion level (Equal, NotEqual, Greater, Less, InRange, OutRange, etc.)S1EmotionType to look up in the owned emotion list (e.g., Excited, Calm)F1Primary comparison value (emotion level threshold)F2Upper bound for range comparisons (InRange, OutRange) |
| S1EmotionType to look up in the owned emotion list (e.g., Excited, Calm)F1Primary comparison value (emotion level threshold)F2Upper bound for range comparisons (InRange, OutRange) |
| F1Primary comparison value (emotion level threshold)F2Upper bound for range comparisons (InRange, OutRange) |
| F2Upper bound for range comparisons (InRange, OutRange) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1F1F2Check if Self owns Excited emotion with level 3 or moreSelfOwnedEmotionLevelGreaterOrEqualExcited3Check if Target owns Calm emotion within level range 2-5TargetOwnedEmotionLevelInRangeCalm25Check if Self does not own Sad emotion in range 1-3SelfOwnedEmotionLevelOutRangeSad13 |
| --- |
| Check if Self owns Excited emotion with level 3 or moreSelfOwnedEmotionLevelGreaterOrEqualExcited3Check if Target owns Calm emotion within level range 2-5TargetOwnedEmotionLevelInRangeCalm25Check if Self does not own Sad emotion in range 1-3SelfOwnedEmotionLevelOutRangeSad13 |
| Check if Target owns Calm emotion within level range 2-5TargetOwnedEmotionLevelInRangeCalm25Check if Self does not own Sad emotion in range 1-3SelfOwnedEmotionLevelOutRangeSad13 |
| Check if Self does not own Sad emotion in range 1-3SelfOwnedEmotionLevelOutRangeSad13 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoEmotion, Trait & Preference[ComparePreference](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-comparepreference)[Emotion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotion)[EmotionLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotionlevel)[EmotionRestrict](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotionrestrict)[EmotionTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotiontendency)[HasPreference](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haspreference)[IsGiftPreferenceState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isgiftpreferencestate)[IsPreferenceLike](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispreferencelike)[MainPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-mainperspective)[PerspectivePoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-perspectivepoint)[PerspectivePointDiff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-perspectivepointdiff)[Trait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-trait)
