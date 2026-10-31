---
document_id: "b9b003f278ff65fb46bb79d8ceb1a993a1216e9fffb2f12537917535e8384c0e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/company"
title: "📘 Company Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:24+00:00"
content_sha256: "458add8ff2150b7df41d5245966c16dd410d975ca719c59a7455a4efc8196569"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/company"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1CompanyTableRow

Defines a company in the simulation, including display settings, currency, and organizational structure.

### Properties

- **Id** (`FName`): Unique identifier for the company.
- **DisplayName** (`FString`): Localization key for the company name. *(StringTableKey = "Id")*
- **Desc** (`FString`): Localization key for the company description. *(StringTableKey = "Id")*
- **SalaryCurrencyId** (`FName`): Currency used to pay salaries. *(Foreign = "Currency.Id")*
- **RankTitleTextId** (`FString`): Label for the rank category. *(StringTableKey)*
- **ProgressBarTitleTextId** (`FString`): Label for progress bar display. *(StringTableKey)*
- **Organizations** (`TArray<FB1OrganizationInfo>`): List of roles and ranks in this company.
- **bIsFakeCompany** (`bool`): Indicates if this is a placeholder/fake company (not saved).

## 📚 References

- [FB1OrganizationInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1organizationinfo)
- [FB1CompanyCustomMobileMessageInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1companycustommobilemessageinfo)
- [FB1LeaveCompanyCustomMobileMessageInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1leavecompanycustommobilemessageinfo)
- [EB1LeaveCompanyReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1leavecompanyreason)
- [FB1OrganizationRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1organizationrank)
- [EB1EmploymentForm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1employmentform)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoCompany[CompanyCondition Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/companycondition)[FB1CompanyConditionTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1companyconditiontablerow)[FB1CompanyCustomMobileMessageInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1companycustommobilemessageinfo)[FB1CompanyInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1companyinfo)[FB1CompanyTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1companytablerow)
