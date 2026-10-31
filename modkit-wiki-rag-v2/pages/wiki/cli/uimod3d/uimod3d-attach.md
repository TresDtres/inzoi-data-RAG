---
document_id: "71faffae3a7250d3c0ef408a3b3e591981d4169a70a6e7778d1726a91491bf13"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod3d/uimod3d-attach"
title: "uimod3d.attach"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:38+00:00"
content_sha256: "6905858238bd3bf528438021e561ec18953781cda29239df2c5cd8044d3e8bae"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/uimod3d/uimod3d-attach"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Attaches a Cohtml HTML view on a 3D plane mesh to the specified actor. The plane renders the HTML content as a texture in world space.

# Metadata

| FieldValueDisplayAttach 3D UI ModCategory`uimod3d`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayAttach 3D UI ModCategory`uimod3d`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Category`uimod3d`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target actor entity_id (defaults to possessed Zoi)urlstringyes—Cohtml URL to load (e.g. coui://mymod/ui/app/index.html)widthintno1024Cohtml view width in pixelsheightintno1024Cohtml view height in pixelsoffset_xfloatno0X offset from actor origin (cm)offset_yfloatno0Y offset from actor origin (cm)offset_zfloatno150Z offset from actor origin (cm)pitchfloatno0Pitch rotation (degrees)yawfloatno0Yaw rotation (degrees)rollfloatno0Roll rotation (degrees)scale_xfloatno1Scale along X axisscale_yfloatno1Scale along Y axis scale_z float no 1 Scale along Z axis mesh_scale float no 0.5 Base mesh scale (0.5 = 50cm plane) |
| --- |
| entity_identityIdno—Target actor entity_id (defaults to possessed Zoi)urlstringyes—Cohtml URL to load (e.g. coui://mymod/ui/app/index.html)widthintno1024Cohtml view width in pixelsheightintno1024Cohtml view height in pixelsoffset_xfloatno0X offset from actor origin (cm)offset_yfloatno0Y offset from actor origin (cm)offset_zfloatno150Z offset from actor origin (cm)pitchfloatno0Pitch rotation (degrees)yawfloatno0Yaw rotation (degrees)rollfloatno0Roll rotation (degrees)scale_xfloatno1Scale along X axisscale_yfloatno1Scale along Y axisscale_zfloatno1Scale along Z axismesh_scale float no 0.5 Base mesh scale (0.5 = 50cm plane) |
| urlstringyes—Cohtml URL to load (e.g. coui://mymod/ui/app/index.html)widthintno1024Cohtml view width in pixelsheightintno1024Cohtml view height in pixelsoffset_xfloatno0X offset from actor origin (cm)offset_yfloatno0Y offset from actor origin (cm)offset_zfloatno150Z offset from actor origin (cm)pitchfloatno0Pitch rotation (degrees)yawfloatno0Yaw rotation (degrees)rollfloatno0Roll rotation (degrees)scale_xfloatno1Scale along X axisscale_yfloatno1Scale along Y axisscale_zfloatno1Scale along Z axismesh_scalefloatno0.5Base mesh scale (0.5 = 50cm plane) |
| widthintno1024Cohtml view width in pixelsheightintno1024Cohtml view height in pixelsoffset_xfloatno0X offset from actor origin (cm)offset_yfloatno0Y offset from actor origin (cm)offset_zfloatno150Z offset from actor origin (cm)pitchfloatno0Pitch rotation (degrees)yawfloatno0Yaw rotation (degrees)rollfloatno0Roll rotation (degrees)scale_xfloatno1Scale along X axisscale_yfloatno1Scale along Y axisscale_zfloatno1Scale along Z axismesh_scalefloatno0.5Base mesh scale (0.5 = 50cm plane) |
| heightintno1024Cohtml view height in pixelsoffset_xfloatno0X offset from actor origin (cm)offset_yfloatno0Y offset from actor origin (cm)offset_zfloatno150Z offset from actor origin (cm)pitchfloatno0Pitch rotation (degrees)yawfloatno0Yaw rotation (degrees)rollfloatno0Roll rotation (degrees)scale_xfloatno1Scale along X axisscale_yfloatno1Scale along Y axisscale_zfloatno1Scale along Z axismesh_scalefloatno0.5Base mesh scale (0.5 = 50cm plane) |
| offset_xfloatno0X offset from actor origin (cm)offset_yfloatno0Y offset from actor origin (cm)offset_zfloatno150Z offset from actor origin (cm)pitchfloatno0Pitch rotation (degrees)yawfloatno0Yaw rotation (degrees)rollfloatno0Roll rotation (degrees)scale_xfloatno1Scale along X axisscale_yfloatno1Scale along Y axisscale_zfloatno1Scale along Z axismesh_scalefloatno0.5Base mesh scale (0.5 = 50cm plane) |
| offset_yfloatno0Y offset from actor origin (cm)offset_zfloatno150Z offset from actor origin (cm)pitchfloatno0Pitch rotation (degrees)yawfloatno0Yaw rotation (degrees)rollfloatno0Roll rotation (degrees)scale_xfloatno1Scale along X axisscale_yfloatno1Scale along Y axisscale_zfloatno1Scale along Z axismesh_scalefloatno0.5Base mesh scale (0.5 = 50cm plane) |
| offset_zfloatno150Z offset from actor origin (cm)pitchfloatno0Pitch rotation (degrees)yawfloatno0Yaw rotation (degrees)rollfloatno0Roll rotation (degrees)scale_xfloatno1Scale along X axisscale_yfloatno1Scale along Y axisscale_zfloatno1Scale along Z axismesh_scalefloatno0.5Base mesh scale (0.5 = 50cm plane) |
| pitchfloatno0Pitch rotation (degrees)yawfloatno0Yaw rotation (degrees)rollfloatno0Roll rotation (degrees)scale_xfloatno1Scale along X axisscale_yfloatno1Scale along Y axisscale_zfloatno1Scale along Z axismesh_scalefloatno0.5Base mesh scale (0.5 = 50cm plane) |
| yawfloatno0Yaw rotation (degrees)rollfloatno0Roll rotation (degrees)scale_xfloatno1Scale along X axisscale_yfloatno1Scale along Y axisscale_zfloatno1Scale along Z axismesh_scalefloatno0.5Base mesh scale (0.5 = 50cm plane) |
| rollfloatno0Roll rotation (degrees)scale_xfloatno1Scale along X axisscale_yfloatno1Scale along Y axisscale_zfloatno1Scale along Z axismesh_scalefloatno0.5Base mesh scale (0.5 = 50cm plane) |
| scale_xfloatno1Scale along X axisscale_yfloatno1Scale along Y axisscale_zfloatno1Scale along Z axismesh_scalefloatno0.5Base mesh scale (0.5 = 50cm plane) |
| scale_yfloatno1Scale along Y axisscale_zfloatno1Scale along Z axismesh_scalefloatno0.5Base mesh scale (0.5 = 50cm plane) |
| scale_zfloatno1Scale along Z axismesh_scalefloatno0.5Base mesh scale (0.5 = 50cm plane) |
| mesh_scalefloatno0.5Base mesh scale (0.5 = 50cm plane) |

# Returns

- Return shape is not declared for this command.

# Usage

```
await inzoi.cli.execute('uimod3d.attach', {  entity_id: 0, // optional  url: '',  width: 1024, // optional  height: 1024, // optional  offset_x: 0, // optional  offset_y: 0, // optional  offset_z: 150, // optional  pitch: 0, // optional  yaw: 0, // optional  roll: 0, // optional  scale_x: 1, // optional  scale_y: 1, // optional  scale_z: 1, // optional  mesh_scale: 0.5, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsouimod3d[uimod3d.detach](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod3d/uimod3d-detach)[uimod3d.list](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod3d/uimod3d-list)[uimod3d.transform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod3d/uimod3d-transform)
