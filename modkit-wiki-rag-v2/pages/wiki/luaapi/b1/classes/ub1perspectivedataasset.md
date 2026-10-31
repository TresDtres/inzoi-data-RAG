---
document_id: "6baec8652f631dc672561107c2abcabe140a0cfce34223b48d137421ba928511"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1perspectivedataasset"
title: "UB1PerspectiveDataAsset"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:38:01+00:00"
content_sha256: "41d06105791fee0dee4892898028e52f53724e53d71e57032fbb6eca2759e389"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1perspectivedataasset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data asset configuring perspective (value/worldview) inheritance rules and lock conditions used during character growth transitions. Defines the growth step boundary at which perspective inheritance triggers and the maximum inherited perspective value.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| Category`classes`Extends`UB1DataAssetBase` |
| Extends`UB1DataAssetBase` |

# Properties (4)

| NameTypeDescription`InheritanceGrowthStepAfter`[`EB1GrowthStep`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1growthstep)Growth step the character must be transitioning TO for perspective inheritance to trigger.`InheritanceGrowthStepBefore`[`EB1GrowthStep`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1growthstep)Growth step the character must be transitioning FROM for perspective inheritance to trigger.`InheritanceMaxPerspectiveValue``number`Maximum value the main perspective is clamped to after inheritance is applied.`MainPopupMinPerspectiveValue``number`Minimum main-perspective value required to show the main-perspective-change popup. |
| --- |
| `InheritanceGrowthStepAfter`[`EB1GrowthStep`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1growthstep)Growth step the character must be transitioning TO for perspective inheritance to trigger.`InheritanceGrowthStepBefore`[`EB1GrowthStep`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1growthstep)Growth step the character must be transitioning FROM for perspective inheritance to trigger.`InheritanceMaxPerspectiveValue``number`Maximum value the main perspective is clamped to after inheritance is applied.`MainPopupMinPerspectiveValue``number`Minimum main-perspective value required to show the main-perspective-change popup. |
| `InheritanceGrowthStepBefore`[`EB1GrowthStep`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1growthstep)Growth step the character must be transitioning FROM for perspective inheritance to trigger.`InheritanceMaxPerspectiveValue``number`Maximum value the main perspective is clamped to after inheritance is applied.`MainPopupMinPerspectiveValue``number`Minimum main-perspective value required to show the main-perspective-change popup. |
| `InheritanceMaxPerspectiveValue``number`Maximum value the main perspective is clamped to after inheritance is applied.`MainPopupMinPerspectiveValue``number`Minimum main-perspective value required to show the main-perspective-change popup. |
| `MainPopupMinPerspectiveValue``number`Minimum main-perspective value required to show the main-perspective-change popup. |
