---
document_id: "ebe31dbd2c42752c42b69ed5323c29a1dee45488ba8d4d06d0836ef73de4feb4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1moviebuffinfo"
title: "FB1MovieBuffInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:32+00:00"
content_sha256: "bcfd31631cc03c5bcfecaeb9a483c52564d887a4edfd0923a2b61d1694691b01"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1moviebuffinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a buff schedule entry for movie playback at a specific time point. Time is interpreted as in-game minutes for interval buffs or real-time seconds for static buffs. CommonBuffs are selected by probability for characters without matching preferences.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`CommonBuffs``FB1MovieCommonBuffInfo[]`Common buff entries with probability-based selection. For characters without matching preferences.`PreferenceBuffs``FB1MoviePreferenceBuffInfo[]`Per-preference buff overrides. If a character has a matching preference, the corresponding buff is used instead of CommonBuffs.`Time``number`Time at which the buff is applied; in-game minutes for interval mode, real-time seconds for static mode. |
| --- |
| `CommonBuffs``FB1MovieCommonBuffInfo[]`Common buff entries with probability-based selection. For characters without matching preferences.`PreferenceBuffs``FB1MoviePreferenceBuffInfo[]`Per-preference buff overrides. If a character has a matching preference, the corresponding buff is used instead of CommonBuffs.`Time``number`Time at which the buff is applied; in-game minutes for interval mode, real-time seconds for static mode. |
| `PreferenceBuffs``FB1MoviePreferenceBuffInfo[]`Per-preference buff overrides. If a character has a matching preference, the corresponding buff is used instead of CommonBuffs.`Time``number`Time at which the buff is applied; in-game minutes for interval mode, real-time seconds for static mode. |
| `Time``number`Time at which the buff is applied; in-game minutes for interval mode, real-time seconds for static mode. |
