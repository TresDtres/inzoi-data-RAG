---
document_id: "d0a4b172b558523ebc05af97427b250c784101940f9573c47ff9df292168c30f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1movietablerow"
title: "B1MovieTableRow"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:55:42+00:00"
content_sha256: "67365e29fe7b6aa1521134c169c5bc0a67277355f8431897e8620c9803f365dd"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1movietablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Data table row defining a movie entry with its media source, buff schedule, and playback duration. * Supports both interval-based (in-game time) and static (real-time) buff application during playback.

| PropertyTypeDescriptionMetadataMediaSourceTSoftObjectPtrSoft reference to the media source asset played for this movie entry.Category: B1MovieTableRowIntervalBuffInfoTArrayList of buffs applied at in-game minute intervals during movie playback.Category: B1MovieTableRowStaticBuffInfoTArrayList of buffs applied at real-time second offsets during movie playback.Category: B1MovieTableRowDurationInGameMinutesint32Total duration of this movie in in-game minutes.Category: B1MovieTableRowOnFinishCurrentAudienceScriptIdFNameScript executed for current audiences (still watching) when the movie finishes.Category: B1MovieTableRow Foreign: Script.IdOnFinishAllAudienceScriptIdFNameScript executed for all-time audiences (ever watched) when the movie finishes.Category: B1MovieTableRow Foreign: Script.IdIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| --- |
| MediaSourceTSoftObjectPtrSoft reference to the media source asset played for this movie entry.Category: B1MovieTableRowIntervalBuffInfoTArrayList of buffs applied at in-game minute intervals during movie playback.Category: B1MovieTableRowStaticBuffInfoTArrayList of buffs applied at real-time second offsets during movie playback.Category: B1MovieTableRowDurationInGameMinutesint32Total duration of this movie in in-game minutes.Category: B1MovieTableRowOnFinishCurrentAudienceScriptIdFNameScript executed for current audiences (still watching) when the movie finishes.Category: B1MovieTableRow Foreign: Script.IdOnFinishAllAudienceScriptIdFNameScript executed for all-time audiences (ever watched) when the movie finishes.Category: B1MovieTableRow Foreign: Script.IdIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| IntervalBuffInfoTArrayList of buffs applied at in-game minute intervals during movie playback.Category: B1MovieTableRowStaticBuffInfoTArrayList of buffs applied at real-time second offsets during movie playback.Category: B1MovieTableRowDurationInGameMinutesint32Total duration of this movie in in-game minutes.Category: B1MovieTableRowOnFinishCurrentAudienceScriptIdFNameScript executed for current audiences (still watching) when the movie finishes.Category: B1MovieTableRow Foreign: Script.IdOnFinishAllAudienceScriptIdFNameScript executed for all-time audiences (ever watched) when the movie finishes.Category: B1MovieTableRow Foreign: Script.IdIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| StaticBuffInfoTArrayList of buffs applied at real-time second offsets during movie playback.Category: B1MovieTableRowDurationInGameMinutesint32Total duration of this movie in in-game minutes.Category: B1MovieTableRowOnFinishCurrentAudienceScriptIdFNameScript executed for current audiences (still watching) when the movie finishes.Category: B1MovieTableRow Foreign: Script.IdOnFinishAllAudienceScriptIdFNameScript executed for all-time audiences (ever watched) when the movie finishes.Category: B1MovieTableRow Foreign: Script.IdIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| DurationInGameMinutesint32Total duration of this movie in in-game minutes.Category: B1MovieTableRowOnFinishCurrentAudienceScriptIdFNameScript executed for current audiences (still watching) when the movie finishes.Category: B1MovieTableRow Foreign: Script.IdOnFinishAllAudienceScriptIdFNameScript executed for all-time audiences (ever watched) when the movie finishes.Category: B1MovieTableRow Foreign: Script.IdIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| OnFinishCurrentAudienceScriptIdFNameScript executed for current audiences (still watching) when the movie finishes.Category: B1MovieTableRow Foreign: Script.IdOnFinishAllAudienceScriptIdFNameScript executed for all-time audiences (ever watched) when the movie finishes.Category: B1MovieTableRow Foreign: Script.IdIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| OnFinishAllAudienceScriptIdFNameScript executed for all-time audiences (ever watched) when the movie finishes.Category: B1MovieTableRow Foreign: Script.IdIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CommentFStringDev CommentCategory: B1TableRowBase |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoMovie[FB1MovieBuffInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1moviebuffinfo)[FB1MovieCommonBuffInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1moviecommonbuffinfo)[FB1MoviePreferenceBuffInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1moviepreferencebuffinfo)
