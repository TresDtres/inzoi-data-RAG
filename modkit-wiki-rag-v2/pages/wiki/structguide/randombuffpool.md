---
document_id: "765df06b41d4dfb29d106034528367d3106b8c8eca2d1874d09d77bd5ed463fb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/randombuffpool"
title: "📘 RandomBuffPool Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:59+00:00"
content_sha256: "e221fcdb889d72578a0909d7e05d590b0d89b74d7d999db49adc3e1795e8d390"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/randombuffpool"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1RandomBuffPoolTableRow

Defines a random buff pool where one or more buffs are selected with weighted probability.

### Properties

- **Id** (`FName`): Unique identifier for the buff pool.
- **RandomBuffPoolData** (`TArray<FB1RandomBuffPoolEntryData>`): Entries representing buffs and their probability weight.
- **TotalProb** (`int32`): Sum of all weights, used during random selection. *(Computed post-load)*

## 📚 References

- [FB1RandomBuffPoolEntryData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1randombuffpoolentrydata)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoRandom[RandomTalkEmoticon Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/randomtalkemoticon)[FB1RandomAnimationInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1randomanimationinfo)[FB1RandomAnimInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1randomaniminfo)[FB1RandomBuffPoolEntryData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1randombuffpoolentrydata)[FB1RandomBuffPoolTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1randombuffpooltablerow)[FB1RandomEventCostumePoolData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1randomeventcostumepooldata)[FB1RandomEventPlacePoolData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1randomeventplacepooldata)[FB1RandomEventRolePoolTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1randomeventrolepooltablerow)[FB1RandomEventTimePoolData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1randomeventtimepooldata)[FB1RandomOrderInteraction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1randomorderinteraction)[FB1RandomPlayAnimPool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1randomplayanimpool)[FB1RandomTalkEmoticonData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1randomtalkemoticondata)
