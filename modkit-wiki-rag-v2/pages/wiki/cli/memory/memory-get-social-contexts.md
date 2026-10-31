---
document_id: "58d127b17fae04be4b45a5fdea8d691eb6125ce40bda4dbf60a6b5a60c9389ee"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-social-contexts"
title: "memory.get_social_contexts"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:19+00:00"
content_sha256: "1a66f0177fa0879cbe7900e43cd054f15e1517e3d548b15e892bdea22d93a958"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/memory/memory-get-social-contexts"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns all social-context memories of the target character (target, memory id, state, mood scores).

# Metadata

| FieldValueDisplayGet Social ContextsCategory`memory`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayGet Social ContextsCategory`memory`Access`Public`Scope`B2Authority`Tags—Aliases— |
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

| FieldTypeRequiredDescription`entity_id`entityIdyesOwner entity id`count`intyesNumber of social contexts`social_contexts`arrayyesSocial-context memories`social_contexts[].target_entity_id`entityIdyesTarget entity id`social_contexts[].memory_dt_id`stringyesMemory data table id`social_contexts[].self_state`stringyesSelf social-context state (active/solved/invalid)`social_contexts[].target_state`stringyesTarget social-context state (active/solved/invalid)`social_contexts[].self_mood_score`floatyesSelf mood score`social_contexts[].target_mood_score`floatyesTarget mood score`social_contexts[].cooltime`intyesCooltime in ticks`social_contexts[].is_unread`boolyesWhether unread |
| --- |
| `entity_id`entityIdyesOwner entity id`count`intyesNumber of social contexts`social_contexts`arrayyesSocial-context memories`social_contexts[].target_entity_id`entityIdyesTarget entity id`social_contexts[].memory_dt_id`stringyesMemory data table id`social_contexts[].self_state`stringyesSelf social-context state (active/solved/invalid)`social_contexts[].target_state`stringyesTarget social-context state (active/solved/invalid)`social_contexts[].self_mood_score`floatyesSelf mood score`social_contexts[].target_mood_score`floatyesTarget mood score`social_contexts[].cooltime`intyesCooltime in ticks`social_contexts[].is_unread`boolyesWhether unread |
| `count`intyesNumber of social contexts`social_contexts`arrayyesSocial-context memories`social_contexts[].target_entity_id`entityIdyesTarget entity id`social_contexts[].memory_dt_id`stringyesMemory data table id`social_contexts[].self_state`stringyesSelf social-context state (active/solved/invalid)`social_contexts[].target_state`stringyesTarget social-context state (active/solved/invalid)`social_contexts[].self_mood_score`floatyesSelf mood score`social_contexts[].target_mood_score`floatyesTarget mood score`social_contexts[].cooltime`intyesCooltime in ticks`social_contexts[].is_unread`boolyesWhether unread |
| `social_contexts`arrayyesSocial-context memories`social_contexts[].target_entity_id`entityIdyesTarget entity id`social_contexts[].memory_dt_id`stringyesMemory data table id`social_contexts[].self_state`stringyesSelf social-context state (active/solved/invalid)`social_contexts[].target_state`stringyesTarget social-context state (active/solved/invalid)`social_contexts[].self_mood_score`floatyesSelf mood score`social_contexts[].target_mood_score`floatyesTarget mood score`social_contexts[].cooltime`intyesCooltime in ticks`social_contexts[].is_unread`boolyesWhether unread |
| `social_contexts[].target_entity_id`entityIdyesTarget entity id`social_contexts[].memory_dt_id`stringyesMemory data table id`social_contexts[].self_state`stringyesSelf social-context state (active/solved/invalid)`social_contexts[].target_state`stringyesTarget social-context state (active/solved/invalid)`social_contexts[].self_mood_score`floatyesSelf mood score`social_contexts[].target_mood_score`floatyesTarget mood score`social_contexts[].cooltime`intyesCooltime in ticks`social_contexts[].is_unread`boolyesWhether unread |
| `social_contexts[].memory_dt_id`stringyesMemory data table id`social_contexts[].self_state`stringyesSelf social-context state (active/solved/invalid)`social_contexts[].target_state`stringyesTarget social-context state (active/solved/invalid)`social_contexts[].self_mood_score`floatyesSelf mood score`social_contexts[].target_mood_score`floatyesTarget mood score`social_contexts[].cooltime`intyesCooltime in ticks`social_contexts[].is_unread`boolyesWhether unread |
| `social_contexts[].self_state`stringyesSelf social-context state (active/solved/invalid)`social_contexts[].target_state`stringyesTarget social-context state (active/solved/invalid)`social_contexts[].self_mood_score`floatyesSelf mood score`social_contexts[].target_mood_score`floatyesTarget mood score`social_contexts[].cooltime`intyesCooltime in ticks`social_contexts[].is_unread`boolyesWhether unread |
| `social_contexts[].target_state`stringyesTarget social-context state (active/solved/invalid)`social_contexts[].self_mood_score`floatyesSelf mood score`social_contexts[].target_mood_score`floatyesTarget mood score`social_contexts[].cooltime`intyesCooltime in ticks`social_contexts[].is_unread`boolyesWhether unread |
| `social_contexts[].self_mood_score`floatyesSelf mood score`social_contexts[].target_mood_score`floatyesTarget mood score`social_contexts[].cooltime`intyesCooltime in ticks`social_contexts[].is_unread`boolyesWhether unread |
| `social_contexts[].target_mood_score`floatyesTarget mood score`social_contexts[].cooltime`intyesCooltime in ticks`social_contexts[].is_unread`boolyesWhether unread |
| `social_contexts[].cooltime`intyesCooltime in ticks`social_contexts[].is_unread`boolyesWhether unread |
| `social_contexts[].is_unread`boolyesWhether unread |

# Usage

```
await inzoi.cli.execute('memory.get_social_contexts', {  entity_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsomemory[memory.add](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-add)[memory.add_milestone](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-add-milestone)[memory.clear_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-clear-all)[memory.get_milestones](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-milestones)[memory.get_unread_count](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-unread-count)[memory.has_memory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-has-memory)[memory.has_milestone](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-has-milestone)[memory.mark_read](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-mark-read)[memory.remove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-remove)[memory.solve](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-solve)
