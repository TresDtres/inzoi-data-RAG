---
document_id: "2fc2842827a1c4cfd630cde5d8bc6909aa4b2747fed8c69d93d26865cec1bb86"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1animationinfo"
title: "FB1AnimationInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:09+00:00"
content_sha256: "271eff6c0a3b7471de4d1589e5e6387ecbb2186fba9754c1064982d3ff7af755"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1animationinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a single animation entry with gender and growth step filters, including montage asset, timing data, and optional random loop animations.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (7)

| NameTypeDescription`AnimGrowthStep`[`EB1AnimGrowthStep`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1animgrowthstep)Animation growth step filter for which this animation is valid.`Animation``UAnimMontage`The animation montage asset.`Gender`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender filter for which this animation is valid.`LoopPlayLength``number`Playback length of the looping section (auto-filled).`RandomLoopAnims``FB1EmotionRandomAnimationInfo[]`List of random animations to select from during the loop section.`RateScale``number`Playback rate scale of the animation (auto-filled).`TotalPlayLength``number`Total playback length of the animation (auto-filled). |
| --- |
| `AnimGrowthStep`[`EB1AnimGrowthStep`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1animgrowthstep)Animation growth step filter for which this animation is valid.`Animation``UAnimMontage`The animation montage asset.`Gender`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender filter for which this animation is valid.`LoopPlayLength``number`Playback length of the looping section (auto-filled).`RandomLoopAnims``FB1EmotionRandomAnimationInfo[]`List of random animations to select from during the loop section.`RateScale``number`Playback rate scale of the animation (auto-filled).`TotalPlayLength``number`Total playback length of the animation (auto-filled). |
| `Animation``UAnimMontage`The animation montage asset.`Gender`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender filter for which this animation is valid.`LoopPlayLength``number`Playback length of the looping section (auto-filled).`RandomLoopAnims``FB1EmotionRandomAnimationInfo[]`List of random animations to select from during the loop section.`RateScale``number`Playback rate scale of the animation (auto-filled).`TotalPlayLength``number`Total playback length of the animation (auto-filled). |
| `Gender`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender filter for which this animation is valid.`LoopPlayLength``number`Playback length of the looping section (auto-filled).`RandomLoopAnims``FB1EmotionRandomAnimationInfo[]`List of random animations to select from during the loop section.`RateScale``number`Playback rate scale of the animation (auto-filled).`TotalPlayLength``number`Total playback length of the animation (auto-filled). |
| `LoopPlayLength``number`Playback length of the looping section (auto-filled).`RandomLoopAnims``FB1EmotionRandomAnimationInfo[]`List of random animations to select from during the loop section.`RateScale``number`Playback rate scale of the animation (auto-filled).`TotalPlayLength``number`Total playback length of the animation (auto-filled). |
| `RandomLoopAnims``FB1EmotionRandomAnimationInfo[]`List of random animations to select from during the loop section.`RateScale``number`Playback rate scale of the animation (auto-filled).`TotalPlayLength``number`Total playback length of the animation (auto-filled). |
| `RateScale``number`Playback rate scale of the animation (auto-filled).`TotalPlayLength``number`Total playback length of the animation (auto-filled). |
| `TotalPlayLength``number`Total playback length of the animation (auto-filled). |
