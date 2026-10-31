---
document_id: "152bbccbdcde4451947240c51b0d7d3b41e1186690e35968ca234e1383a7e03f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1hopedataasset"
title: "UB1HopeDataAsset"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:37:41+00:00"
content_sha256: "86c22087e6952d3f76c60c8453c6dae5ea4dfc98f3c19a23257be025005c8c89"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1hopedataasset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data asset defining global hope system configuration, including slot definitions, max hope count, selection cooldowns, and auto-select limits.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| Category`classes`Extends`UB1DataAssetBase` |
| Extends`UB1DataAssetBase` |

# Properties (10)

| NameTypeDescription`AutoSelectHopeLimit``integer`Maximum number of active hopes at which automatic hope selection is suppressed.`DeSelectCoolTime``integer`Duration (seconds) before an unachieved hope expires and is re-eligible.`HopeSlots``FB1HopeSlotDefine[]`Array of hope slot definitions specifying categories and icons per slot.`InitialSelectCooltime``integer`New-world delay (game seconds from StartTime) before the first auto hope and script Addhope select. 0 disables.`InitialSelectCooltimeAfterLoading``integer`Delay (game seconds from load time) after continue/restore before hope select unlock. 0 disables.`MaxHopeSize``integer`Maximum number of hopes a character can hold at one time.`RandomSelectCooltime``integer`Cooldown (seconds) between random hope selection attempts.`RandomSelectRangeSec``integer`Random spread (seconds) added to the selection cooldown.`ReSelectCoolTime``integer`Duration (seconds) before a previously selected hope can be re-selected.`SelectCoolTimeGroupSeconds``table<string, integer>`Seconds of re-select cooldown per SelectCoolTimeGroup key. |
| --- |
| `AutoSelectHopeLimit``integer`Maximum number of active hopes at which automatic hope selection is suppressed.`DeSelectCoolTime``integer`Duration (seconds) before an unachieved hope expires and is re-eligible.`HopeSlots``FB1HopeSlotDefine[]`Array of hope slot definitions specifying categories and icons per slot.`InitialSelectCooltime``integer`New-world delay (game seconds from StartTime) before the first auto hope and script Addhope select. 0 disables.`InitialSelectCooltimeAfterLoading``integer`Delay (game seconds from load time) after continue/restore before hope select unlock. 0 disables.`MaxHopeSize``integer`Maximum number of hopes a character can hold at one time.`RandomSelectCooltime``integer`Cooldown (seconds) between random hope selection attempts.`RandomSelectRangeSec``integer`Random spread (seconds) added to the selection cooldown.`ReSelectCoolTime``integer`Duration (seconds) before a previously selected hope can be re-selected.`SelectCoolTimeGroupSeconds``table<string, integer>`Seconds of re-select cooldown per SelectCoolTimeGroup key. |
| `DeSelectCoolTime``integer`Duration (seconds) before an unachieved hope expires and is re-eligible.`HopeSlots``FB1HopeSlotDefine[]`Array of hope slot definitions specifying categories and icons per slot.`InitialSelectCooltime``integer`New-world delay (game seconds from StartTime) before the first auto hope and script Addhope select. 0 disables.`InitialSelectCooltimeAfterLoading``integer`Delay (game seconds from load time) after continue/restore before hope select unlock. 0 disables.`MaxHopeSize``integer`Maximum number of hopes a character can hold at one time.`RandomSelectCooltime``integer`Cooldown (seconds) between random hope selection attempts.`RandomSelectRangeSec``integer`Random spread (seconds) added to the selection cooldown.`ReSelectCoolTime``integer`Duration (seconds) before a previously selected hope can be re-selected.`SelectCoolTimeGroupSeconds``table<string, integer>`Seconds of re-select cooldown per SelectCoolTimeGroup key. |
| `HopeSlots``FB1HopeSlotDefine[]`Array of hope slot definitions specifying categories and icons per slot.`InitialSelectCooltime``integer`New-world delay (game seconds from StartTime) before the first auto hope and script Addhope select. 0 disables.`InitialSelectCooltimeAfterLoading``integer`Delay (game seconds from load time) after continue/restore before hope select unlock. 0 disables.`MaxHopeSize``integer`Maximum number of hopes a character can hold at one time.`RandomSelectCooltime``integer`Cooldown (seconds) between random hope selection attempts.`RandomSelectRangeSec``integer`Random spread (seconds) added to the selection cooldown.`ReSelectCoolTime``integer`Duration (seconds) before a previously selected hope can be re-selected.`SelectCoolTimeGroupSeconds``table<string, integer>`Seconds of re-select cooldown per SelectCoolTimeGroup key. |
| `InitialSelectCooltime``integer`New-world delay (game seconds from StartTime) before the first auto hope and script Addhope select. 0 disables.`InitialSelectCooltimeAfterLoading``integer`Delay (game seconds from load time) after continue/restore before hope select unlock. 0 disables.`MaxHopeSize``integer`Maximum number of hopes a character can hold at one time.`RandomSelectCooltime``integer`Cooldown (seconds) between random hope selection attempts.`RandomSelectRangeSec``integer`Random spread (seconds) added to the selection cooldown.`ReSelectCoolTime``integer`Duration (seconds) before a previously selected hope can be re-selected.`SelectCoolTimeGroupSeconds``table<string, integer>`Seconds of re-select cooldown per SelectCoolTimeGroup key. |
| `InitialSelectCooltimeAfterLoading``integer`Delay (game seconds from load time) after continue/restore before hope select unlock. 0 disables.`MaxHopeSize``integer`Maximum number of hopes a character can hold at one time.`RandomSelectCooltime``integer`Cooldown (seconds) between random hope selection attempts.`RandomSelectRangeSec``integer`Random spread (seconds) added to the selection cooldown.`ReSelectCoolTime``integer`Duration (seconds) before a previously selected hope can be re-selected.`SelectCoolTimeGroupSeconds``table<string, integer>`Seconds of re-select cooldown per SelectCoolTimeGroup key. |
| `MaxHopeSize``integer`Maximum number of hopes a character can hold at one time.`RandomSelectCooltime``integer`Cooldown (seconds) between random hope selection attempts.`RandomSelectRangeSec``integer`Random spread (seconds) added to the selection cooldown.`ReSelectCoolTime``integer`Duration (seconds) before a previously selected hope can be re-selected.`SelectCoolTimeGroupSeconds``table<string, integer>`Seconds of re-select cooldown per SelectCoolTimeGroup key. |
| `RandomSelectCooltime``integer`Cooldown (seconds) between random hope selection attempts.`RandomSelectRangeSec``integer`Random spread (seconds) added to the selection cooldown.`ReSelectCoolTime``integer`Duration (seconds) before a previously selected hope can be re-selected.`SelectCoolTimeGroupSeconds``table<string, integer>`Seconds of re-select cooldown per SelectCoolTimeGroup key. |
| `RandomSelectRangeSec``integer`Random spread (seconds) added to the selection cooldown.`ReSelectCoolTime``integer`Duration (seconds) before a previously selected hope can be re-selected.`SelectCoolTimeGroupSeconds``table<string, integer>`Seconds of re-select cooldown per SelectCoolTimeGroup key. |
| `ReSelectCoolTime``integer`Duration (seconds) before a previously selected hope can be re-selected.`SelectCoolTimeGroupSeconds``table<string, integer>`Seconds of re-select cooldown per SelectCoolTimeGroup key. |
| `SelectCoolTimeGroupSeconds``table<string, integer>`Seconds of re-select cooldown per SelectCoolTimeGroup key. |
