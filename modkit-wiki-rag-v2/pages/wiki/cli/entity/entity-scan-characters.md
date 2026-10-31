---
document_id: "9e954164c18b7d07447e4a11e33e0cdb8e8a61bdfcc2b701e1be8dbccdab6b2a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-scan-characters"
title: "entity.scan_characters"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:57+00:00"
content_sha256: "f68a24762221a6eb397427ce96b62698541ba1b5c08595b3d59780556169d199"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/entity/entity-scan-characters"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Scans nearby characters relative to camera/pawn direction. Returns angle, direction label, and distance.

# Metadata

| FieldValueDisplayScan CharactersCategory`entity`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayScan CharactersCategory`entity`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Category`entity`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionradiusfloatno—Search radius in meters (default 100, max 1000)directionstringno—Direction filter: front/behind/left/right/all (default all)conefloatno—Cone half-angle in degrees (default 90)sortstringno—Sort by: distance/angle (default distance)refstringno—Reference direction: camera/pawn (default camera)limitintno—Max results (default 20, max 100) |
| --- |
| radiusfloatno—Search radius in meters (default 100, max 1000)directionstringno—Direction filter: front/behind/left/right/all (default all)conefloatno—Cone half-angle in degrees (default 90)sortstringno—Sort by: distance/angle (default distance)refstringno—Reference direction: camera/pawn (default camera)limitintno—Max results (default 20, max 100) |
| directionstringno—Direction filter: front/behind/left/right/all (default all)conefloatno—Cone half-angle in degrees (default 90)sortstringno—Sort by: distance/angle (default distance)refstringno—Reference direction: camera/pawn (default camera)limitintno—Max results (default 20, max 100) |
| conefloatno—Cone half-angle in degrees (default 90)sortstringno—Sort by: distance/angle (default distance)refstringno—Reference direction: camera/pawn (default camera)limitintno—Max results (default 20, max 100) |
| sortstringno—Sort by: distance/angle (default distance)refstringno—Reference direction: camera/pawn (default camera)limitintno—Max results (default 20, max 100) |
| refstringno—Reference direction: camera/pawn (default camera)limitintno—Max results (default 20, max 100) |
| limitintno—Max results (default 20, max 100) |

# Usage

```
await inzoi.cli.execute('entity.scan_characters', {  radius: 0.0, // optional  direction: '', // optional  cone: 0.0, // optional  sort: '', // optional  ref: '', // optional  limit: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoentity[entity.attach_prop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-attach-prop)[entity.components](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-components)[entity.concept_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-concept-info)[entity.find_nearby](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-find-nearby)[entity.get_character_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-character-info)[entity.get_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-info)[entity.get_object_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-object-info)[entity.get_possessed](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-possessed)[entity.get_simulate_state](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-simulate-state)[entity.get_vehicle_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-vehicle-info)[entity.possess](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-possess)[entity.reflect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-reflect)
