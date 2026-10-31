---
document_id: "36d6a862bf1814272a03a056c826c8d2f4cdf05d605803ce9ea22f83824a418d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-perspectivepointdiff"
title: "Condition_PerspectivePointDiff"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:55+00:00"
content_sha256: "c8a10225018d1d6a304a4d594c2f6ea7551b745bf41380c730b11be937138111"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-perspectivepointdiff"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Compares the absolute difference in the specified perspective (S1) between Self and Target against F1 using the given CompareType. Used when two participants are involved (e.g. cooperative actions or dialogues). Supports range comparisons using F2 as the upper bound.

# Parameters

| ParameterDescriptionBaseObjectThe base participant (Self or Target) for the comparison context.CompareTypeComparison operation type. Supports InRange and OutRange.S1The perspective name to compare between Self and Target.F1The perspective difference value to compare against.F2The upper bound value used for range comparisons (InRange, OutRange). |
| --- |
| BaseObjectThe base participant (Self or Target) for the comparison context.CompareTypeComparison operation type. Supports InRange and OutRange.S1The perspective name to compare between Self and Target.F1The perspective difference value to compare against.F2The upper bound value used for range comparisons (InRange, OutRange). |
| CompareTypeComparison operation type. Supports InRange and OutRange.S1The perspective name to compare between Self and Target.F1The perspective difference value to compare against.F2The upper bound value used for range comparisons (InRange, OutRange). |
| S1The perspective name to compare between Self and Target.F1The perspective difference value to compare against.F2The upper bound value used for range comparisons (InRange, OutRange). |
| F1The perspective difference value to compare against.F2The upper bound value used for range comparisons (InRange, OutRange). |
| F2The upper bound value used for range comparisons (InRange, OutRange). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1F1F2Check if the difference in Freedom perspective is greater than 50SelfPerspectivePointDiffGreaterOrEqualFreedom50.0Check if the difference in Freedom perspective is between 20 and 40SelfPerspectivePointDiffInRangeFreedom20.040.0Check if the difference in Authority perspective is less than 10SelfPerspectivePointDiffLessAuthority10.0 |
| --- |
| Check if the difference in Freedom perspective is greater than 50SelfPerspectivePointDiffGreaterOrEqualFreedom50.0Check if the difference in Freedom perspective is between 20 and 40SelfPerspectivePointDiffInRangeFreedom20.040.0Check if the difference in Authority perspective is less than 10SelfPerspectivePointDiffLessAuthority10.0 |
| Check if the difference in Freedom perspective is between 20 and 40SelfPerspectivePointDiffInRangeFreedom20.040.0Check if the difference in Authority perspective is less than 10SelfPerspectivePointDiffLessAuthority10.0 |
| Check if the difference in Authority perspective is less than 10SelfPerspectivePointDiffLessAuthority10.0 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoEmotion, Trait & Preference[ComparePreference](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-comparepreference)[Emotion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotion)[EmotionLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotionlevel)[EmotionRestrict](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotionrestrict)[EmotionTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotiontendency)[HasPreference](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haspreference)[IsGiftPreferenceState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isgiftpreferencestate)[IsPreferenceLike](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispreferencelike)[MainPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-mainperspective)[OwnedEmotionLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ownedemotionlevel)[PerspectivePoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-perspectivepoint)[Trait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-trait)
