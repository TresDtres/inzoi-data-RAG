---
document_id: "6e52ae430c64261348175d4358e8edd198ead80db6bfd66ec96ca9763064e9c1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkmarketstallseller"
title: "Condition_CheckMarketStallSeller"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:53+00:00"
content_sha256: "25960b263f59a274b5e917246141bf477690b506a49b70fc50282dddcf24f608"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-checkmarketstallseller"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject is the seller of the NonBaseObject market stall. If S1 is AllowNoSeller, also returns true when the stall has no current owner.

# Parameters

| ParameterDescriptionBaseObjectThe character to check as the seller of the market stall.CompareTypeSupported compare types: Equal, NotEqual.S1AllowNoSeller: if specified, also returns true when the stall has no current owner. |
| --- |
| BaseObjectThe character to check as the seller of the market stall.CompareTypeSupported compare types: Equal, NotEqual.S1AllowNoSeller: if specified, also returns true when the stall has no current owner. |
| CompareTypeSupported compare types: Equal, NotEqual.S1AllowNoSeller: if specified, also returns true when the stall has no current owner. |
| S1AllowNoSeller: if specified, also returns true when the stall has no current owner. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self is the seller of this market stallSelfCheckMarketStallSellerEqualCheck if Self is not the seller of this market stallSelfCheckMarketStallSellerNotEqualCheck if Target is the seller of this market stallTargetCheckMarketStallSellerEqual |
| --- |
| Check if Self is the seller of this market stallSelfCheckMarketStallSellerEqualCheck if Self is not the seller of this market stallSelfCheckMarketStallSellerNotEqualCheck if Target is the seller of this market stallTargetCheckMarketStallSellerEqual |
| Check if Self is not the seller of this market stallSelfCheckMarketStallSellerNotEqualCheck if Target is the seller of this market stallTargetCheckMarketStallSellerEqual |
| Check if Target is the seller of this market stallTargetCheckMarketStallSellerEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoHousehold Biz & Restaurant[CanGiveTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangivetip)[CanSettleTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cansettletip)[CanStartFleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstartfleamarket)[CanStealTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstealtip)[HasOperatingBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoperatingbizrole)[HasRegisteredPocketMarketSellingItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasregisteredpocketmarketsellingitem)[HasRestaurantDishBatchToCook](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrestaurantdishbatchtocook)[IsAssignedRestaurantSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isassignedrestaurantseat)[IsBizCapacityAvailable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizcapacityavailable)[IsBizStall](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizstall)[IsBuyableAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbuyableattinyshop)[IsCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscustomersatisfaction)
