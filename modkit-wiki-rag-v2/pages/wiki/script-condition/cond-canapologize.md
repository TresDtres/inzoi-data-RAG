---
document_id: "22c1af43ab02ff924074eb7ae3ab9a3c83cb83eed64bdbc68b6ffdde6c520aef"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize"
title: "Condition_CanApologize"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:46+00:00"
content_sha256: "2f263ba2ff81e7a12f827d5e38e3fee55bc4b186c0635a03c8e61836fbec1eb5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-canapologize"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

Script condition function to check if Self can apologize to Target.

This condition verifies whether the BaseObject (Self) is in a state where they can apologize to the NonBaseObject (Target). Returns true when Target's MemoryComponent contains a SocialContext for Self with State == Active and MoodScore < 0.

# Parameters

| ParameterDescriptionBaseObjectCharacter entity attempting to apologize (Self or Target)CompareTypeEqual / NotEqual |
| --- |
| BaseObjectCharacter entity attempting to apologize (Self or Target)CompareTypeEqual / NotEqual |
| CompareTypeEqual / NotEqual |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if character can apologize to targetSelfCanApologizeEqualCheck if target can apologize to characterTargetCanApologizeEqual |
| --- |
| Check if character can apologize to targetSelfCanApologizeEqualCheck if target can apologize to characterTargetCanApologizeEqual |
| Check if target can apologize to characterTargetCanApologizeEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)[CanInviteStayoverGuest](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninvitestayoverguest)
