---
document_id: "eae0e29481c72b7066d959b4d20157f6db7eaf60efdecd669225aff9f6f29011"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-comparepreference"
title: "Condition_ComparePreference"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:54+00:00"
content_sha256: "f7c34c1059a54e23e9ad92ed516eb665ac171935ee66470d7c307c38bf0fbbe1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-comparepreference"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Counts how many preferences Self and Target share (same preference ID and same like/dislike state), then compares that count using CompareType.

# Parameters

| ParameterDescriptionBaseObjectNot used to resolve the entity; always compares Self against Target's preference map.CompareTypeSupported compare types: Equal, NotEqual, Greater, Less, GreaterEqual, LessEqual, InRange, OutRange.F1The reference count of matching preferences to compare against (or the lower bound for range).F2The upper bound value for InRange/OutRange comparisons. |
| --- |
| BaseObjectNot used to resolve the entity; always compares Self against Target's preference map.CompareTypeSupported compare types: Equal, NotEqual, Greater, Less, GreaterEqual, LessEqual, InRange, OutRange.F1The reference count of matching preferences to compare against (or the lower bound for range).F2The upper bound value for InRange/OutRange comparisons. |
| CompareTypeSupported compare types: Equal, NotEqual, Greater, Less, GreaterEqual, LessEqual, InRange, OutRange.F1The reference count of matching preferences to compare against (or the lower bound for range).F2The upper bound value for InRange/OutRange comparisons. |
| F1The reference count of matching preferences to compare against (or the lower bound for range).F2The upper bound value for InRange/OutRange comparisons. |
| F2The upper bound value for InRange/OutRange comparisons. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self and Target share 2 preferencesSelfComparePreferenceEqualCheck if they share fewer than 3 preferencesSelfComparePreferenceLessCheck if they share 2 to 5 preferencesSelfComparePreferenceInRangeCheck if they share none of the sameSelfComparePreferenceEqual |
| --- |
| Check if Self and Target share 2 preferencesSelfComparePreferenceEqualCheck if they share fewer than 3 preferencesSelfComparePreferenceLessCheck if they share 2 to 5 preferencesSelfComparePreferenceInRangeCheck if they share none of the sameSelfComparePreferenceEqual |
| Check if they share fewer than 3 preferencesSelfComparePreferenceLessCheck if they share 2 to 5 preferencesSelfComparePreferenceInRangeCheck if they share none of the sameSelfComparePreferenceEqual |
| Check if they share 2 to 5 preferencesSelfComparePreferenceInRangeCheck if they share none of the sameSelfComparePreferenceEqual |
| Check if they share none of the sameSelfComparePreferenceEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoEmotion, Trait & Preference[Emotion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotion)[EmotionLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotionlevel)[EmotionRestrict](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotionrestrict)[EmotionTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotiontendency)[HasPreference](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haspreference)[IsGiftPreferenceState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isgiftpreferencestate)[IsPreferenceLike](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispreferencelike)[MainPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-mainperspective)[OwnedEmotionLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ownedemotionlevel)[PerspectivePoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-perspectivepoint)[PerspectivePointDiff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-perspectivepointdiff)[Trait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-trait)
