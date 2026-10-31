---
document_id: "183eb9cde28c4e19009cb8310bef8a0bfb0222d68edee2f046ed5b8e7cfc9ebb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/montage"
title: "📘 Montage Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:54+00:00"
content_sha256: "ecc2e2d689861592ac72420711befac5338d096fcdce6f03cb0717c1fe2237d7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/montage"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1MontageTableRow

Defines a montage animation entry composed of sections and animation tracks, along with playback and blending properties.

> 🛈 *This structure is marked `ModHidden`, typically excluded from user-editable modding documentation. Included here per request.*

### Properties

- **Id** (`FName`): Unique identifier for this montage.
- **GroupName** (`FName`): Group classification for organizing montages logically.
- **TotalPlayLength** (`float`): Total duration of the montage animation in seconds.
- **LoopPlayLength** (`float`): Duration of the looping segment (if applicable).
- **RateScale** (`float`): Multiplier for animation playback speed.
- **BlendOutTime** (`float`): Time taken to blend out of this montage when interrupted.
- **bHasRootAnim** (`bool`): Whether the montage contains root motion animation.
- **Sections** (`TArray<FB1AnimSection>`): Named sections used for timing, looping, or segmentation.
- **AnimTracks** (`TArray<FB1AnimTrack>`): Tracks of animation sequences layered within the montage.
- **AnimNotifyEventDatas** (`TArray<TSharedPtr<FB1AnimNotifyEventData_Base>>`): Runtime collection of notify events, such as FX or sound triggers.
- **AnimCurves** (`TArray<FB1FloatCurve>`): Curves used to control blend weights, timing, or dynamic effects during playback.

## 📚 References

- [FB1AnimSection](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1animsection)
- [FB1AnimTrack](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1animtrack)
- [FB1AnimReferenceInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1animreferenceinfo)
- [EB1NotyfyType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1notyfytype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoMontage[FB1MontageTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1montagetablerow)
