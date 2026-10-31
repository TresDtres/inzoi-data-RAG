---
document_id: "47bc40ec4dc410ba9b9bbea3e3653c564eff43966e847aa1cbde2cd74b9a3a71"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1targetmemory"
title: "FB1TargetMemory"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:38+00:00"
content_sha256: "1cddf4c61ac14c4ea8de08955b8042c8944df76b92b123039c3056c6aaa81b82"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1targetmemory"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Runtime memory a character holds toward a specific target, tracking both sides' social context state, mood scores, cooldown, and read status.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (8)

| NameTypeDescription`Cooltime``integer`Tick time until which this memory is on cooldown.`MemoryDtId``string`Data table row ID of the memory definition.`SelfMoodScore``number`Accumulated mood score on the owner's (self) side.`SelfSocialContextState`[`EB1SocialContextState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1socialcontextstate)Social context state on the owner's (self) side.`TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the target this memory is about.`TargetMoodScore``number`Accumulated mood score on the target's side.`TargetSocialContextState`[`EB1SocialContextState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1socialcontextstate)Social context state on the target's side.`bIsUnread``boolean`Whether this memory has not yet been read in the UI. |
| --- |
| `Cooltime``integer`Tick time until which this memory is on cooldown.`MemoryDtId``string`Data table row ID of the memory definition.`SelfMoodScore``number`Accumulated mood score on the owner's (self) side.`SelfSocialContextState`[`EB1SocialContextState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1socialcontextstate)Social context state on the owner's (self) side.`TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the target this memory is about.`TargetMoodScore``number`Accumulated mood score on the target's side.`TargetSocialContextState`[`EB1SocialContextState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1socialcontextstate)Social context state on the target's side.`bIsUnread``boolean`Whether this memory has not yet been read in the UI. |
| `MemoryDtId``string`Data table row ID of the memory definition.`SelfMoodScore``number`Accumulated mood score on the owner's (self) side.`SelfSocialContextState`[`EB1SocialContextState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1socialcontextstate)Social context state on the owner's (self) side.`TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the target this memory is about.`TargetMoodScore``number`Accumulated mood score on the target's side.`TargetSocialContextState`[`EB1SocialContextState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1socialcontextstate)Social context state on the target's side.`bIsUnread``boolean`Whether this memory has not yet been read in the UI. |
| `SelfMoodScore``number`Accumulated mood score on the owner's (self) side.`SelfSocialContextState`[`EB1SocialContextState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1socialcontextstate)Social context state on the owner's (self) side.`TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the target this memory is about.`TargetMoodScore``number`Accumulated mood score on the target's side.`TargetSocialContextState`[`EB1SocialContextState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1socialcontextstate)Social context state on the target's side.`bIsUnread``boolean`Whether this memory has not yet been read in the UI. |
| `SelfSocialContextState`[`EB1SocialContextState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1socialcontextstate)Social context state on the owner's (self) side.`TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the target this memory is about.`TargetMoodScore``number`Accumulated mood score on the target's side.`TargetSocialContextState`[`EB1SocialContextState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1socialcontextstate)Social context state on the target's side.`bIsUnread``boolean`Whether this memory has not yet been read in the UI. |
| `TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the target this memory is about.`TargetMoodScore``number`Accumulated mood score on the target's side.`TargetSocialContextState`[`EB1SocialContextState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1socialcontextstate)Social context state on the target's side.`bIsUnread``boolean`Whether this memory has not yet been read in the UI. |
| `TargetMoodScore``number`Accumulated mood score on the target's side.`TargetSocialContextState`[`EB1SocialContextState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1socialcontextstate)Social context state on the target's side.`bIsUnread``boolean`Whether this memory has not yet been read in the UI. |
| `TargetSocialContextState`[`EB1SocialContextState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1socialcontextstate)Social context state on the target's side.`bIsUnread``boolean`Whether this memory has not yet been read in the UI. |
| `bIsUnread``boolean`Whether this memory has not yet been read in the UI. |
