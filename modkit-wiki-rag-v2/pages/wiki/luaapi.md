---
document_id: "139b42af35b3adb471b0cbb48ca62131f9860b7da4aec82c0287b06cd806cdc3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi"
title: "LuaAPI"
section: "wiki/luaapi"
breadcrumb: ["ModKit Documentation", "Wiki"]
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:23+00:00"
content_sha256: "1c32faea5ec8705cb630fd501ffa8e32fe92f9e1b0d9fe771b68b570c66d51e1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

# Overview

The **inZOI Lua API** exposes the game's simulation and presentation types to Lua mods. Each type has its own page listing its properties, callable functions, and override points (hooks you can implement in Lua).

Types are grouped by environment. **B2 (Simulation)** is the primary modding surface and where override hooks live; **B1 (Presentation)** covers UI / FX / camera; **Common / Engine** are shared and Unreal types. Lua mods run on the B2 thread.

# Environments

| EnvironmentTypes[B2 - Simulation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/)804[B1 - Presentation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/)5642[Common / Engine](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/common/)73**Total****6519** |
| --- |
| [B2 - Simulation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/)804[B1 - Presentation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/)5642[Common / Engine](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/common/)73**Total****6519** |
| [B1 - Presentation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/)5642[Common / Engine](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/common/)73**Total****6519** |
| [Common / Engine](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/common/)73**Total****6519** |
| **Total****6519** |

# Using the API

Reference a type and override one of its hooks from a Lua mod:

```
-- Override a B2 action timing hookFB2Action_Eat.Override_OnPlay = function(self)    -- custom behaviorend
```
