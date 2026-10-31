---
document_id: "5254b4e6d49704d841310cbf6f8b7dc001aff9a723ae992839d36775b97012d0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1fxtablerow"
title: "B1FxTableRow"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:54:51+00:00"
content_sha256: "4baa9276d185db5d0b90a638e6f21023db0bd833c3320c2b7fc9f4f536c36f1a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1fxtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Table row defining a single FX entry, including the FX object class, * an optional animation montage for sequence-based effects, * and an optional spawner ID for world-placed FX.

| PropertyTypeDescriptionMetadataFxObjectTSoftClassPtrSoft class reference to the FX object (UB1FXObject) to instantiate. // UB1FXObjectCategory: B1FxTableRowAnimMontageTSoftObjectPtrOptional animation montage used to drive sequence-based FX via AnimNotify events.Category: B1FxTableRowSpawnerIdFNameOptional spawner ID; if None, the FX spawns on the target entity; if valid, spawns at the AB1FXSpawnActor location.Category: B1FxTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| --- |
| FxObjectTSoftClassPtrSoft class reference to the FX object (UB1FXObject) to instantiate. // UB1FXObjectCategory: B1FxTableRowAnimMontageTSoftObjectPtrOptional animation montage used to drive sequence-based FX via AnimNotify events.Category: B1FxTableRowSpawnerIdFNameOptional spawner ID; if None, the FX spawns on the target entity; if valid, spawns at the AB1FXSpawnActor location.Category: B1FxTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| AnimMontageTSoftObjectPtrOptional animation montage used to drive sequence-based FX via AnimNotify events.Category: B1FxTableRowSpawnerIdFNameOptional spawner ID; if None, the FX spawns on the target entity; if valid, spawns at the AB1FXSpawnActor location.Category: B1FxTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| SpawnerIdFNameOptional spawner ID; if None, the FX spawns on the target entity; if valid, spawns at the AB1FXSpawnActor location.Category: B1FxTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CommentFStringDev CommentCategory: B1TableRowBase |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoFx[Fx Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/fx)[FB1FxSlotData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1fxslotdata)
