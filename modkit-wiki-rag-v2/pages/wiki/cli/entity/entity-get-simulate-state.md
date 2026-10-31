---
document_id: "daddd7e2015d0b523e5acc6e31f29e13cb0738194f52ae09ff75fd9e847ad1bf"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-simulate-state"
title: "entity.get_simulate_state"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:56+00:00"
content_sha256: "1ff887f9f7161714f95b3a12b73f5e7e06216e62d2576614e59524c8b9a39252"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/entity/entity-get-simulate-state"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Check whether a character entity is currently simulated (spawned on-screen). Supports batch query via comma-separated entity_ids.

# Metadata

| FieldValueDisplayGet Simulate StateCategory`entity`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayGet Simulate StateCategory`entity`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`entity`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Single entity ID to checkentity_idsstringno—Comma-separated entity IDs for batch query |
| --- |
| entity_identityIdno—Single entity ID to checkentity_idsstringno—Comma-separated entity IDs for batch query |
| entity_idsstringno—Comma-separated entity IDs for batch query |

# Usage

```
await inzoi.cli.execute('entity.get_simulate_state', {  entity_id: 0, // optional  entity_ids: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoentity[entity.attach_prop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-attach-prop)[entity.components](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-components)[entity.concept_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-concept-info)[entity.find_nearby](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-find-nearby)[entity.get_character_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-character-info)[entity.get_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-info)[entity.get_object_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-object-info)[entity.get_possessed](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-possessed)[entity.get_vehicle_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-vehicle-info)[entity.possess](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-possess)[entity.reflect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-reflect)[entity.scan_characters](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-scan-characters)
