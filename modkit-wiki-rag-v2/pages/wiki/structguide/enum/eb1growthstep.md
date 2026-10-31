---
document_id: "d08ca8316184629633b666ae7fe8c00d878dea8916541589b8d462d472201379"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1growthstep"
title: "EB1GrowthStep"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:34+00:00"
content_sha256: "ceff4597c94717b295210b4abeab4941770e4e6db20523f216768fe37d5d7f61"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/enum/eb1growthstep"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧭 Enum: EB1GrowthStep

Represents the character's stage of life, used throughout systems such as aging, traits, scheduling, and interactions. Bitflags are used for combined or range-based conditions.

### Values

- **Infant**: Represents the infant stage.
- **Toddler**: Represents the toddler stage.
- **Child**: Represents a young child.
- **LowTeen**: Represents a pre-teen or lower teenage stage.
- **HighTeen**: Represents an older teenager.
- **Youth**: Represents early adulthood or youth stage.
- **Adult**: Represents a standard adult.
- **Old**: Represents an aging adult.
- **Elderly**: Represents the final aging stage.

### Combined Bitflag Groups

- **Baby**: Includes both Infant and Toddler.
- **OverOld**: Includes Old and Elderly.
- **OverAdult**: Includes Adult, Old, and Elderly.
- **OverYouth**: Includes Youth and all older stages (Adult, Old, Elderly).
- **OverHighTeen**: Includes HighTeen and all stages included in OverYouth.
- **OverLowTeen**: Includes LowTeen, HighTeen, and OverYouth.
- **OverChild**: Includes Child and OverLowTeen.
- **All**: Includes Infant, Toddler, and OverChild.

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoGrowth[FB1GrowthChangeData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1growthchangedata)[FB1GrowthRandomAnimationInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1growthrandomanimationinfo)[FB1GrowthStepUpFxParameters](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1growthstepupfxparameters)
