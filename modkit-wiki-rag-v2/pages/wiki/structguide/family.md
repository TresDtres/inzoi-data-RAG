---
document_id: "c3fc1df4dc745e0f69ef724784ef4cd74d9a9131e7491ae583447c90cec77f5a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/family"
title: "📘 Family Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:44+00:00"
content_sha256: "42bed32736ef9a1c820474e0bb6b10961e438b03c069c5863f6973555dd9888b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/family"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1FamilyTableRow

Defines a family template, including map location, display texts, and members.

### Properties

- **Id** (`FName`): Unique identifier for the family entry.
- **MapId** (`FName`): Map where the family is located. *(Foreign = "Map.Id")*
- **FamilyNameTextId** (`FString`): Localized name. *(StringTableKey = "Id")*
- **DescriptionTextId** (`FString`): Localized description. *(StringTableKey = "Id")*
- **TextureId** (`FName`): Image shown for this family. *(Foreign = "B1Texture2D.Id")*
- **CurrencyDatas** (`TArray<FB1CurrencyDefaultData>`): Starting currencies.
- **FamilyMemberAttributeIdList** (`TArray<FName>`): Attributes assigned to family members.
- **IsRandomGenerate** (`bool`): If true, the family is generated randomly.

## 📚 References

- [FB1CurrencyDefaultData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1currencydefaultdata)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoFamily[EB1FamilyCreateGenderControllType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1familycreategendercontrolltype)[EB1FamilyRelationshipType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1familyrelationshiptype)[FamilyCreateTemplate Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/familycreatetemplate)[FamilyMonitoringNotification Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/familymonitoringnotification)[FamilyNamePool Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/familynamepool)[FamilyRelationshipName Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/familyrelationshipname)[FB1FamilyCreateOperation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1familycreateoperation)[FB1FamilyCreateTemplateData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1familycreatetemplatedata)[FB1FamilyCreateTemplateTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1familycreatetemplatetablerow)[FB1FamilyDivorceUIInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1familydivorceuiinfo)[FB1FamilyMemberAttributeInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1familymemberattributeinfo)[FB1FamilyMonitoringNotificationTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1familymonitoringnotificationtablerow)
