---
document_id: "82e07a4de1143d9131972fbeabecd8287ee770b957b340e8cc952cbbddf40f11"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1gameoptiongpupresettablerow"
title: "FB1GameOptionGPUPresetTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:00+00:00"
content_sha256: "4ae1fd50dace1311d289aa3f20be00049e3cde809d6c44ca2b3134427c49ab62"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1gameoptiongpupresettablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining a GPU-specific graphics preset, including the GPU name, minimum memory requirement, preset tier, per-option overrides, and resolution settings.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (9)

| NameTypeDescription`GPU``string`GPU name string used to match this preset to the detected hardware.`MaxToOptimalResolution``FB1MaxToOptimalResolution[]`Mapping from maximum resolutions to optimal resolutions for this preset.`MinMemoryGB``integer`Minimum VRAM (GB) required to use this preset. Zero means no restriction.`Options``table<EB1GameOption, string>`Per-option value overrides applied when this GPU preset is selected.`Preset`[`EB1GraphicsPreset`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1graphicspreset)Graphics quality preset tier applied by this entry.`ResolutionSizeX``integer`Horizontal resolution for this preset.`ResolutionSizeY``integer`Vertical resolution for this preset.`UpscalingQuality`[`EB1UpscalingMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1upscalingmode)Upscaling quality mode recommended for this GPU preset.`VeryLowPerformance``integer`Performance score used to rank this preset against others at very-low quality. |
| --- |
| `GPU``string`GPU name string used to match this preset to the detected hardware.`MaxToOptimalResolution``FB1MaxToOptimalResolution[]`Mapping from maximum resolutions to optimal resolutions for this preset.`MinMemoryGB``integer`Minimum VRAM (GB) required to use this preset. Zero means no restriction.`Options``table<EB1GameOption, string>`Per-option value overrides applied when this GPU preset is selected.`Preset`[`EB1GraphicsPreset`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1graphicspreset)Graphics quality preset tier applied by this entry.`ResolutionSizeX``integer`Horizontal resolution for this preset.`ResolutionSizeY``integer`Vertical resolution for this preset.`UpscalingQuality`[`EB1UpscalingMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1upscalingmode)Upscaling quality mode recommended for this GPU preset.`VeryLowPerformance``integer`Performance score used to rank this preset against others at very-low quality. |
| `MaxToOptimalResolution``FB1MaxToOptimalResolution[]`Mapping from maximum resolutions to optimal resolutions for this preset.`MinMemoryGB``integer`Minimum VRAM (GB) required to use this preset. Zero means no restriction.`Options``table<EB1GameOption, string>`Per-option value overrides applied when this GPU preset is selected.`Preset`[`EB1GraphicsPreset`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1graphicspreset)Graphics quality preset tier applied by this entry.`ResolutionSizeX``integer`Horizontal resolution for this preset.`ResolutionSizeY``integer`Vertical resolution for this preset.`UpscalingQuality`[`EB1UpscalingMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1upscalingmode)Upscaling quality mode recommended for this GPU preset.`VeryLowPerformance``integer`Performance score used to rank this preset against others at very-low quality. |
| `MinMemoryGB``integer`Minimum VRAM (GB) required to use this preset. Zero means no restriction.`Options``table<EB1GameOption, string>`Per-option value overrides applied when this GPU preset is selected.`Preset`[`EB1GraphicsPreset`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1graphicspreset)Graphics quality preset tier applied by this entry.`ResolutionSizeX``integer`Horizontal resolution for this preset.`ResolutionSizeY``integer`Vertical resolution for this preset.`UpscalingQuality`[`EB1UpscalingMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1upscalingmode)Upscaling quality mode recommended for this GPU preset.`VeryLowPerformance``integer`Performance score used to rank this preset against others at very-low quality. |
| `Options``table<EB1GameOption, string>`Per-option value overrides applied when this GPU preset is selected.`Preset`[`EB1GraphicsPreset`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1graphicspreset)Graphics quality preset tier applied by this entry.`ResolutionSizeX``integer`Horizontal resolution for this preset.`ResolutionSizeY``integer`Vertical resolution for this preset.`UpscalingQuality`[`EB1UpscalingMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1upscalingmode)Upscaling quality mode recommended for this GPU preset.`VeryLowPerformance``integer`Performance score used to rank this preset against others at very-low quality. |
| `Preset`[`EB1GraphicsPreset`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1graphicspreset)Graphics quality preset tier applied by this entry.`ResolutionSizeX``integer`Horizontal resolution for this preset.`ResolutionSizeY``integer`Vertical resolution for this preset.`UpscalingQuality`[`EB1UpscalingMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1upscalingmode)Upscaling quality mode recommended for this GPU preset.`VeryLowPerformance``integer`Performance score used to rank this preset against others at very-low quality. |
| `ResolutionSizeX``integer`Horizontal resolution for this preset.`ResolutionSizeY``integer`Vertical resolution for this preset.`UpscalingQuality`[`EB1UpscalingMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1upscalingmode)Upscaling quality mode recommended for this GPU preset.`VeryLowPerformance``integer`Performance score used to rank this preset against others at very-low quality. |
| `ResolutionSizeY``integer`Vertical resolution for this preset.`UpscalingQuality`[`EB1UpscalingMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1upscalingmode)Upscaling quality mode recommended for this GPU preset.`VeryLowPerformance``integer`Performance score used to rank this preset against others at very-low quality. |
| `UpscalingQuality`[`EB1UpscalingMode`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1upscalingmode)Upscaling quality mode recommended for this GPU preset.`VeryLowPerformance``integer`Performance score used to rank this preset against others at very-low quality. |
| `VeryLowPerformance``integer`Performance score used to rank this preset against others at very-low quality. |
