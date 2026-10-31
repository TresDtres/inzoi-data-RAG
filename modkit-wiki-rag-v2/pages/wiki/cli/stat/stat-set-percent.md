---
document_id: "b5346ae23eda9db3ca03103d9d1674f27f2d7f021d3cbfbbc81977c64959a9b2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-set-percent"
title: "stat.set_percent"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:18+00:00"
content_sha256: "0e704d839d6fc846fdcda0c73d1b988b1128f21365d1adb6fb4adc636a158e3d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/stat/stat-set-percent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Sets a stat as a ratio (0.0~1.0) of its min-max range on the target character.

# Metadata

| FieldValueDisplaySet Stat PercentCategory`stat`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplaySet Stat PercentCategory`stat`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Category`stat`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)stat_idnameyes—Stat IDpercentfloatyes—Ratio 0.0 ~ 1.0 |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)stat_idnameyes—Stat IDpercentfloatyes—Ratio 0.0 ~ 1.0 |
| stat_idnameyes—Stat IDpercentfloatyes—Ratio 0.0 ~ 1.0 |
| percentfloatyes—Ratio 0.0 ~ 1.0 |

# Usage

```
await inzoi.cli.execute('stat.set_percent', {  entity_id: 0, // optional  stat_id: '',  percent: 0.0,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsostat[stat.add](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-add)[stat.freeze](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-freeze)[stat.get_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-get-all)[stat.set](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-set)[stat.set_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/stat/stat-set-all)
