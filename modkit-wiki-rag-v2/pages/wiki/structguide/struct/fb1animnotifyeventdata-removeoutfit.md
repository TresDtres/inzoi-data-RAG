---
document_id: "a6475020c228e85b601989c02eb5eb1a0ee69cc29ed494a1c9ab5e08b273892f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1animnotifyeventdata-removeoutfit"
title: "B1AnimNotifyEventData_RemoveOutfit"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:16+00:00"
content_sha256: "740715db5e4b38701a5b02733589e6140c0ba633492fa375e51ef35f78546cab"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1animnotifyeventdata-removeoutfit"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Animation notify event data for removing outfit during animation playback. * Must set the same CostumeId/OutfitCategory as the paired B1ChangeOutfit.

| PropertyTypeDescriptionMetadataCostumeIdFNameCostume id of the outfit to remove. If None, OutfitCategory is used; must match the paired ChangeOutfit.Category: RemoveOutfit Foreign: Costume.IdOutfitCategoryEB1OutfitCategoryCategory-based removal used when CostumeId is None.Category: RemoveOutfitTypeEB1NotyfyTypeWhether this is a one-shot Notify or a duration-based NotifyState.TriggerTimefloatTime in seconds within the animation at which this event triggers.DurationfloatDuration in seconds for NotifyState events. |
| --- |
| CostumeIdFNameCostume id of the outfit to remove. If None, OutfitCategory is used; must match the paired ChangeOutfit.Category: RemoveOutfit Foreign: Costume.IdOutfitCategoryEB1OutfitCategoryCategory-based removal used when CostumeId is None.Category: RemoveOutfitTypeEB1NotyfyTypeWhether this is a one-shot Notify or a duration-based NotifyState.TriggerTimefloatTime in seconds within the animation at which this event triggers.DurationfloatDuration in seconds for NotifyState events. |
| OutfitCategoryEB1OutfitCategoryCategory-based removal used when CostumeId is None.Category: RemoveOutfitTypeEB1NotyfyTypeWhether this is a one-shot Notify or a duration-based NotifyState.TriggerTimefloatTime in seconds within the animation at which this event triggers.DurationfloatDuration in seconds for NotifyState events. |
| TypeEB1NotyfyTypeWhether this is a one-shot Notify or a duration-based NotifyState.TriggerTimefloatTime in seconds within the animation at which this event triggers.DurationfloatDuration in seconds for NotifyState events. |
| TriggerTimefloatTime in seconds within the animation at which this event triggers.DurationfloatDuration in seconds for NotifyState events. |
| DurationfloatDuration in seconds for NotifyState events. |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAnim[EB1Anim_Direction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1anim-direction)[EB1Anim_OneStep](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1anim-onestep)[EB1Anim_Slope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1anim-slope)[EB1Anim_TurnStop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1anim-turnstop)[EB1AnimGrowthStep](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1animgrowthstep)[AnimCharacter Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/animcharacter)[AnimGameObject Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/animgameobject)[FB1AnimAttachMeshInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1animattachmeshinfo)[FB1AnimAttachMeshTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1animattachmeshtablerow)[FB1AnimNotifyEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1animnotifyevent)[FB1AnimNotifyEventData_Base](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1animnotifyeventdata-base)[FB1AnimNotifyEventData_ChangeOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1animnotifyeventdata-changeoutfit)
