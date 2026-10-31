---
document_id: "7fb652e8dabfe4e0373c270859f584c2284380db8731ed2ac3e6d0b4afc7c162"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isgrabbingtargetcharacter"
title: "Condition_IsGrabbingTargetCharacter"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:31+00:00"
content_sha256: "7fcf621b93e184bf4bbf5855059d8093333f44122d64dd361d1f2ef78bcf002e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isgrabbingtargetcharacter"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject character is currently holding the non-base (target) character. The condition verifies that the non-base character's parent entity is the BaseObject character.

# Parameters

| ParameterDescriptionBaseObjectThe character that may be holding another character (Self or Target).CompareTypeSupported compare types: Equal, NotEqual. |
| --- |
| BaseObjectThe character that may be holding another character (Self or Target).CompareTypeSupported compare types: Equal, NotEqual. |
| CompareTypeSupported compare types: Equal, NotEqual. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self is holding the target characterSelfIsGrabbingTargetCharacterEqualCheck if Self is not holding the target characterSelfIsGrabbingTargetCharacterNotEqualCheck if Target is holding the other characterTargetIsGrabbingTargetCharacterEqual |
| --- |
| Check if Self is holding the target characterSelfIsGrabbingTargetCharacterEqualCheck if Self is not holding the target characterSelfIsGrabbingTargetCharacterNotEqualCheck if Target is holding the other characterTargetIsGrabbingTargetCharacterEqual |
| Check if Self is not holding the target characterSelfIsGrabbingTargetCharacterNotEqualCheck if Target is holding the other characterTargetIsGrabbingTargetCharacterEqual |
| Check if Target is holding the other characterTargetIsGrabbingTargetCharacterEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
