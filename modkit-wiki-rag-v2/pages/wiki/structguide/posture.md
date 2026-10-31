---
document_id: "0e7ef1c1e83f8372401188781f3835e0b4ccb164cedc65c59ae4d068e76eccdb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/posture"
title: "📘 Posture Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:58+00:00"
content_sha256: "9c216c51277698e4c79b8c7086b502bc768528cd29715c5d2c82358a429cbcfb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/posture"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1PostureTableRow

Defines posture types and their corresponding animations and scripts.

### Properties

- **Id** (`FName`): Unique identifier for the posture.
- **PostureType** (`EB1PostureType`): Posture classification (e.g., Standing, Sit).
- **DirectionInfos** (`TArray<FB1PostureDirectionInfo>`): List of posture animations by direction.
- **StartScriptId** (`FName`): Script executed when posture begins. *(Foreign = "Script_Posture.Id")*
- **EndScriptId** (`FName`): Script executed when posture ends. *(Foreign = "Script_Posture.Id")*

## 📚 References

- [FB1PostureDirectionInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1posturedirectioninfo)
- [EB1SlotDirection](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1slotdirection)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoPosture[FB1PostureCategoryTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1posturecategorytablerow)[FB1PostureDirectionInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1posturedirectioninfo)[FB1PostureGroupTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1posturegrouptablerow)[FB1PostureState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1posturestate)[FB1PostureTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1posturetablerow)[FB1PostureTransitionData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1posturetransitiondata)[FB1PostureTransitionInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1posturetransitioninfo)
