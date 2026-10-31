---
document_id: "3b23e4ab2635702caac0742b3de60f31cded8b7acfddb61369083c93e7e75c9b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbargaincooltime"
title: "Condition_HasBargainCoolTime"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:02+00:00"
content_sha256: "2bea92115baf2424006d74d7898389f6bfff2d73d3e25f8dc1dcfafbb59d5480"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasbargaincooltime"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether a bargain cooltime exists between the BaseObject character and the NonBaseObject (a CarriableObject). The cooltime is tracked on the CarriableObject and keyed to the character's entity ID.

# Parameters

| ParameterDescriptionBaseObjectThe character to check for bargain cooltime (Self or Target); NonBaseObject is the itemCompareTypeEqual: cooltime is active; NotEqual: no cooltime (cooltime has expired or never set) |
| --- |
| BaseObjectThe character to check for bargain cooltime (Self or Target); NonBaseObject is the itemCompareTypeEqual: cooltime is active; NotEqual: no cooltime (cooltime has expired or never set) |
| CompareTypeEqual: cooltime is active; NotEqual: no cooltime (cooltime has expired or never set) |

# Examples

| DescriptionBaseObjectCommandCompareTypeIs self currently in a bargain cooltime with the item?SelfHasBargainCoolTimeEqualIs target still in cooltime after a recent bargain?TargetHasBargainCoolTimeEqualHas the bargain cooltime expired for self?SelfHasBargainCoolTimeNotEqual |
| --- |
| Is self currently in a bargain cooltime with the item?SelfHasBargainCoolTimeEqualIs target still in cooltime after a recent bargain?TargetHasBargainCoolTimeEqualHas the bargain cooltime expired for self?SelfHasBargainCoolTimeNotEqual |
| Is target still in cooltime after a recent bargain?TargetHasBargainCoolTimeEqualHas the bargain cooltime expired for self?SelfHasBargainCoolTimeNotEqual |
| Has the bargain cooltime expired for self?SelfHasBargainCoolTimeNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
