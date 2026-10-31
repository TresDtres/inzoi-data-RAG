---
document_id: "3af144400950d98df4c20310b554e7403d96595e90540f119ea0840ba2d6d9fe"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotionrestrict"
title: "Condition_EmotionRestrict"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:57+00:00"
content_sha256: "93abebc4900274d620ccd345c762ed074c45458ec18ae7c5ef890c24e8da1636"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-emotionrestrict"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Determines whether the character is in an emotion-restricted state. Compares the character’s current emotion value against the restriction threshold defined in the EmotionDataAsset using the given CompareType. Used to block or allow specific reactions when the character is in an extreme emotional state (e.g., prevent positive reactions when emotion value >= RestrictEmotionValue).

# Note

Always returns false when the current EmotionType is Sleep. The restriction threshold is defined globally in EmotionDataAsset::RestrictEmotionValue.

# Parameters

| ParameterDescriptionBaseObjectThe character whose emotion restriction state will be checkedCompareTypeComparison operator applied to (emotion value [op] RestrictEmotionValue) |
| --- |
| BaseObjectThe character whose emotion restriction state will be checkedCompareTypeComparison operator applied to (emotion value [op] RestrictEmotionValue) |
| CompareTypeComparison operator applied to (emotion value [op] RestrictEmotionValue) |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self is in a restricted emotion stateSelfEmotionRestrictEqualCheck if Self is NOT in a restricted emotion stateSelfEmotionRestrictNotEqual |
| --- |
| Check if Self is in a restricted emotion stateSelfEmotionRestrictEqualCheck if Self is NOT in a restricted emotion stateSelfEmotionRestrictNotEqual |
| Check if Self is NOT in a restricted emotion stateSelfEmotionRestrictNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoEmotion, Trait & Preference[ComparePreference](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-comparepreference)[Emotion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotion)[EmotionLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotionlevel)[EmotionTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotiontendency)[HasPreference](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haspreference)[IsGiftPreferenceState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isgiftpreferencestate)[IsPreferenceLike](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispreferencelike)[MainPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-mainperspective)[OwnedEmotionLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ownedemotionlevel)[PerspectivePoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-perspectivepoint)[PerspectivePointDiff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-perspectivepointdiff)[Trait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-trait)
