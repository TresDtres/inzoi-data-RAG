---
document_id: "fdf19ec3026bb389b2444cf40274b2d4dd7552f0173a95f7e1225946ce4568a8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-reflect"
title: "entity.reflect"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:57+00:00"
content_sha256: "d81483d2d03c79bc9db6d28d82cedda7317addaa846b8d9011a8db3ad8604465"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/entity/entity-reflect"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Serialize entity or component UPROPERTYs via UE reflection.

# Metadata

| FieldValueDisplayEntity ReflectCategory`entity`Access`UserCheat`Scope`B2Authority`Tags—Aliases`EntityReflect` |
| --- |
| DisplayEntity ReflectCategory`entity`Access`UserCheat`Scope`B2Authority`Tags—Aliases`EntityReflect` |
| Category`entity`Access`UserCheat`Scope`B2Authority`Tags—Aliases`EntityReflect` |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases`EntityReflect` |
| Scope`B2Authority`Tags—Aliases`EntityReflect` |
| Tags—Aliases`EntityReflect` |
| Aliases`EntityReflect` |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)componentstringno—Component type name (optional, e.g. Emotion or FB2EmotionComponent) |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)componentstringno—Component type name (optional, e.g. Emotion or FB2EmotionComponent) |
| componentstringno—Component type name (optional, e.g. Emotion or FB2EmotionComponent) |

# Usage

```
await inzoi.cli.execute('entity.reflect', {  entity_id: 0, // optional  component: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoentity[entity.attach_prop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-attach-prop)[entity.components](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-components)[entity.concept_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-concept-info)[entity.find_nearby](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-find-nearby)[entity.get_character_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-character-info)[entity.get_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-info)[entity.get_object_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-object-info)[entity.get_possessed](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-possessed)[entity.get_simulate_state](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-simulate-state)[entity.get_vehicle_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-vehicle-info)[entity.possess](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-possess)[entity.scan_characters](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-scan-characters)
