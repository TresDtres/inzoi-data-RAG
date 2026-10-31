---
document_id: "28de8d802173dfd76ab8ce9b4b4bdc683c590a978f4ff6ea7463a5021c7e4aab"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/instinct"
title: "📘 Instinct Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:50+00:00"
content_sha256: "216dd229086149d310ebb48eeef0982f39a080ee05bb0b24fb9e968095d2b425"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/instinct"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1InstinctTableRow

Defines an instinctive behavior for characters, such as emotional or autonomous responses triggered by age or script.

### Properties

- **Id** (`FName`): Unique identifier for this instinct.
- **AgeAvailable** (`TArray<EB1GrowthStep>`): List of growth stages this instinct applies to.
- **AddScriptId** (`FName`): Script triggered when this instinct is added. *(Foreign = "Script_Instinct.Id")*
- **RemoveScriptId** (`FName`): Script triggered when this instinct is removed. *(Foreign = "Script_Instinct.Id")*
- **InstinctScripts** (`TArray<FB1TraitScript>`): Enables script execution either through an external trigger or internal cooldown, based on the specified Type.

## 📚 References

- [FB1TraitScript](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1traitscript)
- [FB1TraitEventTrigger](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1traiteventtrigger)
- [EB1TraitEntryType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1traitentrytype)
- [EB1TraitEventTriggerType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1traiteventtriggertype)
- [EB1GrowthStep](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1growthstep)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoInstinct[FB1InstinctTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1instincttablerow)
