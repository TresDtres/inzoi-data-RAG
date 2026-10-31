---
document_id: "7f5a12297786b482fb8cb42219d50ca9641c3f6453c8825b4c243ba2254160a6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-schema"
title: "entity.schema"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:57+00:00"
content_sha256: "bb7452a04dfb3368a49969b16990286792cd298b30f82bde871fc917cf0f447e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/entity/entity-schema"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Return UPROPERTY schema (name, type, enum values) for an entity or component.

# Metadata

| FieldValueDisplayEntity SchemaCategory`entity`Access`UserCheat`Scope`B2Authority`Tags—Aliases`EntitySchema` |
| --- |
| DisplayEntity SchemaCategory`entity`Access`UserCheat`Scope`B2Authority`Tags—Aliases`EntitySchema` |
| Category`entity`Access`UserCheat`Scope`B2Authority`Tags—Aliases`EntitySchema` |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases`EntitySchema` |
| Scope`B2Authority`Tags—Aliases`EntitySchema` |
| Tags—Aliases`EntitySchema` |
| Aliases`EntitySchema` |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)componentstringno—Component type name (optional) |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)componentstringno—Component type name (optional) |
| componentstringno—Component type name (optional) |

# Usage

```
await inzoi.cli.execute('entity.schema', {  entity_id: 0, // optional  component: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoentity[entity.attach_prop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-attach-prop)[entity.components](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-components)[entity.concept_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-concept-info)[entity.find_nearby](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-find-nearby)[entity.get_character_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-character-info)[entity.get_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-info)[entity.get_object_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-object-info)[entity.get_possessed](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-possessed)[entity.get_simulate_state](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-simulate-state)[entity.get_vehicle_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-vehicle-info)[entity.possess](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-possess)[entity.reflect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-reflect)
