---
document_id: "8e05d4dd086b4537017baf7b8ac4704bd94606fa61bfad092829342d99f6f649"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/animcharacter"
title: "📘 AnimCharacter Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:17+00:00"
content_sha256: "5c50e34ba3a704e4ffc842e45606ac62f67f5b9ca2955ed8f8b1debf33b12a8b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/animcharacter"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1CharacterAnimTableRow

Defines an entry for character animation, including playback target, control flags, and animation list.

### Properties

- **Id** (`FName`): Unique identifier for this animation table row.
- **PlayingComponentName** (`FName`): Name of the component to play the animation on. *(ModTip = "The name of the PlayingComponent. (B1PlayingComponent::Root, B1PlayingComponent::Head, B1PlayingComponent::Hair)")*
- **StopOtherComponentOnFinish** (`bool`): If true, other animations on different components are stopped when this animation ends.
- **AnimInfoList** (`TArray<FB1AnimationInfo>`): List of animations (with gender/growth filters) that define this entry.

## 📚 References

- [FB1AnimationInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1animationinfo)
- [FB1RandomAnimationInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1randomanimationinfo)
- [EB1GenderType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1gendertype)
- [EB1AnimGrowthStep](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1animgrowthstep)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAnim[EB1Anim_Direction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1anim-direction)[EB1Anim_OneStep](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1anim-onestep)[EB1Anim_Slope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1anim-slope)[EB1Anim_TurnStop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1anim-turnstop)[EB1AnimGrowthStep](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1animgrowthstep)[AnimGameObject Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/animgameobject)[FB1AnimAttachMeshInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1animattachmeshinfo)[FB1AnimAttachMeshTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1animattachmeshtablerow)[FB1AnimNotifyEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1animnotifyevent)[FB1AnimNotifyEventData_Base](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1animnotifyeventdata-base)[FB1AnimNotifyEventData_ChangeOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1animnotifyeventdata-changeoutfit)[FB1AnimNotifyEventData_ChangeState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1animnotifyeventdata-changestate)
