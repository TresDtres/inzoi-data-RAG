---
document_id: "8afbcdf606a84d8ed76ec04196a8a14af016864d38e685fad798deaa380c0300"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/pose/pose-set-bone"
title: "pose.set_bone"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:12+00:00"
content_sha256: "e2248dcad0542605936303831fbcd8d2e0e55f70809ceea8412409604e7e83e2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/pose/pose-set-bone"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Layers a bone transform override on the body post-process anim instance without replacing the main animation pipeline (preserves body proportions). Specify any of rot_*/loc_*/scale_*.

# Metadata

| FieldValueDisplaySet Bone PoseCategory`pose`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplaySet Bone PoseCategory`pose`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`pose`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)bonenameyes—Bone name to modify (e.g. spine_04)componentnameno—Skeletal mesh component name (default: body). Note: Head mesh overrides may be lost on face customization refresh.modestringnoreplaceModification mode: replace \| additive \| ignore (default: replace)rot_pitchfloatno—Rotation pitch (deg)rot_yawfloatno—Rotation yaw (deg)rot_rollfloatno—Rotation roll (deg)loc_xfloatno—Translation X (cm)loc_yfloatno—Translation Y (cm)loc_zfloatno—Translation Z (cm)scale_xfloatno—Scale X (default 1)scale_yfloatno—Scale Y (default 1) scale_z float no — Scale Z (default 1) |
| --- | --- | --- |
| entity_identityIdno—Target entity ID (default: possessed)bonenameyes—Bone name to modify (e.g. spine_04)componentnameno—Skeletal mesh component name (default: body). Note: Head mesh overrides may be lost on face customization refresh.modestringnoreplaceModification mode: replace \| additive \| ignore (default: replace)rot_pitchfloatno—Rotation pitch (deg)rot_yawfloatno—Rotation yaw (deg)rot_rollfloatno—Rotation roll (deg)loc_xfloatno—Translation X (cm)loc_yfloatno—Translation Y (cm)loc_zfloatno—Translation Z (cm)scale_xfloatno—Scale X (default 1)scale_yfloatno—Scale Y (default 1)scale_zfloatno—Scale Z (default 1) |
| bonenameyes—Bone name to modify (e.g. spine_04)componentnameno—Skeletal mesh component name (default: body). Note: Head mesh overrides may be lost on face customization refresh.modestringnoreplaceModification mode: replace \| additive \| ignore (default: replace)rot_pitchfloatno—Rotation pitch (deg)rot_yawfloatno—Rotation yaw (deg)rot_rollfloatno—Rotation roll (deg)loc_xfloatno—Translation X (cm)loc_yfloatno—Translation Y (cm)loc_zfloatno—Translation Z (cm)scale_xfloatno—Scale X (default 1)scale_yfloatno—Scale Y (default 1)scale_zfloatno—Scale Z (default 1) |
| componentnameno—Skeletal mesh component name (default: body). Note: Head mesh overrides may be lost on face customization refresh.modestringnoreplaceModification mode: replace \| additive \| ignore (default: replace)rot_pitchfloatno—Rotation pitch (deg)rot_yawfloatno—Rotation yaw (deg)rot_rollfloatno—Rotation roll (deg)loc_xfloatno—Translation X (cm)loc_yfloatno—Translation Y (cm)loc_zfloatno—Translation Z (cm)scale_xfloatno—Scale X (default 1)scale_yfloatno—Scale Y (default 1)scale_zfloatno—Scale Z (default 1) |
| modestringnoreplaceModification mode: replace \| additive \| ignore (default: replace)rot_pitchfloatno—Rotation pitch (deg)rot_yawfloatno—Rotation yaw (deg)rot_rollfloatno—Rotation roll (deg)loc_xfloatno—Translation X (cm)loc_yfloatno—Translation Y (cm)loc_zfloatno—Translation Z (cm)scale_xfloatno—Scale X (default 1)scale_yfloatno—Scale Y (default 1)scale_zfloatno—Scale Z (default 1) |
| rot_pitchfloatno—Rotation pitch (deg)rot_yawfloatno—Rotation yaw (deg)rot_rollfloatno—Rotation roll (deg)loc_xfloatno—Translation X (cm)loc_yfloatno—Translation Y (cm)loc_zfloatno—Translation Z (cm)scale_xfloatno—Scale X (default 1)scale_yfloatno—Scale Y (default 1)scale_zfloatno—Scale Z (default 1) |
| rot_yawfloatno—Rotation yaw (deg)rot_rollfloatno—Rotation roll (deg)loc_xfloatno—Translation X (cm)loc_yfloatno—Translation Y (cm)loc_zfloatno—Translation Z (cm)scale_xfloatno—Scale X (default 1)scale_yfloatno—Scale Y (default 1)scale_zfloatno—Scale Z (default 1) |
| rot_rollfloatno—Rotation roll (deg)loc_xfloatno—Translation X (cm)loc_yfloatno—Translation Y (cm)loc_zfloatno—Translation Z (cm)scale_xfloatno—Scale X (default 1)scale_yfloatno—Scale Y (default 1)scale_zfloatno—Scale Z (default 1) |
| loc_xfloatno—Translation X (cm)loc_yfloatno—Translation Y (cm)loc_zfloatno—Translation Z (cm)scale_xfloatno—Scale X (default 1)scale_yfloatno—Scale Y (default 1)scale_zfloatno—Scale Z (default 1) |
| loc_yfloatno—Translation Y (cm)loc_zfloatno—Translation Z (cm)scale_xfloatno—Scale X (default 1)scale_yfloatno—Scale Y (default 1)scale_zfloatno—Scale Z (default 1) |
| loc_zfloatno—Translation Z (cm)scale_xfloatno—Scale X (default 1)scale_yfloatno—Scale Y (default 1)scale_zfloatno—Scale Z (default 1) |
| scale_xfloatno—Scale X (default 1)scale_yfloatno—Scale Y (default 1)scale_zfloatno—Scale Z (default 1) |
| scale_yfloatno—Scale Y (default 1)scale_zfloatno—Scale Z (default 1) |
| scale_zfloatno—Scale Z (default 1) |

# Usage

```
await inzoi.cli.execute('pose.set_bone', {  entity_id: 0, // optional  bone: '',  component: '', // optional  mode: 'replace', // optional  rot_pitch: 0.0, // optional  rot_yaw: 0.0, // optional  rot_roll: 0.0, // optional  loc_x: 0.0, // optional  loc_y: 0.0, // optional  loc_z: 0.0, // optional  scale_x: 0.0, // optional  scale_y: 0.0, // optional  scale_z: 0.0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
