---
document_id: "e73d2fdfcbe25b10b42eef695145cea9c40444f28665596de26a580cdd3d3b1c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/view/view-set-filter"
title: "view.set_filter"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:21+00:00"
content_sha256: "9025154edaa975ee9f09b91daaff76feef0b1912629b29fa5766b3b627df4912"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/view/view-set-filter"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Apply a screen post-process filter. Accepts enum ids (Realistic, Cartoon, BW2Color, X4Pixels, TiltedShift, LensEffectA, Draw, GradientBand, LensEffectB) or natural-language aliases (bw, monochrome, cartoon, pixel, sketch, dreamy, horror, cinematic, miniature, etc). Works without entering Photo Mode.

# Metadata

| FieldValueDisplaySet View FilterCategory`view`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplaySet View FilterCategory`view`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`view`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionvaluestringyes—Filter id or alias (e.g. BW2Color, bw, cartoon, pixel, sketch, dreamy, horror) |
| --- |
| valuestringyes—Filter id or alias (e.g. BW2Color, bw, cartoon, pixel, sketch, dreamy, horror) |

# Usage

```
await inzoi.cli.execute('view.set_filter', {  value: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoview[view.clear_filter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/view/view-clear-filter)[view.get_filter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/view/view-get-filter)[view.list_filters](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/view/view-list-filters)
