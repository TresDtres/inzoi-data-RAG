---
document_id: "3c62c091898bbf2941fc67b1fdd4226ce82071c232be5606f8ac0531634ed090"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/simulation/simulation-set-option"
title: "simulation.set_option"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:15+00:00"
content_sha256: "9cc3fd35df5dbdf8e894f61b2e34ed3a2af3402beeaf5f77a561096494d96bc7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/simulation/simulation-set-option"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Set an individual simulation option. Use simulation.get_settings to see current values. Options accept: density levels as int (0-10 or 0-5), on/off toggles as 0/1, temperature_effect as 0 (off) / 1 (moderate) / 2 (standard).

# Metadata

| FieldValueDisplaySet Simulation OptionCategory`simulation`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplaySet Simulation OptionCategory`simulation`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Category`simulation`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionoptionstringyes—Option name (see simulation.get_settings for keys)valuestringyes—Value (int for density/enum, 0/1 for toggles) |
| --- |
| optionstringyes—Option name (see simulation.get_settings for keys)valuestringyes—Value (int for density/enum, 0/1 for toggles) |
| valuestringyes—Value (int for density/enum, 0/1 for toggles) |

# Usage

```
await inzoi.cli.execute('simulation.set_option', {  option: '',  value: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsosimulation[simulation.get_settings](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/simulation/simulation-get-settings)[simulation.optimize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/simulation/simulation-optimize)[simulation.set_density](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/simulation/simulation-set-density)[simulation.set_preset](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/simulation/simulation-set-preset)
