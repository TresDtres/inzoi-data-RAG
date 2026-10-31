---
document_id: "f36842bb31f6e5401f82963fc075df7481d40d05e740dd32b0f8435410eacd72"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/rumor"
title: "📘 Rumor Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:01+00:00"
content_sha256: "f5189ecaa4f2316f2ec4f85e98d184f02e59f20d0ed4c9c32a170c3e78ec5c83"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/rumor"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1RumorTableRow

Defines a rumor that spreads through conversation or event chains, with associated logic and scripts.

### Properties

- **Id** (`FName`): Unique identifier for the rumor.
- **DescTextId** (`FString`): Localized description of the rumor. *(StringTableKey = "Id")*
- **IsTransferByTalk** (`bool`): If true, the rumor spreads through conversation.
- **Duration** (`float`): Lifetime of the rumor in simulation time.
- **Strength** (`int32`): Intensity or credibility of the rumor.
- **PositiveRatio / NegativeRatio** (`float`): Percent chance of the rumor being perceived positively or negatively. *(ClampMin = 0.0)*
- **ScriptIds** (`TArray<FName>`): Scripts triggered by the rumor. *(Foreign = "Script_Rumor.Id")*
- **RumorEventIds** (`TArray<FName>`): Events associated with the rumor. *(Foreign = "RumorEvent.Id")*

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoRumor[EB1RumorEventType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1rumoreventtype)[RumorEvent Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/rumorevent)[FB1RumorEventTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1rumoreventtablerow)[FB1RumorParam](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1rumorparam)[FB1RumorTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1rumortablerow)
