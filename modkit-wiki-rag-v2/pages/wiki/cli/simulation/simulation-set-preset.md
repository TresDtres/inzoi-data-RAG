---
document_id: "a5e6124a08ede16d9465bbc9be74fc50b7e0ec09ed4c22310e5cad3e9c0e432b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/simulation/simulation-set-preset"
title: "simulation.set_preset"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:15+00:00"
content_sha256: "4408682b11bb3468421deb2085a38484d71288f48daa438f92948bcb26099c64"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/simulation/simulation-set-preset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Set simulation quality preset. Options: minimum, verylow, low, normal (medium), high, ultra, custom. Applies all density levels and related simulation settings at once.

# Metadata

| FieldValueDisplaySet Simulation PresetCategory`simulation`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplaySet Simulation PresetCategory`simulation`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Category`simulation`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionpresetstringyes—Preset name: minimum, verylow, low, normal, high, ultra, custom |
| --- |
| presetstringyes—Preset name: minimum, verylow, low, normal, high, ultra, custom |

# Usage

```
await inzoi.cli.execute('simulation.set_preset', {  preset: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsosimulation[simulation.get_settings](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/simulation/simulation-get-settings)[simulation.optimize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/simulation/simulation-optimize)[simulation.set_density](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/simulation/simulation-set-density)[simulation.set_option](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/simulation/simulation-set-option)
