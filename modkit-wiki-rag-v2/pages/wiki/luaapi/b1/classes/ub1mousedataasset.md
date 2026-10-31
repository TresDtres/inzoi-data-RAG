---
document_id: "e6b33cd2454e0b0666e55fe54e364458cadd92b5b6a05c1cabcf5f09da100ceb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1mousedataasset"
title: "UB1MouseDataAsset"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:37:58+00:00"
content_sha256: "ddf2df90dabffa88395e97be1cdad4e161961c4088f24681a6bca8723b2a656b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1mousedataasset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data asset configuring custom hardware cursor assignments and cursor set mappings for UI widgets.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| Category`classes`Extends`UB1DataAssetBase` |
| Extends`UB1DataAssetBase` |

# Properties (2)

| NameTypeDescription`HardwareCursorSetMap``table<string, FB1HardwareCursorSet>`Map of cursor set names to hardware cursor sets; keys are referenced by DT_UITable/CustomCursorSetName.`HardwareCursors``table<EB1MouseCursorType, FHardwareCursorReference>`Map of custom cursor types to their hardware cursor references, used by B1CursorUtil::SetMouseCursor(). |
| --- |
| `HardwareCursorSetMap``table<string, FB1HardwareCursorSet>`Map of cursor set names to hardware cursor sets; keys are referenced by DT_UITable/CustomCursorSetName.`HardwareCursors``table<EB1MouseCursorType, FHardwareCursorReference>`Map of custom cursor types to their hardware cursor references, used by B1CursorUtil::SetMouseCursor(). |
| `HardwareCursors``table<EB1MouseCursorType, FHardwareCursorReference>`Map of custom cursor types to their hardware cursor references, used by B1CursorUtil::SetMouseCursor(). |
