---
document_id: "a006c42ffc9db2f359cd5a1dad85e5aa4f2fc506c79c43df85c6f04fe2a5f6f1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteschedulenpc"
title: "Condition_IsSiteScheduleNPC"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:47+00:00"
content_sha256: "8865c064f1f88c48661b31f86172b0b59397bce82c90e27c827a596ab63dd513"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-issiteschedulenpc"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the BaseObject is a Site Schedule NPC — an NPC assigned to a site via schedule (e.g., shop employees or public facility NPCs) who does not have their own home site. Returns true when GetHomeSiteEntityId returns an invalid entity (no home site assigned).

# Parameters

| ParameterDescriptionBaseObjectCharacter to check for site schedule NPC statusCompareTypeSupported compare types: Equal, None, NotEqual |
| --- |
| BaseObjectCharacter to check for site schedule NPC statusCompareTypeSupported compare types: Equal, None, NotEqual |
| CompareTypeSupported compare types: Equal, None, NotEqual |

# Examples

| DescriptionBaseObjectCommandCompareTypeIf Self is a site schedule NPCSelfIsSiteScheduleNPCEqualIf Target is a site schedule NPCTargetIsSiteScheduleNPCEqualIf Self is not a site schedule NPCSelfIsSiteScheduleNPCNotEqualIf Target is not a site schedule NPCTargetIsSiteScheduleNPCNotEqual |
| --- |
| If Self is a site schedule NPCSelfIsSiteScheduleNPCEqualIf Target is a site schedule NPCTargetIsSiteScheduleNPCEqualIf Self is not a site schedule NPCSelfIsSiteScheduleNPCNotEqualIf Target is not a site schedule NPCTargetIsSiteScheduleNPCNotEqual |
| If Target is a site schedule NPCTargetIsSiteScheduleNPCEqualIf Self is not a site schedule NPCSelfIsSiteScheduleNPCNotEqualIf Target is not a site schedule NPCTargetIsSiteScheduleNPCNotEqual |
| If Self is not a site schedule NPCSelfIsSiteScheduleNPCNotEqualIf Target is not a site schedule NPCTargetIsSiteScheduleNPCNotEqual |
| If Target is not a site schedule NPCTargetIsSiteScheduleNPCNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite, Lot & Position[City](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-city)[EnteredSiteHasTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastag)[EnteredSiteHasTagByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastagbyimpactpoint)[EnteredSiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitetype)[FinishHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-finishhomework)[ForTimeSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-fortimesite)[HasCeiling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceiling)[HasCeilingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceilingbyimpactpoint)[HasFloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloor)[HasFloorByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloorbyimpactpoint)[HasObjectTemplateTagInMyResidanceSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttemplatetaginmyresidancesite)[HasStateObjectAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstateobjectatsite)
