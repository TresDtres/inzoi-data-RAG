---
document_id: "07653829023f833055a12e2186d4efd4d7f025de8bf7907a7c685210b3e97b68"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1marketpricedisasterchangerate"
title: "FB1MarketPriceDisasterChangeRate"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:25+00:00"
content_sha256: "4cb871a8a3937a46293ee159778154a8c051006170c2a7ee3110fb938f1d2c3a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1marketpricedisasterchangerate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Structure that defines market price change rates caused by a disaster event. Specifies the disaster ID, initial price change rate, and daily recovery change rate.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`DailyChangeRateBeforeRecovery``number`Daily price change rate applied each day until the market recovers from the disaster.`DisasterId``string`ID of the disaster (Weather.Id) that triggers this price change.`InitChangeRate``number`Initial price change rate applied when the disaster occurs. |
| --- |
| `DailyChangeRateBeforeRecovery``number`Daily price change rate applied each day until the market recovers from the disaster.`DisasterId``string`ID of the disaster (Weather.Id) that triggers this price change.`InitChangeRate``number`Initial price change rate applied when the disaster occurs. |
| `DisasterId``string`ID of the disaster (Weather.Id) that triggers this price change.`InitChangeRate``number`Initial price change rate applied when the disaster occurs. |
| `InitChangeRate``number`Initial price change rate applied when the disaster occurs. |
