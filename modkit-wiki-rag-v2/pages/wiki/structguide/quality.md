---
document_id: "20fc26d608762fbe890e55ad379139c9b1cfa4dd9c20605b64961b5f47fa587d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/quality"
title: "📘 Quality Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:59+00:00"
content_sha256: "08f1e2177bf89d0eea13e26116113c92cc4d7a1e8a3b1bbcd71e3e1596c4a77d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/quality"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1QualityTableRow

Defines quality settings for crafting or item output, including dynamic weights and level handling.

### Properties

- **Id** (`FName`): Unique identifier for the quality definition.
- **MarketSellingDataId** (`FName`): Reference to a market selling rule. *(Foreign = "MarketSelling.Id")*
- **NonMaxLevelQualityId** (`FName`): ID used when the item is not at max crafting level. *(Foreign = "LevelQuality.Id")*
- **MaxLevelQualityId** (`FName`): ID used when item is crafted at max level. *(Foreign = "LevelQuality.Id")*
- **QualityDatas** (`TArray<FB1QualityData>`): Quality configurations such as state, animation, price and more.

## 📚 References

- [FB1QualityData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1qualitydata)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoQuality[EB1Quality](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1quality)[FB1QualityBonusScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1qualitybonusscore)[FB1QualityData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1qualitydata)[FB1QualityScoreData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1qualityscoredata)[FB1QualityTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1qualitytablerow)[FB1QualityTextData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1qualitytextdata)[FB1QualityThresholdInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1qualitythresholdinfo)[FB1QualityWeight](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1qualityweight)
