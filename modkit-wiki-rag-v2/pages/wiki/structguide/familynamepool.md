---
document_id: "a699b9ed02f0a46f7615b3abefc0ed6295b4bae5c51d7b7f2e56503f4ab9c29d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/familynamepool"
title: "📘 FamilyNamePool Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:44+00:00"
content_sha256: "8ad9f95861ffcd0da5dc8f311e982e1851008b998cc1e01b0fdce838cd2e6c93"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/familynamepool"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1FamilyNamePoolTableRow

Defines a pool of family names by culture.

### Properties

- **Id** (`FName`): Identifier for the name pool.
- **Culture** (`EB1DiversityCulture`): Culture associated with the names.
- **Names** (`TArray<FB1NameData>`): List of available family names.

@include Data/StrcutGuide/Enum/EB1DiversityCulture.md @include Data/StrcutGuide/Struct/FB1NameData.md

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoFamily[EB1FamilyCreateGenderControllType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1familycreategendercontrolltype)[EB1FamilyRelationshipType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1familyrelationshiptype)[Family Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/family)[FamilyCreateTemplate Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/familycreatetemplate)[FamilyMonitoringNotification Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/familymonitoringnotification)[FamilyRelationshipName Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/familyrelationshipname)[FB1FamilyCreateOperation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1familycreateoperation)[FB1FamilyCreateTemplateData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1familycreatetemplatedata)[FB1FamilyCreateTemplateTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1familycreatetemplatetablerow)[FB1FamilyDivorceUIInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1familydivorceuiinfo)[FB1FamilyMemberAttributeInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1familymemberattributeinfo)[FB1FamilyMonitoringNotificationTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1familymonitoringnotificationtablerow)
