---
document_id: "5c30459e6691afe931759ad6e59919b9fae29686d59a57b24ea435cbdc3e36ac"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1animnotifyeventdata-changestate"
title: "FB1AnimNotifyEventData_ChangeState"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:09+00:00"
content_sha256: "2e933b73b7e605f76be56fcbacd84a0ac410ff49d49eb040658c81c8cf6aee86"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1animnotifyeventdata-changestate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Animation notify event data for changing a game object state on a target entity during animation.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1AnimNotifyEventData_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1animnotifyeventdata-base) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1AnimNotifyEventData_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1animnotifyeventdata-base) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1AnimNotifyEventData_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1animnotifyeventdata-base) |
| Category`structs`Extends[`FB1AnimNotifyEventData_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1animnotifyeventdata-base) |
| Extends[`FB1AnimNotifyEventData_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1animnotifyeventdata-base) |

# Properties (3)

| NameTypeDescription`ChangeStateName``string`The new state name to transition to.`ChangedStateGroupName``string`The state group name within which the state change occurs.`Target`[`EB1BaseObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1baseobject)The target object (self or target) whose state will be changed. |
| --- |
| `ChangeStateName``string`The new state name to transition to.`ChangedStateGroupName``string`The state group name within which the state change occurs.`Target`[`EB1BaseObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1baseobject)The target object (self or target) whose state will be changed. |
| `ChangedStateGroupName``string`The state group name within which the state change occurs.`Target`[`EB1BaseObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1baseobject)The target object (self or target) whose state will be changed. |
| `Target`[`EB1BaseObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1baseobject)The target object (self or target) whose state will be changed. |
