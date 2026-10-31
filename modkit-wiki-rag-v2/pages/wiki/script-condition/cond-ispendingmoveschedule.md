---
document_id: "6bd4e509b273aff515b72c9e541bca1f59b902cc7120a4ad95df090e95a284f5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispendingmoveschedule"
title: "Condition_IsPendingMoveSchedule"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:39+00:00"
content_sha256: "dd12260e6cd9faf278d3ee4d24c75a474637d9f3c7f9a71cc61c52d7e01d6d15"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-ispendingmoveschedule"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject character is still moving toward the current schedule's destination and has not yet arrived.

# Parameters

| ParameterDescriptionBaseObjectThe character whose schedule movement status is checked (Self or Target)CompareTypeSupported compare types: Equal (not yet arrived), NotEqual (already arrived or no active schedule) |
| --- |
| BaseObjectThe character whose schedule movement status is checked (Self or Target)CompareTypeSupported compare types: Equal (not yet arrived), NotEqual (already arrived or no active schedule) |
| CompareTypeSupported compare types: Equal (not yet arrived), NotEqual (already arrived or no active schedule) |

# Examples

| DescriptionBaseObjectCommandCompareTypeChecks if Self is still moving toward schedule destinationSelfIsPendingMoveScheduleEqualChecks if Self has already arrived at schedule destinationSelfIsPendingMoveScheduleNotEqualChecks if Target is still en route to their scheduleTargetIsPendingMoveScheduleEqual |
| --- |
| Checks if Self is still moving toward schedule destinationSelfIsPendingMoveScheduleEqualChecks if Self has already arrived at schedule destinationSelfIsPendingMoveScheduleNotEqualChecks if Target is still en route to their scheduleTargetIsPendingMoveScheduleEqual |
| Checks if Self has already arrived at schedule destinationSelfIsPendingMoveScheduleNotEqualChecks if Target is still en route to their scheduleTargetIsPendingMoveScheduleEqual |
| Checks if Target is still en route to their scheduleTargetIsPendingMoveScheduleEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
