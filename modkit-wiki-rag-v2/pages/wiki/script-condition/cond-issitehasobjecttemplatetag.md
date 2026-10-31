---
document_id: "8540cdab37a3144ab30a49f29792379ffa715b6582c68d105ea0add46b332ded"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issitehasobjecttemplatetag"
title: "Condition_IsSiteHasObjectTemplateTag"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:46+00:00"
content_sha256: "b9179ed10e3e469545c0605c60e2fd5646fc2515279a7ccf18c837e108a6c52e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-issitehasobjecttemplatetag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the site (where the BaseObject is located or at the target location) has objects with the specified ObjectTemplateTag. If the BaseObject is a valid entity, its location is used to find the site. Otherwise, the target location from the script context is used.

# Parameters

| ParameterDescriptionBaseObjectThe object used to determine the site location (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual).S1ObjectTemplateTag to search for within the site.S2(Optional) StateGroupId to filter objects by current state. None = no state filtering. |
| --- |
| BaseObjectThe object used to determine the site location (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual).S1ObjectTemplateTag to search for within the site.S2(Optional) StateGroupId to filter objects by current state. None = no state filtering. |
| CompareTypeType of comparison operation (Equal or NotEqual).S1ObjectTemplateTag to search for within the site.S2(Optional) StateGroupId to filter objects by current state. None = no state filtering. |
| S1ObjectTemplateTag to search for within the site.S2(Optional) StateGroupId to filter objects by current state. None = no state filtering. |
| S2(Optional) StateGroupId to filter objects by current state. None = no state filtering. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Checks whether self's located site has objects with tag "Furniture"SelfIsSiteHasObjectTemplateTagEqualFurnitureChecks whether target location's site has objects with tag "Electronics"TargetIsSiteHasObjectTemplateTagEqualElectronicsChecks whether self's located site does NOT have objects with tag "Tool"SelfIsSiteHasObjectTemplateTagNotEqualToolChecks whether self's site has "Furniture" objects in "Dirty" stateSelfIsSiteHasObjectTemplateTagEqualFurnitureDirty |
| --- |
| Checks whether self's located site has objects with tag "Furniture"SelfIsSiteHasObjectTemplateTagEqualFurnitureChecks whether target location's site has objects with tag "Electronics"TargetIsSiteHasObjectTemplateTagEqualElectronicsChecks whether self's located site does NOT have objects with tag "Tool"SelfIsSiteHasObjectTemplateTagNotEqualToolChecks whether self's site has "Furniture" objects in "Dirty" stateSelfIsSiteHasObjectTemplateTagEqualFurnitureDirty |
| Checks whether target location's site has objects with tag "Electronics"TargetIsSiteHasObjectTemplateTagEqualElectronicsChecks whether self's located site does NOT have objects with tag "Tool"SelfIsSiteHasObjectTemplateTagNotEqualToolChecks whether self's site has "Furniture" objects in "Dirty" stateSelfIsSiteHasObjectTemplateTagEqualFurnitureDirty |
| Checks whether self's located site does NOT have objects with tag "Tool"SelfIsSiteHasObjectTemplateTagNotEqualToolChecks whether self's site has "Furniture" objects in "Dirty" stateSelfIsSiteHasObjectTemplateTagEqualFurnitureDirty |
| Checks whether self's site has "Furniture" objects in "Dirty" stateSelfIsSiteHasObjectTemplateTagEqualFurnitureDirty |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite, Lot & Position[City](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-city)[EnteredSiteHasTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastag)[EnteredSiteHasTagByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastagbyimpactpoint)[EnteredSiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitetype)[FinishHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-finishhomework)[ForTimeSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-fortimesite)[HasCeiling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceiling)[HasCeilingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceilingbyimpactpoint)[HasFloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloor)[HasFloorByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloorbyimpactpoint)[HasObjectTemplateTagInMyResidanceSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttemplatetaginmyresidancesite)[HasStateObjectAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstateobjectatsite)
