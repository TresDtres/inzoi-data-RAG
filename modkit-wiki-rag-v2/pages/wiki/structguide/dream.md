---
document_id: "3a118e83ec84dfaaf5a2e4fbc42ce2138afe280d425dd00b4af18ff73c54e7e1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/dream"
title: "📘 Dream Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:26+00:00"
content_sha256: "0513b473e5aa27d23e4261fd9249008b17c91939374ff1551b12360cd4f50c43"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/dream"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1DreamTableRow

Defines dream behavior tied to age and dream selection logic.

### Properties

- **Id** (`FName`): Unique identifier for the dream entry.
- **AgingConditionFlags** (`int32`): Bitmask indicating which growth stages this dream applies to. *(BitmaskEnum = EB1GrowthStep)*
- **DreamInfo** (`FB1DreamInfo`): Data that controls how the dream is selected or generated.

## 📚 References

- [FB1DreamInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1dreaminfo)
- [FB1DreamPoolSelection](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1dreampoolselection)
- [EB1GrowthStep](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1growthstep)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoDream[DreamAnim Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/dreamanim)[DreamPool Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/dreampool)[DreamSequence Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/dreamsequence)[FB1DreamAnimInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1dreamaniminfo)[FB1DreamAnimTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1dreamanimtablerow)[FB1DreamInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1dreaminfo)[FB1DreamPoolSelection](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1dreampoolselection)[FB1DreamPoolTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1dreampooltablerow)[FB1DreamSequenceTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1dreamsequencetablerow)[FB1DreamTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1dreamtablerow)
