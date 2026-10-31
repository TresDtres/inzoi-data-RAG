---
document_id: "4ee5aa8e4a068b7ad156d7d4b8692a980d4b981821f4a6792e686343a79346ce"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-add-milestone"
title: "memory.add_milestone"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:18+00:00"
content_sha256: "4dedd0044c44f506d931bd2be5bc9cabecc83522799c8487fb89b6e54f675c85"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/memory/memory-add-milestone"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Adds a milestone to the target character. target_entity_id / target_dt_id are optional milestone targets.

# Metadata

| FieldValueDisplayAdd MilestoneCategory`memory`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayAdd MilestoneCategory`memory`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Category`memory`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Owner entity ID (default: possessed)milestone_idnameyes—Milestone ID to addtarget_entity_identityIdno—Optional milestone target entitytarget_dt_idnameno—Optional milestone target data table ID (e.g. company/school) |
| --- |
| entity_identityIdno—Owner entity ID (default: possessed)milestone_idnameyes—Milestone ID to addtarget_entity_identityIdno—Optional milestone target entitytarget_dt_idnameno—Optional milestone target data table ID (e.g. company/school) |
| milestone_idnameyes—Milestone ID to addtarget_entity_identityIdno—Optional milestone target entitytarget_dt_idnameno—Optional milestone target data table ID (e.g. company/school) |
| target_entity_identityIdno—Optional milestone target entitytarget_dt_idnameno—Optional milestone target data table ID (e.g. company/school) |
| target_dt_idnameno—Optional milestone target data table ID (e.g. company/school) |

# Returns

- Return shape is not declared for this command.

# Usage

```
await inzoi.cli.execute('memory.add_milestone', {  entity_id: 0, // optional  milestone_id: '',  target_entity_id: 0, // optional  target_dt_id: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsomemory[memory.add](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-add)[memory.clear_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-clear-all)[memory.get_milestones](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-milestones)[memory.get_social_contexts](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-social-contexts)[memory.get_unread_count](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-unread-count)[memory.has_memory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-has-memory)[memory.has_milestone](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-has-milestone)[memory.mark_read](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-mark-read)[memory.remove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-remove)[memory.solve](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-solve)
