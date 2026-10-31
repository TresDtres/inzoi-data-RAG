---
document_id: "a5ac6a836596675c441f886ebc056ab18f2f65138abf20bc91ad30ac1a5b13e0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1qualitydata"
title: "FB1QualityData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:08+00:00"
content_sha256: "40d9a2ff766f80cea078b476618bf5ad7bbc5a031eb91c12f5b27b9f10206c68"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1qualitydata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Contains per-quality configuration data including the associated state, animation weights, and price modifier.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`PlayIdleAnimationWeight``number`The probability weight for playing the idle animation at this quality level.`PlaySuccessAnimationWeight``number`The probability weight for playing the success animation at this quality level.`Price``number`The price modifier multiplier applied to items produced at this quality level.`Quality`[`EB1Quality`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1quality)The quality level this data entry applies to.`StateGroupId``string`The state group ID associated with this quality level.`StateId``string`The specific state ID associated with this quality level. |
| --- |
| `PlayIdleAnimationWeight``number`The probability weight for playing the idle animation at this quality level.`PlaySuccessAnimationWeight``number`The probability weight for playing the success animation at this quality level.`Price``number`The price modifier multiplier applied to items produced at this quality level.`Quality`[`EB1Quality`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1quality)The quality level this data entry applies to.`StateGroupId``string`The state group ID associated with this quality level.`StateId``string`The specific state ID associated with this quality level. |
| `PlaySuccessAnimationWeight``number`The probability weight for playing the success animation at this quality level.`Price``number`The price modifier multiplier applied to items produced at this quality level.`Quality`[`EB1Quality`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1quality)The quality level this data entry applies to.`StateGroupId``string`The state group ID associated with this quality level.`StateId``string`The specific state ID associated with this quality level. |
| `Price``number`The price modifier multiplier applied to items produced at this quality level.`Quality`[`EB1Quality`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1quality)The quality level this data entry applies to.`StateGroupId``string`The state group ID associated with this quality level.`StateId``string`The specific state ID associated with this quality level. |
| `Quality`[`EB1Quality`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1quality)The quality level this data entry applies to.`StateGroupId``string`The state group ID associated with this quality level.`StateId``string`The specific state ID associated with this quality level. |
| `StateGroupId``string`The state group ID associated with this quality level.`StateId``string`The specific state ID associated with this quality level. |
| `StateId``string`The specific state ID associated with this quality level. |
