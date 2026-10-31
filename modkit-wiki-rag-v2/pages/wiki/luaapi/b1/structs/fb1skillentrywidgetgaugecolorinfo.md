---
document_id: "3d01b1d9f39b3d5dca12af5142e5bca7c635a7d94c5817279a51337bba9f8381"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1skillentrywidgetgaugecolorinfo"
title: "FB1SkillEntryWidgetGaugeColorInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:29+00:00"
content_sha256: "2b55e67d819fb3d52368b913af3e6cf9279dfbb53a79d8d0ee475956f25fb77d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1skillentrywidgetgaugecolorinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines the gauge color for a specific experience percentage range in the skill entry widget.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`AdditiveColorKey`[`FB1TableRowName`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowname)The additive color key from DT_ColorMapping applied on top of the base color in this range.`ColorKey`[`FB1TableRowName`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowname)The color key from DT_ColorMapping used for the gauge fill color in this range.`MaxValue``integer`The maximum gauge percentage (exclusive) for this color range; applies when MinValue <= x < MaxValue.`MinValue``integer`The minimum gauge percentage (inclusive) for this color range; applies when MinValue <= x < MaxValue. |
| --- |
| `AdditiveColorKey`[`FB1TableRowName`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowname)The additive color key from DT_ColorMapping applied on top of the base color in this range.`ColorKey`[`FB1TableRowName`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowname)The color key from DT_ColorMapping used for the gauge fill color in this range.`MaxValue``integer`The maximum gauge percentage (exclusive) for this color range; applies when MinValue <= x < MaxValue.`MinValue``integer`The minimum gauge percentage (inclusive) for this color range; applies when MinValue <= x < MaxValue. |
| `ColorKey`[`FB1TableRowName`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowname)The color key from DT_ColorMapping used for the gauge fill color in this range.`MaxValue``integer`The maximum gauge percentage (exclusive) for this color range; applies when MinValue <= x < MaxValue.`MinValue``integer`The minimum gauge percentage (inclusive) for this color range; applies when MinValue <= x < MaxValue. |
| `MaxValue``integer`The maximum gauge percentage (exclusive) for this color range; applies when MinValue <= x < MaxValue.`MinValue``integer`The minimum gauge percentage (inclusive) for this color range; applies when MinValue <= x < MaxValue. |
| `MinValue``integer`The minimum gauge percentage (inclusive) for this color range; applies when MinValue <= x < MaxValue. |
