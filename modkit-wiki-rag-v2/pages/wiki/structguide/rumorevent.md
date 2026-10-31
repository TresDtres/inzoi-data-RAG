---
document_id: "cd4c6c5da5bdc08422cfdac9e1367d922bb0f74bcf736867c1780c947e972c1a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/rumorevent"
title: "📘 RumorEvent Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:02+00:00"
content_sha256: "0cdb588af00eb855f2fa5f61c996befb93348961718519b9c92b72b93c4aa369"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/rumorevent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1RumorEventTableRow

Defines an event that is triggered by a rumor, often affecting characters or world state.

### Properties

- **Id** (`FName`): Unique identifier for the rumor event.
- **Type** (`EB1RumorEventType`): Category of the event (e.g., Positive, Negative, Expire).
- **TargetInt** (`int32`): Custom integer value used for scripting or filtering.
- **CustomMessageId** (`FName`): ID for a custom mobile message triggered by this event. *(Foreign = "CustomMobileMessage.Id")*

## 📚 References

- [EB1RumorEventType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1rumoreventtype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoRumor[EB1RumorEventType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1rumoreventtype)[Rumor Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/rumor)[FB1RumorEventTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1rumoreventtablerow)[FB1RumorParam](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1rumorparam)[FB1RumorTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1rumortablerow)
