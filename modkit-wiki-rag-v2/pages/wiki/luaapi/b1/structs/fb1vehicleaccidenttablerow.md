---
document_id: "be93bf029ce955878a101565cb629e77441cac3468bfd42a6d476f004b059086"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1vehicleaccidenttablerow"
title: "FB1VehicleAccidentTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:46+00:00"
content_sha256: "1270a7c3dd372deef14b129500e04094536d4e8637ec1ec197be36e95cfae67a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1vehicleaccidenttablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining the outcome reactions for both the vehicle and its target in an accident scenario.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (9)

| NameTypeDescription`AutoSkipStartTime``number`Time in seconds before the auto-skip activates.`ImprisonmentScriptId``string`Script ID executed when the imprisonment caused by this accident is actually carried out.`PrisonEventRatio``number`Probability (0.0 to 1.0) that a prison event is triggered by this accident.`SelfReaction`[`EB1VehicleAccidentReactionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1vehicleaccidentreactiontype)Reaction type applied to the vehicle (self) in this accident scenario.`SkipTimeScale``number`Time scale applied during the skip playback.`StartScriptId``string`Script ID executed when this accident scenario starts.`TargetReaction`[`EB1VehicleAccidentReactionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1vehicleaccidentreactiontype)Reaction type applied to the collision target in this accident scenario.`bHandleCarAccidentLog``boolean`Whether a car accident log entry should be recorded for this scenario.`bUseAutoSkip``boolean`Whether the accident sequence can be auto-skipped after a delay. |
| --- |
| `AutoSkipStartTime``number`Time in seconds before the auto-skip activates.`ImprisonmentScriptId``string`Script ID executed when the imprisonment caused by this accident is actually carried out.`PrisonEventRatio``number`Probability (0.0 to 1.0) that a prison event is triggered by this accident.`SelfReaction`[`EB1VehicleAccidentReactionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1vehicleaccidentreactiontype)Reaction type applied to the vehicle (self) in this accident scenario.`SkipTimeScale``number`Time scale applied during the skip playback.`StartScriptId``string`Script ID executed when this accident scenario starts.`TargetReaction`[`EB1VehicleAccidentReactionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1vehicleaccidentreactiontype)Reaction type applied to the collision target in this accident scenario.`bHandleCarAccidentLog``boolean`Whether a car accident log entry should be recorded for this scenario.`bUseAutoSkip``boolean`Whether the accident sequence can be auto-skipped after a delay. |
| `ImprisonmentScriptId``string`Script ID executed when the imprisonment caused by this accident is actually carried out.`PrisonEventRatio``number`Probability (0.0 to 1.0) that a prison event is triggered by this accident.`SelfReaction`[`EB1VehicleAccidentReactionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1vehicleaccidentreactiontype)Reaction type applied to the vehicle (self) in this accident scenario.`SkipTimeScale``number`Time scale applied during the skip playback.`StartScriptId``string`Script ID executed when this accident scenario starts.`TargetReaction`[`EB1VehicleAccidentReactionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1vehicleaccidentreactiontype)Reaction type applied to the collision target in this accident scenario.`bHandleCarAccidentLog``boolean`Whether a car accident log entry should be recorded for this scenario.`bUseAutoSkip``boolean`Whether the accident sequence can be auto-skipped after a delay. |
| `PrisonEventRatio``number`Probability (0.0 to 1.0) that a prison event is triggered by this accident.`SelfReaction`[`EB1VehicleAccidentReactionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1vehicleaccidentreactiontype)Reaction type applied to the vehicle (self) in this accident scenario.`SkipTimeScale``number`Time scale applied during the skip playback.`StartScriptId``string`Script ID executed when this accident scenario starts.`TargetReaction`[`EB1VehicleAccidentReactionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1vehicleaccidentreactiontype)Reaction type applied to the collision target in this accident scenario.`bHandleCarAccidentLog``boolean`Whether a car accident log entry should be recorded for this scenario.`bUseAutoSkip``boolean`Whether the accident sequence can be auto-skipped after a delay. |
| `SelfReaction`[`EB1VehicleAccidentReactionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1vehicleaccidentreactiontype)Reaction type applied to the vehicle (self) in this accident scenario.`SkipTimeScale``number`Time scale applied during the skip playback.`StartScriptId``string`Script ID executed when this accident scenario starts.`TargetReaction`[`EB1VehicleAccidentReactionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1vehicleaccidentreactiontype)Reaction type applied to the collision target in this accident scenario.`bHandleCarAccidentLog``boolean`Whether a car accident log entry should be recorded for this scenario.`bUseAutoSkip``boolean`Whether the accident sequence can be auto-skipped after a delay. |
| `SkipTimeScale``number`Time scale applied during the skip playback.`StartScriptId``string`Script ID executed when this accident scenario starts.`TargetReaction`[`EB1VehicleAccidentReactionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1vehicleaccidentreactiontype)Reaction type applied to the collision target in this accident scenario.`bHandleCarAccidentLog``boolean`Whether a car accident log entry should be recorded for this scenario.`bUseAutoSkip``boolean`Whether the accident sequence can be auto-skipped after a delay. |
| `StartScriptId``string`Script ID executed when this accident scenario starts.`TargetReaction`[`EB1VehicleAccidentReactionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1vehicleaccidentreactiontype)Reaction type applied to the collision target in this accident scenario.`bHandleCarAccidentLog``boolean`Whether a car accident log entry should be recorded for this scenario.`bUseAutoSkip``boolean`Whether the accident sequence can be auto-skipped after a delay. |
| `TargetReaction`[`EB1VehicleAccidentReactionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1vehicleaccidentreactiontype)Reaction type applied to the collision target in this accident scenario.`bHandleCarAccidentLog``boolean`Whether a car accident log entry should be recorded for this scenario.`bUseAutoSkip``boolean`Whether the accident sequence can be auto-skipped after a delay. |
| `bHandleCarAccidentLog``boolean`Whether a car accident log entry should be recorded for this scenario.`bUseAutoSkip``boolean`Whether the accident sequence can be auto-skipped after a delay. |
| `bUseAutoSkip``boolean`Whether the accident sequence can be auto-skipped after a delay. |
