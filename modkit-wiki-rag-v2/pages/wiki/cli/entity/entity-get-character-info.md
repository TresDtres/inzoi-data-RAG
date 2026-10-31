---
document_id: "2673c6bbacd2c96a5ac5bf146fffab0b394f9b816feac522eb3d3be3c75898d9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-character-info"
title: "entity.get_character_info"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:56+00:00"
content_sha256: "d27786f36b50a83fb2306ed1c906faf49ff30beeeaa9a0f4ca30420b8406432f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/entity/entity-get-character-info"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns detailed character info including name, gender (appearance), bio_gender (simulation), growthStep, appearance (hair, skin, garments, accessories, body).

# Metadata

| FieldValueDisplayGet Character InfoCategory`entity`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayGet Character InfoCategory`entity`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`entity`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Entity ID (default: possessed) |
| --- |
| entity_identityIdno—Entity ID (default: possessed) |

# Usage

```
await inzoi.cli.execute('entity.get_character_info', {  entity_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoentity[entity.attach_prop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-attach-prop)[entity.components](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-components)[entity.concept_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-concept-info)[entity.find_nearby](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-find-nearby)[entity.get_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-info)[entity.get_object_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-object-info)[entity.get_possessed](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-possessed)[entity.get_simulate_state](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-simulate-state)[entity.get_vehicle_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-vehicle-info)[entity.possess](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-possess)[entity.reflect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-reflect)[entity.scan_characters](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-scan-characters)
