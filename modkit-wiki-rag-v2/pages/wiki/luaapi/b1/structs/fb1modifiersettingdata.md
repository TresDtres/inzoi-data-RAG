---
document_id: "8f495d4ab11836e2c2fe0488812c08229deb0a568006d737bcf4a15aa0eb2750"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1modifiersettingdata"
title: "FB1ModifierSettingData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:30+00:00"
content_sha256: "55dc2eb63e75585e7e08fea93a882a0cbead33932abe9a145462580cf79f55c3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1modifiersettingdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- A single modifier setting entry specifying the target type, key, operation, and value to apply. Used within modifier table rows to define individual stat or behavior adjustments.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`ModifierCalcType`[`EB1ModifierOperationType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1modifieroperationtype)Mathematical operation to apply when combining this modifier with the base value.`ModifierKey``string`Key identifying the specific target within the modifier type (e.g., a skill ID or stat ID).`ModifierType`[`EB1ModifierType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1modifiertype)Type of game system value this modifier affects (e.g., Stat, SkillExp, BuffTime).`Value``number`Numeric value used in the modifier operation. |
| --- |
| `ModifierCalcType`[`EB1ModifierOperationType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1modifieroperationtype)Mathematical operation to apply when combining this modifier with the base value.`ModifierKey``string`Key identifying the specific target within the modifier type (e.g., a skill ID or stat ID).`ModifierType`[`EB1ModifierType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1modifiertype)Type of game system value this modifier affects (e.g., Stat, SkillExp, BuffTime).`Value``number`Numeric value used in the modifier operation. |
| `ModifierKey``string`Key identifying the specific target within the modifier type (e.g., a skill ID or stat ID).`ModifierType`[`EB1ModifierType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1modifiertype)Type of game system value this modifier affects (e.g., Stat, SkillExp, BuffTime).`Value``number`Numeric value used in the modifier operation. |
| `ModifierType`[`EB1ModifierType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1modifiertype)Type of game system value this modifier affects (e.g., Stat, SkillExp, BuffTime).`Value``number`Numeric value used in the modifier operation. |
| `Value``number`Numeric value used in the modifier operation. |
