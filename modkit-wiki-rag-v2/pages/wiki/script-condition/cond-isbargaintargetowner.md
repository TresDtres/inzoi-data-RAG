---
document_id: "c13951eb3ee858311773dea2041a6827531e2dcc161b62d2795130ce85de4df3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbargaintargetowner"
title: "Condition_IsBargainTargetOwner"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:21+00:00"
content_sha256: "e56854137b980efc8e5e0e0ec8d0270b31ae5b5d82aa505cb1cf0b497cf96de0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isbargaintargetowner"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject (seller) is the owner of the current bargain target item. The host character is obtained from NonBaseObject and is used to look up the connected BargainScheduler, which tracks which entity owns the current bargain target.

# Parameters

| ParameterDescriptionBaseObjectThe seller entity to check for ownership (NonBaseObject is used as the host)CompareTypeEqual: seller is the owner; NotEqual: seller is not the owner |
| --- |
| BaseObjectThe seller entity to check for ownership (NonBaseObject is used as the host)CompareTypeEqual: seller is the owner; NotEqual: seller is not the owner |
| CompareTypeEqual: seller is the owner; NotEqual: seller is not the owner |

# Examples

| DescriptionBaseObjectCommandCompareTypeIs self the owner of the item being bargained?SelfIsBargainTargetOwnerEqualIs target the owner of the bargain item?TargetIsBargainTargetOwnerEqualIs self NOT the owner of the bargain item?SelfIsBargainTargetOwnerNotEqual |
| --- |
| Is self the owner of the item being bargained?SelfIsBargainTargetOwnerEqualIs target the owner of the bargain item?TargetIsBargainTargetOwnerEqualIs self NOT the owner of the bargain item?SelfIsBargainTargetOwnerNotEqual |
| Is target the owner of the bargain item?TargetIsBargainTargetOwnerEqualIs self NOT the owner of the bargain item?SelfIsBargainTargetOwnerNotEqual |
| Is self NOT the owner of the bargain item?SelfIsBargainTargetOwnerNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
