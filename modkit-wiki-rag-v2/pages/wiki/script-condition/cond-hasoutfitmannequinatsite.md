---
document_id: "223f97eebe3dfea9b83b2497cc8bcfc74319482bd4c6164804a7896590298780"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoutfitmannequinatsite"
title: "Condition_HasOutfitMannequinAtSite"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:10+00:00"
content_sha256: "addba7e9cc0248b95a1fdfdee4ffeeb82961e33060616397ba79c3c56723054c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasoutfitmannequinatsite"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the site of the BaseObject actor contains any store mannequin that has a designated outfit. Candidates are narrowed down via the site's ObjectTemplateTag index (S1) instead of scanning every object, then each candidate is tested for a designated outfit.

# Parameters

| ParameterDescriptionBaseObjectThe actor whose located site is searched (Self or Target).S1ObjectTemplateTag used to look up mannequin candidates (e.g. StoreMannequin).CompareTypeEqual: at least one outfit mannequin exists → true. NotEqual: none. |
| --- |
| BaseObjectThe actor whose located site is searched (Self or Target).S1ObjectTemplateTag used to look up mannequin candidates (e.g. StoreMannequin).CompareTypeEqual: at least one outfit mannequin exists → true. NotEqual: none. |
| S1ObjectTemplateTag used to look up mannequin candidates (e.g. StoreMannequin).CompareTypeEqual: at least one outfit mannequin exists → true. NotEqual: none. |
| CompareTypeEqual: at least one outfit mannequin exists → true. NotEqual: none. |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoOutfit[HasMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmannequinoutfit)[HasOutfitAccessoryType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoutfitaccessorytype)[HasOutfitGarmentType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoutfitgarmenttype)[IsSchoolOutfitSameFromUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isschooloutfitsamefromuniform)[MannequinOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-mannequinoutfitcategory)[OutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-outfitcategory)[OutfitGarmentTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-outfitgarmenttag)
