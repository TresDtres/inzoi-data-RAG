---
document_id: "6d5de9fc806de42525cfeb119b8106804322a0f32ecdd680c2d0061e7304e0a7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cleanobjecttablerow"
title: "B1CleanObjectTableRow"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:54:06+00:00"
content_sha256: "5ed9e761cc0f36eb34bf63ee0db72184eff7832fc00ecf04a013f1df4395caf3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1cleanobjecttablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Data table row defining how a clean interaction removes dusty value and restores object states. * Specifies the cleaning position, range, dusty reduction amount, animation, and the resulting normal state tag.

| PropertyTypeDescriptionMetadataCleanPositionEB1CleanPositionTypePosition type determining where in the environment this clean interaction applies.Category: B1CleanObjectTableRowCleanRangeint32Radius in units around the clean position that is affected by this clean interaction.Category: B1CleanObjectTableRow ClampMin: 0ReduceDustyValueint32Amount by which the dusty value is reduced when this clean interaction completes.Category: B1CleanObjectTableRowChangeNormalStateObjectTagFNameObject template tag assigned to objects that are restored to their normal state after cleaning.Category: B1CleanObjectTableRow Foreign: ObjectTemplate.TagAnimationIdFNameID of the animation played while this clean interaction is performed.Category: B1CleanObjectTableRow Foreign: AnimCharacter_Interaction.IdIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| --- |
| CleanPositionEB1CleanPositionTypePosition type determining where in the environment this clean interaction applies.Category: B1CleanObjectTableRowCleanRangeint32Radius in units around the clean position that is affected by this clean interaction.Category: B1CleanObjectTableRow ClampMin: 0ReduceDustyValueint32Amount by which the dusty value is reduced when this clean interaction completes.Category: B1CleanObjectTableRowChangeNormalStateObjectTagFNameObject template tag assigned to objects that are restored to their normal state after cleaning.Category: B1CleanObjectTableRow Foreign: ObjectTemplate.TagAnimationIdFNameID of the animation played while this clean interaction is performed.Category: B1CleanObjectTableRow Foreign: AnimCharacter_Interaction.IdIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CleanRangeint32Radius in units around the clean position that is affected by this clean interaction.Category: B1CleanObjectTableRow ClampMin: 0ReduceDustyValueint32Amount by which the dusty value is reduced when this clean interaction completes.Category: B1CleanObjectTableRowChangeNormalStateObjectTagFNameObject template tag assigned to objects that are restored to their normal state after cleaning.Category: B1CleanObjectTableRow Foreign: ObjectTemplate.TagAnimationIdFNameID of the animation played while this clean interaction is performed.Category: B1CleanObjectTableRow Foreign: AnimCharacter_Interaction.IdIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| ReduceDustyValueint32Amount by which the dusty value is reduced when this clean interaction completes.Category: B1CleanObjectTableRowChangeNormalStateObjectTagFNameObject template tag assigned to objects that are restored to their normal state after cleaning.Category: B1CleanObjectTableRow Foreign: ObjectTemplate.TagAnimationIdFNameID of the animation played while this clean interaction is performed.Category: B1CleanObjectTableRow Foreign: AnimCharacter_Interaction.IdIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| ChangeNormalStateObjectTagFNameObject template tag assigned to objects that are restored to their normal state after cleaning.Category: B1CleanObjectTableRow Foreign: ObjectTemplate.TagAnimationIdFNameID of the animation played while this clean interaction is performed.Category: B1CleanObjectTableRow Foreign: AnimCharacter_Interaction.IdIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| AnimationIdFNameID of the animation played while this clean interaction is performed.Category: B1CleanObjectTableRow Foreign: AnimCharacter_Interaction.IdIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CommentFStringDev CommentCategory: B1TableRowBase |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)
