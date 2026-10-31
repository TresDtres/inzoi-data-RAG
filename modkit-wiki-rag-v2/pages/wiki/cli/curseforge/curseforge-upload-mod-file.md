---
document_id: "3dd1a5555a465f10977b0b068e0aae3c89dbd32ff928e6af6c5076deb8a7a6be"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/curseforge/curseforge-upload-mod-file"
title: "curseforge.upload_mod_file"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:54+00:00"
content_sha256: "84d99a1a849714f582ddbaaa90e1cdf1f004803ae5e4b20f755c5b24dc9201bd"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/curseforge/curseforge-upload-mod-file"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Upload a mod folder to CurseForge. Reads the .uplugin to find CfUgcId; if absent, this command first creates the mod entry on CurseForge (requires --thumbnail, --class_id, --category_id), updates the .uplugin with the returned id/url, then proceeds. The plugin folder is zipped via cfcore Compression and uploaded chunked. All progress is reported via toasts.

# Metadata

| FieldValueDisplayCurseForge Upload Mod FileCategory`curseforge`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayCurseForge Upload Mod FileCategory`curseforge`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Category`curseforge`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionplugin_dirstringyes—Mod folder name or absolute path. If not absolute, searched under InGame, then the user mods root.changelogstringno—Changelog text for this version.thumbnailstringno—Absolute path to thumbnail PNG (>=400x400). Required if .uplugin has no CfUgcId.class_idintno0CurseForge class id (integer). Highest priority when class_id>0 and category_id>0.category_idintno0CurseForge primary category id (integer). Highest priority when class_id>0 and category_id>0.class_namestringno—CurseForge class name (e.g. "Overlay UI"). Used when class_id is 0. Resolved by name from cfcore GetCategories.category_namestringno—CurseForge category name (e.g. "General"). Used when category_id is 0. Resolved by name from cfcore GetCategories. |
| --- |
| plugin_dirstringyes—Mod folder name or absolute path. If not absolute, searched under InGame, then the user mods root.changelogstringno—Changelog text for this version.thumbnailstringno—Absolute path to thumbnail PNG (>=400x400). Required if .uplugin has no CfUgcId.class_idintno0CurseForge class id (integer). Highest priority when class_id>0 and category_id>0.category_idintno0CurseForge primary category id (integer). Highest priority when class_id>0 and category_id>0.class_namestringno—CurseForge class name (e.g. "Overlay UI"). Used when class_id is 0. Resolved by name from cfcore GetCategories.category_namestringno—CurseForge category name (e.g. "General"). Used when category_id is 0. Resolved by name from cfcore GetCategories. |
| changelogstringno—Changelog text for this version.thumbnailstringno—Absolute path to thumbnail PNG (>=400x400). Required if .uplugin has no CfUgcId.class_idintno0CurseForge class id (integer). Highest priority when class_id>0 and category_id>0.category_idintno0CurseForge primary category id (integer). Highest priority when class_id>0 and category_id>0.class_namestringno—CurseForge class name (e.g. "Overlay UI"). Used when class_id is 0. Resolved by name from cfcore GetCategories.category_namestringno—CurseForge category name (e.g. "General"). Used when category_id is 0. Resolved by name from cfcore GetCategories. |
| thumbnailstringno—Absolute path to thumbnail PNG (>=400x400). Required if .uplugin has no CfUgcId.class_idintno0CurseForge class id (integer). Highest priority when class_id>0 and category_id>0.category_idintno0CurseForge primary category id (integer). Highest priority when class_id>0 and category_id>0.class_namestringno—CurseForge class name (e.g. "Overlay UI"). Used when class_id is 0. Resolved by name from cfcore GetCategories.category_namestringno—CurseForge category name (e.g. "General"). Used when category_id is 0. Resolved by name from cfcore GetCategories. |
| class_idintno0CurseForge class id (integer). Highest priority when class_id>0 and category_id>0.category_idintno0CurseForge primary category id (integer). Highest priority when class_id>0 and category_id>0.class_namestringno—CurseForge class name (e.g. "Overlay UI"). Used when class_id is 0. Resolved by name from cfcore GetCategories.category_namestringno—CurseForge category name (e.g. "General"). Used when category_id is 0. Resolved by name from cfcore GetCategories. |
| category_idintno0CurseForge primary category id (integer). Highest priority when class_id>0 and category_id>0.class_namestringno—CurseForge class name (e.g. "Overlay UI"). Used when class_id is 0. Resolved by name from cfcore GetCategories.category_namestringno—CurseForge category name (e.g. "General"). Used when category_id is 0. Resolved by name from cfcore GetCategories. |
| class_namestringno—CurseForge class name (e.g. "Overlay UI"). Used when class_id is 0. Resolved by name from cfcore GetCategories.category_namestringno—CurseForge category name (e.g. "General"). Used when category_id is 0. Resolved by name from cfcore GetCategories. |
| category_namestringno—CurseForge category name (e.g. "General"). Used when category_id is 0. Resolved by name from cfcore GetCategories. |

# Usage

```
await inzoi.cli.execute('curseforge.upload_mod_file', {  plugin_dir: '',  changelog: '', // optional  thumbnail: '', // optional  class_id: 0, // optional  category_id: 0, // optional  class_name: '', // optional  category_name: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsocurseforge[curseforge.auth_status](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/curseforge/curseforge-auth-status)[curseforge.logout](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/curseforge/curseforge-logout)[curseforge.send_code](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/curseforge/curseforge-send-code)[curseforge.verify_code](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/curseforge/curseforge-verify-code)
