---
document_id: "1d2035896e992f940de11d364bc7e1ddf472b8b12223a204cf3612a1c850d1be"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount"
title: "Condition_AvailableSlotCount"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:45+00:00"
content_sha256: "91ecae73c38c78eef4601667a8af68e8c0aee1e268c8f58a1bab8896a9f6c747"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-availableslotcount"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the number of available (unoccupied, unblocked) slots of the specified slot type on the BaseObject entity satisfies a comparison condition.

# Parameters

| ParameterDescriptionBaseObjectThe entity whose slots are inspected (Self or Target).CompareTypeThe comparison operator to apply against the available slot count (Equal, NotEqual,Greater, Less, GreaterEqual, LessEqual).S1The ObjectSlotId identifying the slot type to count (e.g., ObjectPutSlot, Bed).F1The value to compare against the available slot count. |
| --- |
| BaseObjectThe entity whose slots are inspected (Self or Target).CompareTypeThe comparison operator to apply against the available slot count (Equal, NotEqual,Greater, Less, GreaterEqual, LessEqual).S1The ObjectSlotId identifying the slot type to count (e.g., ObjectPutSlot, Bed).F1The value to compare against the available slot count. |
| CompareTypeThe comparison operator to apply against the available slot count (Equal, NotEqual,Greater, Less, GreaterEqual, LessEqual).S1The ObjectSlotId identifying the slot type to count (e.g., ObjectPutSlot, Bed).F1The value to compare against the available slot count. |
| Greater, Less, GreaterEqual, LessEqual).S1The ObjectSlotId identifying the slot type to count (e.g., ObjectPutSlot, Bed).F1The value to compare against the available slot count. |
| S1The ObjectSlotId identifying the slot type to count (e.g., ObjectPutSlot, Bed).F1The value to compare against the available slot count. |
| F1The value to compare against the available slot count. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Target has 3 or more available ObjectPutSlot slotsTargetAvailableSlotCountGreaterEqualCheck if Self has 1 or fewer available Bed slotsSelfAvailableSlotCountLessEqualCheck if Self has exactly 2 available Chair slotsSelfAvailableSlotCountEqualCheck if Target has any available Sofa slotsTargetAvailableSlotCountGreater |
| --- |
| Check if Target has 3 or more available ObjectPutSlot slotsTargetAvailableSlotCountGreaterEqualCheck if Self has 1 or fewer available Bed slotsSelfAvailableSlotCountLessEqualCheck if Self has exactly 2 available Chair slotsSelfAvailableSlotCountEqualCheck if Target has any available Sofa slotsTargetAvailableSlotCountGreater |
| Check if Self has 1 or fewer available Bed slotsSelfAvailableSlotCountLessEqualCheck if Self has exactly 2 available Chair slotsSelfAvailableSlotCountEqualCheck if Target has any available Sofa slotsTargetAvailableSlotCountGreater |
| Check if Self has exactly 2 available Chair slotsSelfAvailableSlotCountEqualCheck if Target has any available Sofa slotsTargetAvailableSlotCountGreater |
| Check if Target has any available Sofa slotsTargetAvailableSlotCountGreater |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)[CanInviteStayoverGuest](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninvitestayoverguest)
