---
document_id: "8b6459743d3666bc89a1276aa5a3fe3186585faf4c427d79af684a1e140ce54c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haszoigroupcapacity"
title: "Condition_HasZoiGroupCapacity"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:17+00:00"
content_sha256: "5a30694bcb7ab3c6c370f2f23336ce0cee09c36f46209aaa8b41123553b9e990"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-haszoigroupcapacity"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject character's ZoiGroup has room to add a new member. If the BaseObject does not belong to any ZoiGroup, the condition returns true for Equal (treated as having capacity).

# Parameters

| ParameterDescriptionBaseObjectThe character whose ZoiGroup capacity will be checked.CompareTypeSupported compare types: Equal, NotEqual. |
| --- |
| BaseObjectThe character whose ZoiGroup capacity will be checked.CompareTypeSupported compare types: Equal, NotEqual. |
| CompareTypeSupported compare types: Equal, NotEqual. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if self's ZoiGroup has room for a new memberSelfHasZoiGroupCapacityEqualCheck if self's ZoiGroup is fullSelfHasZoiGroupCapacityNotEqualCheck if target's ZoiGroup has available capacityTargetHasZoiGroupCapacityEqualCheck if target's ZoiGroup has no available capacityTargetHasZoiGroupCapacityNotEqual |
| --- |
| Check if self's ZoiGroup has room for a new memberSelfHasZoiGroupCapacityEqualCheck if self's ZoiGroup is fullSelfHasZoiGroupCapacityNotEqualCheck if target's ZoiGroup has available capacityTargetHasZoiGroupCapacityEqualCheck if target's ZoiGroup has no available capacityTargetHasZoiGroupCapacityNotEqual |
| Check if self's ZoiGroup is fullSelfHasZoiGroupCapacityNotEqualCheck if target's ZoiGroup has available capacityTargetHasZoiGroupCapacityEqualCheck if target's ZoiGroup has no available capacityTargetHasZoiGroupCapacityNotEqual |
| Check if target's ZoiGroup has available capacityTargetHasZoiGroupCapacityEqualCheck if target's ZoiGroup has no available capacityTargetHasZoiGroupCapacityNotEqual |
| Check if target's ZoiGroup has no available capacityTargetHasZoiGroupCapacityNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
