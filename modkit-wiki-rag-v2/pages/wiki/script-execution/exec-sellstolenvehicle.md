---
document_id: "cdc2410144b2de8ab1c326dad052cedd0d838716e03768c3aa97c0e411de7024"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-sellstolenvehicle"
title: "Execute_SellStolenVehicle"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:51+00:00"
content_sha256: "b6fbe408aa41d2a592058f05a13f5a44fde58f98ab53f8022be76b43fcf12fcf"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-sellstolenvehicle"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Sells a stolen vehicle. Gets the vehicle from ScriptContext Target (the vehicle being interacted with). Calculates sell price as vehicle's original price * F1, adds currency to Self, and destroys the vehicle entity. Designed to run AFTER ExitVehicle action (character has already exited).

# Parameters

| ParameterDescriptionBaseObjectSelf (the character selling the vehicle).F1Sell price ratio (e.g. 0.15 = 15% of original price). |
| --- |
| BaseObjectSelf (the character selling the vehicle).F1Sell price ratio (e.g. 0.15 = 15% of original price). |
| F1Sell price ratio (e.g. 0.15 = 15% of original price). |

# Examples

| DescriptionBaseObjectCommandF1Sell stolen vehicle at 15% of original price.SelfSellStolenVehicle0.15Sell stolen vehicle at 10% of original price (repeat).SelfSellStolenVehicle0.1 |
| --- |
| Sell stolen vehicle at 15% of original price.SelfSellStolenVehicle0.15Sell stolen vehicle at 10% of original price (repeat).SelfSellStolenVehicle0.1 |
| Sell stolen vehicle at 10% of original price (repeat).SelfSellStolenVehicle0.1 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoVehicle[FreezeVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-freezevehicle)[ReturnToParkingPlace](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-returntoparkingplace)[UnfreezeVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-unfreezevehicle)
