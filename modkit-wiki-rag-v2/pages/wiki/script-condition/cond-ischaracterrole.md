---
document_id: "303b7301bfeddfa2f794e6e22ddc05d7043e1d2b036f56f63631e8986684f66f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ischaracterrole"
title: "Condition_IsCharacterRole"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:23+00:00"
content_sha256: "00b47c109d1b83f2d8bc805ebb8ba5f115d0d75264208ccd7f4fb29d0864596f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-ischaracterrole"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

This condition function determines whether the specified BaseObject (character) has the role specified in the S1 parameter.

# Parameters

| ParameterDescriptionBaseObjectThe character to check (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1The character role to compare (e.g., Police, FireFighter). |
| --- |
| BaseObjectThe character to check (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1The character role to compare (e.g., Police, FireFighter). |
| CompareTypeSupported compare types: Equal, NotEqual.S1The character role to compare (e.g., Police, FireFighter). |
| S1The character role to compare (e.g., Police, FireFighter). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if my Zoi is a police officerSelfIsCharacterRoleEqualPoliceCheck if the target character is a firefighterTargetIsCharacterRoleEqualFireFighterCheck if my Zoi is not a police officerSelfIsCharacterRoleNotEqualPolice |
| --- |
| Check if my Zoi is a police officerSelfIsCharacterRoleEqualPoliceCheck if the target character is a firefighterTargetIsCharacterRoleEqualFireFighterCheck if my Zoi is not a police officerSelfIsCharacterRoleNotEqualPolice |
| Check if the target character is a firefighterTargetIsCharacterRoleEqualFireFighterCheck if my Zoi is not a police officerSelfIsCharacterRoleNotEqualPolice |
| Check if my Zoi is not a police officerSelfIsCharacterRoleNotEqualPolice |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
