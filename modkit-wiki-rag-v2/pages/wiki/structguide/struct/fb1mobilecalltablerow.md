---
document_id: "2a1fa996315e7ccd669e936dec502f3de2beb7effa14dfe691993b377e84e5f4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilecalltablerow"
title: "B1MobileCallTableRow"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:55:37+00:00"
content_sha256: "5cc233925acf48d6fa416be3e7fab76443f3636baac3304f3d1e74593cf73b9b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1mobilecalltablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Data table row storing configuration for a mobile call entry, including its type, choice card, and condition. * References ChoiceCard.json for choice card display logic. * Mobile Call Flow: Receive calls check matching ConditionId entries and display a choice card; Send calls trigger when the player initiates a call from a contact's profile.

| PropertyTypeDescriptionMetadataCallTypeEB1MobileCallTypeThe type of call (Receive, Send, or None). Determines when this entry is used.Category: B1MobileCallTableRowChoiceCardIdFNameThe ID of the choice card to display for this call.Category: B1MobileCallTableRow Foreign: ChoiceCard.IdConditionIdFNameCondition ID that must be satisfied for this call entry to be selected. If none, the call entry is always selected.Category: B1MobileCallTableRow Foreign: Condition_MobileCall.IdCallerTagTextIdFStringText ID for the caller's tag displayed separately. If empty, the tag is hidden. (e.g., "(Client)")Category: B1MobileCallTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| --- |
| CallTypeEB1MobileCallTypeThe type of call (Receive, Send, or None). Determines when this entry is used.Category: B1MobileCallTableRowChoiceCardIdFNameThe ID of the choice card to display for this call.Category: B1MobileCallTableRow Foreign: ChoiceCard.IdConditionIdFNameCondition ID that must be satisfied for this call entry to be selected. If none, the call entry is always selected.Category: B1MobileCallTableRow Foreign: Condition_MobileCall.IdCallerTagTextIdFStringText ID for the caller's tag displayed separately. If empty, the tag is hidden. (e.g., "(Client)")Category: B1MobileCallTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| ChoiceCardIdFNameThe ID of the choice card to display for this call.Category: B1MobileCallTableRow Foreign: ChoiceCard.IdConditionIdFNameCondition ID that must be satisfied for this call entry to be selected. If none, the call entry is always selected.Category: B1MobileCallTableRow Foreign: Condition_MobileCall.IdCallerTagTextIdFStringText ID for the caller's tag displayed separately. If empty, the tag is hidden. (e.g., "(Client)")Category: B1MobileCallTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| ConditionIdFNameCondition ID that must be satisfied for this call entry to be selected. If none, the call entry is always selected.Category: B1MobileCallTableRow Foreign: Condition_MobileCall.IdCallerTagTextIdFStringText ID for the caller's tag displayed separately. If empty, the tag is hidden. (e.g., "(Client)")Category: B1MobileCallTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CallerTagTextIdFStringText ID for the caller's tag displayed separately. If empty, the tag is hidden. (e.g., "(Client)")Category: B1MobileCallTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CommentFStringDev CommentCategory: B1TableRowBase |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoMobile[EB1MobileMessageBaseObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1mobilemessagebaseobject)[MobileMessage Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/mobilemessage)[MobileMessageParties Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/mobilemessageparties)[MobileMessageReward Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/mobilemessagereward)[MobileMessageSystem Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/mobilemessagesystem)[FB1MobileContactMap](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilecontactmap)[FB1MobileMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessage)[FB1MobileMessageCooltimeMap](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessagecooltimemap)[FB1MobileMessageCustomResponse](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessagecustomresponse)[FB1MobileMessageData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessagedata)[FB1MobileMessageDelayInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessagedelayinfo)[FB1MobileMessageList](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessagelist)
