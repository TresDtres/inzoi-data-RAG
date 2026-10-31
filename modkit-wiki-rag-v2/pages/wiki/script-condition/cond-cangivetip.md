---
document_id: "9078230113277bdeade439a735046ab8d072368355bb86436196b013b3e82311"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangivetip"
title: "Condition_CanGiveTip"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:48+00:00"
content_sha256: "18389280471e9748925c587cc6bf1b648a74a428483dffc2c60ffcde4d90b6e8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-cangivetip"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject customer is eligible to give a tip at the HouseholdBiz site they are currently located at. Eligibility is determined by the HouseholdBiz's CanCustomerGiveTip logic (e.g., tip cooldown, biz state).

# Parameters

| ParameterDescriptionBaseObjectThe customer character attempting to give a tipCompareTypeEqual: returns true if the customer can give a tip; NotEqual: otherwise |
| --- |
| BaseObjectThe customer character attempting to give a tipCompareTypeEqual: returns true if the customer can give a tip; NotEqual: otherwise |
| CompareTypeEqual: returns true if the customer can give a tip; NotEqual: otherwise |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if customer is eligible to give a tipSelfCanGiveTipEqualCheck if customer cannot give a tip (e.g., on cooldown)SelfCanGiveTipNotEqual |
| --- |
| Check if customer is eligible to give a tipSelfCanGiveTipEqualCheck if customer cannot give a tip (e.g., on cooldown)SelfCanGiveTipNotEqual |
| Check if customer cannot give a tip (e.g., on cooldown)SelfCanGiveTipNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoHousehold Biz & Restaurant[CanSettleTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cansettletip)[CanStartFleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstartfleamarket)[CanStealTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstealtip)[CheckMarketStallSeller](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkmarketstallseller)[HasOperatingBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoperatingbizrole)[HasRegisteredPocketMarketSellingItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasregisteredpocketmarketsellingitem)[HasRestaurantDishBatchToCook](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrestaurantdishbatchtocook)[IsAssignedRestaurantSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isassignedrestaurantseat)[IsBizCapacityAvailable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizcapacityavailable)[IsBizStall](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizstall)[IsBuyableAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbuyableattinyshop)[IsCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscustomersatisfaction)
