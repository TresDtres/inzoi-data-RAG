---
document_id: "c7e3575ac757ad6eb070cb511d6b8a1906e58e9421c75e0c9170123bb8f99657"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/targetfilter"
title: "📘 TargetFilter Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:56+00:00"
content_sha256: "dfbaf5084575f95467bfdde72617e7a4868adb66caadb7653022fb92c291bd30"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/targetfilter"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1TargetFilterTableRow

Defines logic for filtering valid targets in actions, interactions, or scripts.

### Properties

- **Id** (`FName`): Unique identifier for the filter entry.
- **FilterType** (`EB1TargetFilterType`): Type of filtering logic used (e.g., ObjectId, Character).
- **ResultType** (`EB1FilterResultType`): What kind of result is returned (e.g., NearTarget, TargetList).
- **S1** (`FName`): Optional string reference used in the filter. *(SearchLink = FilterType)*
- **S2** (`FName`): Optional secondary reference used in complex filters.
- **F1** (`float`): First float parameter used in filtering logic.
- **F2** (`float`): Second float parameter used in filtering logic.
- **SearchRange** (`float`): Distance range used for filtering nearby targets.

## 📚 References

- [EB1TargetFilterType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1targetfiltertype)
- [EB1FilterResultType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1filterresulttype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoTarget[EB1TargetFilterType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1targetfiltertype)[FB1TargetCustomerCategoryData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1targetcustomercategorydata)[FB1TargetCustomerCommonData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1targetcustomercommondata)[FB1TargetCustomerData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1targetcustomerdata)[FB1TargetFilterInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1targetfilterinfo)[FB1TargetFilters](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1targetfilters)[FB1TargetFilterTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1targetfiltertablerow)[FB1TargetMemory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1targetmemory)[FB1TargetSlotParam](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1targetslotparam)
