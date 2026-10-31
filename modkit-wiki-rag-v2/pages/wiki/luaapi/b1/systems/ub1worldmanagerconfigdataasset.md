---
document_id: "3eff5b27cd048a97583f037650b4b161dc5d820e1263fa3d8f1652edb9fc1e6e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/ub1worldmanagerconfigdataasset"
title: "UB1WorldManagerConfigDataAsset"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:59+00:00"
content_sha256: "58c7f3ad8c9662655764b29b8476f62f2daacbe19be41bf55fbb4c2a706719e7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/systems/ub1worldmanagerconfigdataasset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data asset that holds global world manager configuration. Controls residency request timing, population limits, gender ratios, and per-growth-step population rates.

# Metadata

| FieldValueKind`system`EnvironmentB1 - PresentationCategory`systems`Extends`UB1DataAssetBase` |
| --- |
| Kind`system`EnvironmentB1 - PresentationCategory`systems`Extends`UB1DataAssetBase` |
| EnvironmentB1 - PresentationCategory`systems`Extends`UB1DataAssetBase` |
| Category`systems`Extends`UB1DataAssetBase` |
| Extends`UB1DataAssetBase` |

# Properties (5)

| NameTypeDescription`FemaleGenderRate``number`Proportion of the NPC population that should be female (0.0 to 1.0).`GrowthStepPopulationRates``table<EB1GrowthStep, number>`Map of growth step to the fraction of the total population at that growth stage.`MaxPopulationInWorld``integer`Maximum total NPC population allowed in the world at any time.`PopulationAdjustmentRate``number`Rate used to scale population adjustments when balancing NPC counts.`ResidacneRequestDay``integer`Number of in-game days before a residency request is processed. |
| --- |
| `FemaleGenderRate``number`Proportion of the NPC population that should be female (0.0 to 1.0).`GrowthStepPopulationRates``table<EB1GrowthStep, number>`Map of growth step to the fraction of the total population at that growth stage.`MaxPopulationInWorld``integer`Maximum total NPC population allowed in the world at any time.`PopulationAdjustmentRate``number`Rate used to scale population adjustments when balancing NPC counts.`ResidacneRequestDay``integer`Number of in-game days before a residency request is processed. |
| `GrowthStepPopulationRates``table<EB1GrowthStep, number>`Map of growth step to the fraction of the total population at that growth stage.`MaxPopulationInWorld``integer`Maximum total NPC population allowed in the world at any time.`PopulationAdjustmentRate``number`Rate used to scale population adjustments when balancing NPC counts.`ResidacneRequestDay``integer`Number of in-game days before a residency request is processed. |
| `MaxPopulationInWorld``integer`Maximum total NPC population allowed in the world at any time.`PopulationAdjustmentRate``number`Rate used to scale population adjustments when balancing NPC counts.`ResidacneRequestDay``integer`Number of in-game days before a residency request is processed. |
| `PopulationAdjustmentRate``number`Rate used to scale population adjustments when balancing NPC counts.`ResidacneRequestDay``integer`Number of in-game days before a residency request is processed. |
| `ResidacneRequestDay``integer`Number of in-game days before a residency request is processed. |
