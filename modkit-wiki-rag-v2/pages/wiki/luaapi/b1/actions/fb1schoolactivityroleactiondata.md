---
document_id: "f001f6401b7c7f7dd6c1c4e42d425385f6ffebb1a47fe500c76633463089251e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/actions/fb1schoolactivityroleactiondata"
title: "FB1SchoolActivityRoleActionData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:26+00:00"
content_sha256: "40ee2b0695ff6691d67ec47b1767b584beaa0705d86849e20881ad4c9d27b9b1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/actions/fb1schoolactivityroleactiondata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines per-role actions for a school activity. Each entry specifies what a specific role does during this activity (arrived interaction, idle tags, action tags, quest).

# Metadata

| FieldValueKind`action`EnvironmentB1 - PresentationCategory`actions` |
| --- |
| Kind`action`EnvironmentB1 - PresentationCategory`actions` |
| EnvironmentB1 - PresentationCategory`actions` |
| Category`actions` |

# Properties (8)

| NameTypeDescription`ActionTagIds``string[]`Action tag IDs that define what this role does during the activity.`ArrivedInteractionBagId``string`Interaction bag ID played when this role arrives at the room purpose location.`CostumeId``string`Costume to wear during this activity for this role (e.g., lab coat, sportswear). NAME_None means no change.`FinishScriptIdList``string[]`Scripts to run on the role target when the slot ends. Skipped if empty.`OutfitCategory`[`EB1OutfitCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1outfitcategory)Outfit category for costume change.`QuestId``string`Quest ID assigned to this role during this activity.`RoleId``string`Role ID (e.g., Teacher, QueenBee, Geek, Neighbor, Rebel, Artist, Comedian, ModelStudent, Player).`StartScriptIdList``string[]`Scripts to run on the role target when the slot starts. Skipped if empty. |
| --- |
| `ActionTagIds``string[]`Action tag IDs that define what this role does during the activity.`ArrivedInteractionBagId``string`Interaction bag ID played when this role arrives at the room purpose location.`CostumeId``string`Costume to wear during this activity for this role (e.g., lab coat, sportswear). NAME_None means no change.`FinishScriptIdList``string[]`Scripts to run on the role target when the slot ends. Skipped if empty.`OutfitCategory`[`EB1OutfitCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1outfitcategory)Outfit category for costume change.`QuestId``string`Quest ID assigned to this role during this activity.`RoleId``string`Role ID (e.g., Teacher, QueenBee, Geek, Neighbor, Rebel, Artist, Comedian, ModelStudent, Player).`StartScriptIdList``string[]`Scripts to run on the role target when the slot starts. Skipped if empty. |
| `ArrivedInteractionBagId``string`Interaction bag ID played when this role arrives at the room purpose location.`CostumeId``string`Costume to wear during this activity for this role (e.g., lab coat, sportswear). NAME_None means no change.`FinishScriptIdList``string[]`Scripts to run on the role target when the slot ends. Skipped if empty.`OutfitCategory`[`EB1OutfitCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1outfitcategory)Outfit category for costume change.`QuestId``string`Quest ID assigned to this role during this activity.`RoleId``string`Role ID (e.g., Teacher, QueenBee, Geek, Neighbor, Rebel, Artist, Comedian, ModelStudent, Player).`StartScriptIdList``string[]`Scripts to run on the role target when the slot starts. Skipped if empty. |
| `CostumeId``string`Costume to wear during this activity for this role (e.g., lab coat, sportswear). NAME_None means no change.`FinishScriptIdList``string[]`Scripts to run on the role target when the slot ends. Skipped if empty.`OutfitCategory`[`EB1OutfitCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1outfitcategory)Outfit category for costume change.`QuestId``string`Quest ID assigned to this role during this activity.`RoleId``string`Role ID (e.g., Teacher, QueenBee, Geek, Neighbor, Rebel, Artist, Comedian, ModelStudent, Player).`StartScriptIdList``string[]`Scripts to run on the role target when the slot starts. Skipped if empty. |
| `FinishScriptIdList``string[]`Scripts to run on the role target when the slot ends. Skipped if empty.`OutfitCategory`[`EB1OutfitCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1outfitcategory)Outfit category for costume change.`QuestId``string`Quest ID assigned to this role during this activity.`RoleId``string`Role ID (e.g., Teacher, QueenBee, Geek, Neighbor, Rebel, Artist, Comedian, ModelStudent, Player).`StartScriptIdList``string[]`Scripts to run on the role target when the slot starts. Skipped if empty. |
| `OutfitCategory`[`EB1OutfitCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1outfitcategory)Outfit category for costume change.`QuestId``string`Quest ID assigned to this role during this activity.`RoleId``string`Role ID (e.g., Teacher, QueenBee, Geek, Neighbor, Rebel, Artist, Comedian, ModelStudent, Player).`StartScriptIdList``string[]`Scripts to run on the role target when the slot starts. Skipped if empty. |
| `QuestId``string`Quest ID assigned to this role during this activity.`RoleId``string`Role ID (e.g., Teacher, QueenBee, Geek, Neighbor, Rebel, Artist, Comedian, ModelStudent, Player).`StartScriptIdList``string[]`Scripts to run on the role target when the slot starts. Skipped if empty. |
| `RoleId``string`Role ID (e.g., Teacher, QueenBee, Geek, Neighbor, Rebel, Artist, Comedian, ModelStudent, Player).`StartScriptIdList``string[]`Scripts to run on the role target when the slot starts. Skipped if empty. |
| `StartScriptIdList``string[]`Scripts to run on the role target when the slot starts. Skipped if empty. |
