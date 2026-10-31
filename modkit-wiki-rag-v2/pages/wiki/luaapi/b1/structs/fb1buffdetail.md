---
document_id: "b15e45a86f18192f638187463cfc2bc9fc5bb7060fc6d9590d67245be7839e76"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1buffdetail"
title: "FB1BuffDetail"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:13+00:00"
content_sha256: "058ccd17aca612fe49ff0615df914d218672617c3a477735a25e663387f31c5c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1buffdetail"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores contextual detail about how and why a buff was applied to an entity, including the initiator, interaction bag, script reason, and create reason.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`CreateBuffReason`[`EB1BuffCreateReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1buffcreatereason)Reason category describing how this buff was created.`Initiator`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character who initiated this buff.`InitiatorObjectId``string`Object data table ID of the Initiator, captured at buff creation time so its display name can be resolved even after the Initiator despawns. Empty when the Initiator is not a game object.`InteractionBagId``string`Interaction bag ID that triggered this buff.`Reason`[`EB1ScriptReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1scriptreason)Script reason describing the context in which this buff was applied.`TextParameter``string`Data ID used to resolve a localized text parameter for the buff reason. |
| --- |
| `CreateBuffReason`[`EB1BuffCreateReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1buffcreatereason)Reason category describing how this buff was created.`Initiator`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character who initiated this buff.`InitiatorObjectId``string`Object data table ID of the Initiator, captured at buff creation time so its display name can be resolved even after the Initiator despawns. Empty when the Initiator is not a game object.`InteractionBagId``string`Interaction bag ID that triggered this buff.`Reason`[`EB1ScriptReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1scriptreason)Script reason describing the context in which this buff was applied.`TextParameter``string`Data ID used to resolve a localized text parameter for the buff reason. |
| `Initiator`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character who initiated this buff.`InitiatorObjectId``string`Object data table ID of the Initiator, captured at buff creation time so its display name can be resolved even after the Initiator despawns. Empty when the Initiator is not a game object.`InteractionBagId``string`Interaction bag ID that triggered this buff.`Reason`[`EB1ScriptReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1scriptreason)Script reason describing the context in which this buff was applied.`TextParameter``string`Data ID used to resolve a localized text parameter for the buff reason. |
| `InitiatorObjectId``string`Object data table ID of the Initiator, captured at buff creation time so its display name can be resolved even after the Initiator despawns. Empty when the Initiator is not a game object.`InteractionBagId``string`Interaction bag ID that triggered this buff.`Reason`[`EB1ScriptReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1scriptreason)Script reason describing the context in which this buff was applied.`TextParameter``string`Data ID used to resolve a localized text parameter for the buff reason. |
| `InteractionBagId``string`Interaction bag ID that triggered this buff.`Reason`[`EB1ScriptReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1scriptreason)Script reason describing the context in which this buff was applied.`TextParameter``string`Data ID used to resolve a localized text parameter for the buff reason. |
| `Reason`[`EB1ScriptReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1scriptreason)Script reason describing the context in which this buff was applied.`TextParameter``string`Data ID used to resolve a localized text parameter for the buff reason. |
| `TextParameter``string`Data ID used to resolve a localized text parameter for the buff reason. |
