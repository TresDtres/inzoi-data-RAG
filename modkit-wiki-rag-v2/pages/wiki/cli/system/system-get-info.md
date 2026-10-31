---
document_id: "28801a371cbd40e6f12c5d342c2f6ecded03fcc201843928c7ce483406ef973a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/system/system-get-info"
title: "system.get_info"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:18+00:00"
content_sha256: "1d90247270190e21ab3d92e164ba66d8801e77277476d6e698b70a312ee92295"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/system/system-get-info"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns the game version string and game UID shown in the Options panel. game_version is the same BUILD_STRING the Version row displays (for example '20260818.8192.W.EDITOR.main'). game_uid is the same GPP user id the Game UID row shows and copies to the clipboard. game_uid is an empty string until GPP login has filled it in (the Options panel then shows a blank UID as well).

# Metadata

| FieldValueDisplayGet Game Version and UIDCategory`system`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayGet Game Version and UIDCategory`system`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Category`system`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

- This command takes no parameters.

# Usage

```
await inzoi.cli.execute('system.get_info');
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
