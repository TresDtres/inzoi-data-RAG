---
document_id: "f44dd14d188eea5c86ae006ca970856e2dc25c77c1d898765ea129d85cf1b368"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1tpoplantablerow"
title: "B1TPOPlanTableRow"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:50:12+00:00"
content_sha256: "3839bfc5617a5c91290812f538e5ef013ee214c9fa53f2936e610ddd9883d806"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1tpoplantablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- A sequential TPO Plan that can be referenced by one or more Site rows.

| PropertyTypeDescriptionMetadataAgingConditionFlagsint32Ages that can select this plan.Category: B1TPOPlanTableRowSelectionWeightint32Base weight used when choosing between eligible plans.Category: B1TPOPlanTableRowPreferenceWeightsTArrayAdditional weights applied for matching like/dislike preferences. Allow weight <= 0Category: B1TPOPlanTableRowCharacteristicWeightsTArrayAdditional weights applied for matching Characteristic-category traits. Allow weight <= 0Category: B1TPOPlanTableRowNatureWeightsTArrayAdditional weights applied for matching Nature-category traits. Allow weight <= 0Category: B1TPOPlanTableRowRelatedSiteIdsTArrayAdditional Site IDs included in this plan alongside its owning site.Category: B1TPOPlanTableRow Foreign: Site.IdStepsTArrayRequired interaction steps, executed in array order.Category: B1TPOPlanTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| --- |
| AgingConditionFlagsint32Ages that can select this plan.Category: B1TPOPlanTableRowSelectionWeightint32Base weight used when choosing between eligible plans.Category: B1TPOPlanTableRowPreferenceWeightsTArrayAdditional weights applied for matching like/dislike preferences. Allow weight <= 0Category: B1TPOPlanTableRowCharacteristicWeightsTArrayAdditional weights applied for matching Characteristic-category traits. Allow weight <= 0Category: B1TPOPlanTableRowNatureWeightsTArrayAdditional weights applied for matching Nature-category traits. Allow weight <= 0Category: B1TPOPlanTableRowRelatedSiteIdsTArrayAdditional Site IDs included in this plan alongside its owning site.Category: B1TPOPlanTableRow Foreign: Site.IdStepsTArrayRequired interaction steps, executed in array order.Category: B1TPOPlanTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| SelectionWeightint32Base weight used when choosing between eligible plans.Category: B1TPOPlanTableRowPreferenceWeightsTArrayAdditional weights applied for matching like/dislike preferences. Allow weight <= 0Category: B1TPOPlanTableRowCharacteristicWeightsTArrayAdditional weights applied for matching Characteristic-category traits. Allow weight <= 0Category: B1TPOPlanTableRowNatureWeightsTArrayAdditional weights applied for matching Nature-category traits. Allow weight <= 0Category: B1TPOPlanTableRowRelatedSiteIdsTArrayAdditional Site IDs included in this plan alongside its owning site.Category: B1TPOPlanTableRow Foreign: Site.IdStepsTArrayRequired interaction steps, executed in array order.Category: B1TPOPlanTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| PreferenceWeightsTArrayAdditional weights applied for matching like/dislike preferences. Allow weight <= 0Category: B1TPOPlanTableRowCharacteristicWeightsTArrayAdditional weights applied for matching Characteristic-category traits. Allow weight <= 0Category: B1TPOPlanTableRowNatureWeightsTArrayAdditional weights applied for matching Nature-category traits. Allow weight <= 0Category: B1TPOPlanTableRowRelatedSiteIdsTArrayAdditional Site IDs included in this plan alongside its owning site.Category: B1TPOPlanTableRow Foreign: Site.IdStepsTArrayRequired interaction steps, executed in array order.Category: B1TPOPlanTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CharacteristicWeightsTArrayAdditional weights applied for matching Characteristic-category traits. Allow weight <= 0Category: B1TPOPlanTableRowNatureWeightsTArrayAdditional weights applied for matching Nature-category traits. Allow weight <= 0Category: B1TPOPlanTableRowRelatedSiteIdsTArrayAdditional Site IDs included in this plan alongside its owning site.Category: B1TPOPlanTableRow Foreign: Site.IdStepsTArrayRequired interaction steps, executed in array order.Category: B1TPOPlanTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| NatureWeightsTArrayAdditional weights applied for matching Nature-category traits. Allow weight <= 0Category: B1TPOPlanTableRowRelatedSiteIdsTArrayAdditional Site IDs included in this plan alongside its owning site.Category: B1TPOPlanTableRow Foreign: Site.IdStepsTArrayRequired interaction steps, executed in array order.Category: B1TPOPlanTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| RelatedSiteIdsTArrayAdditional Site IDs included in this plan alongside its owning site.Category: B1TPOPlanTableRow Foreign: Site.IdStepsTArrayRequired interaction steps, executed in array order.Category: B1TPOPlanTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| StepsTArrayRequired interaction steps, executed in array order.Category: B1TPOPlanTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CommentFStringDev CommentCategory: B1TableRowBase |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoT[FB1TPOActionTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1tpoactiontablerow)[FB1TPOPlanStep](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1tpoplanstep)[FB1TPORecommendTagInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1tporecommendtaginfo)[FB1TPOSubTPOInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1tposubtpoinfo)[FB1TPOTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1tpotablerow)
