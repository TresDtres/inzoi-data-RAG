---
document_id: "476a0be61ec014df4c38094a96d92fed5733005747c52ad1fcdd044fa540e315"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-scan-vehicles"
title: "entity.scan_vehicles"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:57+00:00"
content_sha256: "43d2f16014a0ab1ed0db8bd8dbd6e171bf6256b9fc0464ba907ce90de2b76818"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/entity/entity-scan-vehicles"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Scans nearby vehicles relative to camera/pawn direction.

# Metadata

| FieldValueDisplayScan VehiclesCategory`entity`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayScan VehiclesCategory`entity`Access`Public`Scope`B1Standalone`Tags—Aliases— |
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
await inzoi.cli.execute('entity.scan_vehicles', {  radius: 0.0, // optional  direction: '', // optional  cone: 0.0, // optional  sort: '', // optional  ref: '', // optional  limit: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoentity[entity.attach_prop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-attach-prop)[entity.components](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-components)[entity.concept_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-concept-info)[entity.find_nearby](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-find-nearby)[entity.get_character_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-character-info)[entity.get_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-info)[entity.get_object_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-object-info)[entity.get_possessed](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-possessed)[entity.get_simulate_state](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-simulate-state)[entity.get_vehicle_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-vehicle-info)[entity.possess](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-possess)[entity.reflect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-reflect)
