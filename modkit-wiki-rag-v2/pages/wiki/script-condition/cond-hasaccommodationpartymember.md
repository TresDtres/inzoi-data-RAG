---
document_id: "0200cd6221c0fbe8e3f6000e43b138db385d58f41559f48d48bef484ea469bd7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasaccommodationpartymember"
title: "Condition_HasAccommodationPartyMember"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:01+00:00"
content_sha256: "b15ae913aa28f2c2bdff10fc0206dd651a21418b47f83bc0fc425eed8edc4fa2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasaccommodationpartymember"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject's accommodation booking holds at least one other valid guest. A solo booking, or a booking whose other guests are no longer valid characters, is false. Use it to hide interactions that act on the whole accommodation party, such as regrouping travel companions, from a guest who is staying alone and for whom the interaction would do nothing.

# Parameters

| ParameterDescriptionBaseObjectThe accommodation guest to testCompareTypeEqual: true when another guest exists. NotEqual: true when staying alone. |
| --- |
| BaseObjectThe accommodation guest to testCompareTypeEqual: true when another guest exists. NotEqual: true when staying alone. |
| CompareTypeEqual: true when another guest exists. NotEqual: true when staying alone. |

# Examples

| DescriptionBaseObjectCommandCompareTypeShow only when Self stays with someone elseSelfHasAccommodationPartyMemberEqualShow only when Self stays aloneSelfHasAccommodationPartyMemberNotEqual |
| --- |
| Show only when Self stays with someone elseSelfHasAccommodationPartyMemberEqualShow only when Self stays aloneSelfHasAccommodationPartyMemberNotEqual |
| Show only when Self stays aloneSelfHasAccommodationPartyMemberNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
