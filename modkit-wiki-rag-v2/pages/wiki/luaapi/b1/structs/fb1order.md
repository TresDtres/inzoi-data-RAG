---
document_id: "f02e221d51e4e5cb63b830d697890e5a1570e7bd3691c0c5bfb1801c180129d4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1order"
title: "FB1Order"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:37+00:00"
content_sha256: "2b764f9dc5ffabb76289cec8c50445d9ed5927615abdc49c89016c661005fb00"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1order"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a single scheduled activity (order) within a timeline range, specifying what interaction to perform and how.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TimelineRange`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timelinerange) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TimelineRange`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timelinerange) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TimelineRange`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timelinerange) |
| Category`structs`Extends[`FB1TimelineRange`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timelinerange) |
| Extends[`FB1TimelineRange`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timelinerange) |

# Properties (8)

| NameTypeDescription`InteractionBagId``string`ID of the interaction bag to execute during this order.`RandomInteractionPickIndex``integer`Index of the currently picked random interaction; -1 means no pick yet.`RandomOrderInteraction``FB1RandomOrderInteraction[]`List of random interaction choices for RANDOMPERSISTENT order types.`StatId``string`ID of the stat that this order targets or monitors.`TargetSiteId``string`ID of the target site where this order should be performed.`TargetStatInteractionId``string`Interaction ID used when targeting a specific stat-related interaction.`Type`[`EB1OrderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1ordertype)Execution type of this order (once, persistent, random, etc.).`bIsTimeFlexible``boolean`If true, this order is time-flexible and survives user schedule adjustments with proportional time scaling. |
| --- |
| `InteractionBagId``string`ID of the interaction bag to execute during this order.`RandomInteractionPickIndex``integer`Index of the currently picked random interaction; -1 means no pick yet.`RandomOrderInteraction``FB1RandomOrderInteraction[]`List of random interaction choices for RANDOMPERSISTENT order types.`StatId``string`ID of the stat that this order targets or monitors.`TargetSiteId``string`ID of the target site where this order should be performed.`TargetStatInteractionId``string`Interaction ID used when targeting a specific stat-related interaction.`Type`[`EB1OrderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1ordertype)Execution type of this order (once, persistent, random, etc.).`bIsTimeFlexible``boolean`If true, this order is time-flexible and survives user schedule adjustments with proportional time scaling. |
| `RandomInteractionPickIndex``integer`Index of the currently picked random interaction; -1 means no pick yet.`RandomOrderInteraction``FB1RandomOrderInteraction[]`List of random interaction choices for RANDOMPERSISTENT order types.`StatId``string`ID of the stat that this order targets or monitors.`TargetSiteId``string`ID of the target site where this order should be performed.`TargetStatInteractionId``string`Interaction ID used when targeting a specific stat-related interaction.`Type`[`EB1OrderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1ordertype)Execution type of this order (once, persistent, random, etc.).`bIsTimeFlexible``boolean`If true, this order is time-flexible and survives user schedule adjustments with proportional time scaling. |
| `RandomOrderInteraction``FB1RandomOrderInteraction[]`List of random interaction choices for RANDOMPERSISTENT order types.`StatId``string`ID of the stat that this order targets or monitors.`TargetSiteId``string`ID of the target site where this order should be performed.`TargetStatInteractionId``string`Interaction ID used when targeting a specific stat-related interaction.`Type`[`EB1OrderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1ordertype)Execution type of this order (once, persistent, random, etc.).`bIsTimeFlexible``boolean`If true, this order is time-flexible and survives user schedule adjustments with proportional time scaling. |
| `StatId``string`ID of the stat that this order targets or monitors.`TargetSiteId``string`ID of the target site where this order should be performed.`TargetStatInteractionId``string`Interaction ID used when targeting a specific stat-related interaction.`Type`[`EB1OrderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1ordertype)Execution type of this order (once, persistent, random, etc.).`bIsTimeFlexible``boolean`If true, this order is time-flexible and survives user schedule adjustments with proportional time scaling. |
| `TargetSiteId``string`ID of the target site where this order should be performed.`TargetStatInteractionId``string`Interaction ID used when targeting a specific stat-related interaction.`Type`[`EB1OrderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1ordertype)Execution type of this order (once, persistent, random, etc.).`bIsTimeFlexible``boolean`If true, this order is time-flexible and survives user schedule adjustments with proportional time scaling. |
| `TargetStatInteractionId``string`Interaction ID used when targeting a specific stat-related interaction.`Type`[`EB1OrderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1ordertype)Execution type of this order (once, persistent, random, etc.).`bIsTimeFlexible``boolean`If true, this order is time-flexible and survives user schedule adjustments with proportional time scaling. |
| `Type`[`EB1OrderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1ordertype)Execution type of this order (once, persistent, random, etc.).`bIsTimeFlexible``boolean`If true, this order is time-flexible and survives user schedule adjustments with proportional time scaling. |
| `bIsTimeFlexible``boolean`If true, this order is time-flexible and survives user schedule adjustments with proportional time scaling. |
