---
document_id: "449d8341a91652f33db430e2176396989ca17667e741b8cae1e1157809217686"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-trait"
title: "Condition_Trait"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:01+00:00"
content_sha256: "4ad169e4a8e17a3310e95008d2430449313c4aab89848ae4abd5e91c940c15ef"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-trait"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject entity possesses the specified trait.

# Parameters

| ParameterDescriptionBaseObjectThe entity to check for trait possession (Self or Target)CompareTypeSupported compare types: Equal, NotEqualS1Trait ID to check for (defined in Trait.json) |
| --- |
| BaseObjectThe entity to check for trait possession (Self or Target)CompareTypeSupported compare types: Equal, NotEqualS1Trait ID to check for (defined in Trait.json) |
| CompareTypeSupported compare types: Equal, NotEqualS1Trait ID to check for (defined in Trait.json) |
| S1Trait ID to check for (defined in Trait.json) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Checks whether Self has the Bookworm traitSelfTraitEqualBookwormChecks whether Target does NOT have the Leader traitTargetTraitNotEqualLeaderChecks whether Self has the Perfectionist traitSelfTraitEqualPerfectionist |
| --- |
| Checks whether Self has the Bookworm traitSelfTraitEqualBookwormChecks whether Target does NOT have the Leader traitTargetTraitNotEqualLeaderChecks whether Self has the Perfectionist traitSelfTraitEqualPerfectionist |
| Checks whether Target does NOT have the Leader traitTargetTraitNotEqualLeaderChecks whether Self has the Perfectionist traitSelfTraitEqualPerfectionist |
| Checks whether Self has the Perfectionist traitSelfTraitEqualPerfectionist |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoEmotion, Trait & Preference[ComparePreference](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-comparepreference)[Emotion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotion)[EmotionLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotionlevel)[EmotionRestrict](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotionrestrict)[EmotionTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-emotiontendency)[HasPreference](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haspreference)[IsGiftPreferenceState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isgiftpreferencestate)[IsPreferenceLike](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispreferencelike)[MainPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-mainperspective)[OwnedEmotionLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ownedemotionlevel)[PerspectivePoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-perspectivepoint)[PerspectivePointDiff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-perspectivepointdiff)
