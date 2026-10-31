---
document_id: "b67fce4e95dbc3e22d67e36d2b3cfb410a792d0d551981ff4fa69304f407337e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1categorizedstyledata"
title: "FB1CategorizedStyleData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:18+00:00"
content_sha256: "41927703f70b3d216c0ef8d128a7528922e13e998bf5caf11aa8ca3aaa9ee32a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1categorizedstyledata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Per-category style data containing multiple style slots and a representative index for auto-dressing.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (7)

| NameTypeDescription`ActiveSlotIndex``integer`Index of the currently worn style slot. May differ from RepresentativeIndex when changed in customization.`LastRandomPickDay``integer`Game day on which LastRandomSlotIndex was picked. Used to refresh the random look only once per day (at midnight). INDEX_NONE means not yet picked. Internal cache — hidden from editor.`LastRandomSlotIndex``integer`Last slot index picked by ResolveCategorizedStyleRandomSlotIndex. Used to avoid picking the same slot consecutively. INDEX_NONE means no prior pick. Internal cache — hidden from editor.`RepresentativeIndex``integer`Index of the representative style slot used for auto-dressing in gameplay.`Styles``FB1StyleSetting[]`Style slots for this category. Each slot holds a complete style setting. Max count is MAX_CATEGORIZED_STYLE_SLOT.`bAutoChangeCategorizedStyle``boolean`Whether to automatically apply this category's style when the situation changes in gameplay.`bRandomChangeCategorizedStyle``boolean`Whether to pick a random slot (instead of the representative one) when the situation changes in gameplay. |
| --- |
| `ActiveSlotIndex``integer`Index of the currently worn style slot. May differ from RepresentativeIndex when changed in customization.`LastRandomPickDay``integer`Game day on which LastRandomSlotIndex was picked. Used to refresh the random look only once per day (at midnight). INDEX_NONE means not yet picked. Internal cache — hidden from editor.`LastRandomSlotIndex``integer`Last slot index picked by ResolveCategorizedStyleRandomSlotIndex. Used to avoid picking the same slot consecutively. INDEX_NONE means no prior pick. Internal cache — hidden from editor.`RepresentativeIndex``integer`Index of the representative style slot used for auto-dressing in gameplay.`Styles``FB1StyleSetting[]`Style slots for this category. Each slot holds a complete style setting. Max count is MAX_CATEGORIZED_STYLE_SLOT.`bAutoChangeCategorizedStyle``boolean`Whether to automatically apply this category's style when the situation changes in gameplay.`bRandomChangeCategorizedStyle``boolean`Whether to pick a random slot (instead of the representative one) when the situation changes in gameplay. |
| `LastRandomPickDay``integer`Game day on which LastRandomSlotIndex was picked. Used to refresh the random look only once per day (at midnight). INDEX_NONE means not yet picked. Internal cache — hidden from editor.`LastRandomSlotIndex``integer`Last slot index picked by ResolveCategorizedStyleRandomSlotIndex. Used to avoid picking the same slot consecutively. INDEX_NONE means no prior pick. Internal cache — hidden from editor.`RepresentativeIndex``integer`Index of the representative style slot used for auto-dressing in gameplay.`Styles``FB1StyleSetting[]`Style slots for this category. Each slot holds a complete style setting. Max count is MAX_CATEGORIZED_STYLE_SLOT.`bAutoChangeCategorizedStyle``boolean`Whether to automatically apply this category's style when the situation changes in gameplay.`bRandomChangeCategorizedStyle``boolean`Whether to pick a random slot (instead of the representative one) when the situation changes in gameplay. |
| `LastRandomSlotIndex``integer`Last slot index picked by ResolveCategorizedStyleRandomSlotIndex. Used to avoid picking the same slot consecutively. INDEX_NONE means no prior pick. Internal cache — hidden from editor.`RepresentativeIndex``integer`Index of the representative style slot used for auto-dressing in gameplay.`Styles``FB1StyleSetting[]`Style slots for this category. Each slot holds a complete style setting. Max count is MAX_CATEGORIZED_STYLE_SLOT.`bAutoChangeCategorizedStyle``boolean`Whether to automatically apply this category's style when the situation changes in gameplay.`bRandomChangeCategorizedStyle``boolean`Whether to pick a random slot (instead of the representative one) when the situation changes in gameplay. |
| `RepresentativeIndex``integer`Index of the representative style slot used for auto-dressing in gameplay.`Styles``FB1StyleSetting[]`Style slots for this category. Each slot holds a complete style setting. Max count is MAX_CATEGORIZED_STYLE_SLOT.`bAutoChangeCategorizedStyle``boolean`Whether to automatically apply this category's style when the situation changes in gameplay.`bRandomChangeCategorizedStyle``boolean`Whether to pick a random slot (instead of the representative one) when the situation changes in gameplay. |
| `Styles``FB1StyleSetting[]`Style slots for this category. Each slot holds a complete style setting. Max count is MAX_CATEGORIZED_STYLE_SLOT.`bAutoChangeCategorizedStyle``boolean`Whether to automatically apply this category's style when the situation changes in gameplay.`bRandomChangeCategorizedStyle``boolean`Whether to pick a random slot (instead of the representative one) when the situation changes in gameplay. |
| `bAutoChangeCategorizedStyle``boolean`Whether to automatically apply this category's style when the situation changes in gameplay.`bRandomChangeCategorizedStyle``boolean`Whether to pick a random slot (instead of the representative one) when the situation changes in gameplay. |
| `bRandomChangeCategorizedStyle``boolean`Whether to pick a random slot (instead of the representative one) when the situation changes in gameplay. |
