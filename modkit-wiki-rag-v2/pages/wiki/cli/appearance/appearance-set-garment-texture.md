---
document_id: "447b7eb2da58ef0321b43a27cac72940f4472c2710f7b03b548624075c977b3a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-set-garment-texture"
title: "appearance.set_garment_texture"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:45+00:00"
content_sha256: "39b6eef91fca190ffca4cdffee42c3fd8aa07cb875e3728bb8deb43ad6ba8633"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/appearance/appearance-set-garment-texture"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Apply a user-provided PNG/JPG image as a garment's AI texture (same pipeline as Character Studio > MyTexture on clothing). If file_path is given, that file is used; otherwise the Windows clipboard image is tried first (CF_PNG / CF_DIBV5 / CF_DIB), and if none is present a file picker is shown. garment_type: top, bottom, full, shoes, jacket, hat, socks, stockings, gloves, scarf. channel: AI texture slot (0, 1, or 2; default 0). intensity: application strength in [0.0, 1.0] (default 1.0).

# Metadata

| FieldValueDisplaySet Garment Texture (Imported Image)Category`appearance`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplaySet Garment Texture (Imported Image)Category`appearance`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`appearance`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)garment_typestringyes—Garment slot (top, bottom, full, shoes, jacket, hat, socks, stockings, gloves, scarf)file_pathstringno—Absolute path to a PNG/JPG file. If omitted, the Windows clipboard image is used when available; otherwise a file dialog is opened.path_keystringno—Pre-imported MyTexture path_key. If provided, skips file import entirely (drag-and-drop uses this to avoid re-importing the same file on every hover/drop).channelintno—AI texture channel (0=R default, 1=G, 2=B)intensityfloatno1.0AI texture intensity in [0.0, 1.0] (default 1.0) |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)garment_typestringyes—Garment slot (top, bottom, full, shoes, jacket, hat, socks, stockings, gloves, scarf)file_pathstringno—Absolute path to a PNG/JPG file. If omitted, the Windows clipboard image is used when available; otherwise a file dialog is opened.path_keystringno—Pre-imported MyTexture path_key. If provided, skips file import entirely (drag-and-drop uses this to avoid re-importing the same file on every hover/drop).channelintno—AI texture channel (0=R default, 1=G, 2=B)intensityfloatno1.0AI texture intensity in [0.0, 1.0] (default 1.0) |
| garment_typestringyes—Garment slot (top, bottom, full, shoes, jacket, hat, socks, stockings, gloves, scarf)file_pathstringno—Absolute path to a PNG/JPG file. If omitted, the Windows clipboard image is used when available; otherwise a file dialog is opened.path_keystringno—Pre-imported MyTexture path_key. If provided, skips file import entirely (drag-and-drop uses this to avoid re-importing the same file on every hover/drop).channelintno—AI texture channel (0=R default, 1=G, 2=B)intensityfloatno1.0AI texture intensity in [0.0, 1.0] (default 1.0) |
| file_pathstringno—Absolute path to a PNG/JPG file. If omitted, the Windows clipboard image is used when available; otherwise a file dialog is opened.path_keystringno—Pre-imported MyTexture path_key. If provided, skips file import entirely (drag-and-drop uses this to avoid re-importing the same file on every hover/drop).channelintno—AI texture channel (0=R default, 1=G, 2=B)intensityfloatno1.0AI texture intensity in [0.0, 1.0] (default 1.0) |
| path_keystringno—Pre-imported MyTexture path_key. If provided, skips file import entirely (drag-and-drop uses this to avoid re-importing the same file on every hover/drop).channelintno—AI texture channel (0=R default, 1=G, 2=B)intensityfloatno1.0AI texture intensity in [0.0, 1.0] (default 1.0) |
| channelintno—AI texture channel (0=R default, 1=G, 2=B)intensityfloatno1.0AI texture intensity in [0.0, 1.0] (default 1.0) |
| intensityfloatno1.0AI texture intensity in [0.0, 1.0] (default 1.0) |

# Usage

```
await inzoi.cli.execute('appearance.set_garment_texture', {  entity_id: 0, // optional  garment_type: '',  file_path: '', // optional  path_key: '', // optional  channel: 0, // optional  intensity: 1.0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoappearance[appearance.beard](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-beard)[appearance.custom](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-custom)[appearance.eyebrow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-eyebrow)[appearance.get_outfit_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-get-outfit-category)[appearance.glasses](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-glasses)[appearance.gloves](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-gloves)[appearance.hair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-hair)[appearance.hat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-hat)[appearance.jacket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-jacket)[appearance.list_options](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-list-options)[appearance.mustache](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-mustache)[appearance.remove_outfit_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-remove-outfit-category)
