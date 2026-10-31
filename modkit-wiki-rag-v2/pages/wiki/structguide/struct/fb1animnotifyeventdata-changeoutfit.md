---
document_id: "a580e5a37d48319b8e79c2c2c341f88724d8e42d3c4143550bc8ff2a7c0509db"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1animnotifyeventdata-changeoutfit"
title: "B1AnimNotifyEventData_ChangeOutfit"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:15+00:00"
content_sha256: "b2633d06d79c1e4f21b206c2476b0653df31911f82b805bced9fc00c4e81edf5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1animnotifyeventdata-changeoutfit"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Animation notify event data for applying outfit during animation playback. * Used together as a pair with B1RemoveOutfit (apply / remove).

| PropertyTypeDescriptionMetadataCostumeIdFNameCostume id of the outfit to apply. If None, OutfitCategory is used instead.Category: ChangeOutfit Foreign: Costume.IdOutfitCategoryEB1OutfitCategoryCategory-based change used when CostumeId is None.Category: ChangeOutfitTypeEB1NotyfyTypeWhether this is a one-shot Notify or a duration-based NotifyState.TriggerTimefloatTime in seconds within the animation at which this event triggers.DurationfloatDuration in seconds for NotifyState events. |
| --- |
| CostumeIdFNameCostume id of the outfit to apply. If None, OutfitCategory is used instead.Category: ChangeOutfit Foreign: Costume.IdOutfitCategoryEB1OutfitCategoryCategory-based change used when CostumeId is None.Category: ChangeOutfitTypeEB1NotyfyTypeWhether this is a one-shot Notify or a duration-based NotifyState.TriggerTimefloatTime in seconds within the animation at which this event triggers.DurationfloatDuration in seconds for NotifyState events. |
| OutfitCategoryEB1OutfitCategoryCategory-based change used when CostumeId is None.Category: ChangeOutfitTypeEB1NotyfyTypeWhether this is a one-shot Notify or a duration-based NotifyState.TriggerTimefloatTime in seconds within the animation at which this event triggers.DurationfloatDuration in seconds for NotifyState events. |
| TypeEB1NotyfyTypeWhether this is a one-shot Notify or a duration-based NotifyState.TriggerTimefloatTime in seconds within the animation at which this event triggers.DurationfloatDuration in seconds for NotifyState events. |
| TriggerTimefloatTime in seconds within the animation at which this event triggers.DurationfloatDuration in seconds for NotifyState events. |
| DurationfloatDuration in seconds for NotifyState events. |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAnim[EB1Anim_Direction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1anim-direction)[EB1Anim_OneStep](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1anim-onestep)[EB1Anim_Slope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1anim-slope)[EB1Anim_TurnStop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1anim-turnstop)[EB1AnimGrowthStep](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1animgrowthstep)[AnimCharacter Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/animcharacter)[AnimGameObject Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/animgameobject)[FB1AnimAttachMeshInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1animattachmeshinfo)[FB1AnimAttachMeshTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1animattachmeshtablerow)[FB1AnimNotifyEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1animnotifyevent)[FB1AnimNotifyEventData_Base](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1animnotifyeventdata-base)[FB1AnimNotifyEventData_ChangeState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1animnotifyeventdata-changestate)
