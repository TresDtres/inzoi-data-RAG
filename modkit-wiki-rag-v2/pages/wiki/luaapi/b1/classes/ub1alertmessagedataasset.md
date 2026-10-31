---
document_id: "0562253fc9f61e971a5f62880a6ce1a6cf5b031972cb14dba6d113a50c13f2f3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1alertmessagedataasset"
title: "UB1AlertMessageDataAsset"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:45+00:00"
content_sha256: "f928b5bef937e64e8208957437f0fba0a4d48f592af97c47c8fbc4ab4d1381e8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1alertmessagedataasset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data asset holding global alert message configuration including theme color mappings, per-type message settings, display timers, and deletion timing.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| Category`classes`Extends`UB1DataAssetBase` |
| Extends`UB1DataAssetBase` |

# Properties (4)

| NameTypeDescription`DeleteTime``number`Time in seconds before a message is automatically deleted.`MessageSettingMap``table<EB1AlertType, FB1MessageSetting>`Visual and content settings per alert type.`ThemeColorMap``table<string, FB1ThemeColorInfo>`Color theme configurations keyed by theme name.`TimerSettingMap``table<EB1AlertType, number>`Display duration in milliseconds per alert type. |
| --- |
| `DeleteTime``number`Time in seconds before a message is automatically deleted.`MessageSettingMap``table<EB1AlertType, FB1MessageSetting>`Visual and content settings per alert type.`ThemeColorMap``table<string, FB1ThemeColorInfo>`Color theme configurations keyed by theme name.`TimerSettingMap``table<EB1AlertType, number>`Display duration in milliseconds per alert type. |
| `MessageSettingMap``table<EB1AlertType, FB1MessageSetting>`Visual and content settings per alert type.`ThemeColorMap``table<string, FB1ThemeColorInfo>`Color theme configurations keyed by theme name.`TimerSettingMap``table<EB1AlertType, number>`Display duration in milliseconds per alert type. |
| `ThemeColorMap``table<string, FB1ThemeColorInfo>`Color theme configurations keyed by theme name.`TimerSettingMap``table<EB1AlertType, number>`Display duration in milliseconds per alert type. |
| `TimerSettingMap``table<EB1AlertType, number>`Display duration in milliseconds per alert type. |
