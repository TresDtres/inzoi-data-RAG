---
document_id: "8e671f1d2c57681e8f3942d43d1aeedf9799cd62bd646dae52d0587232fb45d8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod3d/uimod3d-transform"
title: "uimod3d.transform"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:39+00:00"
content_sha256: "3fb8f45e6cf87e45dff88078c251f1143d7569eb7e973677267c7cc7ef68b8fb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/uimod3d/uimod3d-transform"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Adjusts the position, rotation, or scale of a 3D UI attached to an actor. Only specified parameters are modified; others keep their current values.

# Metadata

| FieldValueDisplayTransform 3D UI ModCategory`uimod3d`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayTransform 3D UI ModCategory`uimod3d`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Category`uimod3d`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target actor entity_idoffset_xfloatno—X offset from actor origin (cm)offset_yfloatno—Y offset from actor origin (cm)offset_zfloatno—Z offset from actor origin (cm)pitchfloatno—Pitch rotation (degrees)yawfloatno—Yaw rotation (degrees)rollfloatno—Roll rotation (degrees)scalefloatno—Uniform scale (overridden by scale_x/y/z)scale_xfloatno—Scale along X axisscale_yfloatno—Scale along Y axisscale_zfloatno—Scale along Z axis |
| --- |
| entity_identityIdno—Target actor entity_idoffset_xfloatno—X offset from actor origin (cm)offset_yfloatno—Y offset from actor origin (cm)offset_zfloatno—Z offset from actor origin (cm)pitchfloatno—Pitch rotation (degrees)yawfloatno—Yaw rotation (degrees)rollfloatno—Roll rotation (degrees)scalefloatno—Uniform scale (overridden by scale_x/y/z)scale_xfloatno—Scale along X axisscale_yfloatno—Scale along Y axisscale_zfloatno—Scale along Z axis |
| offset_xfloatno—X offset from actor origin (cm)offset_yfloatno—Y offset from actor origin (cm)offset_zfloatno—Z offset from actor origin (cm)pitchfloatno—Pitch rotation (degrees)yawfloatno—Yaw rotation (degrees)rollfloatno—Roll rotation (degrees)scalefloatno—Uniform scale (overridden by scale_x/y/z)scale_xfloatno—Scale along X axisscale_yfloatno—Scale along Y axisscale_zfloatno—Scale along Z axis |
| offset_yfloatno—Y offset from actor origin (cm)offset_zfloatno—Z offset from actor origin (cm)pitchfloatno—Pitch rotation (degrees)yawfloatno—Yaw rotation (degrees)rollfloatno—Roll rotation (degrees)scalefloatno—Uniform scale (overridden by scale_x/y/z)scale_xfloatno—Scale along X axisscale_yfloatno—Scale along Y axisscale_zfloatno—Scale along Z axis |
| offset_zfloatno—Z offset from actor origin (cm)pitchfloatno—Pitch rotation (degrees)yawfloatno—Yaw rotation (degrees)rollfloatno—Roll rotation (degrees)scalefloatno—Uniform scale (overridden by scale_x/y/z)scale_xfloatno—Scale along X axisscale_yfloatno—Scale along Y axisscale_zfloatno—Scale along Z axis |
| pitchfloatno—Pitch rotation (degrees)yawfloatno—Yaw rotation (degrees)rollfloatno—Roll rotation (degrees)scalefloatno—Uniform scale (overridden by scale_x/y/z)scale_xfloatno—Scale along X axisscale_yfloatno—Scale along Y axisscale_zfloatno—Scale along Z axis |
| yawfloatno—Yaw rotation (degrees)rollfloatno—Roll rotation (degrees)scalefloatno—Uniform scale (overridden by scale_x/y/z)scale_xfloatno—Scale along X axisscale_yfloatno—Scale along Y axisscale_zfloatno—Scale along Z axis |
| rollfloatno—Roll rotation (degrees)scalefloatno—Uniform scale (overridden by scale_x/y/z)scale_xfloatno—Scale along X axisscale_yfloatno—Scale along Y axisscale_zfloatno—Scale along Z axis |
| scalefloatno—Uniform scale (overridden by scale_x/y/z)scale_xfloatno—Scale along X axisscale_yfloatno—Scale along Y axisscale_zfloatno—Scale along Z axis |
| scale_xfloatno—Scale along X axisscale_yfloatno—Scale along Y axisscale_zfloatno—Scale along Z axis |
| scale_yfloatno—Scale along Y axisscale_zfloatno—Scale along Z axis |
| scale_zfloatno—Scale along Z axis |

# Returns

- Return shape is not declared for this command.

# Usage

```
await inzoi.cli.execute('uimod3d.transform', {  entity_id: 0, // optional  offset_x: 0.0, // optional  offset_y: 0.0, // optional  offset_z: 0.0, // optional  pitch: 0.0, // optional  yaw: 0.0, // optional  roll: 0.0, // optional  scale: 0.0, // optional  scale_x: 0.0, // optional  scale_y: 0.0, // optional  scale_z: 0.0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsouimod3d[uimod3d.attach](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod3d/uimod3d-attach)[uimod3d.detach](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod3d/uimod3d-detach)[uimod3d.list](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod3d/uimod3d-list)
