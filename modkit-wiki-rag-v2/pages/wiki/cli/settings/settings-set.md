---
document_id: "23fe3a5f8cce395b67e53d0af6ef630ffdad295626b3adca748ae04e652cbe86"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/settings/settings-set"
title: "settings.set"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:14+00:00"
content_sha256: "ed0c2f7c95c1f04b994157ede45d6de1363ce0f59299e91773b3d526419aedcf"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/settings/settings-set"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Set any game setting by its EB1GameOption enum name and value. Applies immediately. Use settings.get to check current values. Examples: settings.set --option MaxFPS --value 60, settings.set --option Brightness --value 70.

# Metadata

| FieldValueDisplaySet SettingCategory`settings`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplaySet SettingCategory`settings`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Category`settings`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionoptionstringyes—EB1GameOption enum name (e.g. MaxFPS, Brightness, UISize)valuestringyes—Value to set |
| --- |
| optionstringyes—EB1GameOption enum name (e.g. MaxFPS, Brightness, UISize)valuestringyes—Value to set |
| valuestringyes—Value to set |

# Usage

```
await inzoi.cli.execute('settings.set', {  option: '',  value: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsosettings[settings.get](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/settings/settings-get)[settings.get_cvars](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/settings/settings-get-cvars)
