---
document_id: "37c21df196217ef18f508d41680161926fa3e96dce203de4a90fa859b40539dd"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ishome"
title: "Condition_IsHome"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:31+00:00"
content_sha256: "7105b89721a073d2b6e5cf7f47dae11fcf1f0a9c54347df2606cd8ace278db0a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-ishome"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the BaseObject is currently at the home of the character specified in S1. If S1 is empty, defaults to using BaseObject's own home for comparison.

# Parameters

| ParameterDescriptionBaseObjectCharacter whose current location will be checkedCompareTypeSupported compare types: Equal, NotEqualS1Character type whose home is used for comparison (defaults to BaseObject if empty) |
| --- |
| BaseObjectCharacter whose current location will be checkedCompareTypeSupported compare types: Equal, NotEqualS1Character type whose home is used for comparison (defaults to BaseObject if empty) |
| CompareTypeSupported compare types: Equal, NotEqualS1Character type whose home is used for comparison (defaults to BaseObject if empty) |
| S1Character type whose home is used for comparison (defaults to BaseObject if empty) |

# Examples

| DescriptionBaseObjectCommandCompareTypeIf Self is at Target's homeSelfIsHomeEqualIf Self is not at Target's homeSelfIsHomeNotEqualIf Target is at their own homeTargetIsHomeEqualIf Target is not at their own homeTargetIsHomeNotEqual |
| --- |
| If Self is at Target's homeSelfIsHomeEqualIf Self is not at Target's homeSelfIsHomeNotEqualIf Target is at their own homeTargetIsHomeEqualIf Target is not at their own homeTargetIsHomeNotEqual |
| If Self is not at Target's homeSelfIsHomeNotEqualIf Target is at their own homeTargetIsHomeEqualIf Target is not at their own homeTargetIsHomeNotEqual |
| If Target is at their own homeTargetIsHomeEqualIf Target is not at their own homeTargetIsHomeNotEqual |
| If Target is not at their own homeTargetIsHomeNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite, Lot & Position[City](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-city)[EnteredSiteHasTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastag)[EnteredSiteHasTagByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastagbyimpactpoint)[EnteredSiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitetype)[FinishHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-finishhomework)[ForTimeSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-fortimesite)[HasCeiling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceiling)[HasCeilingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceilingbyimpactpoint)[HasFloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloor)[HasFloorByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloorbyimpactpoint)[HasObjectTemplateTagInMyResidanceSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttemplatetaginmyresidancesite)[HasStateObjectAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstateobjectatsite)
