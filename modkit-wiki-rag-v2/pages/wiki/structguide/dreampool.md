---
document_id: "8e9c75874d1a499fd9e66b08ad1ff76b6627cf56dddf94739625dfec75bdfdef"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/dreampool"
title: "📘 DreamPool Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:26+00:00"
content_sha256: "3058e9555c0b69cac7ef20617eee08082a843094e8c63a1f77d1bfb123a1ee7a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/dreampool"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1DreamPoolTableRow

Defines a pool of dream sequences that can be selected during sleep simulation.

### Properties

- **Id** (`FName`): Unique identifier for the dream pool.
- **SleepwalkingPoolId** (`FName`): Optional pool ID linked to sleepwalking behavior. *(Foreign = "SleepwalkingPool.Id")*
- **DreamSequenceIds** (`TArray<FName>`): List of dream sequence IDs included in this pool. *(Foreign = "DreamSequence.Id")*

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoDream[Dream Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/dream)[DreamAnim Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/dreamanim)[DreamSequence Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/dreamsequence)[FB1DreamAnimInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1dreamaniminfo)[FB1DreamAnimTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1dreamanimtablerow)[FB1DreamInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1dreaminfo)[FB1DreamPoolSelection](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1dreampoolselection)[FB1DreamPoolTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1dreampooltablerow)[FB1DreamSequenceTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1dreamsequencetablerow)[FB1DreamTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1dreamtablerow)
