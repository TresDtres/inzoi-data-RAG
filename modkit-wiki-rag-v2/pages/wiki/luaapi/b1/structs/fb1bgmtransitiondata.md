---
document_id: "ec1c76111d5bbf82b50c67ffb5cdd23a91983f16d170487292324d33256e0a33"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1bgmtransitiondata"
title: "FB1BGMTransitionData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:10+00:00"
content_sha256: "3d29ec406f191ba53ede6768156a5251738a1448a108485489186fbff2b24f94"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1bgmtransitiondata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines the fade-in and fade-out transition parameters for switching between BGM tracks, including group ID, curves, time offsets, and transition type.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (8)

| NameTypeDescription`BGMTransitionType`[`EB1BGMTransitionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1bgmtransitiontype)Transition type defining how the BGM switches.`CurveFadeIn``any`Curve controlling the fade-in volume over time.`CurveFadeOut``any`Curve controlling the fade-out volume over time.`FadeInOffset``number`Time offset in seconds before the fade-in begins.`FadeInTime``number`Duration in seconds of the fade-in.`FadeOutOffset``number`Time offset in seconds before the fade-out begins.`FadeOutTime``number`Duration in seconds of the fade-out.`GroupId``string`Group ID identifying the BGM transition group. |
| --- |
| `BGMTransitionType`[`EB1BGMTransitionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1bgmtransitiontype)Transition type defining how the BGM switches.`CurveFadeIn``any`Curve controlling the fade-in volume over time.`CurveFadeOut``any`Curve controlling the fade-out volume over time.`FadeInOffset``number`Time offset in seconds before the fade-in begins.`FadeInTime``number`Duration in seconds of the fade-in.`FadeOutOffset``number`Time offset in seconds before the fade-out begins.`FadeOutTime``number`Duration in seconds of the fade-out.`GroupId``string`Group ID identifying the BGM transition group. |
| `CurveFadeIn``any`Curve controlling the fade-in volume over time.`CurveFadeOut``any`Curve controlling the fade-out volume over time.`FadeInOffset``number`Time offset in seconds before the fade-in begins.`FadeInTime``number`Duration in seconds of the fade-in.`FadeOutOffset``number`Time offset in seconds before the fade-out begins.`FadeOutTime``number`Duration in seconds of the fade-out.`GroupId``string`Group ID identifying the BGM transition group. |
| `CurveFadeOut``any`Curve controlling the fade-out volume over time.`FadeInOffset``number`Time offset in seconds before the fade-in begins.`FadeInTime``number`Duration in seconds of the fade-in.`FadeOutOffset``number`Time offset in seconds before the fade-out begins.`FadeOutTime``number`Duration in seconds of the fade-out.`GroupId``string`Group ID identifying the BGM transition group. |
| `FadeInOffset``number`Time offset in seconds before the fade-in begins.`FadeInTime``number`Duration in seconds of the fade-in.`FadeOutOffset``number`Time offset in seconds before the fade-out begins.`FadeOutTime``number`Duration in seconds of the fade-out.`GroupId``string`Group ID identifying the BGM transition group. |
| `FadeInTime``number`Duration in seconds of the fade-in.`FadeOutOffset``number`Time offset in seconds before the fade-out begins.`FadeOutTime``number`Duration in seconds of the fade-out.`GroupId``string`Group ID identifying the BGM transition group. |
| `FadeOutOffset``number`Time offset in seconds before the fade-out begins.`FadeOutTime``number`Duration in seconds of the fade-out.`GroupId``string`Group ID identifying the BGM transition group. |
| `FadeOutTime``number`Duration in seconds of the fade-out.`GroupId``string`Group ID identifying the BGM transition group. |
| `GroupId``string`Group ID identifying the BGM transition group. |
