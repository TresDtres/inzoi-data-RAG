---
document_id: "4a323b669105e180aed170dcadc4b4fe180fbb3988c2593e30263123aa52d3ae"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1moviedataasset"
title: "UB1MovieDataAsset"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:37:58+00:00"
content_sha256: "9e2d7b341f446724e054ec5dcf19c8c54d485eac20ec662a110615e46228e188"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1moviedataasset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- DataAsset for movie system configuration. Controls interval buff random timing and static buff guard window.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| Category`classes`Extends`UB1DataAssetBase` |
| Extends`UB1DataAssetBase` |

# Properties (3)

| NameTypeDescription`FirstIntervalMaxDelayMinutes``number`Max wait until the first Interval buff fires after sitting (game minutes). Random between 0 and this value. Prevents stiffness.`IntervalRandomRangeMinutes``number`Random variation of the Interval buff firing period (game minutes). Actual period = IntervalBuffInfo.Time +/- a random value within this range.`StaticGuardSeconds``number`Guard time (real seconds) that suppresses Interval firing before and after a Static buff fires. |
| --- |
| `FirstIntervalMaxDelayMinutes``number`Max wait until the first Interval buff fires after sitting (game minutes). Random between 0 and this value. Prevents stiffness.`IntervalRandomRangeMinutes``number`Random variation of the Interval buff firing period (game minutes). Actual period = IntervalBuffInfo.Time +/- a random value within this range.`StaticGuardSeconds``number`Guard time (real seconds) that suppresses Interval firing before and after a Static buff fires. |
| `IntervalRandomRangeMinutes``number`Random variation of the Interval buff firing period (game minutes). Actual period = IntervalBuffInfo.Time +/- a random value within this range.`StaticGuardSeconds``number`Guard time (real seconds) that suppresses Interval firing before and after a Static buff fires. |
| `StaticGuardSeconds``number`Guard time (real seconds) that suppresses Interval firing before and after a Static buff fires. |
