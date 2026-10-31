---
document_id: "bb931d4c430d2f7fac3448ad34714194de03507624d6fc35068b109151780210"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2aggromanager"
title: "FB2AggroManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:56+00:00"
content_sha256: "5ef2b41ee5318d545c094ba619196d0c920120e38a73cc443ce8c79c35a1eb75"
chunk: 9
chunk_count: 12
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2aggromanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

s up the Chase Action and restores autonomy.`RemoveAggroForTarget`InSourceEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InTargetEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Clears only the Source's aggro toward a specific Target. |
| `NotifyChaseFinished`InSourceEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Notification called when a Chase Action ends/cancels. Lowers the Source's chase-in-progress flag so it can re-chase on the next tick.`OnEntityRemoved`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`On entity removal, cleans up both Source and Target directions (invoked by the EntityManager callback).`RemoveAggro`InSourceEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Force-clears all of the Source's Target aggro. Cleans up the Chase Action and restores autonomy.`RemoveAggroForTarget`InSourceEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InTargetEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Clears only the Source's aggro toward a specific Target. |
| `OnEntityRemoved`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`On entity removal, cleans up both Source and Target directions (invoked by the EntityManager callback).`RemoveAggro`InSourceEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Force-clears all of the Source's Target aggro. Cleans up the Chase Action and restores autonomy.`RemoveAggroForTarget`InSourceEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InTargetEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Clears only the Source's aggro toward a specific Target. |
| `RemoveAggro`InSourceEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Force-clears all of the Source's Target aggro. Cleans up the Chase Action and restores autonomy.`RemoveAggroForTarget`InSourceEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InTargetEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Clears only the Source's aggro toward a specific Target. |
| `RemoveAggroForTarget`InSourceEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InTargetEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Clears only the Source's aggro toward a specific Target. |

# Override points (11)

Implement these in Lua as `FB2AggroManager.Override_Name = function(...) end`.
