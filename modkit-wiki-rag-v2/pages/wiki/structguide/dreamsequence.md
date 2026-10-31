---
document_id: "efdaa5b1c88083c5abb8a2b5872f418ef8e14d5a07cd482dbd9901678ccf8990"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/dreamsequence"
title: "📘 DreamSequence Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:27+00:00"
content_sha256: "0cec4f774ba24403c9fe9815dc08b3b31fca18dfd6cc12ff425d00a6bdbcc51d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/dreamsequence"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1DreamSequenceTableRow

Defines a specific dream sequence, including animation, script logic, and UI media.

### Properties

- **Id** (`FName`): Unique identifier for the dream sequence.
- **AwakeScriptId** (`FName`): Script executed when the dream ends. *(Foreign = "Script_Dream.Id")*
- **AwakeBuffId** (`FName`): Buff applied after waking up. *(Foreign = "Buff.Id")*
- **DreamAnimId** (`FName`): Animation played during the dream. *(Foreign = "DreamAnim.Id")*
- **VoiceResourceId** (`FName`): Voice clip played during the dream. *(Foreign = "VoiceResources.Id")*
- **REMStartScriptId** (`FName`): Script triggered at the start of REM sleep. *(Foreign = "Script_Dream.Id")*
- **Images** (`TArray<TSoftObjectPtr<UObject>>`): List of images displayed during the dream. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoDream[Dream Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/dream)[DreamAnim Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/dreamanim)[DreamPool Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/dreampool)[FB1DreamAnimInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1dreamaniminfo)[FB1DreamAnimTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1dreamanimtablerow)[FB1DreamInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1dreaminfo)[FB1DreamPoolSelection](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1dreampoolselection)[FB1DreamPoolTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1dreampooltablerow)[FB1DreamSequenceTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1dreamsequencetablerow)[FB1DreamTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1dreamtablerow)
