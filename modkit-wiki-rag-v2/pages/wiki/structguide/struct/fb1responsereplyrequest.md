---
document_id: "37caaa3ef76365f42ae92b7f521b09260e448f5ab00ccf3ec36c21e52fc064c1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1responsereplyrequest"
title: "B1ResponseReplyRequest"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:56:23+00:00"
content_sha256: "98506ad57eeb569b64748dfc98ee895755f3108c2db6fdb7baa743cbbae6f4cb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1responsereplyrequest"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Request payload for triggering a reply to a received mobile message response. * Carries the sender, receiver, response type, and the script to execute for the reply.

| PropertyTypeDescriptionMetadataSenderSystemIdFNameSystem ID of the sender when the sender is a system entity rather than a character.SenderFB1EntityIdEntity ID of the character sending the message.ReceiverFB1EntityIdEntity ID of the character receiving the message.TypeEB1MobileMessageResponseTypeType of response (Normal, Positive, or Negative) selected by the receiver.MessageResponseScriptIdsTArrayIDs of the scripts to execute as the reply to the response.InvitationExpiredAnswerReplyStrIdFStringExpired invitation reply text captured when the response is accepted. |
| --- |
| SenderSystemIdFNameSystem ID of the sender when the sender is a system entity rather than a character.SenderFB1EntityIdEntity ID of the character sending the message.ReceiverFB1EntityIdEntity ID of the character receiving the message.TypeEB1MobileMessageResponseTypeType of response (Normal, Positive, or Negative) selected by the receiver.MessageResponseScriptIdsTArrayIDs of the scripts to execute as the reply to the response.InvitationExpiredAnswerReplyStrIdFStringExpired invitation reply text captured when the response is accepted. |
| SenderFB1EntityIdEntity ID of the character sending the message.ReceiverFB1EntityIdEntity ID of the character receiving the message.TypeEB1MobileMessageResponseTypeType of response (Normal, Positive, or Negative) selected by the receiver.MessageResponseScriptIdsTArrayIDs of the scripts to execute as the reply to the response.InvitationExpiredAnswerReplyStrIdFStringExpired invitation reply text captured when the response is accepted. |
| ReceiverFB1EntityIdEntity ID of the character receiving the message.TypeEB1MobileMessageResponseTypeType of response (Normal, Positive, or Negative) selected by the receiver.MessageResponseScriptIdsTArrayIDs of the scripts to execute as the reply to the response.InvitationExpiredAnswerReplyStrIdFStringExpired invitation reply text captured when the response is accepted. |
| TypeEB1MobileMessageResponseTypeType of response (Normal, Positive, or Negative) selected by the receiver.MessageResponseScriptIdsTArrayIDs of the scripts to execute as the reply to the response.InvitationExpiredAnswerReplyStrIdFStringExpired invitation reply text captured when the response is accepted. |
| MessageResponseScriptIdsTArrayIDs of the scripts to execute as the reply to the response.InvitationExpiredAnswerReplyStrIdFStringExpired invitation reply text captured when the response is accepted. |
| InvitationExpiredAnswerReplyStrIdFStringExpired invitation reply text captured when the response is accepted. |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoResponse[FB1ResponseTypeProbability](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1responsetypeprobability)[FB1ResponseUpdateSiteScheduleTime](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1responseupdatesitescheduletime)[FB1ResponseUpdateSiteScheduleWorker](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1responseupdatesitescheduleworker)
