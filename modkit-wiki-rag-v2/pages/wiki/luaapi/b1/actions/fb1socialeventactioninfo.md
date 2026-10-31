---
document_id: "11b4bb9fd067b7727b370aff57a7cb66deb98689b2a0c1ada4d87ddb7d160bfb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/actions/fb1socialeventactioninfo"
title: "FB1SocialEventActionInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:27+00:00"
content_sha256: "078348bc6350969291a4769daca51a8839a6ed0739bcc64267b400c0fdf4bf18"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/actions/fb1socialeventactioninfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a single action within a social event, including its interaction bag, target, and timing configuration.

# Metadata

| FieldValueKind`action`EnvironmentB1 - PresentationCategory`actions` |
| --- |
| Kind`action`EnvironmentB1 - PresentationCategory`actions` |
| EnvironmentB1 - PresentationCategory`actions` |
| Category`actions` |

# Properties (7)

| NameTypeDescription`ActionDelayMinute``integer`The delay in in-game minutes before this action becomes available.`ActionId``string`The unique identifier for this action.`EvnetTargetInfo`[`FB1SiteEventTargetInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1siteeventtargetinfo)Additional target info used for the site event context of this action.`InteractionBagId``string`The interaction bag ID used to perform this action.`InteractionTargetInfo`[`FB1SocialEventInteractionTargetInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1socialeventinteractiontargetinfo)The target information specifying who or what this action applies to.`VisibleConditions``FB1SocialEventActionCondition[]`The conditions that must be met for this action to be visible.`bCanPlayAll``boolean`Whether all eligible participants can play this action simultaneously. |
| --- |
| `ActionDelayMinute``integer`The delay in in-game minutes before this action becomes available.`ActionId``string`The unique identifier for this action.`EvnetTargetInfo`[`FB1SiteEventTargetInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1siteeventtargetinfo)Additional target info used for the site event context of this action.`InteractionBagId``string`The interaction bag ID used to perform this action.`InteractionTargetInfo`[`FB1SocialEventInteractionTargetInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1socialeventinteractiontargetinfo)The target information specifying who or what this action applies to.`VisibleConditions``FB1SocialEventActionCondition[]`The conditions that must be met for this action to be visible.`bCanPlayAll``boolean`Whether all eligible participants can play this action simultaneously. |
| `ActionId``string`The unique identifier for this action.`EvnetTargetInfo`[`FB1SiteEventTargetInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1siteeventtargetinfo)Additional target info used for the site event context of this action.`InteractionBagId``string`The interaction bag ID used to perform this action.`InteractionTargetInfo`[`FB1SocialEventInteractionTargetInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1socialeventinteractiontargetinfo)The target information specifying who or what this action applies to.`VisibleConditions``FB1SocialEventActionCondition[]`The conditions that must be met for this action to be visible.`bCanPlayAll``boolean`Whether all eligible participants can play this action simultaneously. |
| `EvnetTargetInfo`[`FB1SiteEventTargetInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1siteeventtargetinfo)Additional target info used for the site event context of this action.`InteractionBagId``string`The interaction bag ID used to perform this action.`InteractionTargetInfo`[`FB1SocialEventInteractionTargetInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1socialeventinteractiontargetinfo)The target information specifying who or what this action applies to.`VisibleConditions``FB1SocialEventActionCondition[]`The conditions that must be met for this action to be visible.`bCanPlayAll``boolean`Whether all eligible participants can play this action simultaneously. |
| `InteractionBagId``string`The interaction bag ID used to perform this action.`InteractionTargetInfo`[`FB1SocialEventInteractionTargetInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1socialeventinteractiontargetinfo)The target information specifying who or what this action applies to.`VisibleConditions``FB1SocialEventActionCondition[]`The conditions that must be met for this action to be visible.`bCanPlayAll``boolean`Whether all eligible participants can play this action simultaneously. |
| `InteractionTargetInfo`[`FB1SocialEventInteractionTargetInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1socialeventinteractiontargetinfo)The target information specifying who or what this action applies to.`VisibleConditions``FB1SocialEventActionCondition[]`The conditions that must be met for this action to be visible.`bCanPlayAll``boolean`Whether all eligible participants can play this action simultaneously. |
| `VisibleConditions``FB1SocialEventActionCondition[]`The conditions that must be met for this action to be visible.`bCanPlayAll``boolean`Whether all eligible participants can play this action simultaneously. |
| `bCanPlayAll``boolean`Whether all eligible participants can play this action simultaneously. |
