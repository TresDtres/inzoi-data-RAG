---
document_id: "3075b844269d9e7394275889e65b03748d115390117f30aaaed000b854b74f10"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1householdbiztipconfig"
title: "FB1HouseholdBizTipConfig"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:09+00:00"
content_sha256: "b75a4086671737bf42200a57a5297837b9c500135dc5ae6c60f2d66d604da25f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1householdbiztipconfig"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Configuration for the tip system, defining base tip amounts, bottle capacity, satisfaction bonus rate, dialog tip range, and per-level multiplier data.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (8)

| NameTypeDescription`BaseTipCapacity``integer`Default maximum amount the tip bottle can hold.`BaseTipMax``integer`Maximum tip amount placed by a customer per visit.`BaseTipMin``integer`Minimum tip amount placed by a customer per visit.`DialogTipMax``integer`Maximum tip amount received through dialogue interactions.`DialogTipMin``integer`Minimum tip amount received through dialogue interactions.`LevelMultipliers``FB1TipLevelMultiplier[]`Per-level tip amount and capacity multiplier entries.`RestaurantPaymentTipRate``number`Restaurant payment tip rate, separate from the tip jar's random tip (0.1 = 10%).`SatisfactionBonusRate``number`Additional tip ratio granted when a satisfaction score threshold is reached (0.1 = 10%). |
| --- |
| `BaseTipCapacity``integer`Default maximum amount the tip bottle can hold.`BaseTipMax``integer`Maximum tip amount placed by a customer per visit.`BaseTipMin``integer`Minimum tip amount placed by a customer per visit.`DialogTipMax``integer`Maximum tip amount received through dialogue interactions.`DialogTipMin``integer`Minimum tip amount received through dialogue interactions.`LevelMultipliers``FB1TipLevelMultiplier[]`Per-level tip amount and capacity multiplier entries.`RestaurantPaymentTipRate``number`Restaurant payment tip rate, separate from the tip jar's random tip (0.1 = 10%).`SatisfactionBonusRate``number`Additional tip ratio granted when a satisfaction score threshold is reached (0.1 = 10%). |
| `BaseTipMax``integer`Maximum tip amount placed by a customer per visit.`BaseTipMin``integer`Minimum tip amount placed by a customer per visit.`DialogTipMax``integer`Maximum tip amount received through dialogue interactions.`DialogTipMin``integer`Minimum tip amount received through dialogue interactions.`LevelMultipliers``FB1TipLevelMultiplier[]`Per-level tip amount and capacity multiplier entries.`RestaurantPaymentTipRate``number`Restaurant payment tip rate, separate from the tip jar's random tip (0.1 = 10%).`SatisfactionBonusRate``number`Additional tip ratio granted when a satisfaction score threshold is reached (0.1 = 10%). |
| `BaseTipMin``integer`Minimum tip amount placed by a customer per visit.`DialogTipMax``integer`Maximum tip amount received through dialogue interactions.`DialogTipMin``integer`Minimum tip amount received through dialogue interactions.`LevelMultipliers``FB1TipLevelMultiplier[]`Per-level tip amount and capacity multiplier entries.`RestaurantPaymentTipRate``number`Restaurant payment tip rate, separate from the tip jar's random tip (0.1 = 10%).`SatisfactionBonusRate``number`Additional tip ratio granted when a satisfaction score threshold is reached (0.1 = 10%). |
| `DialogTipMax``integer`Maximum tip amount received through dialogue interactions.`DialogTipMin``integer`Minimum tip amount received through dialogue interactions.`LevelMultipliers``FB1TipLevelMultiplier[]`Per-level tip amount and capacity multiplier entries.`RestaurantPaymentTipRate``number`Restaurant payment tip rate, separate from the tip jar's random tip (0.1 = 10%).`SatisfactionBonusRate``number`Additional tip ratio granted when a satisfaction score threshold is reached (0.1 = 10%). |
| `DialogTipMin``integer`Minimum tip amount received through dialogue interactions.`LevelMultipliers``FB1TipLevelMultiplier[]`Per-level tip amount and capacity multiplier entries.`RestaurantPaymentTipRate``number`Restaurant payment tip rate, separate from the tip jar's random tip (0.1 = 10%).`SatisfactionBonusRate``number`Additional tip ratio granted when a satisfaction score threshold is reached (0.1 = 10%). |
| `LevelMultipliers``FB1TipLevelMultiplier[]`Per-level tip amount and capacity multiplier entries.`RestaurantPaymentTipRate``number`Restaurant payment tip rate, separate from the tip jar's random tip (0.1 = 10%).`SatisfactionBonusRate``number`Additional tip ratio granted when a satisfaction score threshold is reached (0.1 = 10%). |
| `RestaurantPaymentTipRate``number`Restaurant payment tip rate, separate from the tip jar's random tip (0.1 = 10%).`SatisfactionBonusRate``number`Additional tip ratio granted when a satisfaction score threshold is reached (0.1 = 10%). |
| `SatisfactionBonusRate``number`Additional tip ratio granted when a satisfaction score threshold is reached (0.1 = 10%). |
