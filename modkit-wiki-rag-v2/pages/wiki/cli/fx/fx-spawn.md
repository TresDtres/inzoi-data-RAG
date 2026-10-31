---
document_id: "d6b7b9f04ee7a00eddc23c4ec9263d8d05afea4fbf733042456c9de2010c2353"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/fx/fx-spawn"
title: "fx.spawn"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:59+00:00"
content_sha256: "d3ad33f13bef6a99f434a2f9f8025747c514fde65946c34ba917d405a991638a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/fx/fx-spawn"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Spawns an FX table entry at an explicit world transform or attached to an entity. Spawner-backed montage FX are played through a transient B1FXSpawnActor at the requested transform.

# Metadata

| FieldValueDisplaySpawn FXCategory`fx`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplaySpawn FXCategory`fx`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`fx`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionfx_idnameyes—FX table row IDentity_identityIdno—Optional target entity ID. If omitted, transform is world-space.socketnameno—Optional socket name for entity attachmentxfloatno—X location. Required for world-space spawn, relative otherwise.yfloatno—Y location. Required for world-space spawn, relative otherwise.zfloatno—Z location. Required for world-space spawn, relative otherwise.pitchfloatno0Pitch in degreesyawfloatno0Yaw in degreesrollfloatno0Roll in degreesscalefloatno1Uniform scalescale_xfloatno—X scale overridescale_yfloatno—Y scale override scale_z float no — Z scale override with_handle bool no false Register the FX with B1 FX handles |
| --- |
| fx_idnameyes—FX table row IDentity_identityIdno—Optional target entity ID. If omitted, transform is world-space.socketnameno—Optional socket name for entity attachmentxfloatno—X location. Required for world-space spawn, relative otherwise.yfloatno—Y location. Required for world-space spawn, relative otherwise.zfloatno—Z location. Required for world-space spawn, relative otherwise.pitchfloatno0Pitch in degreesyawfloatno0Yaw in degreesrollfloatno0Roll in degreesscalefloatno1Uniform scalescale_xfloatno—X scale overridescale_yfloatno—Y scale overridescale_zfloatno—Z scale overridewith_handle bool no false Register the FX with B1 FX handles |
| entity_identityIdno—Optional target entity ID. If omitted, transform is world-space.socketnameno—Optional socket name for entity attachmentxfloatno—X location. Required for world-space spawn, relative otherwise.yfloatno—Y location. Required for world-space spawn, relative otherwise.zfloatno—Z location. Required for world-space spawn, relative otherwise.pitchfloatno0Pitch in degreesyawfloatno0Yaw in degreesrollfloatno0Roll in degreesscalefloatno1Uniform scalescale_xfloatno—X scale overridescale_yfloatno—Y scale overridescale_zfloatno—Z scale overridewith_handleboolnofalseRegister the FX with B1 FX handles |
| socketnameno—Optional socket name for entity attachmentxfloatno—X location. Required for world-space spawn, relative otherwise.yfloatno—Y location. Required for world-space spawn, relative otherwise.zfloatno—Z location. Required for world-space spawn, relative otherwise.pitchfloatno0Pitch in degreesyawfloatno0Yaw in degreesrollfloatno0Roll in degreesscalefloatno1Uniform scalescale_xfloatno—X scale overridescale_yfloatno—Y scale overridescale_zfloatno—Z scale overridewith_handleboolnofalseRegister the FX with B1 FX handles |
| xfloatno—X location. Required for world-space spawn, relative otherwise.yfloatno—Y location. Required for world-space spawn, relative otherwise.zfloatno—Z location. Required for world-space spawn, relative otherwise.pitchfloatno0Pitch in degreesyawfloatno0Yaw in degreesrollfloatno0Roll in degreesscalefloatno1Uniform scalescale_xfloatno—X scale overridescale_yfloatno—Y scale overridescale_zfloatno—Z scale overridewith_handleboolnofalseRegister the FX with B1 FX handles |
| yfloatno—Y location. Required for world-space spawn, relative otherwise.zfloatno—Z location. Required for world-space spawn, relative otherwise.pitchfloatno0Pitch in degreesyawfloatno0Yaw in degreesrollfloatno0Roll in degreesscalefloatno1Uniform scalescale_xfloatno—X scale overridescale_yfloatno—Y scale overridescale_zfloatno—Z scale overridewith_handleboolnofalseRegister the FX with B1 FX handles |
| zfloatno—Z location. Required for world-space spawn, relative otherwise.pitchfloatno0Pitch in degreesyawfloatno0Yaw in degreesrollfloatno0Roll in degreesscalefloatno1Uniform scalescale_xfloatno—X scale overridescale_yfloatno—Y scale overridescale_zfloatno—Z scale overridewith_handleboolnofalseRegister the FX with B1 FX handles |
| pitchfloatno0Pitch in degreesyawfloatno0Yaw in degreesrollfloatno0Roll in degreesscalefloatno1Uniform scalescale_xfloatno—X scale overridescale_yfloatno—Y scale overridescale_zfloatno—Z scale overridewith_handleboolnofalseRegister the FX with B1 FX handles |
| yawfloatno0Yaw in degreesrollfloatno0Roll in degreesscalefloatno1Uniform scalescale_xfloatno—X scale overridescale_yfloatno—Y scale overridescale_zfloatno—Z scale overridewith_handleboolnofalseRegister the FX with B1 FX handles |
| rollfloatno0Roll in degreesscalefloatno1Uniform scalescale_xfloatno—X scale overridescale_yfloatno—Y scale overridescale_zfloatno—Z scale overridewith_handleboolnofalseRegister the FX with B1 FX handles |
| scalefloatno1Uniform scalescale_xfloatno—X scale overridescale_yfloatno—Y scale overridescale_zfloatno—Z scale overridewith_handleboolnofalseRegister the FX with B1 FX handles |
| scale_xfloatno—X scale overridescale_yfloatno—Y scale overridescale_zfloatno—Z scale overridewith_handleboolnofalseRegister the FX with B1 FX handles |
| scale_yfloatno—Y scale overridescale_zfloatno—Z scale overridewith_handleboolnofalseRegister the FX with B1 FX handles |
| scale_zfloatno—Z scale overridewith_handleboolnofalseRegister the FX with B1 FX handles |
| with_handleboolnofalseRegister the FX with B1 FX handles |

# Usage

```
await inzoi.cli.execute('fx.spawn', {  fx_id: '',  entity_id: 0, // optional  socket: '', // optional  x: 0.0, // optional  y: 0.0, // optional  z: 0.0, // optional  pitch: 0, // optional  yaw: 0, // optional  roll: 0, // optional  scale: 1, // optional  scale_x: 0.0, // optional  scale_y: 0.0, // optional  scale_z: 0.0, // optional  with_handle: false, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
