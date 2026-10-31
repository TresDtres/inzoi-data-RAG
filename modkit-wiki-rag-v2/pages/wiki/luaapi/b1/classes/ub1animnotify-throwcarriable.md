---
document_id: "2cdc316eb561f36e55d3b38846d7c641b14508761d0b888abb5337f992649843"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1animnotify-throwcarriable"
title: "UB1AnimNotify_ThrowCarriable"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:47+00:00"
content_sha256: "fdd75e8431213fb62f38a379ecd9f262af0ed558aed21e337e88ca13933e91c4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1animnotify-throwcarriable"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Notify used at the release frame of a throw montage. Detach and throw-velocity calculation are done in the B2 receiver; the actual physics is applied in B1CarriableObject.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UAnimNotify` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UAnimNotify` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UAnimNotify` |
| Category`classes`Extends`UAnimNotify` |
| Extends`UAnimNotify` |

# Properties (5)

| NameTypeDescription`AngularSpeed``number`Rotation speed (degrees/s) about the Z axis. Applied as an angular-velocity delta ignoring mass.`HandType`[`EB1HandType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1handtype)`LaunchPitchDeg``number`Launch direction: upward angle (deg) relative to the character's forward. Positive = thrown upward.`LaunchSpeed``number`Launch speed. Applied as a velocity delta ignoring mass.`LaunchYawOffsetDeg``number`Launch direction: left/right rotation (deg) relative to the character's forward. Positive = thrown to the right. |
| --- |
| `AngularSpeed``number`Rotation speed (degrees/s) about the Z axis. Applied as an angular-velocity delta ignoring mass.`HandType`[`EB1HandType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1handtype)`LaunchPitchDeg``number`Launch direction: upward angle (deg) relative to the character's forward. Positive = thrown upward.`LaunchSpeed``number`Launch speed. Applied as a velocity delta ignoring mass.`LaunchYawOffsetDeg``number`Launch direction: left/right rotation (deg) relative to the character's forward. Positive = thrown to the right. |
| `HandType`[`EB1HandType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1handtype)`LaunchPitchDeg``number`Launch direction: upward angle (deg) relative to the character's forward. Positive = thrown upward.`LaunchSpeed``number`Launch speed. Applied as a velocity delta ignoring mass.`LaunchYawOffsetDeg``number`Launch direction: left/right rotation (deg) relative to the character's forward. Positive = thrown to the right. |
| `LaunchPitchDeg``number`Launch direction: upward angle (deg) relative to the character's forward. Positive = thrown upward.`LaunchSpeed``number`Launch speed. Applied as a velocity delta ignoring mass.`LaunchYawOffsetDeg``number`Launch direction: left/right rotation (deg) relative to the character's forward. Positive = thrown to the right. |
| `LaunchSpeed``number`Launch speed. Applied as a velocity delta ignoring mass.`LaunchYawOffsetDeg``number`Launch direction: left/right rotation (deg) relative to the character's forward. Positive = thrown to the right. |
| `LaunchYawOffsetDeg``number`Launch direction: left/right rotation (deg) relative to the character's forward. Positive = thrown to the right. |
