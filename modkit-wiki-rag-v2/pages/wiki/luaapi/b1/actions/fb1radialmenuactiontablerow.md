---
document_id: "2db69c40d03670291271af1b8f3760e5c1426ff71909ef5041a24332bc891e7f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/actions/fb1radialmenuactiontablerow"
title: "FB1RadialMenuActionTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:26+00:00"
content_sha256: "e18377b4d260bea4565642bb1af09da99288c2c889dc3c1072b2cf565f66b78b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/actions/fb1radialmenuactiontablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining a single radial menu action, including its icon, display texts, and execution handler names.

# Metadata

| FieldValueKind`action`EnvironmentB1 - PresentationCategory`actions`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`action`EnvironmentB1 - PresentationCategory`actions`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`actions`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`actions`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (10)

| NameTypeDescription`Category`[`EB1RadialMenuActionCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1radialmenuactioncategory)Category tab classification shown in the customization UI.`DescTextId``string`The text ID for the description text of this radial menu action.`ExecuteHandler``string`The name of the handler function executed when this action is triggered.`GetStateHandler``string`The name of the handler function used to retrieve the current state of this action.`Icon``UObject`The icon asset displayed for this radial menu action.`InteractionBagId``string`The InteractionBag.Id (BagId) used when bUseInteractionBag == true.`SupportedGroupTypes``EB1RadialMenuGroupType[]`List of modes this action can be placed in (PlayMode, BuildMode, etc.).`TitleTextId``string`The text ID for the title label of this radial menu action.`UseUIFocusMode``boolean`Whether to switch to UIFocusMode after executing this action; if false, switches to ControlMode.`bUseInteractionBag``boolean`If true, performs the action by enqueuing InteractionBagId into the interaction queue instead of using the ExecuteHandler. |
| --- |
| `Category`[`EB1RadialMenuActionCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1radialmenuactioncategory)Category tab classification shown in the customization UI.`DescTextId``string`The text ID for the description text of this radial menu action.`ExecuteHandler``string`The name of the handler function executed when this action is triggered.`GetStateHandler``string`The name of the handler function used to retrieve the current state of this action.`Icon``UObject`The icon asset displayed for this radial menu action.`InteractionBagId``string`The InteractionBag.Id (BagId) used when bUseInteractionBag == true.`SupportedGroupTypes``EB1RadialMenuGroupType[]`List of modes this action can be placed in (PlayMode, BuildMode, etc.).`TitleTextId``string`The text ID for the title label of this radial menu action.`UseUIFocusMode``boolean`Whether to switch to UIFocusMode after executing this action; if false, switches to ControlMode.`bUseInteractionBag``boolean`If true, performs the action by enqueuing InteractionBagId into the interaction queue instead of using the ExecuteHandler. |
| `DescTextId``string`The text ID for the description text of this radial menu action.`ExecuteHandler``string`The name of the handler function executed when this action is triggered.`GetStateHandler``string`The name of the handler function used to retrieve the current state of this action.`Icon``UObject`The icon asset displayed for this radial menu action.`InteractionBagId``string`The InteractionBag.Id (BagId) used when bUseInteractionBag == true.`SupportedGroupTypes``EB1RadialMenuGroupType[]`List of modes this action can be placed in (PlayMode, BuildMode, etc.).`TitleTextId``string`The text ID for the title label of this radial menu action.`UseUIFocusMode``boolean`Whether to switch to UIFocusMode after executing this action; if false, switches to ControlMode.`bUseInteractionBag``boolean`If true, performs the action by enqueuing InteractionBagId into the interaction queue instead of using the ExecuteHandler. |
| `ExecuteHandler``string`The name of the handler function executed when this action is triggered.`GetStateHandler``string`The name of the handler function used to retrieve the current state of this action.`Icon``UObject`The icon asset displayed for this radial menu action.`InteractionBagId``string`The InteractionBag.Id (BagId) used when bUseInteractionBag == true.`SupportedGroupTypes``EB1RadialMenuGroupType[]`List of modes this action can be placed in (PlayMode, BuildMode, etc.).`TitleTextId``string`The text ID for the title label of this radial menu action.`UseUIFocusMode``boolean`Whether to switch to UIFocusMode after executing this action; if false, switches to ControlMode.`bUseInteractionBag``boolean`If true, performs the action by enqueuing InteractionBagId into the interaction queue instead of using the ExecuteHandler. |
| `GetStateHandler``string`The name of the handler function used to retrieve the current state of this action.`Icon``UObject`The icon asset displayed for this radial menu action.`InteractionBagId``string`The InteractionBag.Id (BagId) used when bUseInteractionBag == true.`SupportedGroupTypes``EB1RadialMenuGroupType[]`List of modes this action can be placed in (PlayMode, BuildMode, etc.).`TitleTextId``string`The text ID for the title label of this radial menu action.`UseUIFocusMode``boolean`Whether to switch to UIFocusMode after executing this action; if false, switches to ControlMode.`bUseInteractionBag``boolean`If true, performs the action by enqueuing InteractionBagId into the interaction queue instead of using the ExecuteHandler. |
| `Icon``UObject`The icon asset displayed for this radial menu action.`InteractionBagId``string`The InteractionBag.Id (BagId) used when bUseInteractionBag == true.`SupportedGroupTypes``EB1RadialMenuGroupType[]`List of modes this action can be placed in (PlayMode, BuildMode, etc.).`TitleTextId``string`The text ID for the title label of this radial menu action.`UseUIFocusMode``boolean`Whether to switch to UIFocusMode after executing this action; if false, switches to ControlMode.`bUseInteractionBag``boolean`If true, performs the action by enqueuing InteractionBagId into the interaction queue instead of using the ExecuteHandler. |
| `InteractionBagId``string`The InteractionBag.Id (BagId) used when bUseInteractionBag == true.`SupportedGroupTypes``EB1RadialMenuGroupType[]`List of modes this action can be placed in (PlayMode, BuildMode, etc.).`TitleTextId``string`The text ID for the title label of this radial menu action.`UseUIFocusMode``boolean`Whether to switch to UIFocusMode after executing this action; if false, switches to ControlMode.`bUseInteractionBag``boolean`If true, performs the action by enqueuing InteractionBagId into the interaction queue instead of using the ExecuteHandler. |
| `SupportedGroupTypes``EB1RadialMenuGroupType[]`List of modes this action can be placed in (PlayMode, BuildMode, etc.).`TitleTextId``string`The text ID for the title label of this radial menu action.`UseUIFocusMode``boolean`Whether to switch to UIFocusMode after executing this action; if false, switches to ControlMode.`bUseInteractionBag``boolean`If true, performs the action by enqueuing InteractionBagId into the interaction queue instead of using the ExecuteHandler. |
| `TitleTextId``string`The text ID for the title label of this radial menu action.`UseUIFocusMode``boolean`Whether to switch to UIFocusMode after executing this action; if false, switches to ControlMode.`bUseInteractionBag``boolean`If true, performs the action by enqueuing InteractionBagId into the interaction queue instead of using the ExecuteHandler. |
| `UseUIFocusMode``boolean`Whether to switch to UIFocusMode after executing this action; if false, switches to ControlMode.`bUseInteractionBag``boolean`If true, performs the action by enqueuing InteractionBagId into the interaction queue instead of using the ExecuteHandler. |
| `bUseInteractionBag``boolean`If true, performs the action by enqueuing InteractionBagId into the interaction queue instead of using the ExecuteHandler. |
