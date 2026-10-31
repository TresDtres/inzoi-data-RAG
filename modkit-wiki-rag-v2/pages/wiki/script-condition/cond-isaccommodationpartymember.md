---
document_id: "0b7e5fb21dc521bfd1adb4fc7ffe6bf052be79a8dc6e2edf22865c84c6fd3efb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isaccommodationpartymember"
title: "Condition_IsAccommodationPartyMember"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:19+00:00"
content_sha256: "47b64a1a7a3e11646d8601af277d5577a28c76a041f9a7ed1fdfcf2ad191512c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isaccommodationpartymember"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject and NonBaseObject are guests in the same accommodation booking. Both entities must have a valid booking, and their accommodation RoomKeys must match.

# Parameters

| ParameterDescriptionBaseObjectOne accommodation guest.NonBaseObjectThe other entity checked as a member of the same accommodation party.CompareTypeEqual: same accommodation party. NotEqual: not in the same accommodation party. |
| --- |
| BaseObjectOne accommodation guest.NonBaseObjectThe other entity checked as a member of the same accommodation party.CompareTypeEqual: same accommodation party. NotEqual: not in the same accommodation party. |
| NonBaseObjectThe other entity checked as a member of the same accommodation party.CompareTypeEqual: same accommodation party. NotEqual: not in the same accommodation party. |
| CompareTypeEqual: same accommodation party. NotEqual: not in the same accommodation party. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Target is in Self's accommodation partySelfIsAccommodationPartyMemberEqualCheck if Self and Target have different bookingsSelfIsAccommodationPartyMemberNotEqual |
| --- |
| Check if Target is in Self's accommodation partySelfIsAccommodationPartyMemberEqualCheck if Self and Target have different bookingsSelfIsAccommodationPartyMemberNotEqual |
| Check if Self and Target have different bookingsSelfIsAccommodationPartyMemberNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
