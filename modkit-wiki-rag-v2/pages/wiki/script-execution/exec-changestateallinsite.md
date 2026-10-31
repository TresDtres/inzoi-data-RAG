---
document_id: "cde16d3c14299a5e562fedefe0a661c0784504d7cfec17f87e24d01519df0e8f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changestateallinsite"
title: "Execute_ChangeStateAllInSite"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:20+00:00"
content_sha256: "51ce79e46cc78c0406eea0882a8c6372eb33afdfeaee0451a8d1d1e30c8acefb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-changestateallinsite"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Changes the state of all objects sharing the same ObjectSelectionSetId as the Target within the Self character's current Site.

# Note

Requires the Self entity to be a Character with a valid LocatedSiteId. The Target object's ObjectSelectionSetId is used to find all matching objects in the Site.

# Parameters

| ParameterDescriptionBaseObjectTarget GameObject whose ObjectSelectionSetId is used to find matching objectsS1State Group ID to change to (defaults to "Normal" if None)S2State ID to change to (defaults to "Normal" if None) |
| --- |
| BaseObjectTarget GameObject whose ObjectSelectionSetId is used to find matching objectsS1State Group ID to change to (defaults to "Normal" if None)S2State ID to change to (defaults to "Normal" if None) |
| S1State Group ID to change to (defaults to "Normal" if None)S2State ID to change to (defaults to "Normal" if None) |
| S2State ID to change to (defaults to "Normal" if None) |

# Examples

| DescriptionBaseObjectCommandS1S2Turn on all matching lights in the siteTargetChangeStateAllInSiteLightOnTurn off all matching TVs in the siteTargetChangeStateAllInSitePowerOffSet all matching decorations to holiday stateTargetChangeStateAllInSiteNormalHoliday |
| --- |
| Turn on all matching lights in the siteTargetChangeStateAllInSiteLightOnTurn off all matching TVs in the siteTargetChangeStateAllInSitePowerOffSet all matching decorations to holiday stateTargetChangeStateAllInSiteNormalHoliday |
| Turn off all matching TVs in the siteTargetChangeStateAllInSitePowerOffSet all matching decorations to holiday stateTargetChangeStateAllInSiteNormalHoliday |
| Set all matching decorations to holiday stateTargetChangeStateAllInSiteNormalHoliday |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoStat, Buff & Desire[AddAllBizModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addallbizmodifier)[AddBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addbuff)[AddCalorie](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcalorie)[AddHowling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhowling)[AddModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifier)[AddModifierToChildrenWithTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifiertochildrenwithtag)[AddMuscleImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmuscleimmediate)[AddObesityImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobesityimmediate)[AddPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addperspective)[AddRandomBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrandombuff)[AddScaledStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addscaledstat)[AddStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addstat)
