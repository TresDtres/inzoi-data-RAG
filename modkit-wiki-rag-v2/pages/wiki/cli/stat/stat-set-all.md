---
document_id: "ba884c6cfdd7961074341a20e58d9467cb9b51229e88940986753bf42c3c0557"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-set-all"
title: "stat.set_all"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:18+00:00"
content_sha256: "6377e7cf817753bcee503b4b02b6f44c0f7b5b03e6c47fc331ee7c3af64e2095"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/stat/stat-set-all"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Sets all major stats to min or max on the target character. mode='min'|'max' (default: max).

# Metadata

| FieldValueDisplaySet All StatsCategory`stat`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplaySet All StatsCategory`stat`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Category`stat`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)modestringyes—'min' or 'max' |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)modestringyes—'min' or 'max' |
| modestringyes—'min' or 'max' |

# Usage

```
await inzoi.cli.execute('stat.set_all', {  entity_id: 0, // optional  mode: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsostat[stat.add](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-add)[stat.freeze](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-freeze)[stat.get_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-get-all)[stat.set](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-set)[stat.set_percent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-set-percent)
