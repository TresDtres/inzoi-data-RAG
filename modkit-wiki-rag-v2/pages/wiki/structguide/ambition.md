---
document_id: "da807c0e24084738452e14b5d83cfbf4e16303522fcdc48b84c0b0968b4685d9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/ambition"
title: "📘 Ambition Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:16+00:00"
content_sha256: "4e58e517ff5596aacedd670e5cd14ada10fb8422779521da41f2ec31c0e95332"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/ambition"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1AmbitionTableRow

Defines a top-level ambition configuration, including display texts, visuals, and linked ambition items.

### Properties

- **Id** (`FName`): Unique identifier for the ambition. *(L10N_Name = DisplayTextId, L10N_Desc = DescTextId)*
- **DisplayTextId** (`FString`): Localization key for the ambition’s display name. *(StringTableKey = "Id")*
- **DescTextId** (`FString`): Localization key for the ambition’s description. *(StringTableKey = "Id")*
- **MottoTextId** (`FString`): Localization key for the motto shown in UI. *(StringTableKey)*
- **JoyCardPopupTextId** (`FString`): Popup text when ambition appears on joy card. *(StringTableKey)*
- **CompletePopupTextId** (`FString`): Text shown upon ambition completion. *(StringTableKey)*
- **Icon** (`TSoftObjectPtr<UTexture2D>`): UI icon representing the ambition.
- **Bg** (`TSoftObjectPtr<UTexture2D>`): Background image for ambition display.
- **ColorId** (`FName`): UI color scheme ID. *(Foreign = "ColorMapping.Id")*
- **CompleteLinkTraitId** (`FName`): Trait granted when ambition is completed. *(Foreign = "Trait.Id")*
- **AmbitionItemIds** (`TArray<FName>`): List of ambition data IDs associated with this ambition. *(Foreign = "AmbitionItem.Id")*

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAmbition[AmbitionItem Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/ambitionitem)[FB1AmbitionItemTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1ambitionitemtablerow)[FB1AmbitionProgressStepMissionInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1ambitionprogressstepmissioninfo)[FB1AmbitionState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1ambitionstate)[FB1AmbitionStepDefine](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1ambitionstepdefine)[FB1AmbitionStepMissionDefine](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1ambitionstepmissiondefine)[FB1AmbitionTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1ambitiontablerow)
