---
document_id: "9a132c016202a6c83fc89e47c1cda9e76f05248d11ec2724df8a2941f3de8f0e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1lightbrightnesslevel"
title: "B1LightBrightnessLevel"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:55:27+00:00"
content_sha256: "6fbd271ad3d3943615570d77493e4fa973c2ddf22a8ca2a8774a3796eb84c929"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1lightbrightnesslevel"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Multipliers applied to a light object for one brightness level of the SetObjectBrightnessLevel execute. * Both are multipliers over the values authored in the object blueprint, not absolute values. * Author the two so that they sit at the same normalized position inside their respective ranges * (EmissiveMultiMin/Max and AttenuationMultiMin/Max of ObjectPartsParamUsage). The build mode brightness slider * drives both from a single slider position, so a level that is not consistent that way makes the radius jump * as soon as the player nudges the slider.

| PropertyTypeDescriptionMetadataIntensityMultiplierfloatMultiplied with the light component intensity authored in the object blueprint.Category: B1LightBrightnessLevel ClampMin: 0AttenuationMultiplierfloatMultiplied with the light component attenuation radius authored in the object blueprint. * A larger radius costs more to render, so keep it close to 1.0 unless the design calls for a wide spread.Category: B1LightBrightnessLevel ClampMin: 0 |
| --- |
| IntensityMultiplierfloatMultiplied with the light component intensity authored in the object blueprint.Category: B1LightBrightnessLevel ClampMin: 0AttenuationMultiplierfloatMultiplied with the light component attenuation radius authored in the object blueprint. * A larger radius costs more to render, so keep it close to 1.0 unless the design calls for a wide spread.Category: B1LightBrightnessLevel ClampMin: 0 |
| AttenuationMultiplierfloatMultiplied with the light component attenuation radius authored in the object blueprint. * A larger radius costs more to render, so keep it close to 1.0 unless the design calls for a wide spread.Category: B1LightBrightnessLevel ClampMin: 0 |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoLight[LightObject Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/lightobject)[FB1LightObjectTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1lightobjecttablerow)
