---
document_id: "c358eb404d11bb32cfbb2609d1672f2a0c6bd6bfeba3cebc75e6f19e71e3c8d9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-milestones"
title: "memory.get_milestones"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:19+00:00"
content_sha256: "4fa7d4361779f14c5979b44b27f67ea71d2a1542e0b48d477cacbeca03f4d2f9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/memory/memory-get-milestones"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns all acquired milestones of the target character.

# Metadata

| FieldValueDisplayGet MilestonesCategory`memory`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayGet MilestonesCategory`memory`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`memory`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed) |
| --- |
| entity_identityIdno—Target entity ID (default: possessed) |

# Returns

Returns a JSON object with the following fields:

| FieldTypeRequiredDescription`entity_id`entityIdyesOwner entity id`count`intyesNumber of milestones`milestones`arrayyesAcquired milestones`milestones[].milestone_id`stringyesMilestone id`milestones[].target_entity_id`entityIdyesMilestone target entity id`milestones[].target_dt_id`stringyesMilestone target data table id`milestones[].is_read`boolyesWhether read`milestones[].acquired_time`intyesAcquisition time in ticks |
| --- |
| `entity_id`entityIdyesOwner entity id`count`intyesNumber of milestones`milestones`arrayyesAcquired milestones`milestones[].milestone_id`stringyesMilestone id`milestones[].target_entity_id`entityIdyesMilestone target entity id`milestones[].target_dt_id`stringyesMilestone target data table id`milestones[].is_read`boolyesWhether read`milestones[].acquired_time`intyesAcquisition time in ticks |
| `count`intyesNumber of milestones`milestones`arrayyesAcquired milestones`milestones[].milestone_id`stringyesMilestone id`milestones[].target_entity_id`entityIdyesMilestone target entity id`milestones[].target_dt_id`stringyesMilestone target data table id`milestones[].is_read`boolyesWhether read`milestones[].acquired_time`intyesAcquisition time in ticks |
| `milestones`arrayyesAcquired milestones`milestones[].milestone_id`stringyesMilestone id`milestones[].target_entity_id`entityIdyesMilestone target entity id`milestones[].target_dt_id`stringyesMilestone target data table id`milestones[].is_read`boolyesWhether read`milestones[].acquired_time`intyesAcquisition time in ticks |
| `milestones[].milestone_id`stringyesMilestone id`milestones[].target_entity_id`entityIdyesMilestone target entity id`milestones[].target_dt_id`stringyesMilestone target data table id`milestones[].is_read`boolyesWhether read`milestones[].acquired_time`intyesAcquisition time in ticks |
| `milestones[].target_entity_id`entityIdyesMilestone target entity id`milestones[].target_dt_id`stringyesMilestone target data table id`milestones[].is_read`boolyesWhether read`milestones[].acquired_time`intyesAcquisition time in ticks |
| `milestones[].target_dt_id`stringyesMilestone target data table id`milestones[].is_read`boolyesWhether read`milestones[].acquired_time`intyesAcquisition time in ticks |
| `milestones[].is_read`boolyesWhether read`milestones[].acquired_time`intyesAcquisition time in ticks |
| `milestones[].acquired_time`intyesAcquisition time in ticks |

# Usage

```
await inzoi.cli.execute('memory.get_milestones', {  entity_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsomemory[memory.add](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-add)[memory.add_milestone](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-add-milestone)[memory.clear_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-clear-all)[memory.get_social_contexts](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-social-contexts)[memory.get_unread_count](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-unread-count)[memory.has_memory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-has-memory)[memory.has_milestone](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-has-milestone)[memory.mark_read](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-mark-read)[memory.remove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-remove)[memory.solve](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-solve)
