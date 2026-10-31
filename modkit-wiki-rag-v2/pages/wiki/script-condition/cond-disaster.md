---
document_id: "4068bdc009cedab59c1913cd7e7a79604b1d444a54b23c39fbdb9b169708ecf4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-disaster"
title: "Condition_Disaster"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:56+00:00"
content_sha256: "a3ec4aa2b79d2c4509d2f20adf24d81cd2e64595d11792263dbe6c33d163656d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-disaster"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether a disaster is currently active. If S1 is provided, checks whether the specified disaster type is active; if S1 is omitted, checks whether any disaster is active.

# Parameters

| ParameterDescriptionBaseObjectThe object used as the context for this condition check.CompareTypeSupported compare types: Equal, NotEqual.S1The disaster type to check (EB1WeatherType). If omitted, checks whether any disaster is currently active. |
| --- |
| BaseObjectThe object used as the context for this condition check.CompareTypeSupported compare types: Equal, NotEqual.S1The disaster type to check (EB1WeatherType). If omitted, checks whether any disaster is currently active. |
| CompareTypeSupported compare types: Equal, NotEqual.S1The disaster type to check (EB1WeatherType). If omitted, checks whether any disaster is currently active. |
| S1The disaster type to check (EB1WeatherType). If omitted, checks whether any disaster is currently active. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if any disaster is currently activeSelfDisasterEqualCheck if no disaster is currently activeSelfDisasterNotEqualCheck if a HeatWave disaster is currently activeSelfDisasterEqualCheck if a HeatWave is not currently activeSelfDisasterNotEqual |
| --- |
| Check if any disaster is currently activeSelfDisasterEqualCheck if no disaster is currently activeSelfDisasterNotEqualCheck if a HeatWave disaster is currently activeSelfDisasterEqualCheck if a HeatWave is not currently activeSelfDisasterNotEqual |
| Check if no disaster is currently activeSelfDisasterNotEqualCheck if a HeatWave disaster is currently activeSelfDisasterEqualCheck if a HeatWave is not currently activeSelfDisasterNotEqual |
| Check if a HeatWave disaster is currently activeSelfDisasterEqualCheck if a HeatWave is not currently activeSelfDisasterNotEqual |
| Check if a HeatWave is not currently activeSelfDisasterNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
