---
document_id: "985b1749ec2cbc7143a7a0f14901d44b52589968c27d612e2898d66150d39f68"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/optimization/optimization-set-option"
title: "optimization.set_option"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:11+00:00"
content_sha256: "8cb28b9f0de4c2f70d943f82599092d19be04a2e89d85603e5794fd88d06f99c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/optimization/optimization-set-option"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Set an individual optimization option. optimize_autonomy: 0 or 1. performance_safeguard: 0 (off) or 1 (on). slod_view_level: 0-5 (0=nearest, 5=farthest).

# Metadata

| FieldValueDisplaySet Optimization OptionCategory`optimization`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplaySet Optimization OptionCategory`optimization`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Category`optimization`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionoptionstringyes—Option name: optimize_autonomy, performance_safeguard, slod_view_levelvaluestringyes—Value (0/1 for toggles, 0-5 for slod_view_level) |
| --- |
| optionstringyes—Option name: optimize_autonomy, performance_safeguard, slod_view_levelvaluestringyes—Value (0/1 for toggles, 0-5 for slod_view_level) |
| valuestringyes—Value (0/1 for toggles, 0-5 for slod_view_level) |

# Usage

```
await inzoi.cli.execute('optimization.set_option', {  option: '',  value: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsooptimization[optimization.get_settings](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/optimization/optimization-get-settings)[optimization.run_cpu_benchmark](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/optimization/optimization-run-cpu-benchmark)
