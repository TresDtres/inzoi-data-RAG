---
document_id: "465d451eeab8c025486c09923dea80b5c0bf77ff46450c1f939c826ebc9b7e8e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/locomotion"
title: "📘 Locomotion Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:52+00:00"
content_sha256: "478c5d19fcfb78a1072d651e8f6cf4763a8eb1c7197671753ce4962de6f25f05"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/locomotion"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1LocomotionTableRow

Defines locomotion animations for characters, including idle, walk, jog, and turns based on gender and growth.

### Properties

- **Id** (`FName`): Unique identifier for this locomotion set.
- **Gender** (`EB1GenderType`): Gender this locomotion set applies to.
- **AnimGrowthStep** (`EB1AnimGrowthStep`): Growth step this animation applies to.
- **IdleAnim** (`TSoftObjectPtr<UAnimSequenceBase>`): Default idle animation.
- **IdleRandomAnims** (`TArray<FB1EmotionRandomAnimationInfo>`): List of emotion-driven idle variations.
- **WalkStartAnims** (`TMap<EB1Anim_Direction, TSoftObjectPtr<UAnimSequenceBase>>`): Start animations for each walking direction.
- **WalkAnim** (`TSoftObjectPtr<UAnimSequenceBase>`): Default walking animation.
- **WalkRandomAnims** (`TArray<FB1GrowthRandomAnimationInfo>`): Randomized walking variants.
- **WalkSlopeAnims** (`TMap<EB1Anim_Slope, TSoftObjectPtr<UAnimSequenceBase>>`): Walking animations adapted to terrain slope.
- **MinWalkLoopCount** (`int`): Minimum number of looped walking animations.
- **MaxWalkLoopCount** (`int`): Maximum number of looped walking animations.
- **WalkStop_Block / WalkStop_LF / WalkStop_RF**: Stopping animations from walk.
- **WalkToJog_LF / WalkToJog_RF**: Transition animations from walk to jog.
- **WalkTurn_LF / WalkTurn_RF**: Turning animations while walking.
- **JogAnim** (`TSoftObjectPtr<UAnimSequenceBase>`): Default jogging animation.
- **JogStartAnims** (`TMap<EB1Anim_Direction, TSoftObjectPtr<UAnimSequenceBase>>`): Jogging start animations by direction.
- **JogStop_Block / JogStop**: Jogging stop animations.
- **JogToWalk_LF / JogToWalk_RF**: Transition animations from jog to walk.
- **JogTurn_LF / JogTurn_RF**: Turning while jogging animations.
- **TurnStops / TurnInPlaces** (`TMap<EB1Anim_TurnStop, TSoftObjectPtr<UAnimMontage>>`): Stop and Stopping with a step forward montages.
- **OneSteps** (`TMap<EB1Anim_OneStep, TSoftObjectPtr<UAnimMontage>>`): One-step movement animations.

## 📚 References

- [FB1EmotionRandomAnimationInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1emotionrandomanimationinfo)
- [FB1GrowthRandomAnimationInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1growthrandomanimationinfo)
- [EB1GenderType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1gendertype)
- [EB1AnimGrowthStep](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1animgrowthstep)
- [EB1Anim_Direction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1anim-direction)
- [EB1Anim_Slope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1anim-slope)
- [EB1Anim_TurnStop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1anim-turnstop)
- [EB1Anim_OneStep](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1anim-onestep)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoLocomotion[FB1LocomotionOverrideTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1locomotionoverridetablerow)[FB1LocomotionTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1locomotiontablerow)
