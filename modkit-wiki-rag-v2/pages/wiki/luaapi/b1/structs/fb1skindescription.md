---
document_id: "7e7897c80cbf8525865af0768417d6c05578fecd483d66497cd1906a7d5c22c6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1skindescription"
title: "FB1SkinDescription"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:30+00:00"
content_sha256: "33a230c28df276058e9f6f7df9514eac97b6ad1cd3735188c9949fec0acfe808"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1skindescription"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines skin configuration, including skin identifier, color mode, and material parameter values for rendering.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (7)

| NameTypeDescription`AgingControlPoint`[`FB1OptionalFloat`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1optionalfloat)Manual override of the aging progress (controlPoint). If Unset, the growth-stage-based computed value is used. (Replaces the old ScalarParameters["Aging_Strength"].)`ColorApplyMode`[`EB1SkinColorApplyMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1skincolorapplymode)Mode that controls how the skin color is applied (e.g., UsingColorId, UsingSkinTone, UsingDefaultMaterial).`ColorId``string`Identifier of the skin color preset.`ScalarParameters``table<string, number>`Scalar material parameters for skin rendering.`SkinId``string`Identifier for the skin preset.`Tone``FLinearColor`Skin tone value applied directly as a linear color.`bIsSkinToneSetWithColorId``boolean`Flag indicating whether skin tone is set by color ID. |
| --- |
| `AgingControlPoint`[`FB1OptionalFloat`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1optionalfloat)Manual override of the aging progress (controlPoint). If Unset, the growth-stage-based computed value is used. (Replaces the old ScalarParameters["Aging_Strength"].)`ColorApplyMode`[`EB1SkinColorApplyMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1skincolorapplymode)Mode that controls how the skin color is applied (e.g., UsingColorId, UsingSkinTone, UsingDefaultMaterial).`ColorId``string`Identifier of the skin color preset.`ScalarParameters``table<string, number>`Scalar material parameters for skin rendering.`SkinId``string`Identifier for the skin preset.`Tone``FLinearColor`Skin tone value applied directly as a linear color.`bIsSkinToneSetWithColorId``boolean`Flag indicating whether skin tone is set by color ID. |
| `ColorApplyMode`[`EB1SkinColorApplyMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1skincolorapplymode)Mode that controls how the skin color is applied (e.g., UsingColorId, UsingSkinTone, UsingDefaultMaterial).`ColorId``string`Identifier of the skin color preset.`ScalarParameters``table<string, number>`Scalar material parameters for skin rendering.`SkinId``string`Identifier for the skin preset.`Tone``FLinearColor`Skin tone value applied directly as a linear color.`bIsSkinToneSetWithColorId``boolean`Flag indicating whether skin tone is set by color ID. |
| `ColorId``string`Identifier of the skin color preset.`ScalarParameters``table<string, number>`Scalar material parameters for skin rendering.`SkinId``string`Identifier for the skin preset.`Tone``FLinearColor`Skin tone value applied directly as a linear color.`bIsSkinToneSetWithColorId``boolean`Flag indicating whether skin tone is set by color ID. |
| `ScalarParameters``table<string, number>`Scalar material parameters for skin rendering.`SkinId``string`Identifier for the skin preset.`Tone``FLinearColor`Skin tone value applied directly as a linear color.`bIsSkinToneSetWithColorId``boolean`Flag indicating whether skin tone is set by color ID. |
| `SkinId``string`Identifier for the skin preset.`Tone``FLinearColor`Skin tone value applied directly as a linear color.`bIsSkinToneSetWithColorId``boolean`Flag indicating whether skin tone is set by color ID. |
| `Tone``FLinearColor`Skin tone value applied directly as a linear color.`bIsSkinToneSetWithColorId``boolean`Flag indicating whether skin tone is set by color ID. |
| `bIsSkinToneSetWithColorId``boolean`Flag indicating whether skin tone is set by color ID. |
