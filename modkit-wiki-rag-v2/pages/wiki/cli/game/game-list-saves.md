---
document_id: "2fb182d9f3c42cd5a88fefa4964b769cf6d0c8e80a8509f10026757236199809"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/game/game-list-saves"
title: "game.list_saves"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:00+00:00"
content_sha256: "e351ec877377c2e5ab8efaa5fd32add55c7614e9530a726eae9cb83cf3685e0c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/game/game-list-saves"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns save slots sorted by saved_time descending (newest first), one page at a time. Feed 'folder' (and 'file' when it differs) into game.load. The cached slot order is NOT trusted; the list is re-sorted by saved_time here. PAGED: only 'limit' entries (20 by default) are returned starting at 'offset'. A profile can hold hundreds of slots, so an unbounded dump would be tens of kilobytes per call. Because the payload is a bare array there is nowhere to put paging metadata inside it, so the total count, the offset and the next offset are reported in the result MESSAGE, e.g. '20 of 366 save slot(s) (offset 0, limit 20). More available: pass offset=20 for the next page.' By default this reads the already-scanned slot list and does no disk IO. Pass refresh=true only when the save directory changed underneath the client - a rescan reads a thumbnail file per slot, rebuilds every slot object (invalidating the cache the load-list UI holds) and deletes incomplete fork directories. Higher-version saves are listed (see is_higher_version); loading one opens a fork-warning popup that ui.dismiss refuses to touch, so clear it with ui.click_popup_button.

# Metadata

| FieldValueDisplayList Save FilesCategory`game`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayList Save FilesCategory`game`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`game`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptioninclude_autosaveboolnotrueInclude AutoSave slotsinclude_brokenboolnofalseInclude slots flagged as brokenlimitintno20Maximum number of entries to return [1-500].offsetintno0Index of the first entry to return, 0-based. Negative values are treated as 0. Use the next offset reported in the result message to page.refreshboolnofalseRescan the save directory from disk before listing. Blocking disk IO with side effects (rebuilds every slot object and deletes incomplete fork directories) - leave false unless the files changed. |
| --- |
| include_autosaveboolnotrueInclude AutoSave slotsinclude_brokenboolnofalseInclude slots flagged as brokenlimitintno20Maximum number of entries to return [1-500].offsetintno0Index of the first entry to return, 0-based. Negative values are treated as 0. Use the next offset reported in the result message to page.refreshboolnofalseRescan the save directory from disk before listing. Blocking disk IO with side effects (rebuilds every slot object and deletes incomplete fork directories) - leave false unless the files changed. |
| include_brokenboolnofalseInclude slots flagged as brokenlimitintno20Maximum number of entries to return [1-500].offsetintno0Index of the first entry to return, 0-based. Negative values are treated as 0. Use the next offset reported in the result message to page.refreshboolnofalseRescan the save directory from disk before listing. Blocking disk IO with side effects (rebuilds every slot object and deletes incomplete fork directories) - leave false unless the files changed. |
| limitintno20Maximum number of entries to return [1-500].offsetintno0Index of the first entry to return, 0-based. Negative values are treated as 0. Use the next offset reported in the result message to page.refreshboolnofalseRescan the save directory from disk before listing. Blocking disk IO with side effects (rebuilds every slot object and deletes incomplete fork directories) - leave false unless the files changed. |
| offsetintno0Index of the first entry to return, 0-based. Negative values are treated as 0. Use the next offset reported in the result message to page.refreshboolnofalseRescan the save directory from disk before listing. Blocking disk IO with side effects (rebuilds every slot object and deletes incomplete fork directories) - leave false unless the files changed. |
| refreshboolnofalseRescan the save directory from disk before listing. Blocking disk IO with side effects (rebuilds every slot object and deletes incomplete fork directories) - leave false unless the files changed. |

# Usage

```
await inzoi.cli.execute('game.list_saves', {  include_autosave: true, // optional  include_broken: false, // optional  limit: 20, // optional  offset: 0, // optional  refresh: false, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
