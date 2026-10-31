---
document_id: "1d4a11757688a1aa1ac419c5dbfba7d7655ca4f8f6618d1f18546a2cbd62c291"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isaccommodationroom"
title: "Condition_IsAccommodationRoom"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:19+00:00"
content_sha256: "c2621adcb407b3e20653416ca1d0927dcb497c8e75c460119e06dfb788a16893"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isaccommodationroom"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject is currently inside its reserved check-in (accommodation) room. Location check only (mirrors IsHome). Returns false when there is no reserved room, or when the character is elsewhere in the same hotel (a different room / common area).

# Parameters

| ParameterDescriptionBaseObjectCharacter whose location against the reserved room is checkedCompareTypeSupported compare types: Equal, NotEqual |
| --- |
| BaseObjectCharacter whose location against the reserved room is checkedCompareTypeSupported compare types: Equal, NotEqual |
| CompareTypeSupported compare types: Equal, NotEqual |

# Examples

| DescriptionBaseObjectCommandCompareTypeIf Self is inside the reserved roomSelfIsAccommodationRoomEqualIf Self is not inside itSelfIsAccommodationRoomNotEqual |
| --- |
| If Self is inside the reserved roomSelfIsAccommodationRoomEqualIf Self is not inside itSelfIsAccommodationRoomNotEqual |
| If Self is not inside itSelfIsAccommodationRoomNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
