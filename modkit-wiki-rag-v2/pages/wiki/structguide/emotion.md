---
document_id: "476790d8bf146ff41bfbf4c96080e27ff46c20c4618563473cfa4aebe4bb302e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/emotion"
title: "📘 Emotion Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:27+00:00"
content_sha256: "eea0ad12d696063c122fdb360174805af2b362ee7095ee66febc473b5b3bb242"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/emotion"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1EmotionTableRow

Defines emotion types used in the simulation, including activation thresholds, UI display, and level-based effects.

### Properties

- **Id** (`FName`): Unique identifier for the emotion.
- **Type** (`EB1EmotionType`): Category or class of the emotion (e.g., Excited, Sad).
- **Tendency** (`EB1EmotionTendency`): Behavioral tendency (e.g., Natural, Positive, Negative).
- **ActivateValue** (`int32`): Value threshold at which this emotion becomes active.
- **UIOrder** (`int32`): Determines the display order in the UI; -1 means hidden.
- **Icon** (`TSoftObjectPtr<UObject>`): Icon representing this emotion in UI. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*
- **EmotionLevelDatas** (`TArray<FB1EmotionLevelData>`): Emotion levels and their effects (color, modifiers, scripts).
- **AdmitDesireBuffLevelDatas** (`TArray<FB1AdmitDesireBuffLevelData>`): Buff effects linked to desire-emotion relationships.

## 📚 References

- [FB1EmotionLevelData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1emotionleveldata)
- [FB1AdmitDesireBuffLevelData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1admitdesirebuffleveldata)
- [EB1EmotionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1emotiontype)
- [EB1EmotionTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1emotiontendency)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoEmotion[EB1EmotionTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1emotiontendency)[EB1EmotionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1emotiontype)[FB1EmotionAudioTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1emotionaudiotablerow)[FB1EmotionFilterKey](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1emotionfilterkey)[FB1EmotionGrowthStepTooltip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1emotiongrowthsteptooltip)[FB1EmotionInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1emotioninfo)[FB1EmotionLevelData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1emotionleveldata)[FB1EmotionPoseAnimationInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1emotionposeanimationinfo)[FB1EmotionPoseAnimationList](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1emotionposeanimationlist)[FB1EmotionRandomAnimationInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1emotionrandomanimationinfo)[FB1EmotionReactionAnim](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1emotionreactionanim)[FB1EmotionReward](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1emotionreward)
