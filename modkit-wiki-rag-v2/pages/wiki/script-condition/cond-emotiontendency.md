---
document_id: "2d6204f4ab98a08ff87e662cbae1a30d7e84868cb4b62b58ced7010d994bf116"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotiontendency"
title: "Condition_EmotionTendency"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:57+00:00"
content_sha256: "57a7c48e783fc016dc6cfb3861b9e256bfa900ca0509ec98e22c3fa3d22e9e2f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-emotiontendency"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks a character's current emotion tendency. Retrieves the character's current EmotionTendency from the EmotionComponent and compares it against the tendency specified in S1 using the given CompareType. EmotionTendency is a high-level emotional inclination derived from the current emotion state.

# Parameters

| ParameterDescriptionBaseObjectThe character whose emotion tendency will be checkedCompareTypeComparison operator for tendency evaluation (Equal, NotEqual, etc.)S1EmotionTendency value to compare against (e.g., Positive, Negative) |
| --- |
| BaseObjectThe character whose emotion tendency will be checkedCompareTypeComparison operator for tendency evaluation (Equal, NotEqual, etc.)S1EmotionTendency value to compare against (e.g., Positive, Negative) |
| CompareTypeComparison operator for tendency evaluation (Equal, NotEqual, etc.)S1EmotionTendency value to compare against (e.g., Positive, Negative) |
| S1EmotionTendency value to compare against (e.g., Positive, Negative) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Target has a positive emotion tendencyTargetEmotionTendencyEqualPositiveCheck if Self is not in a negative emotion tendencySelfEmotionTendencyNotEqualNegative |
| --- |
| Check if Target has a positive emotion tendencyTargetEmotionTendencyEqualPositiveCheck if Self is not in a negative emotion tendencySelfEmotionTendencyNotEqualNegative |
| Check if Self is not in a negative emotion tendencySelfEmotionTendencyNotEqualNegative |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoEmotion, Trait & Preference[ComparePreference](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-comparepreference)[Emotion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotion)[EmotionLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotionlevel)[EmotionRestrict](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotionrestrict)[HasPreference](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haspreference)[IsGiftPreferenceState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isgiftpreferencestate)[IsPreferenceLike](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispreferencelike)[MainPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-mainperspective)[OwnedEmotionLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ownedemotionlevel)[PerspectivePoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-perspectivepoint)[PerspectivePointDiff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-perspectivepointdiff)[Trait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-trait)
