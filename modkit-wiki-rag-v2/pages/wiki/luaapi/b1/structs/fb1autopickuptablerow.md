---
document_id: "b239f39d99a75ca0bd8b041611e14464e4f4d3d8d7f6c4d8151838cc9d833e27"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1autopickuptablerow"
title: "FB1AutoPickupTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:10+00:00"
content_sha256: "7387e46afafd027d00010dd5e9f6c5288d55cf19149728fabf5a15ab61a8f8b1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1autopickuptablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Aggro auto-pickup policy data - defines the policy for holding a nearby/inventory object during an aggro chase. Referenced from the Reason row (FB1AggroTableRow) in Aggro.json via AutoPickupId (FK). If AutoPickupId is NAME_None, that Reason does no auto-pickup (uses aggro/chase but turns off pickup only). The actual pickup is done by a single location-agnostic InteractionBag (a code constant). Once ResolvePickupObject injects the chosen target entity, the Bag's SequenceStartInfos branches into bag (GrabInventoryObject) / world (PickUp) entry.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (3)

| NameTypeDescription`DefaultPickupProbability``number`Base pickup probability (0-1). Weighted by Modifier (EB1ModifierType::AggroAutoPickup) then clamped to [0,1].`PickupTargetType`[`EB1PickupTargetType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1pickuptargettype)What to pick up and from where. (The per-location pickup-action branching is handled by the Bag.)`S1``string`Parameter per PickupTargetType. ObjectId family = Object Id, ObjectTag family = tag, Any family = unused. |
| --- |
| `DefaultPickupProbability``number`Base pickup probability (0-1). Weighted by Modifier (EB1ModifierType::AggroAutoPickup) then clamped to [0,1].`PickupTargetType`[`EB1PickupTargetType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1pickuptargettype)What to pick up and from where. (The per-location pickup-action branching is handled by the Bag.)`S1``string`Parameter per PickupTargetType. ObjectId family = Object Id, ObjectTag family = tag, Any family = unused. |
| `PickupTargetType`[`EB1PickupTargetType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1pickuptargettype)What to pick up and from where. (The per-location pickup-action branching is handled by the Bag.)`S1``string`Parameter per PickupTargetType. ObjectId family = Object Id, ObjectTag family = tag, Any family = unused. |
| `S1``string`Parameter per PickupTargetType. ObjectId family = Object Id, ObjectTag family = tag, Any family = unused. |
