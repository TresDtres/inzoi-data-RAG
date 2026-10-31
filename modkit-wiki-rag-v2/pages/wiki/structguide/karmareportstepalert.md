---
document_id: "72afaa0aa4633fe7901be63645e357ee46eb3af80019a895689b5ccca6b424b4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/karmareportstepalert"
title: "📘 KarmaReportStepAlert Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:51+00:00"
content_sha256: "7f1bef96064137775b6ce17fd7b12fd05c6f8d2cec867f98b5bb9011f7324c7b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/karmareportstepalert"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1KarmaReportStepAlertTableRow

Defines thresholds and comparison rules used to trigger alerts in the karma system.

### Properties

- **Id** (`FName`): Identifier linked to the karma state type.
- **Step** (`int32`): Numerical step or range segment for comparison.
- **StepCompareType** (`EB1CompareType`): How the step is compared (e.g., Equal, Greater).
- **CompareType** (`EB1CompareType`): How the rate is compared.
- **Rate** (`float`): Percentage or value used in comparison.
- **bNeedAlertMessage** (`bool`): If true, shows an alert when this rule is matched.

## 📚 References

- [EB1CompareType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1comparetype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoKarma[EB1KarmaReportMenuType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1karmareportmenutype)[KarmaReportMenu Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/karmareportmenu)[FB1KarmaReportInvolvingInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1karmareportinvolvinginfo)[FB1KarmaReportMenuTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1karmareportmenutablerow)[FB1KarmaReportStepAlertTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1karmareportstepalerttablerow)[FB1KarmaReportZoIInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1karmareportzoiinfo)[FB1KarmaReportZoIInfoList](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1karmareportzoiinfolist)
