---
document_id: "5a8e74d10092fe1796bcaa939b88a7c877b8a9133536418eb4bf07e55318a728"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/simulation/simulation-set-density"
title: "simulation.set_density"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:15+00:00"
content_sha256: "9c382e97b55586c001cf94026eaa4ab9df9320f8564ceca4f9c4dc44b86bfca0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/simulation/simulation-set-density"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Set an individual density level for a simulation category. Kinds: population (0-10), biz_customer (0-10), vehicle (0-10), animal (0-5). Changing a density automatically switches preset to Custom.

# Metadata

| FieldValueDisplaySet Simulation DensityCategory`simulation`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplaySet Simulation DensityCategory`simulation`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Category`simulation`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionkindstringyes—Density kind: population, biz_customer, vehicle, animalvalueintyes—Density level (0-10 for most, 0-5 for animal) |
| --- |
| kindstringyes—Density kind: population, biz_customer, vehicle, animalvalueintyes—Density level (0-10 for most, 0-5 for animal) |
| valueintyes—Density level (0-10 for most, 0-5 for animal) |

# Usage

```
await inzoi.cli.execute('simulation.set_density', {  kind: '',  value: 0,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsosimulation[simulation.get_settings](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/simulation/simulation-get-settings)[simulation.optimize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/simulation/simulation-optimize)[simulation.set_option](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/simulation/simulation-set-option)[simulation.set_preset](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/simulation/simulation-set-preset)
