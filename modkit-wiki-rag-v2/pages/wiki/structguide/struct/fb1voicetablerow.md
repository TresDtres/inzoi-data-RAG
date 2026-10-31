---
document_id: "5b9986cec29a1c13ba0ea83ccad39f6f74843bde1a9f1def9ba45d2239a8bf5c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1voicetablerow"
title: "B1VoiceTableRow"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:23+00:00"
content_sha256: "c67ba9db9b90cb7aafc83e3998f4f2fadd0be90e16ebe7e8047f2190788fcbbd"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1voicetablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Table row that defines a voice type: which gender automatic assignment keeps it within, * and per-growth-step voice data(resource + pitch range). The row ID is the voice ID. * GrowthStepInfos must contain exactly one entry for every growth step.

| PropertyTypeDescriptionMetadataGenderEB1GenderTypeGender this voice belongs to. Used ONLY to keep automatic assignment (random customization, default voice on gender change) within same-gender voices. The customization UI lists all voices regardless of gender, and a gender-mismatched voice is allowed when the user picks it directly.Category: B1VoiceTableRowGrowthStepInfosTArrayPer-growth-step voice data. Must cover every growth step.Category: B1VoiceTableRowPitchOffsetAdjustmentPerGrowthStepfloatAmount (in semitones) by which the pitch offset is adjusted per single growth-step change.Category: B1VoiceTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| --- |
| GenderEB1GenderTypeGender this voice belongs to. Used ONLY to keep automatic assignment (random customization, default voice on gender change) within same-gender voices. The customization UI lists all voices regardless of gender, and a gender-mismatched voice is allowed when the user picks it directly.Category: B1VoiceTableRowGrowthStepInfosTArrayPer-growth-step voice data. Must cover every growth step.Category: B1VoiceTableRowPitchOffsetAdjustmentPerGrowthStepfloatAmount (in semitones) by which the pitch offset is adjusted per single growth-step change.Category: B1VoiceTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| GrowthStepInfosTArrayPer-growth-step voice data. Must cover every growth step.Category: B1VoiceTableRowPitchOffsetAdjustmentPerGrowthStepfloatAmount (in semitones) by which the pitch offset is adjusted per single growth-step change.Category: B1VoiceTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| PitchOffsetAdjustmentPerGrowthStepfloatAmount (in semitones) by which the pitch offset is adjusted per single growth-step change.Category: B1VoiceTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CommentFStringDev CommentCategory: B1TableRowBase |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoVoice[Voice Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/voice)[VoiceResources Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/voiceresources)[FB1VoiceGrowthStepInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1voicegrowthstepinfo)[FB1VoicePreviewAnimationSet](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1voicepreviewanimationset)[FB1VoicePreviewAnimationTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1voicepreviewanimationtablerow)[FB1VoiceResourcesTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1voiceresourcestablerow)[FB1VoiceSelectionTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1voiceselectiontablerow)[FB1VoiceSettings](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1voicesettings)
