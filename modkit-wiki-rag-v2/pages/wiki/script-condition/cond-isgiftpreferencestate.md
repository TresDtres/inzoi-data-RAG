---
document_id: "8a9faf17a13fa193262f315c14923bf02d0e672e5ee8b583483f424a7bcc71cc"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isgiftpreferencestate"
title: "Condition_IsGiftPreferenceState"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:30+00:00"
content_sha256: "d7348ab7021cbb9fd32c3a071adb6d9fb6fd685cd1c6026f468a2c509b94a0aa"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isgiftpreferencestate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the BaseObject character's preference state toward the gift currently held in hand. The gift tag is mapped to a Preference through GiftPreferenceMapping and its state is compared against S2. Spoiled/garbage gifts and gifts without a matching Preference return false regardless of CompareType.

# Parameters

| ParameterDescriptionBaseObjectThe character (gift receiver) whose preference state will be checked.CompareTypeEqual (state matches S2), NotEqual (state does not match S2).S2The target preference state to compare against (Common, Like, or Dislike). |
| --- |
| BaseObjectThe character (gift receiver) whose preference state will be checked.CompareTypeEqual (state matches S2), NotEqual (state does not match S2).S2The target preference state to compare against (Common, Like, or Dislike). |
| CompareTypeEqual (state matches S2), NotEqual (state does not match S2).S2The target preference state to compare against (Common, Like, or Dislike). |
| S2The target preference state to compare against (Common, Like, or Dislike). |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoEmotion, Trait & Preference[ComparePreference](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-comparepreference)[Emotion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotion)[EmotionLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotionlevel)[EmotionRestrict](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotionrestrict)[EmotionTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotiontendency)[HasPreference](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haspreference)[IsPreferenceLike](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispreferencelike)[MainPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-mainperspective)[OwnedEmotionLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ownedemotionlevel)[PerspectivePoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-perspectivepoint)[PerspectivePointDiff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-perspectivepointdiff)[Trait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-trait)
