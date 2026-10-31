---
document_id: "06fd6423598d1545cba54154da6060dee0894b1b261fe4d21f7b57e3ac580d4c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasaccommodationroom"
title: "Condition_HasAccommodationRoom"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:01+00:00"
content_sha256: "617ee5319f54754077730a41ff7df27f2a295f393cc20f2670af3d12382462d3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasaccommodationroom"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject has a reserved check-in (accommodation) room. Ownership check only (mirrors HasHome); whether the character is currently inside that room is a separate check, IsAccommodationRoom (mirrors IsHome).

# Parameters

| ParameterDescriptionBaseObjectCharacter whose accommodation room ownership is checkedCompareTypeSupported compare types: Equal, NotEqual |
| --- |
| BaseObjectCharacter whose accommodation room ownership is checkedCompareTypeSupported compare types: Equal, NotEqual |
| CompareTypeSupported compare types: Equal, NotEqual |

# Examples

| DescriptionBaseObjectCommandCompareTypeIf Self has a reserved roomSelfHasAccommodationRoomEqualIf Self has no reserved roomSelfHasAccommodationRoomNotEqual |
| --- |
| If Self has a reserved roomSelfHasAccommodationRoomEqualIf Self has no reserved roomSelfHasAccommodationRoomNotEqual |
| If Self has no reserved roomSelfHasAccommodationRoomNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
