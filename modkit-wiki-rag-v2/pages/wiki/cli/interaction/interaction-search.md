---
document_id: "781785f62b5377845c9866075a08299fb2bd50140b346f44b9aec6b15f27f5f9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-search"
title: "interaction.search"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:07+00:00"
content_sha256: "bd2bf41f651cf7429f53d5b83651a9e74c4755a5abec88f6346c72c9b4fbd46c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/interaction/interaction-search"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Searches InteractionBag data table by keyword. Matches against row ID, category, and tags. Returns interaction_bag_id values usable with interaction.execute.

# Metadata

| FieldValueDisplaySearch InteractionsCategory`interaction`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplaySearch InteractionsCategory`interaction`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`interaction`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionkeywordstringyes—Search keyword (matches ID, category, tags)max_resultsintno30Maximum number of results to return |
| --- |
| keywordstringyes—Search keyword (matches ID, category, tags)max_resultsintno30Maximum number of results to return |
| max_resultsintno30Maximum number of results to return |

# Usage

```
await inzoi.cli.execute('interaction.search', {  keyword: '',  max_results: 30, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsointeraction[interaction.cancel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-cancel)[interaction.clear_queue](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-clear-queue)[interaction.execute](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-execute)[interaction.get_current](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-get-current)[interaction.get_queue](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-get-queue)[interaction.list_available](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-list-available)
