---
document_id: "532ec0cde7c2b2d47201e65e73f383a664ba80c7b9705a4441b408c0bba6b362"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1moviepreferencebuffinfo"
title: "FB1MoviePreferenceBuffInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:32+00:00"
content_sha256: "d3c3664ee679135e71dffd92227950ab94f54d4be5f6a2712f6c32af273f8d99"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1moviepreferencebuffinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Maps a preference to probability-based like/dislike buff sets. When a character has the specified preference, one entry from LikeBuffs or DislikeBuffs is chosen by probability. Uses the same FB1MovieCommonBuffInfo structure for probability-based selection.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`DislikeBuffs``FB1MovieCommonBuffInfo[]`Buff entries for characters who dislike this preference. One is chosen by probability.`LikeBuffs``FB1MovieCommonBuffInfo[]`Buff entries for characters who like this preference. One is chosen by probability.`PreferenceId``string`Preference ID to match against. |
| --- |
| `DislikeBuffs``FB1MovieCommonBuffInfo[]`Buff entries for characters who dislike this preference. One is chosen by probability.`LikeBuffs``FB1MovieCommonBuffInfo[]`Buff entries for characters who like this preference. One is chosen by probability.`PreferenceId``string`Preference ID to match against. |
| `LikeBuffs``FB1MovieCommonBuffInfo[]`Buff entries for characters who like this preference. One is chosen by probability.`PreferenceId``string`Preference ID to match against. |
| `PreferenceId``string`Preference ID to match against. |
