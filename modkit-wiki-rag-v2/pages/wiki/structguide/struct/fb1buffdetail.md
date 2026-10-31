---
document_id: "65b6249b03cc4133da4ff03bec59a5aaff3045b637a8ad40e706efb1a4038a2b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1buffdetail"
title: "B1BuffDetail"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:33+00:00"
content_sha256: "8317cadc033b141c059810a18da10e1ced74b970be90e62d00712f75e53b8a86"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1buffdetail"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Stores contextual detail about how and why a buff was applied to an entity, * including the initiator, interaction bag, script reason, and create reason.

| PropertyTypeDescriptionMetadataInitiatorFB1EntityIdEntity ID of the character who initiated this buff.Category: B1BuffDetailInitiatorObjectIdFNameObject data table ID of the Initiator, captured at buff creation time so its display name can be resolved even after the Initiator despawns. Empty when the Initiator is not a game object.Category: B1BuffDetailInteractionBagIdFNameInteraction bag ID that triggered this buff.Category: B1BuffDetailReasonEB1ScriptReasonScript reason describing the context in which this buff was applied.Category: B1BuffDetailCreateBuffReasonEB1BuffCreateReasonReason category describing how this buff was created.Category: B1BuffDetailTextParameterFNameData ID used to resolve a localized text parameter for the buff reason.Category: B1BuffDetail |
| --- |
| InitiatorFB1EntityIdEntity ID of the character who initiated this buff.Category: B1BuffDetailInitiatorObjectIdFNameObject data table ID of the Initiator, captured at buff creation time so its display name can be resolved even after the Initiator despawns. Empty when the Initiator is not a game object.Category: B1BuffDetailInteractionBagIdFNameInteraction bag ID that triggered this buff.Category: B1BuffDetailReasonEB1ScriptReasonScript reason describing the context in which this buff was applied.Category: B1BuffDetailCreateBuffReasonEB1BuffCreateReasonReason category describing how this buff was created.Category: B1BuffDetailTextParameterFNameData ID used to resolve a localized text parameter for the buff reason.Category: B1BuffDetail |
| InitiatorObjectIdFNameObject data table ID of the Initiator, captured at buff creation time so its display name can be resolved even after the Initiator despawns. Empty when the Initiator is not a game object.Category: B1BuffDetailInteractionBagIdFNameInteraction bag ID that triggered this buff.Category: B1BuffDetailReasonEB1ScriptReasonScript reason describing the context in which this buff was applied.Category: B1BuffDetailCreateBuffReasonEB1BuffCreateReasonReason category describing how this buff was created.Category: B1BuffDetailTextParameterFNameData ID used to resolve a localized text parameter for the buff reason.Category: B1BuffDetail |
| InteractionBagIdFNameInteraction bag ID that triggered this buff.Category: B1BuffDetailReasonEB1ScriptReasonScript reason describing the context in which this buff was applied.Category: B1BuffDetailCreateBuffReasonEB1BuffCreateReasonReason category describing how this buff was created.Category: B1BuffDetailTextParameterFNameData ID used to resolve a localized text parameter for the buff reason.Category: B1BuffDetail |
| ReasonEB1ScriptReasonScript reason describing the context in which this buff was applied.Category: B1BuffDetailCreateBuffReasonEB1BuffCreateReasonReason category describing how this buff was created.Category: B1BuffDetailTextParameterFNameData ID used to resolve a localized text parameter for the buff reason.Category: B1BuffDetail |
| CreateBuffReasonEB1BuffCreateReasonReason category describing how this buff was created.Category: B1BuffDetailTextParameterFNameData ID used to resolve a localized text parameter for the buff reason.Category: B1BuffDetail |
| TextParameterFNameData ID used to resolve a localized text parameter for the buff reason.Category: B1BuffDetail |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoBuff[Buff Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/buff)[FB1Buff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1buff)[FB1BuffBasicInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1buffbasicinfo)[FB1BuffDisplayInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1buffdisplayinfo)[FB1BuffExpireTimeInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1buffexpiretimeinfo)[FB1BuffTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1bufftablerow)
