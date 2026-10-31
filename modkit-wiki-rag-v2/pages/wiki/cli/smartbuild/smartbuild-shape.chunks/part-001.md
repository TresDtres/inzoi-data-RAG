---
document_id: "fb5ceb5dbd02eb180c676382e543fc6ec7a49fae890d1a2f97792a8bb6ca45f2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-shape"
title: "smartbuild.shape"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:16+00:00"
content_sha256: "241b6e7c087c21f0b09084f8239395a798292ece99f800cc0e047c5e16534ed4"
chunk: 1
chunk_count: 2
page_type: "article"
route: "wiki/cli/smartbuild/smartbuild-shape"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Spawn primitive shapes (cube/sphere/cylinder/cone/plane) at world coordinates and control their transform/color/lifetime via a handle. Uses /Engine/BasicShapes meshes and a per-instance MID on BasicShapeMaterial. Spawned shapes are no-collision, no-physics — pure debug markers that do not interfere with character movement. Tracked entries auto-purge when the level changes (WeakObjectPtr-based). action=spawn shape= x=.. y=.. z=.. [rx ry rz] [sx sy sz] [r g b] [label]: spawn at world coords (cm). Returns handle. sx-only sets uniform scale. action=spawn_at_screen shape= [x y]: spawn at the surface under a screen pixel via line trace (Visibility channel). x/y default to current mouse position. action=list (default): list all tracked shapes with their world transform. action=set_transform handle= [x y z] [rx ry rz] [sx sy sz]: overwrite only the specified axes; other axes are kept. action=set_color handle= r=.. g=.. b=..: change the MID Color (0~1 linear). action=destroy handle= | all=1: remove one or every spawned shape.

# Metadata

| FieldValueDisplaySpawn Debug PrimitiveCategory`smartbuild`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplaySpawn Debug PrimitiveCategory`smartbuild`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`smartbuild`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionactionstringnolistlist (default), spawn, spawn_at_screen, set_transform, set_color, destroyshapestringno—cube\|sphere\|cylinder\|cone\|planehandleintno—Spawned shape handle (for set_transform/set_color/destroy)xfloatno—World X (cm) for spawn / Pitch override for set_transform / screen X pixel for spawn_at_screenyfloatno—World Y (cm) for spawn / screen Y pixel for spawn_at_screenzfloatno—World Z (cm)rxfloatno—Pitch (degrees)ryfloatno—Yaw (degrees)rzfloatno—Roll (degrees)sxfloatno—Scale X (uniform when sy/sz omitted)syfloatno—Scale Yszfloatno—Scale Z r float no — Color R (0~1 linear) g float no — Color G (0~1 linear) b float no — Color B (0~1 linear) label string no — Optional user label echoed back in list output all bool no — destroy: remove every tracked shape |
| --- | --- | --- | --- | --- |
| actionstringnolistlist (default), spawn, spawn_at_screen, set_transform, set_color, destroyshapestringno—cube\|sphere\|cylinder\|cone\|planehandleintno—Spawned shape handle (for set_transform/set_color/destroy)xfloatno—World X (cm) for spawn / Pitch override for set_transform / screen X pixel for spawn_at_screenyfloatno—World Y (cm) for spawn / screen Y pixel for spawn_at_screenzfloatno—World Z (cm)rxfloatno—Pitch (degrees)ryfloatno—Yaw (degrees)rzfloatno—Roll (degrees)sxfloatno—Scale X (uniform when sy/sz omitted)syfloatno—Scale Yszfloatno—Scale Zrfloatno—Color R (0~1 linear)g float no — Color G (0~1 linear) b float no — Color B (0~1 linear) label string no — Optional user label echoed back in list output all bool no — destroy: remove every tracked shape |
| shapestringno—cube\|sphere\|cylinder\|cone\|planehandleintno—Spawned shape handle (for set_transform/set_color/destroy)xfloatno—World X (cm) for spawn / Pitch override for set_transform / screen X pixel for spawn_at_screenyfloatno—World Y (cm) for spawn / screen Y pixel for spawn_at_screenzfloatno—World Z (cm)rxfloatno—Pitch (degrees)ryfloatno—Yaw (degrees)rzfloatno—Roll (degrees)sxfloatno—Scale X (uniform when sy/sz omitted)syfloatno—Scale Yszfloatno—Scale Zrfloatno—Color R (0~1 linear)gfloatno—Color G (0~1 linear)b float no — Color B (0~1 linear) label string no — Optional user label echoed back in list output all bool no — destroy: remove every tracked shape |
| handleintno—Spawned shape handle (for set_transform/set_color/destroy)xfloatno—World X (cm) for spawn / Pitch override for set_transform / screen X pixel for spawn_at_screenyfloatno—World Y (cm) for spawn / screen Y pixel for spawn_at_screenzfloatno—World Z (cm)rxfloatno—Pitch (degrees)ryfloatno—Yaw (degrees)rzfloatno—Roll (degrees)sxfloatno—Scale X (uniform when sy/sz omitted)syfloatno—Scale Yszfloatno—Scale Zrfloatno—Color R (0~1 linear)gfloatno—Color G (0~1 linear)bfloatno—Color B (0~1 linear)label string no — Optional user label echoed back in list output all bool no — destroy: remove every tracked shape |
| xfloatno—World X (cm) for spawn / Pitch override for set_transform / screen X pixel for spawn_at_screenyfloatno—World Y (cm) for spawn / screen Y pixel for spawn_at_screenzfloatno—World Z (cm)rxfloatno—Pitch (degrees)ryfloatno—Yaw (degrees)rzfloatno—Roll (degrees)sxfloatno—Scale X (uniform when sy/sz omitted)syfloatno—Scale Yszfloatno—Scale Zrfloatno—Color R (0~1 linear)gfloatno—Color G (0~1 linear)bfloatno—Color B (0~1 linear)labelstringno—Optional user label echoed back in list outputall bool no — destroy: remove every tracked shape |
| yfloatno—World Y (cm) for spawn / screen Y pixel for spawn_at_screenzfloatno—World Z (cm)rxfloatno—Pitch (degrees)ryfloatno—Yaw (degrees)rzfloatno—Roll (degrees)sxfloatno—Scale X (uniform when sy/sz omitted)syfloatno—Scale Yszfloatno—Scale Zrfloatno—Color R (0~1 linear)gfloatno—Color G (0~1 linear)bfloatno—Color B (0~1 linear)labelstringno—Optional user label echoed back in list outputallboolno—destroy: remove every tracked shape |
| zfloatno—World Z (cm)rxfloatno—Pitch (degrees)ryfloatno—Yaw (degrees)rzfloatno—Roll (degrees)sxfloatno—Scale X (uniform when sy/sz omitted)syfloatno—Scale Yszfloatno—Scale Zrfloatno—Color R (0~1 linear)gfloatno—Color G (0~1 linear)bfloatno—Color B (0~1 linear)labelstringno—Optional user label echoed back in list outputallboolno—destroy: remove every tracked shape |
| rxfloatno—Pitch (degrees)ryfloatno—Yaw (degrees)rzfloatno—Roll (degrees)sxfloatno—Scale X (uniform when sy/sz omitted)syfloatno—Scale Yszfloatno—Scale Zrfloatno—Color R (0~1 linear)gfloatno—Color G (0~1 linear)bfloatno—Color B (0~1 linear)labelstringno—Optional user label echoed back in list outputallboolno—destroy: remove every tracked shape |
| ryfloatno—Yaw (degrees)rzfloatno—Roll (degrees)sxfloatno—Scale X (uniform when sy/sz omitted)syfloatno—Scale Yszfloatno—Scale Zrfloatno—Color R (0~1 linear)gfloatno—Color G (0~1 linear)bfloatno—Color B (0~1 linear)labelstringno—Optional user label echoed back in list outputallboolno—destroy: remove every tracked shape |
| rzfloatno—Roll (degrees)sxfloatno—Scale X (uniform when sy/sz omitted)syfloatno—Scale Yszfloatno—Scale Zrfloatno—Color R (0~1 linear)gfloatno—Color G (0~1 linear)bfloatno—Color B (0~1 linear)labelstringno—Optional user label echoed back in list outputallboolno—destroy: remove every tracked shape |
| sxfloatno—Scale X (uniform when sy/sz omitted)syfloatno—Scale Yszfloatno—Scale Zrfloatno—Color R (0~1 linear)gfloatno—Color G (0~1 linear)bfloatno—Color B (0~1 linear)labelstringno—Optional user label echoed back in list outputallboolno—destroy: remove every tracked shape |
| syfloatno—Scale Yszfloatno—Scale Zrfloatno—Color R (0~1 linear)gfloatno—Color G (0~1 linear)bfloatno—Color B (0~1 linear)labelstringno—Optional user label echoed back in list outputallboolno—destroy: remove every tracked shape |
| szfloatno—Scale Zrfloatno—Color R (0~1 linear)gfloatno—Color G (0~1 linear)bfloatno—Color B (0~1 linear)labelstringno—Optional user label echoed back in list outputallboolno—destroy: remove every tracked shape |
| rfloatno—Color R (0~1 linear)gfloatno—Color G (0~1 linear)bfloatno—Color B (0~1 linear)labelstringno—Optional user label echoed back in list outputallboolno—destroy: remove every tracked shape |
| gfloatno—Color G (0~1 linear)bfloatno—Color B (0~1 linear)labelstringno—Optional user label echoed back in list outputallboolno—destroy: remove every tracked shape |
| bfloatno—Color B (0~1 linear)labelstringno—Optional user label echoed back in list outputallboolno—destroy: remove every tracked shape |
| labelstringno—Optional user label echoed back in list outputallboolno—destroy: remove every tracked shape |
| allboolno—destroy: remove every tracked shape |

# Usage

```
await inzoi.cli.execute('smartbuild.shape', {  action: 'list', // optional  shape: '', // optional  handle: 0, // optional  x: 0.0, // optional  y: 0.0, // optional  z: 0.0, // optional  rx: 0.0, // optional  ry: 0.0, // optional  rz: 0.0, // optional  sx: 0.0, // optional  sy: 0.0, // optional  sz: 0.0, // optional  r: 0.0, // optional  g: 0.0, // optional  b: 0.0, // optional  label: '', // optional  all: false, // optional});
```
