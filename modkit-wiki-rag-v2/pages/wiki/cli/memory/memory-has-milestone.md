---
document_id: "3a8eb00c3a46b1821830b9d780fdbcea8aedd79b9ffadb5f41def8638d02deb0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-has-milestone"
title: "memory.has_milestone"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:20+00:00"
content_sha256: "c47bd00fe94dc8f8614b22b0f451d6a5fd34579f7b1873264d378e24a51ffd3b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/memory/memory-has-milestone"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Checks whether the target character has acquired the given milestone.

# Metadata

| FieldValueDisplayHas MilestoneCategory`memory`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayHas MilestoneCategory`memory`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`memory`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)milestone_idnameyes—Milestone ID to check |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)milestone_idnameyes—Milestone ID to check |
| milestone_idnameyes—Milestone ID to check |

# Returns

Returns a JSON object with the following fields:

| FieldTypeRequiredDescription`entity_id`entityIdyesOwner entity id`milestone_id`stringyesMilestone id checked`has_milestone`boolyesWhether the milestone is acquired |
| --- |
| `entity_id`entityIdyesOwner entity id`milestone_id`stringyesMilestone id checked`has_milestone`boolyesWhether the milestone is acquired |
| `milestone_id`stringyesMilestone id checked`has_milestone`boolyesWhether the milestone is acquired |
| `has_milestone`boolyesWhether the milestone is acquired |

# Usage

```
await inzoi.cli.execute('memory.has_milestone', {  entity_id: 0, // optional  milestone_id: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsomemory[memory.add](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-add)[memory.add_milestone](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-add-milestone)[memory.clear_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-clear-all)[memory.get_milestones](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-milestones)[memory.get_social_contexts](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-social-contexts)[memory.get_unread_count](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-unread-count)[memory.has_memory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-has-memory)[memory.mark_read](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-mark-read)[memory.remove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-remove)[memory.solve](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-solve)
