---
document_id: "4df1f218494e944f2c28f15389517695859f1b483ed9cb21fe2c35387ce66496"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/gameplay/gameplay-set-autosave"
title: "gameplay.set_autosave"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:00+00:00"
content_sha256: "c6b26f8a4bb8f0bf0304d1a77e911a59f7f49002a05f05123892fe28444676fd"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/gameplay/gameplay-set-autosave"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Enable/disable autosave and set the interval. Both parameters are optional; only specified ones are changed.

# Metadata

| FieldValueDisplaySet AutosaveCategory`gameplay`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplaySet AutosaveCategory`gameplay`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Category`gameplay`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionenableboolno—Enable or disable autosaveintervalintno—Autosave interval in minutes |
| --- |
| enableboolno—Enable or disable autosaveintervalintno—Autosave interval in minutes |
| intervalintno—Autosave interval in minutes |

# Usage

```
await inzoi.cli.execute('gameplay.set_autosave', {  enable: false, // optional  interval: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsogameplay[gameplay.get_settings](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/gameplay/gameplay-get-settings)[gameplay.list_languages](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/gameplay/gameplay-list-languages)[gameplay.set_language](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/gameplay/gameplay-set-language)
