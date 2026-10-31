---
document_id: "de64550ecbe212994123bb2a5011abcdc00847647f40a14ef2eab49a8fdb5a8f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-reset-site-to-last-saved"
title: "building.reset_site_to_last_saved"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:50+00:00"
content_sha256: "23f8fff1608c506b0869275c0d03dfa668e1c1c09fd41c3f38e6d03bf124a236"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/building/building-reset-site-to-last-saved"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- [Build Mode Only] DESTRUCTIVE. Discards every edit made in this build-mode session and restores the site (objects, walls and household inventory) to the snapshot captured on entry, settling the price difference. This is the closest thing to a 'discard changes' operation - build.exit_mode always commits. Requires confirm_phrase="reset to last saved" and phase == 'ready' (see build.get_mode_state).

# Metadata

| FieldValueDisplayReset Site To Last SavedCategory`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayReset Site To Last SavedCategory`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionconfirm_phrasestringyes—Must be exactly "reset to last saved". Guards against accidental invocation. |
| --- |
| confirm_phrasestringyes—Must be exactly "reset to last saved". Guards against accidental invocation. |

# Usage

```
await inzoi.cli.execute('building.reset_site_to_last_saved', {  confirm_phrase: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
