---
document_id: "68276e15acdaf767b0a36d6ddfa2833bf2b18c901af9bcdb23e2b6bdc1767e6d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/grab"
title: "📘 Grab Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:49+00:00"
content_sha256: "a61aa0c1e40911cad8b71b3c2cd56d7238846d0bd8ba045dcab3256950c4707a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/grab"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1GrabTableRow

Defines grab behavior for objects, including animations for pick-up, looping, and put-down stages.

### Properties

- **Id** (`FName`): Unique identifier for this grab entry.
- **PickUpAnimations** (`TArray<FB1GrabTransition>`): Animations played when the object is picked up.
- **LoopAnimId** (`FName`): Animation played while the object is held. *(Foreign = "AnimCharacter_Posture.Id")*
- **PutDownAnimations** (`TArray<FB1GrabTransition>`): Animations played when the object is released.

## 📚 References

- [FB1GrabTransition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1grabtransition)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoGrab[FB1GrabState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1grabstate)[FB1GrabTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1grabtablerow)[FB1GrabTransition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1grabtransition)
