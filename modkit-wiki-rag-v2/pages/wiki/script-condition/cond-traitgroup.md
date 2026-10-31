---
document_id: "b83de1ff54e9f50a330c89fc67dc6000b8542391a49f6f47a79de1ffcd17a634"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-traitgroup"
title: "Condition_TraitGroup"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:01+00:00"
content_sha256: "62f45e36bc4700d9759c0de342cff2626d4c480663c5a4cb2a818e96e932878e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-traitgroup"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject entity possesses a trait that belongs to the specified trait group. The trait group must be defined in TraitGroup.json.

# Note

A trait group can bundle both Nature and Characteristic traits under one ID (e.g., Trait_1: Outlaw(Nature) + Malicious(Characteristic)).

# Parameters

| ParameterDescriptionBaseObjectThe entity to check for trait group possession (Self or Target)CompareTypeSupported compare types: Equal, NotEqualS1Trait group ID to check for (defined in TraitGroup.json) |
| --- |
| BaseObjectThe entity to check for trait group possession (Self or Target)CompareTypeSupported compare types: Equal, NotEqualS1Trait group ID to check for (defined in TraitGroup.json) |
| CompareTypeSupported compare types: Equal, NotEqualS1Trait group ID to check for (defined in TraitGroup.json) |
| S1Trait group ID to check for (defined in TraitGroup.json) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Checks if Self has any trait in the Thinking groupSelfTraitGroupEqualThinkingChecks if Target does NOT have any trait in the Social groupTargetTraitGroupNotEqualSocialChecks if Self has any trait in the Creative groupSelfTraitGroupEqualCreative |
| --- |
| Checks if Self has any trait in the Thinking groupSelfTraitGroupEqualThinkingChecks if Target does NOT have any trait in the Social groupTargetTraitGroupNotEqualSocialChecks if Self has any trait in the Creative groupSelfTraitGroupEqualCreative |
| Checks if Target does NOT have any trait in the Social groupTargetTraitGroupNotEqualSocialChecks if Self has any trait in the Creative groupSelfTraitGroupEqualCreative |
| Checks if Self has any trait in the Creative groupSelfTraitGroupEqualCreative |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoEmotion, Trait & Preference[ComparePreference](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-comparepreference)[Emotion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotion)[EmotionLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotionlevel)[EmotionRestrict](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotionrestrict)[EmotionTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotiontendency)[HasPreference](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haspreference)[IsGiftPreferenceState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isgiftpreferencestate)[IsPreferenceLike](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispreferencelike)[MainPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-mainperspective)[OwnedEmotionLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ownedemotionlevel)[PerspectivePoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-perspectivepoint)[PerspectivePointDiff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-perspectivepointdiff)
