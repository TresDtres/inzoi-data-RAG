---
document_id: "e91fa36eee74cb71ed075aba29574f2aa99a5fc6974b2475c4c5561de371c39e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/buff"
title: "📘 Buff Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:21+00:00"
content_sha256: "24426bb9048ebc1ff40a45f0f3ee0c2fad6c96945c71d0472b47b4dd413f9143"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/buff"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1BuffTableRow

Defines a buff entry used to apply temporary effects, including visual and scripting logic.

### Properties

- **Id** (`FName`): Unique identifier for the buff.
- **BuffBasicInfo** (`FB1BuffBasicInfo`): Basic configuration including duration, tags, and emotions.
- **BuffDisplayInfo** (`FB1BuffDisplayInfo`): UI display configuration for the buff.
- **AddScriptIdList** (`TArray<FName>`): Scripts executed when the buff is applied. *(Foreign = "Script_Buff.Id")*
- **CancelScriptIdList** (`TArray<FName>`): Scripts executed when the buff is canceled. *(Foreign = "Script_Buff.Id")*
- **FinishScriptIdList** (`TArray<FName>`): Scripts executed when the buff expires naturally. *(Foreign = "Script_Buff.Id")*
- **TickScriptIdList** (`TArray<FName>`): Scripts executed on each tick while the buff is active. *(Foreign = "Script_Buff.Id")*
- **IntervalScriptIdList** (`TArray<FName>`): Additional scripts triggered on custom intervals. *(Foreign = "Script_Buff.Id")*

## 📚 References

- [FB1BuffBasicInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1buffbasicinfo)
- [FB1BuffDisplayInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1buffdisplayinfo)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoBuff[FB1Buff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1buff)[FB1BuffBasicInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1buffbasicinfo)[FB1BuffDetail](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1buffdetail)[FB1BuffDisplayInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1buffdisplayinfo)[FB1BuffExpireTimeInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1buffexpiretimeinfo)[FB1BuffTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1bufftablerow)
