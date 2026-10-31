---
document_id: "96215b6d2f2931984c292b3960173f3ace1c98f78da1da27e1f51f6c7058ed18"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1contentpickerentry"
title: "UB1ContentPickerEntry"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:37:17+00:00"
content_sha256: "7a5951ebe36702fbfd7519da91829596b32691b85117d44da0e3678a5d2db703"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1contentpickerentry"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- ContentPicker entry widget, based on UB1UserListEntryWidgetBase. Features: automatic gamepad/keyboard support, entry-reuse safety (auto CleanUp), structured lifecycle hooks, and project-standard compliance. Usage: 1) inherit this class in Blueprint, 2) add the needed widgets (BW_Text_Primary, BW_Image_Primary, etc.), 3) set it as the TileView EntryWidgetClass of WBP_ContentPicker.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1UserListEntryWidgetBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1UserListEntryWidgetBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1UserListEntryWidgetBase` |
| Category`classes`Extends`UB1UserListEntryWidgetBase` |
| Extends`UB1UserListEntryWidgetBase` |

# Properties (8)

| NameTypeDescription`BW_Image_Background``any`Background image (for showing the selected state).`BW_Image_Primary``any`Main image widget (thumbnail, icon).`BW_Image_Selected``any`Selected-state image (check mark, highlight, etc.).`BW_Text_Primary``any`Main text widget (e.g. 'Apple', 'John').`EntryData``any`The data this entry displays.`Image_BG_Selected``any``Image_Checked_BG``any``Image_Selected_Line``any` |
| --- |
| `BW_Image_Background``any`Background image (for showing the selected state).`BW_Image_Primary``any`Main image widget (thumbnail, icon).`BW_Image_Selected``any`Selected-state image (check mark, highlight, etc.).`BW_Text_Primary``any`Main text widget (e.g. 'Apple', 'John').`EntryData``any`The data this entry displays.`Image_BG_Selected``any``Image_Checked_BG``any``Image_Selected_Line``any` |
| `BW_Image_Primary``any`Main image widget (thumbnail, icon).`BW_Image_Selected``any`Selected-state image (check mark, highlight, etc.).`BW_Text_Primary``any`Main text widget (e.g. 'Apple', 'John').`EntryData``any`The data this entry displays.`Image_BG_Selected``any``Image_Checked_BG``any``Image_Selected_Line``any` |
| `BW_Image_Selected``any`Selected-state image (check mark, highlight, etc.).`BW_Text_Primary``any`Main text widget (e.g. 'Apple', 'John').`EntryData``any`The data this entry displays.`Image_BG_Selected``any``Image_Checked_BG``any``Image_Selected_Line``any` |
| `BW_Text_Primary``any`Main text widget (e.g. 'Apple', 'John').`EntryData``any`The data this entry displays.`Image_BG_Selected``any``Image_Checked_BG``any``Image_Selected_Line``any` |
| `EntryData``any`The data this entry displays.`Image_BG_Selected``any``Image_Checked_BG``any``Image_Selected_Line``any` |
| `Image_BG_Selected``any``Image_Checked_BG``any``Image_Selected_Line``any` |
| `Image_Checked_BG``any``Image_Selected_Line``any` |
| `Image_Selected_Line``any` |

# Functions (1)

| FunctionParametersReturnsDescription`LoadImageAsync`TargetImage: `UB1Image`, SoftTexture: `UTexture2D``-`Async image-load helper. |
| --- |
| `LoadImageAsync`TargetImage: `UB1Image`, SoftTexture: `UTexture2D``-`Async image-load helper. |
