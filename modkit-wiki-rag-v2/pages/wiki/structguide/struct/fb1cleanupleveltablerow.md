---
document_id: "9b91333ebee4202dd88f25104f750ea147e927916de64aec9741e328795fb95b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cleanupleveltablerow"
title: "B1CleanupLevelTableRow"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:54:07+00:00"
content_sha256: "be12492e250aeb1639bb7ee0e43f27ae9efc9df79d0139a06092af7ee7082efd"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1cleanupleveltablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Data table row mapping a computed cleanup level to its overall trigger/stop thresholds (site dust value, 0~1). * Higher level means the character cleans more readily (lower trigger).

| PropertyTypeDescriptionMetadataLevelint32The computed cleanup level this row configures.Category: B1CleanupLevelTableRowTriggerThresholdfloatSite dust value (0~1) at or above which the overall cleanup desire triggers.Category: B1CleanupLevelTableRowStopThresholdfloatSite dust value below which an active cleanup desire stops (hysteresis; less than TriggerThreshold).Category: B1CleanupLevelTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| --- |
| Levelint32The computed cleanup level this row configures.Category: B1CleanupLevelTableRowTriggerThresholdfloatSite dust value (0~1) at or above which the overall cleanup desire triggers.Category: B1CleanupLevelTableRowStopThresholdfloatSite dust value below which an active cleanup desire stops (hysteresis; less than TriggerThreshold).Category: B1CleanupLevelTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| TriggerThresholdfloatSite dust value (0~1) at or above which the overall cleanup desire triggers.Category: B1CleanupLevelTableRowStopThresholdfloatSite dust value below which an active cleanup desire stops (hysteresis; less than TriggerThreshold).Category: B1CleanupLevelTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| StopThresholdfloatSite dust value below which an active cleanup desire stops (hysteresis; less than TriggerThreshold).Category: B1CleanupLevelTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CommentFStringDev CommentCategory: B1TableRowBase |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoCleanup[FB1CleanupLevelOffsetTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cleanupleveloffsettablerow)[FB1CleanupTypeTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cleanuptypetablerow)
