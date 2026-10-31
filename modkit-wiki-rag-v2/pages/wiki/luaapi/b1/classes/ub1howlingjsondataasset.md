---
document_id: "0c2db69ce04d7e9d420f085c2be79e2bb503baac624ee70ba17992a585aea519"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1howlingjsondataasset"
title: "UB1HowlingJsonDataAsset"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:37:44+00:00"
content_sha256: "394ded2ab69dac5c4ad891fef94c8e957a731b0ed63a083631dccc02b1533a14"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1howlingjsondataasset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data asset defining global howling system configuration, including the AOI radius for target collection, the distance filter radius, and tags that prevent interaction cancellation.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| Category`classes`Extends`UB1DataAssetBase` |
| Extends`UB1DataAssetBase` |

# Properties (5)

| NameTypeDescription`FailCooldownMinutes``number`Cooldown duration (in game minutes) applied when a howling-triggered interaction fails due to movement issues (CharacterOverlap, FailedMoveOver, etc.).`HowlingCannotCancelInteractionBagTag``string`Interaction bag tag that prevents an ongoing interaction from being cancelled by a howling event.`LowPriorityHowlingIdList``table<string, boolean>`Howling ids treated as low priority. They are never received while the target is playing an interaction.`TargetAOIRadius``integer`AOI grid radius used to collect candidate howling targets (n = (n+5)m of distance).`TargetDistanceRadius``number`Additional distance filter radius (unreal units) applied after AOI collection. |
| --- |
| `FailCooldownMinutes``number`Cooldown duration (in game minutes) applied when a howling-triggered interaction fails due to movement issues (CharacterOverlap, FailedMoveOver, etc.).`HowlingCannotCancelInteractionBagTag``string`Interaction bag tag that prevents an ongoing interaction from being cancelled by a howling event.`LowPriorityHowlingIdList``table<string, boolean>`Howling ids treated as low priority. They are never received while the target is playing an interaction.`TargetAOIRadius``integer`AOI grid radius used to collect candidate howling targets (n = (n+5)m of distance).`TargetDistanceRadius``number`Additional distance filter radius (unreal units) applied after AOI collection. |
| `HowlingCannotCancelInteractionBagTag``string`Interaction bag tag that prevents an ongoing interaction from being cancelled by a howling event.`LowPriorityHowlingIdList``table<string, boolean>`Howling ids treated as low priority. They are never received while the target is playing an interaction.`TargetAOIRadius``integer`AOI grid radius used to collect candidate howling targets (n = (n+5)m of distance).`TargetDistanceRadius``number`Additional distance filter radius (unreal units) applied after AOI collection. |
| `LowPriorityHowlingIdList``table<string, boolean>`Howling ids treated as low priority. They are never received while the target is playing an interaction.`TargetAOIRadius``integer`AOI grid radius used to collect candidate howling targets (n = (n+5)m of distance).`TargetDistanceRadius``number`Additional distance filter radius (unreal units) applied after AOI collection. |
| `TargetAOIRadius``integer`AOI grid radius used to collect candidate howling targets (n = (n+5)m of distance).`TargetDistanceRadius``number`Additional distance filter radius (unreal units) applied after AOI collection. |
| `TargetDistanceRadius``number`Additional distance filter radius (unreal units) applied after AOI collection. |
