---
document_id: "ff30a76d6eab7c9de7dca9ee1e526c683f16e72b7d47adcd29e9f0a5b8cdb925"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartzoi/smartzoi-enqueue-composite-coop-result"
title: "smartzoi.enqueue_composite_coop_result"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:17+00:00"
content_sha256: "76f6aae408dda6a32748f2b999190db44ed38e8ba4beeb4b68df3c61759afba8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/smartzoi/smartzoi-enqueue-composite-coop-result"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Simulates an SLM result for a SmartZoi Coop action with selected target entity and Coop role assignments.

# Metadata

| FieldValueDisplayEnqueue SmartZoi Composite Coop ResultCategory`smartzoi`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayEnqueue SmartZoi Composite Coop ResultCategory`smartzoi`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Category`smartzoi`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Owner character entity ID (default: possessed)interaction_bag_idnameyes—Coop interaction bag IDtarget_entity_identityIdyes—Selected target entity IDtarget_object_entity_identityIdno—Alias for target_entity_id when target is a GameObjectrole_assignmentsstringyes—Selected Coop role assignments. Example: Main:123,Sub:456target_entity_typestringnoGameObjectTarget entity type: GameObject or Character.target_object_namestringno—Optional selected object name from the SLM result.target_character_namestringno—Optional selected character name from the SLM result.reasonstringno—Optional SmartZoi reason text. |
| --- |
| entity_identityIdno—Owner character entity ID (default: possessed)interaction_bag_idnameyes—Coop interaction bag IDtarget_entity_identityIdyes—Selected target entity IDtarget_object_entity_identityIdno—Alias for target_entity_id when target is a GameObjectrole_assignmentsstringyes—Selected Coop role assignments. Example: Main:123,Sub:456target_entity_typestringnoGameObjectTarget entity type: GameObject or Character.target_object_namestringno—Optional selected object name from the SLM result.target_character_namestringno—Optional selected character name from the SLM result.reasonstringno—Optional SmartZoi reason text. |
| interaction_bag_idnameyes—Coop interaction bag IDtarget_entity_identityIdyes—Selected target entity IDtarget_object_entity_identityIdno—Alias for target_entity_id when target is a GameObjectrole_assignmentsstringyes—Selected Coop role assignments. Example: Main:123,Sub:456target_entity_typestringnoGameObjectTarget entity type: GameObject or Character.target_object_namestringno—Optional selected object name from the SLM result.target_character_namestringno—Optional selected character name from the SLM result.reasonstringno—Optional SmartZoi reason text. |
| target_entity_identityIdyes—Selected target entity IDtarget_object_entity_identityIdno—Alias for target_entity_id when target is a GameObjectrole_assignmentsstringyes—Selected Coop role assignments. Example: Main:123,Sub:456target_entity_typestringnoGameObjectTarget entity type: GameObject or Character.target_object_namestringno—Optional selected object name from the SLM result.target_character_namestringno—Optional selected character name from the SLM result.reasonstringno—Optional SmartZoi reason text. |
| target_object_entity_identityIdno—Alias for target_entity_id when target is a GameObjectrole_assignmentsstringyes—Selected Coop role assignments. Example: Main:123,Sub:456target_entity_typestringnoGameObjectTarget entity type: GameObject or Character.target_object_namestringno—Optional selected object name from the SLM result.target_character_namestringno—Optional selected character name from the SLM result.reasonstringno—Optional SmartZoi reason text. |
| role_assignmentsstringyes—Selected Coop role assignments. Example: Main:123,Sub:456target_entity_typestringnoGameObjectTarget entity type: GameObject or Character.target_object_namestringno—Optional selected object name from the SLM result.target_character_namestringno—Optional selected character name from the SLM result.reasonstringno—Optional SmartZoi reason text. |
| target_entity_typestringnoGameObjectTarget entity type: GameObject or Character.target_object_namestringno—Optional selected object name from the SLM result.target_character_namestringno—Optional selected character name from the SLM result.reasonstringno—Optional SmartZoi reason text. |
| target_object_namestringno—Optional selected object name from the SLM result.target_character_namestringno—Optional selected character name from the SLM result.reasonstringno—Optional SmartZoi reason text. |
| target_character_namestringno—Optional selected character name from the SLM result.reasonstringno—Optional SmartZoi reason text. |
| reasonstringno—Optional SmartZoi reason text. |

# Usage

```
await inzoi.cli.execute('smartzoi.enqueue_composite_coop_result', {  entity_id: 0, // optional  interaction_bag_id: '',  target_entity_id: 0,  target_object_entity_id: 0, // optional  role_assignments: '',  target_entity_type: 'GameObject', // optional  target_object_name: '', // optional  target_character_name: '', // optional  reason: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
