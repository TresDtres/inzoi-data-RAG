---
document_id: "2a0f4264f7e5ee220c132f47f4992aa138a9a71119737f51fdf489697a9b4a96"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscurrentsitehouseholdbiz"
title: "Condition_IsCurrentSiteHouseholdBiz"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:26+00:00"
content_sha256: "4ff6177e230168ce70af5adf4ee390cadcfde631260d354394756a52a2a2d9f8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-iscurrentsitehouseholdbiz"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Returns whether the Site where the given BaseObject is currently located is a HouseholdBiz Site. Even if the Site is designated as a business Site, it will be treated as NotEqual when no HouseholdBiz is linked to it.

# Parameters

| ParameterDescriptionBaseObjectThe character or object whose current located Site is checked.CompareTypeEqual: true if inside a HouseholdBiz Site. NotEqual: true if outside a HouseholdBiz Site.S1Optional. Set to "IsOperating" to also require the Site to be currently operating; omit or leave empty otherwise.S2Optional. Set to "Owned" to also require the BaseObject's household to be the manager of the HouseholdBiz. |
| --- |
| BaseObjectThe character or object whose current located Site is checked.CompareTypeEqual: true if inside a HouseholdBiz Site. NotEqual: true if outside a HouseholdBiz Site.S1Optional. Set to "IsOperating" to also require the Site to be currently operating; omit or leave empty otherwise.S2Optional. Set to "Owned" to also require the BaseObject's household to be the manager of the HouseholdBiz. |
| CompareTypeEqual: true if inside a HouseholdBiz Site. NotEqual: true if outside a HouseholdBiz Site.S1Optional. Set to "IsOperating" to also require the Site to be currently operating; omit or leave empty otherwise.S2Optional. Set to "Owned" to also require the BaseObject's household to be the manager of the HouseholdBiz. |
| S1Optional. Set to "IsOperating" to also require the Site to be currently operating; omit or leave empty otherwise.S2Optional. Set to "Owned" to also require the BaseObject's household to be the manager of the HouseholdBiz. |
| S2Optional. Set to "Owned" to also require the BaseObject's household to be the manager of the HouseholdBiz. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self is currently inside a HouseholdBiz SiteSelfIsCurrentSiteHouseholdBizEqualCheck if Target is not inside any HouseholdBiz SiteTargetIsCurrentSiteHouseholdBizNotEqualCheck if Self is inside an operating HouseholdBiz SiteSelfIsCurrentSiteHouseholdBizEqualCheck if Self is inside own HouseholdBiz SiteSelfIsCurrentSiteHouseholdBizEqual |
| --- |
| Check if Self is currently inside a HouseholdBiz SiteSelfIsCurrentSiteHouseholdBizEqualCheck if Target is not inside any HouseholdBiz SiteTargetIsCurrentSiteHouseholdBizNotEqualCheck if Self is inside an operating HouseholdBiz SiteSelfIsCurrentSiteHouseholdBizEqualCheck if Self is inside own HouseholdBiz SiteSelfIsCurrentSiteHouseholdBizEqual |
| Check if Target is not inside any HouseholdBiz SiteTargetIsCurrentSiteHouseholdBizNotEqualCheck if Self is inside an operating HouseholdBiz SiteSelfIsCurrentSiteHouseholdBizEqualCheck if Self is inside own HouseholdBiz SiteSelfIsCurrentSiteHouseholdBizEqual |
| Check if Self is inside an operating HouseholdBiz SiteSelfIsCurrentSiteHouseholdBizEqualCheck if Self is inside own HouseholdBiz SiteSelfIsCurrentSiteHouseholdBizEqual |
| Check if Self is inside own HouseholdBiz SiteSelfIsCurrentSiteHouseholdBizEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)
