---
document_id: "e6d61e1780ba1f83d47b26051cd5cdcceafbc435e613065018a7a91a0cfdc685"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/asset/asset-preview"
title: "asset.preview"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:47+00:00"
content_sha256: "1bb4862fce22513f0bceb50ba328809f3e14a0fdfafb436d49e25e2be6ee5379"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/asset/asset-preview"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- TEST-PLACE a catalog asset (by ObjectPath) to visually confirm it is the right asset. This is a TRANSIENT PREVIEW, NOT a permanent placement: the result is NOT saved and disappears on save/load, level travel, or restart. For permanent, saveable furniture use the build-mode / DT-based path instead. StaticMesh/SkeletalMesh spawn a plain preview actor; NiagaraSystem plays FX; SoundBase plays a one-shot sound. Placement: if screen pixels (x,y) are given, line-trace to the surface under them; otherwise place ~2m in front of the player. Get the path from asset.search first.

# Metadata

| FieldValueDisplayPreview Catalog Asset (Test Placement)Category`asset`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayPreview Catalog Asset (Test Placement)Category`asset`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`asset`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionpathstringyes—Full catalog asset ObjectPath (e.g. '/Game/BG/.../SM_x.SM_x').xfloatno—Screen X pixel (viewport-local). Optional — omit to place in front of player.yfloatno—Screen Y pixel (viewport-local). Optional.yawfloatno0Yaw rotation in degrees (default 0). |
| --- |
| pathstringyes—Full catalog asset ObjectPath (e.g. '/Game/BG/.../SM_x.SM_x').xfloatno—Screen X pixel (viewport-local). Optional — omit to place in front of player.yfloatno—Screen Y pixel (viewport-local). Optional.yawfloatno0Yaw rotation in degrees (default 0). |
| xfloatno—Screen X pixel (viewport-local). Optional — omit to place in front of player.yfloatno—Screen Y pixel (viewport-local). Optional.yawfloatno0Yaw rotation in degrees (default 0). |
| yfloatno—Screen Y pixel (viewport-local). Optional.yawfloatno0Yaw rotation in degrees (default 0). |
| yawfloatno0Yaw rotation in degrees (default 0). |

# Usage

```
await inzoi.cli.execute('asset.preview', {  path: '',  x: 0.0, // optional  y: 0.0, // optional  yaw: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
