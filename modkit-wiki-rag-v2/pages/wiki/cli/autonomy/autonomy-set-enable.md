---
document_id: "09d6700ca443ecaf303381cea25b9a9140a1695a602376837a60ab53d2870ddc"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/autonomy/autonomy-set-enable"
title: "autonomy.set_enable"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:47+00:00"
content_sha256: "0f01ecd3751e17408d3b569072eef55935f3f3edab63e0368fd0e4f3d0860dc6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/autonomy/autonomy-set-enable"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Get or set the autonomy (free will) enabled state for a character.

# Metadata

| FieldValueDisplaySet Autonomy EnableCategory`autonomy`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplaySet Autonomy EnableCategory`autonomy`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`autonomy`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)enableboolno—true to enable, false to disable (omit to query) |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)enableboolno—true to enable, false to disable (omit to query) |
| enableboolno—true to enable, false to disable (omit to query) |

# Usage

```
await inzoi.cli.execute('autonomy.set_enable', {  entity_id: 0, // optional  enable: false, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoautonomy[autonomy.diagnose_interaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/autonomy/autonomy-diagnose-interaction)
