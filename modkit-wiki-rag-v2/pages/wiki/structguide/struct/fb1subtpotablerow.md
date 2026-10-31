---
document_id: "371a73c407c8bec7282674ae720e1b04910dbddc84d6ff142371b0e08908d564"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1subtpotablerow"
title: "B1SubTPOTableRow"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:01+00:00"
content_sha256: "9b8baa4870b940052444aed3ab53cb7e7c2871216671f27e251334968d4137e4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1subtpotablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Table row that defines a single SubTPO condition entry. * Each entry specifies a condition within its category and references * a TPOAction that provides recommended and banned interaction tags.

| PropertyTypeDescriptionMetadataSubTPOCategoryEB1SubTPOCategoryCategory this SubTPO belongs to. Must match the parent TPO's SubTPOCategory.Category: B1SubTPOTableRowConditionIdFNameCondition that must be satisfied for this SubTPO to apply.Category: B1SubTPOTableRow Foreign: Condition.IdTPOActionIdFNameTPOAction ID that defines the recommended and banned interaction tags for this condition.Category: B1SubTPOTableRow Foreign: TPOAction.IdIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| --- |
| SubTPOCategoryEB1SubTPOCategoryCategory this SubTPO belongs to. Must match the parent TPO's SubTPOCategory.Category: B1SubTPOTableRowConditionIdFNameCondition that must be satisfied for this SubTPO to apply.Category: B1SubTPOTableRow Foreign: Condition.IdTPOActionIdFNameTPOAction ID that defines the recommended and banned interaction tags for this condition.Category: B1SubTPOTableRow Foreign: TPOAction.IdIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| ConditionIdFNameCondition that must be satisfied for this SubTPO to apply.Category: B1SubTPOTableRow Foreign: Condition.IdTPOActionIdFNameTPOAction ID that defines the recommended and banned interaction tags for this condition.Category: B1SubTPOTableRow Foreign: TPOAction.IdIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| TPOActionIdFNameTPOAction ID that defines the recommended and banned interaction tags for this condition.Category: B1SubTPOTableRow Foreign: TPOAction.IdIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CommentFStringDev CommentCategory: B1TableRowBase |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoSub[FB1SubActionAnimData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1subactionanimdata)[FB1SubActionParam](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1subactionparam)
