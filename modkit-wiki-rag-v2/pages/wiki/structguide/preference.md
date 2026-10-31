---
document_id: "f90b7a13f349bd542511b843e947387cb9eee3c7c45aa308df2f377dd7ae6989"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/preference"
title: "📘 Preference Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:58+00:00"
content_sha256: "c826e88354b79bf6ad11b18f29792773b3cb158385963b4de7c4536d1d6b7208"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/preference"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1PreferenceTableRow

Defines a character’s preference for traits or activities, including how it changes over time.

### Properties

- **Id** (`FName`): Unique identifier for this preference.
- **Category** (`FName`): Logical grouping of the preference (e.g., Food, Hobby).
- **DisplayInfo** (`FB1PreferenceDisplayInfo`): UI display information including icon and labels.
- **AgeAvailable** (`TArray<EB1GrowthStep>`): Age stages where this preference applies.
- **ChangeByGrowthStep** (`TArray<FB1GrowthChangeData>`): Data defining how preference behavior changes with age.
- **LikePassiveModifierId / DislikePassiveModifierId** (`FName`): Modifiers applied passively when liking or disliking. *(Foreign = "Modifier_Preference.Id")*
- **LinkedInteractionTag** (`FName`): Tag used to match this preference with interactions.
- **LikeInteractingBuffId / DislikeInteractingDebuffId** (`FName`): Buffs or debuffs applied during interaction by LinkedInteractionTag. *(Foreign = "Buff.Id")*
- **PreferenceSettingMissionId** (`FName`): Mission that unlocks or sets this preference. *(Foreign = "Mission_Preference.Id")*
- **PreferenceSettingDataList** (`TArray<FB1PreferenceSettingData>`): Information that is triggered depending on whether the mission associated with PreferenceSettingMissionId is successfully completed.
- **LikeInteractingFacialExpressionId / DisLikeInteractingFacialExpressionId** (`FName`): Facial expressions triggered during related interactions. *(Foreign = "FacialExpression.Id")*

## 📚 References

- [FB1PreferenceDisplayInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1preferencedisplayinfo)
- [EB1GrowthStep](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1growthstep)
- [FB1GrowthChangeData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1growthchangedata)
- [FB1PreferenceSettingData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1preferencesettingdata)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoPreference[PreferenceRelatedTrait Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/preferencerelatedtrait)[FB1PreferenceBuffData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1preferencebuffdata)[FB1PreferenceDisplayInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1preferencedisplayinfo)[FB1PreferenceReaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1preferencereaction)[FB1PreferenceReactionTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1preferencereactiontablerow)[FB1PreferenceRelatedTraitTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1preferencerelatedtraittablerow)[FB1PreferenceReward](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1preferencereward)[FB1PreferenceSelectData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1preferenceselectdata)[FB1PreferenceSettingData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1preferencesettingdata)[FB1PreferenceTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1preferencetablerow)
