---
document_id: "fcebc7f598866c610bdb8e49a1448cb7bbb87466544d98fb5fc4fde946744ec1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/optimization/optimization-run-cpu-benchmark"
title: "optimization.run_cpu_benchmark"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:11+00:00"
content_sha256: "9d76019d290ab05df52ba63df5691922e2c10994e7dc145d537b6118e769161b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/optimization/optimization-run-cpu-benchmark"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Run a hardware benchmark and return the CPU-recommended simulation preset without changing settings. Pass apply=true to apply the recommended preset (analogous to simulation.optimize but forces a fresh benchmark).

# Metadata

| FieldValueDisplayRun CPU BenchmarkCategory`optimization`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayRun CPU BenchmarkCategory`optimization`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Category`optimization`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionapplyboolno—Apply the recommended simulation preset (default: false) |
| --- |
| applyboolno—Apply the recommended simulation preset (default: false) |

# Usage

```
await inzoi.cli.execute('optimization.run_cpu_benchmark', {  apply: false, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsooptimization[optimization.get_settings](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/optimization/optimization-get-settings)[optimization.set_option](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/optimization/optimization-set-option)
