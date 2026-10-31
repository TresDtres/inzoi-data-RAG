---
document_id: "5ce3ccce94169ac90bff5768991694f47efb72c801f7bd92a190c4f6416cd465"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/familyrelationshipname"
title: "📘 FamilyRelationshipName Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:44+00:00"
content_sha256: "63ee3f3960c47f459981c4faa4ba6231a030dfe2268f6abe2e5203b8d8a61054"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/familyrelationshipname"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1FamilyRelationshipNameTableRow

Defines localized relationship terms between characters for different gender combinations and simplified forms.

### Properties

- **Id** (`FName`): Unique identifier for this relationship label set.
- **DefaultTextId** (`FString`): Text shown when gender context is not specified. *(StringTableKey)*
- **MaleToMaleTextId** (`FString`): Label used when a male refers to another male. *(StringTableKey)*
- **FemaleToMaleTextId** (`FString`): Label used when a female refers to a male. *(StringTableKey)*
- **MaleToFemaleTextId** (`FString`): Label used when a male refers to a female. *(StringTableKey)*
- **FemaleToFemaleTextId** (`FString`): Label used when a female refers to another female. *(StringTableKey)*
- **SimplifiedDefaultTextId** (`FString`): Simplified label when no gender is specified. *(StringTableKey)*
- **SimplifiedMaleToMaleTextId** (`FString`): Simplified label for male-to-male reference. *(StringTableKey)*
- **SimplifiedFemaleToMaleTextId** (`FString`): Simplified label for female-to-male reference. *(StringTableKey)*
- **SimplifiedMaleToFemaleTextId** (`FString`): Simplified label for male-to-female reference. *(StringTableKey)*
- **SimplifiedFemaleToFemaleTextId** (`FString`): Simplified label for female-to-female reference. *(StringTableKey)*

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoFamily[EB1FamilyCreateGenderControllType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1familycreategendercontrolltype)[EB1FamilyRelationshipType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1familyrelationshiptype)[Family Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/family)[FamilyCreateTemplate Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/familycreatetemplate)[FamilyMonitoringNotification Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/familymonitoringnotification)[FamilyNamePool Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/familynamepool)[FB1FamilyCreateOperation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1familycreateoperation)[FB1FamilyCreateTemplateData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1familycreatetemplatedata)[FB1FamilyCreateTemplateTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1familycreatetemplatetablerow)[FB1FamilyDivorceUIInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1familydivorceuiinfo)[FB1FamilyMemberAttributeInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1familymemberattributeinfo)[FB1FamilyMonitoringNotificationTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1familymonitoringnotificationtablerow)
