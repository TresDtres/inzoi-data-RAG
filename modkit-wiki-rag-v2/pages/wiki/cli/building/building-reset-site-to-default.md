---
document_id: "ca4fdef3e3df96dd5b03bfacfd78ff928081412ff8d11738ae9b8a940ab45ee9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-reset-site-to-default"
title: "building.reset_site_to_default"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:50+00:00"
content_sha256: "a70aa4971b9b71d81862f8c827c6dedb464513bca8e12c4bc7a80fa283a8afff"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/building/building-reset-site-to-default"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- [Build Mode Only] DESTRUCTIVE. Discards the current layout and restores the site's shipped default asset, settling the price difference against the household wallet. This is undoable with building.undo, but ONLY until build mode is left. Requires confirm_phrase="reset to default" and phase == 'ready' (see build.get_mode_state).

# Metadata

| FieldValueDisplayReset Site To DefaultCategory`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayReset Site To DefaultCategory`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionconfirm_phrasestringyes—Must be exactly "reset to default". Guards against accidental invocation. |
| --- |
| confirm_phrasestringyes—Must be exactly "reset to default". Guards against accidental invocation. |

# Usage

```
await inzoi.cli.execute('building.reset_site_to_default', {  confirm_phrase: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
