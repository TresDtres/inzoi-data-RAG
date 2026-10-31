---
document_id: "d88db29d5ad121547be795611c6055dcf15582624a8e9b134f211395621ba6bc"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1playernaviupdateinfo"
title: "FB1PlayerNaviUpdateInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:02+00:00"
content_sha256: "0fa85a25e527fb1219d0569db0fc06fd6c80e32c98f1b2f62da505f219782127"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1playernaviupdateinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Per-entity navigation update data sent from B2 to B1 via packet. Contains position and interaction info needed for the PlayerNavi widget.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity whose navigation state this update describes.`InteractionBagDtId``string`InteractionBag data table ID of the current interaction.`InteractionQueueId``integer`Queue ID of the interaction the entity is currently running, or -1 when none.`Location``FVector`Current world location of the entity.`PickedEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Target entity picked by the current interaction, if any.`StatId``string`Stat associated with the current interaction. |
| --- |
| `EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity whose navigation state this update describes.`InteractionBagDtId``string`InteractionBag data table ID of the current interaction.`InteractionQueueId``integer`Queue ID of the interaction the entity is currently running, or -1 when none.`Location``FVector`Current world location of the entity.`PickedEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Target entity picked by the current interaction, if any.`StatId``string`Stat associated with the current interaction. |
| `InteractionBagDtId``string`InteractionBag data table ID of the current interaction.`InteractionQueueId``integer`Queue ID of the interaction the entity is currently running, or -1 when none.`Location``FVector`Current world location of the entity.`PickedEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Target entity picked by the current interaction, if any.`StatId``string`Stat associated with the current interaction. |
| `InteractionQueueId``integer`Queue ID of the interaction the entity is currently running, or -1 when none.`Location``FVector`Current world location of the entity.`PickedEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Target entity picked by the current interaction, if any.`StatId``string`Stat associated with the current interaction. |
| `Location``FVector`Current world location of the entity.`PickedEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Target entity picked by the current interaction, if any.`StatId``string`Stat associated with the current interaction. |
| `PickedEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Target entity picked by the current interaction, if any.`StatId``string`Stat associated with the current interaction. |
| `StatId``string`Stat associated with the current interaction. |
