---
document_id: "e01d5a0ac30b12a25694ebaff8ad8e526f1345983c5d3013057d778939caf0f9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/familymonitoringnotification"
title: "📘 FamilyMonitoringNotification Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:44+00:00"
content_sha256: "6675d20b1c7cd49a3a9402a965071b34a9c693ec246737d9f09d5fc4a9fe5c52"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/familymonitoringnotification"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1FamilyMonitoringNotificationTableRow

Defines a notification related to family status or events.

### Properties

- **Id** (`FName`): Unique identifier for the notification.
- **TitleTextId** (`FString`): Notification title. *(StringTableKey = "Id")*
- **DescTextId** (`FString`): Notification description. *(StringTableKey = "Id")*
- **Icon** (`TSoftObjectPtr<UObject>`): Notification icon. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*
- **bIsImportantAlert** (`bool`): If true, this notification overrides others when shown.

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoFamily[EB1FamilyCreateGenderControllType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1familycreategendercontrolltype)[EB1FamilyRelationshipType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1familyrelationshiptype)[Family Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/family)[FamilyCreateTemplate Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/familycreatetemplate)[FamilyNamePool Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/familynamepool)[FamilyRelationshipName Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/familyrelationshipname)[FB1FamilyCreateOperation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1familycreateoperation)[FB1FamilyCreateTemplateData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1familycreatetemplatedata)[FB1FamilyCreateTemplateTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1familycreatetemplatetablerow)[FB1FamilyDivorceUIInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1familydivorceuiinfo)[FB1FamilyMemberAttributeInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1familymemberattributeinfo)[FB1FamilyMonitoringNotificationTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1familymonitoringnotificationtablerow)
