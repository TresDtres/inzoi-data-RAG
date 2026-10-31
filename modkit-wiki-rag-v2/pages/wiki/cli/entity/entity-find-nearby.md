---
document_id: "e8652b8c0e531002fec3391fdebbe52d1e26aeb6657d9a06d8e0d35f4dd8bf2e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-find-nearby"
title: "entity.find_nearby"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:56+00:00"
content_sha256: "25a1afa3c5a3b8e4cae47713ed54b49f388a200c7707c73f28bda3c4e196d5a2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/entity/entity-find-nearby"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- [deprecated] Use entity.scan_characters instead.

# Metadata

| FieldValueDisplayFind Nearby (→ scan_characters)Category`entity`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayFind Nearby (→ scan_characters)Category`entity`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Category`entity`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionradiusfloatno—Search radius in meters (default 100) |
| --- |
| radiusfloatno—Search radius in meters (default 100) |

# Usage

```
await inzoi.cli.execute('entity.find_nearby', {  radius: 0.0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoentity[entity.attach_prop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-attach-prop)[entity.components](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-components)[entity.concept_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-concept-info)[entity.get_character_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-character-info)[entity.get_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-info)[entity.get_object_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-object-info)[entity.get_possessed](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-possessed)[entity.get_simulate_state](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-simulate-state)[entity.get_vehicle_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-vehicle-info)[entity.possess](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-possess)[entity.reflect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-reflect)[entity.scan_characters](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-scan-characters)
