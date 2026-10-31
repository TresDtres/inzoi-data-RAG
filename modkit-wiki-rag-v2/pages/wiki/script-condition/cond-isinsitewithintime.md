---
document_id: "ffc38dc64285c28bd1c4436d3686974a946b86038ac8bc216b0137bd0239e9c2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isinsitewithintime"
title: "Condition_IsInSiteWithInTime"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:34+00:00"
content_sha256: "d852a1bbcb7b312d518ae77da1a3dcd9bbef32ad60137918bd588e7a6bd29eb9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isinsitewithintime"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the specified character is located at the given site and the current in-game time falls within the specified time range. S1 identifies the target site (use "Home" to refer to the character's home site). F1 and F2 define the start and end of the time range in total minutes from midnight.

# Parameters

| ParameterDescriptionBaseObjectThe character to check (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1Site ID to match. Use "Home" to compare against the character's own home site.F1Start of the time range in total minutes from midnight (e.g., 480 = 08:00).F2End of the time range in total minutes from midnight (e.g., 1200 = 20:00). |
| --- |
| BaseObjectThe character to check (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1Site ID to match. Use "Home" to compare against the character's own home site.F1Start of the time range in total minutes from midnight (e.g., 480 = 08:00).F2End of the time range in total minutes from midnight (e.g., 1200 = 20:00). |
| CompareTypeSupported compare types: Equal, NotEqual.S1Site ID to match. Use "Home" to compare against the character's own home site.F1Start of the time range in total minutes from midnight (e.g., 480 = 08:00).F2End of the time range in total minutes from midnight (e.g., 1200 = 20:00). |
| S1Site ID to match. Use "Home" to compare against the character's own home site.F1Start of the time range in total minutes from midnight (e.g., 480 = 08:00).F2End of the time range in total minutes from midnight (e.g., 1200 = 20:00). |
| F1Start of the time range in total minutes from midnight (e.g., 480 = 08:00).F2End of the time range in total minutes from midnight (e.g., 1200 = 20:00). |
| F2End of the time range in total minutes from midnight (e.g., 1200 = 20:00). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1F1F2Check if Self is at home between 08:00 and 22:00SelfIsInSiteWithInTimeEqualHome4801320Check if Self is at TownHall_Site between 09:00 and 17:00SelfIsInSiteWithInTimeEqualTownHall_Site5401020Check if Target is not at School_Site during class hoursTargetIsInSiteWithInTimeNotEqualSchool_Site480900 |
| --- |
| Check if Self is at home between 08:00 and 22:00SelfIsInSiteWithInTimeEqualHome4801320Check if Self is at TownHall_Site between 09:00 and 17:00SelfIsInSiteWithInTimeEqualTownHall_Site5401020Check if Target is not at School_Site during class hoursTargetIsInSiteWithInTimeNotEqualSchool_Site480900 |
| Check if Self is at TownHall_Site between 09:00 and 17:00SelfIsInSiteWithInTimeEqualTownHall_Site5401020Check if Target is not at School_Site during class hoursTargetIsInSiteWithInTimeNotEqualSchool_Site480900 |
| Check if Target is not at School_Site during class hoursTargetIsInSiteWithInTimeNotEqualSchool_Site480900 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite, Lot & Position[City](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-city)[EnteredSiteHasTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastag)[EnteredSiteHasTagByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastagbyimpactpoint)[EnteredSiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitetype)[FinishHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-finishhomework)[ForTimeSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-fortimesite)[HasCeiling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceiling)[HasCeilingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceilingbyimpactpoint)[HasFloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloor)[HasFloorByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloorbyimpactpoint)[HasObjectTemplateTagInMyResidanceSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttemplatetaginmyresidancesite)[HasStateObjectAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstateobjectatsite)
