---
document_id: "54f662c0a7517bd1c4d10e81543321e781f755a9a9658e237263b60ad21f3fc7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1modifieroperationtype"
title: "EB1ModifierOperationType"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:36+00:00"
content_sha256: "b07e6e1552baf89defe699be6c7f651207fb9de6b4d1f4cf89667dd8108efead"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/enum/eb1modifieroperationtype"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🎛️ Enum: EB1ModifierOperationType

Defines how a modifier applies its value to a base stat or condition.

- **None**: No operation.
- **Add**: Add the modifier's value.
- **Multiply**: Multiply the base by the modifier.
- **SetMax**: Ignores additive and multiplicative modifiers and forcibly overrides the value with a specified non-zero input. This operation takes the highest precedence in the evaluation order..
- **PositiveAdd**: Add only if value is positive.
- **NegativeAdd**: Add only if value is negative.
- **PositiveMultiply**: Multiply only if value is positive.
- **NegativeMultiply**: Multiply only if value is negative.

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoModifier[EB1ModifierType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1modifiertype)[Modifier Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/modifier)[FB1ModifierSettingData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1modifiersettingdata)[FB1ModifierTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1modifiertablerow)
