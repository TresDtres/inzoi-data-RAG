---
document_id: "4806e19f1f1c258c3e318ccf7271cb8f473fb285ca0464dafd1d8e704257731a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/settings/settings-get"
title: "settings.get"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:14+00:00"
content_sha256: "ed2498a538c1f55e5925a1054847797ba306a236aa00be007dcc73e13fa88bf8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/settings/settings-get"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Get any game setting by its EB1GameOption enum name (e.g. ShadowQuality, MasterSoundVolume, Language, EnableAutoSave, FOV). Use this for settings not covered by domain-specific commands.

# Metadata

| FieldValueDisplayGet SettingCategory`settings`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayGet SettingCategory`settings`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Category`settings`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionoptionstringyes—EB1GameOption enum name (e.g. ShadowQuality, MasterSoundVolume) |
| --- |
| optionstringyes—EB1GameOption enum name (e.g. ShadowQuality, MasterSoundVolume) |

# Usage

```
await inzoi.cli.execute('settings.get', {  option: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsosettings[settings.get_cvars](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/settings/settings-get-cvars)[settings.set](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/settings/settings-set)
