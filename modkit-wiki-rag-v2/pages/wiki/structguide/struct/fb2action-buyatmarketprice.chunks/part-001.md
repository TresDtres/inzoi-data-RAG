---
document_id: "deb63c55fb739167989ed6e2bade45fd3821b754f4f6723345ebe7ce2d7cf0e3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-buyatmarketprice"
title: "B2Action_BuyAtMarketPrice"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:30+00:00"
content_sha256: "0dd4ca024a822f2d27d6612282c2034b3a229a32cc29f5947ebe63f33c060679"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/structguide/struct/fb2action-buyatmarketprice"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Handles purchasing an object or stock at the current market price, opening a numeric popup UI so the buyer can pick a quantity before executing the purchase. * =============== * Param: * S1: purchase type (e.g. Object or Stock) * S2: purchase target data table id * F1: - * F2: - * Note: * OnInit(): reads BuyType/BuyTypeDtId from the action params. * OnPlay(): opens a numeric popup UI for the player to input the purchase quantity. * The popup is only shown when the buyer is the possessed zoi. For anyone else it is skipped and the purchase * runs with a fixed quantity of 1, failing the action when the buyer cannot afford it or has no inventory room. * OnTick(): finishes once BuyCount has been set by the UI (>= 0). * OnFinish(): executes BuyObject/BuyStock depending on BuyType, or does nothing when no quantity was purchased (count <= 0).
