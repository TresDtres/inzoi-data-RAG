---
document_id: "88ecd009d66d537b1e32b41f19f83cea24496fc0bc64d819f2fd82cccf4342ea"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipeventtriggerdata"
title: "FB1RelationshipEventTriggerData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:13+00:00"
content_sha256: "5d2977b86a7022ee7deb12275247a102cf988b1c09e8bf0eb625b1d9814b01fe"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1relationshipeventtriggerdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines trigger conditions for a relationship event, including stat thresholds and time constraints.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`Level``integer`The relationship stat level required to trigger this event.`Self`[`FB1RelationshipEventTriggerTargetData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipeventtriggertargetdata)The trigger target criteria for the self character.`StatName``string`The relationship stat name that controls when this event triggers.`Target`[`FB1RelationshipEventTriggerTargetData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipeventtriggertargetdata)The trigger target criteria for the other character involved.`TimeDay``integer`The number of in-game days required between triggers. |
| --- |
| `Level``integer`The relationship stat level required to trigger this event.`Self`[`FB1RelationshipEventTriggerTargetData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipeventtriggertargetdata)The trigger target criteria for the self character.`StatName``string`The relationship stat name that controls when this event triggers.`Target`[`FB1RelationshipEventTriggerTargetData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipeventtriggertargetdata)The trigger target criteria for the other character involved.`TimeDay``integer`The number of in-game days required between triggers. |
| `Self`[`FB1RelationshipEventTriggerTargetData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipeventtriggertargetdata)The trigger target criteria for the self character.`StatName``string`The relationship stat name that controls when this event triggers.`Target`[`FB1RelationshipEventTriggerTargetData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipeventtriggertargetdata)The trigger target criteria for the other character involved.`TimeDay``integer`The number of in-game days required between triggers. |
| `StatName``string`The relationship stat name that controls when this event triggers.`Target`[`FB1RelationshipEventTriggerTargetData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipeventtriggertargetdata)The trigger target criteria for the other character involved.`TimeDay``integer`The number of in-game days required between triggers. |
| `Target`[`FB1RelationshipEventTriggerTargetData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipeventtriggertargetdata)The trigger target criteria for the other character involved.`TimeDay``integer`The number of in-game days required between triggers. |
| `TimeDay``integer`The number of in-game days required between triggers. |
