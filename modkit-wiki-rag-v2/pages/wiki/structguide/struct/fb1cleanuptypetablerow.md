---
document_id: "ee7c37d76c75d03a37826265fa36b69c3eeb64b8d3773e6a68b52b53ab6d1245"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cleanuptypetablerow"
title: "B1CleanupTypeTableRow"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:54:07+00:00"
content_sha256: "07205e214b8c6abf88d175d77b0f2eaa261c5f022ab734053116016e330276b7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1cleanuptypetablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Data table row defining one cleanup category (e.g. BabyCareWaste, Food, Book, Trash, Dust) used by the * autonomy cleanup trigger. Each category triggers cleanup on its own when its value reaches BaseThreshold.

| PropertyTypeDescriptionMetadataMatchCleanUpTypeEB1CleanUpObjectTypeCleanup object type (bit flag) matched via IsCleanUpTarget (Food/Book/Tag_Trash/BabyCareWaste). The Dust category uses Invalid and falls back to the site dust value.Category: B1CleanupTypeTableRowBaseThresholdfloatThreshold at which this category alone triggers cleanup: carriable count (Food/Book/Trash/BabyCareWaste) or site dust value (Dust category).Category: B1CleanupTypeTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| --- |
| MatchCleanUpTypeEB1CleanUpObjectTypeCleanup object type (bit flag) matched via IsCleanUpTarget (Food/Book/Tag_Trash/BabyCareWaste). The Dust category uses Invalid and falls back to the site dust value.Category: B1CleanupTypeTableRowBaseThresholdfloatThreshold at which this category alone triggers cleanup: carriable count (Food/Book/Trash/BabyCareWaste) or site dust value (Dust category).Category: B1CleanupTypeTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| BaseThresholdfloatThreshold at which this category alone triggers cleanup: carriable count (Food/Book/Trash/BabyCareWaste) or site dust value (Dust category).Category: B1CleanupTypeTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CommentFStringDev CommentCategory: B1TableRowBase |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoCleanup[FB1CleanupLevelOffsetTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cleanupleveloffsettablerow)[FB1CleanupLevelTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cleanupleveltablerow)
