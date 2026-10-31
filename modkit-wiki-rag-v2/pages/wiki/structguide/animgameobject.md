---
document_id: "777e2101c1ed03d8f9f1dcb9023e98737c761625e85dabcbf6de14371aafb544"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/animgameobject"
title: "📘 AnimGameObject Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:16+00:00"
content_sha256: "7e4e872ba3fc5b70da1b74a4f98c67bee046bfce9efcd957b1d2edc50c781c70"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/animgameobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1GameObjectAnimTableRow

Defines an animation table row for game objects, including playback component and animation variations.

### Properties

- **Id** (`FName`): Unique identifier for this animation entry (used as the table row name).
- **PlayingComponentName** (`FName`): Name of the component where the animation will play. *(ModTip = "The name of the PlayingComponent. (B1PlayingComponent::Root, B1PlayingComponent::Head, B1PlayingComponent::Hair)")*
- **AnimInfoList** (`TArray<FB1AnimationInfo>`): List of animation entries filtered by gender and growth step.

## 📚 References

- [FB1AnimationInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1animationinfo)
- [FB1RandomAnimationInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1randomanimationinfo)
- [EB1GenderType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1gendertype)
- [EB1AnimGrowthStep](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1animgrowthstep)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAnim[EB1Anim_Direction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1anim-direction)[EB1Anim_OneStep](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1anim-onestep)[EB1Anim_Slope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1anim-slope)[EB1Anim_TurnStop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1anim-turnstop)[EB1AnimGrowthStep](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1animgrowthstep)[AnimCharacter Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/animcharacter)[FB1AnimAttachMeshInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1animattachmeshinfo)[FB1AnimAttachMeshTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1animattachmeshtablerow)[FB1AnimNotifyEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1animnotifyevent)[FB1AnimNotifyEventData_Base](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1animnotifyeventdata-base)[FB1AnimNotifyEventData_ChangeOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1animnotifyeventdata-changeoutfit)[FB1AnimNotifyEventData_ChangeState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1animnotifyeventdata-changestate)
