---
document_id: "11ef24276a83133a3ddc4e095797520b0c71c112553072e886cf289a1eb0a436"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/graphics/graphics-set-cvar"
title: "graphics.set_cvar"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:01+00:00"
content_sha256: "c5185ec482022642fb279a56d0763cb219a9d16283a01c603ad8960302a8a6b4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/graphics/graphics-set-cvar"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Get or set an Unreal Engine console variable directly. If value is omitted, returns the current value. Examples: r.ScreenPercentage, sg.ShadowQuality, r.VSync.

# Metadata

| FieldValueDisplaySet Console VariableCategory`graphics`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplaySet Console VariableCategory`graphics`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`graphics`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionnamestringyes—Console variable name (e.g. r.ScreenPercentage)valuestringno—Value to set (omit to read current value) |
| --- |
| namestringyes—Console variable name (e.g. r.ScreenPercentage)valuestringno—Value to set (omit to read current value) |
| valuestringno—Value to set (omit to read current value) |

# Usage

```
await inzoi.cli.execute('graphics.set_cvar', {  name: '',  value: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsographics[graphics.get_settings](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/graphics/graphics-get-settings)[graphics.optimize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/graphics/graphics-optimize)[graphics.set_option](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/graphics/graphics-set-option)[graphics.set_preset](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/graphics/graphics-set-preset)
