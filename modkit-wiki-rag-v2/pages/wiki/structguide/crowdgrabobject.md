---
document_id: "d1d8de38da00626a0819b83d4706b57ae0f9e205d71821639700fdae18b489c8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/crowdgrabobject"
title: "📘 CrowdGrabObject Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:25+00:00"
content_sha256: "6ef7379cb7e164de0d42c45add2d6b6ae52828f66c1f7fef169906309eb0ace1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/crowdgrabobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1CrowdGrabObjectTableRow

Defines the probability of crowd agents selecting certain objects based on age and gender.

### Properties

- **Id** (`FName`): Unique identifier for this crowd grab object entry.
- **GrowthStep** (`EB1GrowthStep`): Growth stage required for selection (e.g., Youth, Adult).
- **GenderType** (`EB1GenderType`): Gender filter for crowd selection.
- **CrowdObjectWeightList** (`TArray<FB1CrowdGrabObjectWeight>`): List of weighted object candidates.
- **TotalWeight** (`int32`): Sum of weights for internal randomization logic. *(auto-calculated)*

## 📚 References

- [FB1CrowdGrabObjectWeight](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1crowdgrabobjectweight)
- [EB1GrowthStep](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1growthstep)
- [EB1GenderType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1gendertype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoCrowd[FB1CrowdGrabObjectTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1crowdgrabobjecttablerow)[FB1CrowdGrabObjectWeight](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1crowdgrabobjectweight)[FB1CrowdGroupDiversitySettings](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1crowdgroupdiversitysettings)
