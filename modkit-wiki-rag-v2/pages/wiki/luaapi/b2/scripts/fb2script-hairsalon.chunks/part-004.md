---
document_id: "58fd13f11aca9d878e5e8bbd170965e50ce20cfbce5779b0c03062627d7465c6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2script-hairsalon"
title: "FB2Script_HairSalon"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:25+00:00"
content_sha256: "2ea287cbd838da3a1c53a2b9f16be25932cec1067d4275717b7897b23880c86d"
chunk: 4
chunk_count: 6
page_type: "article"
route: "wiki/luaapi/b2/scripts/fb2script-hairsalon"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

luaapi/b1/structs/fb1execute)`-`(BL-57370 follow-up) No-op. Category is passed via SelectOrRandomSalonHair's S2 and the fallback is replaced by PoolId derivation. Kept registered because it is a submitted Execute. Do not use in new data. |
| `Execute_SelectOrRandomSalonHair` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecuteParam: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-`If the possessed character is the customer, opens a ContentPicker; otherwise picks a random hair from SalonHairPool and shows a speech bubble. The selected/random PoolId is stored in the co-op scope (FB2CoopScheduler::CoopExtraData[SalonHair_PoolId]) to tie pick->apply to the co-op lifetime. Player/autonomy branch is decided by the HairSalon_CustomerPick tag. BaseObject = Self (customer). S1: ContentPicker mode ("Locked" = unlock styling / unset = owned hair only). S2: category key ("Short"/"Medium"/"Long"/"Ponytail") to filter picker candidates (unset = all).`Execute_SetPendingSalonHairSubCategory` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecuteParam: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-`(BL-57370 follow-up) No-op. Category is passed via SelectOrRandomSalonHair's S2 and the fallback is replaced by PoolId derivation. Kept registered because it is a submitted Execute. Do not use in new data. |
| `Execute_SetPendingSalonHairSubCategory` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecuteParam: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-`(BL-57370 follow-up) No-op. Category is passed via SelectOrRandomSalonHair's S2 and the fallback is replaced by PoolId derivation. Kept registered because it is a submitted Execute. Do not use in new data. |

# Override points (7)

Implement these in Lua as `FB2Script_HairSalon.Override_Name = function(...) end`.
