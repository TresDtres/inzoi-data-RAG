---
document_id: "c59452b068286ad4a2958ea8a29289da970960046888d02e46f82c5c8088e251"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1mobilecalldataasset"
title: "UB1MobileCallDataAsset"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:37:55+00:00"
content_sha256: "96a1cbb18fb3725fc7e2fa1f29d58b6ed0c65d985a116caf8755f028e4a1d76b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1mobilecalldataasset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data asset containing global configuration for the mobile call system. Defines call interactions, callable growth step, and receive call time window.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| Category`classes`Extends`UB1DataAssetBase` |
| Extends`UB1DataAssetBase` |

# Properties (8)

| NameTypeDescription`MinCallableGrowthStep`[`EB1GrowthStep`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1growthstep)Minimum growth step required for a character to be able to make or receive calls.`MinReceiveCallDistance``number`Minimum distance (cm) between caller and receiver to allow an incoming call.`RandomCallChancePerMinute``number`Chance per in-game minute to trigger a random incoming call (0.0 ~ 1.0).`ReceiveCallEndHour``integer`End hour of the day (0-23) during which the player can receive system-triggered calls.`ReceiveCallInteractionBagId``string`Self interaction played when the player accepts an incoming call.`ReceiveCallStartHour``integer`Start hour of the day (0-23) during which the player can receive system-triggered calls.`RingDurationMinutes``integer`Duration in in-game minutes that an incoming call will ring before being missed.`SendCallInteractionBagId``string`Self interaction played when the player initiates an outgoing call. |
| --- |
| `MinCallableGrowthStep`[`EB1GrowthStep`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1growthstep)Minimum growth step required for a character to be able to make or receive calls.`MinReceiveCallDistance``number`Minimum distance (cm) between caller and receiver to allow an incoming call.`RandomCallChancePerMinute``number`Chance per in-game minute to trigger a random incoming call (0.0 ~ 1.0).`ReceiveCallEndHour``integer`End hour of the day (0-23) during which the player can receive system-triggered calls.`ReceiveCallInteractionBagId``string`Self interaction played when the player accepts an incoming call.`ReceiveCallStartHour``integer`Start hour of the day (0-23) during which the player can receive system-triggered calls.`RingDurationMinutes``integer`Duration in in-game minutes that an incoming call will ring before being missed.`SendCallInteractionBagId``string`Self interaction played when the player initiates an outgoing call. |
| `MinReceiveCallDistance``number`Minimum distance (cm) between caller and receiver to allow an incoming call.`RandomCallChancePerMinute``number`Chance per in-game minute to trigger a random incoming call (0.0 ~ 1.0).`ReceiveCallEndHour``integer`End hour of the day (0-23) during which the player can receive system-triggered calls.`ReceiveCallInteractionBagId``string`Self interaction played when the player accepts an incoming call.`ReceiveCallStartHour``integer`Start hour of the day (0-23) during which the player can receive system-triggered calls.`RingDurationMinutes``integer`Duration in in-game minutes that an incoming call will ring before being missed.`SendCallInteractionBagId``string`Self interaction played when the player initiates an outgoing call. |
| `RandomCallChancePerMinute``number`Chance per in-game minute to trigger a random incoming call (0.0 ~ 1.0).`ReceiveCallEndHour``integer`End hour of the day (0-23) during which the player can receive system-triggered calls.`ReceiveCallInteractionBagId``string`Self interaction played when the player accepts an incoming call.`ReceiveCallStartHour``integer`Start hour of the day (0-23) during which the player can receive system-triggered calls.`RingDurationMinutes``integer`Duration in in-game minutes that an incoming call will ring before being missed.`SendCallInteractionBagId``string`Self interaction played when the player initiates an outgoing call. |
| `ReceiveCallEndHour``integer`End hour of the day (0-23) during which the player can receive system-triggered calls.`ReceiveCallInteractionBagId``string`Self interaction played when the player accepts an incoming call.`ReceiveCallStartHour``integer`Start hour of the day (0-23) during which the player can receive system-triggered calls.`RingDurationMinutes``integer`Duration in in-game minutes that an incoming call will ring before being missed.`SendCallInteractionBagId``string`Self interaction played when the player initiates an outgoing call. |
| `ReceiveCallInteractionBagId``string`Self interaction played when the player accepts an incoming call.`ReceiveCallStartHour``integer`Start hour of the day (0-23) during which the player can receive system-triggered calls.`RingDurationMinutes``integer`Duration in in-game minutes that an incoming call will ring before being missed.`SendCallInteractionBagId``string`Self interaction played when the player initiates an outgoing call. |
| `ReceiveCallStartHour``integer`Start hour of the day (0-23) during which the player can receive system-triggered calls.`RingDurationMinutes``integer`Duration in in-game minutes that an incoming call will ring before being missed.`SendCallInteractionBagId``string`Self interaction played when the player initiates an outgoing call. |
| `RingDurationMinutes``integer`Duration in in-game minutes that an incoming call will ring before being missed.`SendCallInteractionBagId``string`Self interaction played when the player initiates an outgoing call. |
| `SendCallInteractionBagId``string`Self interaction played when the player initiates an outgoing call. |
