---
document_id: "d95bce8cec29dd88e0e0b0fb03ed3500a671cadbad9249202db7764297942f2a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/companycondition"
title: "📘 CompanyCondition Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:24+00:00"
content_sha256: "f921943145122e112726caea62470283cc99436df502a8f97b5f87d8392d3256"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/companycondition"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1CompanyConditionTableRow

Defines a list of conditions that must be satisfied to unlock or validate company progression logic.

### Properties

- **Id** (`FName`): Unique identifier for this condition entry.
- **DisplayName** (`FString`): Localization key for the condition’s display name. *(StringTableKey = "Id")*
- **Conditions** (`TArray<FB1Condition>`): List of logic conditions used in rank advancement or availability.

## 📚 References

- [FB1Condition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1condition)
- [EB1BaseObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1baseobject)
- [EB1CompareType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1comparetype)
- [EB1ConditionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1conditiontype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoCompany[Company Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/company)[FB1CompanyConditionTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1companyconditiontablerow)[FB1CompanyCustomMobileMessageInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1companycustommobilemessageinfo)[FB1CompanyInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1companyinfo)[FB1CompanyTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1companytablerow)
