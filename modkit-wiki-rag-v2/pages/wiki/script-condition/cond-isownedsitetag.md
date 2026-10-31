---
document_id: "10dead5fad00930d9cd1233f39fa2ed9fb7dbbda827dd74a67709828ec1ab794"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isownedsitetag"
title: "Condition_IsOwnedSiteTag"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:38+00:00"
content_sha256: "180b5739f4d9bf60e0e9dbb865a3ae650f443773ae8161d9f6a006ccc456b45d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isownedsitetag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Returns whether the Site identified by the SiteTag given in S1 is owned by any Household. This condition does not depend on the BaseObject; it only checks whether the resolved Site has a valid owner Household. If the SiteTag is invalid or no Site can be resolved, the Site is treated as not owned and NotEqual returns true.

# Parameters

| ParameterDescriptionCompareTypeEqual: true if the Site is owned by any Household. NotEqual: true if the Site is not owned.S1The unique SiteTag (FName) that identifies the target Site to check ownership for. |
| --- |
| CompareTypeEqual: true if the Site is owned by any Household. NotEqual: true if the Site is not owned.S1The unique SiteTag (FName) that identifies the target Site to check ownership for. |
| S1The unique SiteTag (FName) that identifies the target Site to check ownership for. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if the site tagged ShopSite_A01 is ownedSelfIsOwnedSiteTagEqualCheck if the site tagged ShopSite_B02 is not ownedSelfIsOwnedSiteTagNotEqualCheck if a tagged site has been purchased by any householdSelfIsOwnedSiteTagEqual |
| --- |
| Check if the site tagged ShopSite_A01 is ownedSelfIsOwnedSiteTagEqualCheck if the site tagged ShopSite_B02 is not ownedSelfIsOwnedSiteTagNotEqualCheck if a tagged site has been purchased by any householdSelfIsOwnedSiteTagEqual |
| Check if the site tagged ShopSite_B02 is not ownedSelfIsOwnedSiteTagNotEqualCheck if a tagged site has been purchased by any householdSelfIsOwnedSiteTagEqual |
| Check if a tagged site has been purchased by any householdSelfIsOwnedSiteTagEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite, Lot & Position[City](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-city)[EnteredSiteHasTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastag)[EnteredSiteHasTagByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastagbyimpactpoint)[EnteredSiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitetype)[FinishHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-finishhomework)[ForTimeSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-fortimesite)[HasCeiling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceiling)[HasCeilingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceilingbyimpactpoint)[HasFloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloor)[HasFloorByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloorbyimpactpoint)[HasObjectTemplateTagInMyResidanceSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttemplatetaginmyresidancesite)[HasStateObjectAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstateobjectatsite)
