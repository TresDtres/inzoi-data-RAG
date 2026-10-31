---
document_id: "a1d20d95d6708ba7939d9197d783818cce58d1ae7496be9973db784bcbee45e0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-object-info"
title: "entity.get_object_info"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:56+00:00"
content_sha256: "a4ae5f15c0ffe1bb258db30a984c84f5b2a47d8f81ebaa5eee0a2aabd5716caa"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/entity/entity-get-object-info"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns detailed info for a game object: data table ID, category, tags, asset path, template, mesh components, and location.

# Metadata

| FieldValueDisplayGet Object InfoCategory`entity`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayGet Object InfoCategory`entity`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Category`entity`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdyes—Entity ID of the game object |
| --- |
| entity_identityIdyes—Entity ID of the game object |

# Usage

```
await inzoi.cli.execute('entity.get_object_info', {  entity_id: 0,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoentity[entity.attach_prop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-attach-prop)[entity.components](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-components)[entity.concept_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-concept-info)[entity.find_nearby](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-find-nearby)[entity.get_character_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-character-info)[entity.get_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-info)[entity.get_possessed](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-possessed)[entity.get_simulate_state](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-simulate-state)[entity.get_vehicle_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-vehicle-info)[entity.possess](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-possess)[entity.reflect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-reflect)[entity.scan_characters](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-scan-characters)
