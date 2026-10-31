---
document_id: "acec0863c09e7ce89d2d2b043b7ea8a31b5e20732939c7d0e992cb78c957e436"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/actions/fb1socialeventactionstatedata"
title: "FB1SocialEventActionStateData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:27+00:00"
content_sha256: "0cc490ab04ff0c9c97fd63008f51db9db4f7be933423050818f5c7d2989c6d6f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/actions/fb1socialeventactionstatedata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores the runtime state of a single action within a social event, including its interaction and play state.

# Metadata

| FieldValueKind`action`EnvironmentB1 - PresentationCategory`actions` |
| --- |
| Kind`action`EnvironmentB1 - PresentationCategory`actions` |
| EnvironmentB1 - PresentationCategory`actions` |
| Category`actions` |

# Properties (6)

| NameTypeDescription`ActionId``string`The unique identifier for this action.`AntionRoleTextId``string`The TextId of the role performing this action. Resolved to FText on the GameThread (UI).`InteractionBagId``string`The interaction bag ID associated with this action.`InteractionTargetInfo`[`FB1SocialEventInteractionTargetInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1socialeventinteractiontargetinfo)The target information specifying who or what this action applies to.`NeedPlaceObjectDtId``string`The data table ID of the object required for this action's location.`State`[`EB1SocialEventActionState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1socialeventactionstate)The current play state of this action. |
| --- |
| `ActionId``string`The unique identifier for this action.`AntionRoleTextId``string`The TextId of the role performing this action. Resolved to FText on the GameThread (UI).`InteractionBagId``string`The interaction bag ID associated with this action.`InteractionTargetInfo`[`FB1SocialEventInteractionTargetInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1socialeventinteractiontargetinfo)The target information specifying who or what this action applies to.`NeedPlaceObjectDtId``string`The data table ID of the object required for this action's location.`State`[`EB1SocialEventActionState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1socialeventactionstate)The current play state of this action. |
| `AntionRoleTextId``string`The TextId of the role performing this action. Resolved to FText on the GameThread (UI).`InteractionBagId``string`The interaction bag ID associated with this action.`InteractionTargetInfo`[`FB1SocialEventInteractionTargetInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1socialeventinteractiontargetinfo)The target information specifying who or what this action applies to.`NeedPlaceObjectDtId``string`The data table ID of the object required for this action's location.`State`[`EB1SocialEventActionState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1socialeventactionstate)The current play state of this action. |
| `InteractionBagId``string`The interaction bag ID associated with this action.`InteractionTargetInfo`[`FB1SocialEventInteractionTargetInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1socialeventinteractiontargetinfo)The target information specifying who or what this action applies to.`NeedPlaceObjectDtId``string`The data table ID of the object required for this action's location.`State`[`EB1SocialEventActionState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1socialeventactionstate)The current play state of this action. |
| `InteractionTargetInfo`[`FB1SocialEventInteractionTargetInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1socialeventinteractiontargetinfo)The target information specifying who or what this action applies to.`NeedPlaceObjectDtId``string`The data table ID of the object required for this action's location.`State`[`EB1SocialEventActionState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1socialeventactionstate)The current play state of this action. |
| `NeedPlaceObjectDtId``string`The data table ID of the object required for this action's location.`State`[`EB1SocialEventActionState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1socialeventactionstate)The current play state of this action. |
| `State`[`EB1SocialEventActionState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1socialeventactionstate)The current play state of this action. |
