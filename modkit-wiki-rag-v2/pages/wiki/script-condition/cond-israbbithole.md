---
document_id: "3052be54975419a8266aebcd6bb7618332c2223b72126376c581e8bf99adaf64"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-israbbithole"
title: "Condition_IsRabbitHole"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:42+00:00"
content_sha256: "58ccc3688ad6f9a7805ffe69e25f11632c10a4266a6aa4d29a868aaba7b93ef3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-israbbithole"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the specified character is currently in a rabbit hole. By default, only the BaseObject character is checked. If S1 is set to CheckHouseholdMember, the condition checks whether any member of the BaseObject character's household is in a rabbit hole.

# Parameters

| ParameterDescriptionBaseObjectThe character to check (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1Optional mode. Set to CheckHouseholdMember to check any household member instead. |
| --- |
| BaseObjectThe character to check (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1Optional mode. Set to CheckHouseholdMember to check any household member instead. |
| CompareTypeSupported compare types: Equal, NotEqual.S1Optional mode. Set to CheckHouseholdMember to check any household member instead. |
| S1Optional mode. Set to CheckHouseholdMember to check any household member instead. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self is in a rabbit holeSelfIsRabbitHoleEqualCheck if any household member of Self is in a rabbit holeSelfIsRabbitHoleEqualCheckHouseholdMemberCheck if Target is not in a rabbit holeTargetIsRabbitHoleNotEqual |
| --- |
| Check if Self is in a rabbit holeSelfIsRabbitHoleEqualCheck if any household member of Self is in a rabbit holeSelfIsRabbitHoleEqualCheckHouseholdMemberCheck if Target is not in a rabbit holeTargetIsRabbitHoleNotEqual |
| Check if any household member of Self is in a rabbit holeSelfIsRabbitHoleEqualCheckHouseholdMemberCheck if Target is not in a rabbit holeTargetIsRabbitHoleNotEqual |
| Check if Target is not in a rabbit holeTargetIsRabbitHoleNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite, Lot & Position[City](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-city)[EnteredSiteHasTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastag)[EnteredSiteHasTagByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastagbyimpactpoint)[EnteredSiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitetype)[FinishHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-finishhomework)[ForTimeSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-fortimesite)[HasCeiling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceiling)[HasCeilingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceilingbyimpactpoint)[HasFloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloor)[HasFloorByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloorbyimpactpoint)[HasObjectTemplateTagInMyResidanceSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttemplatetaginmyresidancesite)[HasStateObjectAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstateobjectatsite)
