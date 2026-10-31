---
document_id: "23eb0191b65a33e6439dd3319c0346d1c26b9b3a396fd16b717894b45aa637f8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-destroy-all-objects"
title: "building.destroy_all_objects"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:49+00:00"
content_sha256: "b16083d726320d70c4bef3c320565f2a1ad26b2fe283cfc36f6334aadaa7db5c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/building/building-destroy-all-objects"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- [Build Mode Only] DESTRUCTIVE. Removes every object and wall from the current site and refunds their value to the household wallet. Dev-locked objects are kept. This is undoable with building.undo, but ONLY until build mode is left - leaving build mode commits the empty site. Requires confirm_phrase="destroy all objects" and phase == 'ready' (see build.get_mode_state).

# Metadata

| FieldValueDisplayDestroy All Site ObjectsCategory`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayDestroy All Site ObjectsCategory`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionconfirm_phrasestringyes—Must be exactly "destroy all objects". Guards against accidental invocation. |
| --- |
| confirm_phrasestringyes—Must be exactly "destroy all objects". Guards against accidental invocation. |

# Usage

```
await inzoi.cli.execute('building.destroy_all_objects', {  confirm_phrase: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
