---
document_id: "fa6491efd20306006eb3795df94192af83d10676eefbcb5e3ae0614492cdb1b0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizstall"
title: "Condition_IsBizStall"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:21+00:00"
content_sha256: "e2a567f04511cd5c9f7a01f396ecf763aecd74046ba9475d6b154a3e20df1593"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isbizstall"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Returns whether the BaseObject (a market stall object) is registered as a stall object within a HouseholdBiz site. Equal is true if the object is a registered biz stall; NotEqual is true if it is not.

# Parameters

| ParameterDescriptionBaseObjectA GameObject (market stall object) whose registration status in a HouseholdBiz site is checked.CompareTypeEqual: true if the object is a registered biz stall. NotEqual: true if it is not. |
| --- |
| BaseObjectA GameObject (market stall object) whose registration status in a HouseholdBiz site is checked.CompareTypeEqual: true if the object is a registered biz stall. NotEqual: true if it is not. |
| CompareTypeEqual: true if the object is a registered biz stall. NotEqual: true if it is not. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self is a registered stall object in a biz siteSelfIsBizStallEqualCheck if Target is not a registered stall objectTargetIsBizStallNotEqualCheck if Self is currently a stall in any HouseholdBizSelfIsBizStallEqual |
| --- |
| Check if Self is a registered stall object in a biz siteSelfIsBizStallEqualCheck if Target is not a registered stall objectTargetIsBizStallNotEqualCheck if Self is currently a stall in any HouseholdBizSelfIsBizStallEqual |
| Check if Target is not a registered stall objectTargetIsBizStallNotEqualCheck if Self is currently a stall in any HouseholdBizSelfIsBizStallEqual |
| Check if Self is currently a stall in any HouseholdBizSelfIsBizStallEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoHousehold Biz & Restaurant[CanGiveTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangivetip)[CanSettleTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cansettletip)[CanStartFleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstartfleamarket)[CanStealTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstealtip)[CheckMarketStallSeller](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkmarketstallseller)[HasOperatingBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoperatingbizrole)[HasRegisteredPocketMarketSellingItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasregisteredpocketmarketsellingitem)[HasRestaurantDishBatchToCook](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrestaurantdishbatchtocook)[IsAssignedRestaurantSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isassignedrestaurantseat)[IsBizCapacityAvailable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizcapacityavailable)[IsBuyableAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbuyableattinyshop)[IsCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscustomersatisfaction)
