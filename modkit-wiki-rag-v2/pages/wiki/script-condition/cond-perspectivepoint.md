---
document_id: "23f19c889b8cdda109442afcf13e4f5aa07823c466db07889e2c864dcbd13c2e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-perspectivepoint"
title: "Condition_PerspectivePoint"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:55+00:00"
content_sha256: "c0a00336792d332c940120a6c74277f56c6d3de83feebf6ffa054d43e80025a9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-perspectivepoint"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Compares the point value of the specified perspective (S1) for the character against F1 using the given CompareType. Supports range comparisons using F2 as the upper bound.

# Parameters

| ParameterDescriptionBaseObjectThe character whose perspective value will be checked.CompareTypeComparison operation type. Supports InRange and OutRange.S1The perspective name to check.F1The perspective point value to compare against.F2The upper bound value used for range comparisons (InRange, OutRange). |
| --- |
| BaseObjectThe character whose perspective value will be checked.CompareTypeComparison operation type. Supports InRange and OutRange.S1The perspective name to check.F1The perspective point value to compare against.F2The upper bound value used for range comparisons (InRange, OutRange). |
| CompareTypeComparison operation type. Supports InRange and OutRange.S1The perspective name to check.F1The perspective point value to compare against.F2The upper bound value used for range comparisons (InRange, OutRange). |
| S1The perspective name to check.F1The perspective point value to compare against.F2The upper bound value used for range comparisons (InRange, OutRange). |
| F1The perspective point value to compare against.F2The upper bound value used for range comparisons (InRange, OutRange). |
| F2The upper bound value used for range comparisons (InRange, OutRange). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1F1F2Check if Conservation perspective is greater than or equal to 60SelfPerspectivePointGreaterOrEqualConservation60.0Check if Conservation perspective is between 30 and 60SelfPerspectivePointInRangeConservation30.060.0Check if Freedom perspective is less than 20SelfPerspectivePointLessFreedom20.0 |
| --- |
| Check if Conservation perspective is greater than or equal to 60SelfPerspectivePointGreaterOrEqualConservation60.0Check if Conservation perspective is between 30 and 60SelfPerspectivePointInRangeConservation30.060.0Check if Freedom perspective is less than 20SelfPerspectivePointLessFreedom20.0 |
| Check if Conservation perspective is between 30 and 60SelfPerspectivePointInRangeConservation30.060.0Check if Freedom perspective is less than 20SelfPerspectivePointLessFreedom20.0 |
| Check if Freedom perspective is less than 20SelfPerspectivePointLessFreedom20.0 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoEmotion, Trait & Preference[ComparePreference](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-comparepreference)[Emotion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotion)[EmotionLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotionlevel)[EmotionRestrict](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotionrestrict)[EmotionTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotiontendency)[HasPreference](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haspreference)[IsGiftPreferenceState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isgiftpreferencestate)[IsPreferenceLike](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispreferencelike)[MainPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-mainperspective)[OwnedEmotionLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ownedemotionlevel)[PerspectivePointDiff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-perspectivepointdiff)[Trait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-trait)
