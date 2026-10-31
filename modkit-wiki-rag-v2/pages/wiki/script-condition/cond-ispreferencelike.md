---
document_id: "c1d2e3b0cfb15e320f1aa455524d738eedcfeec26cb21d7d25bc1837e1d29eb1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispreferencelike"
title: "Condition_IsPreferenceLike"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:40+00:00"
content_sha256: "966dc4036f92d39a9bae483e72f4809b7f3558bcc7511c37251041a4978dcea3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-ispreferencelike"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject character's preference state for the specified preference ID matches the target preference state.

# Parameters

| ParameterDescriptionBaseObjectThe character whose preference state will be checked (Self or Target).CompareTypeSupported compare types: Equal (state matches), NotEqual (state does not match).S1The preference ID to check.S2The target preference state to compare against (Common, Like, or Dislike). |
| --- |
| BaseObjectThe character whose preference state will be checked (Self or Target).CompareTypeSupported compare types: Equal (state matches), NotEqual (state does not match).S1The preference ID to check.S2The target preference state to compare against (Common, Like, or Dislike). |
| CompareTypeSupported compare types: Equal (state matches), NotEqual (state does not match).S1The preference ID to check.S2The target preference state to compare against (Common, Like, or Dislike). |
| S1The preference ID to check.S2The target preference state to compare against (Common, Like, or Dislike). |
| S2The target preference state to compare against (Common, Like, or Dislike). |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self likes the Coffee preferenceSelfIsPreferenceLikeEqualCheck if Self does not like the Coffee preferenceSelfIsPreferenceLikeNotEqualCheck if Target dislikes the Sports preferenceTargetIsPreferenceLikeEqualCheck if Target does not have a common state for MusicTargetIsPreferenceLikeNotEqual |
| --- |
| Check if Self likes the Coffee preferenceSelfIsPreferenceLikeEqualCheck if Self does not like the Coffee preferenceSelfIsPreferenceLikeNotEqualCheck if Target dislikes the Sports preferenceTargetIsPreferenceLikeEqualCheck if Target does not have a common state for MusicTargetIsPreferenceLikeNotEqual |
| Check if Self does not like the Coffee preferenceSelfIsPreferenceLikeNotEqualCheck if Target dislikes the Sports preferenceTargetIsPreferenceLikeEqualCheck if Target does not have a common state for MusicTargetIsPreferenceLikeNotEqual |
| Check if Target dislikes the Sports preferenceTargetIsPreferenceLikeEqualCheck if Target does not have a common state for MusicTargetIsPreferenceLikeNotEqual |
| Check if Target does not have a common state for MusicTargetIsPreferenceLikeNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoEmotion, Trait & Preference[ComparePreference](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-comparepreference)[Emotion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotion)[EmotionLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotionlevel)[EmotionRestrict](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotionrestrict)[EmotionTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotiontendency)[HasPreference](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haspreference)[IsGiftPreferenceState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isgiftpreferencestate)[MainPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-mainperspective)[OwnedEmotionLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ownedemotionlevel)[PerspectivePoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-perspectivepoint)[PerspectivePointDiff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-perspectivepointdiff)[Trait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-trait)
