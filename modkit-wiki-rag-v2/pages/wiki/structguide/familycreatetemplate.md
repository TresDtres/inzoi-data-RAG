---
document_id: "c80cad45b5d994c45f467b79b4d643dde4fb4e7730ce85dc3ae61c964e4fa645"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/familycreatetemplate"
title: "📘 FamilyCreateTemplate Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:44+00:00"
content_sha256: "3c7686c60fcf3f1b6b8119058aaf27e7fbd7610154645fcb1fac66d2358585f0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/familycreatetemplate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1FamilyCreateTemplateTableRow

Defines a template for family creation, including member count and operations.

### Properties

- **Id** (`FName`): Unique identifier for the template.
- **Ratio** (`int32`): Probability weight used in selection.
- **FamilyMemberCount** (`int32`): Number of members to generate.
- **FamilyCreateOperations** (`TArray<FB1FamilyCreateOperation>`): Instructions for generating individual members.

@include Data/StrcutGuide/Struct/FB1FamilyCreateOperation.md @include Data/StrcutGuide/Enum/EB1FamilyRelationshipType.md @include Data/StrcutGuide/Enum/EB1FamilyCreateGenderControllType.md

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoFamily[EB1FamilyCreateGenderControllType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1familycreategendercontrolltype)[EB1FamilyRelationshipType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1familyrelationshiptype)[Family Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/family)[FamilyMonitoringNotification Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/familymonitoringnotification)[FamilyNamePool Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/familynamepool)[FamilyRelationshipName Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/familyrelationshipname)[FB1FamilyCreateOperation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1familycreateoperation)[FB1FamilyCreateTemplateData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1familycreatetemplatedata)[FB1FamilyCreateTemplateTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1familycreatetemplatetablerow)[FB1FamilyDivorceUIInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1familydivorceuiinfo)[FB1FamilyMemberAttributeInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1familymemberattributeinfo)[FB1FamilyMonitoringNotificationTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1familymonitoringnotificationtablerow)
