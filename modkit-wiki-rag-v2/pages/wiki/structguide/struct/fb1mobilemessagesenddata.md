---
document_id: "0178ce275cfdce1c39c66fcadb880118ec5ee055a40849b1f60f44b9dcf5cea1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessagesenddata"
title: "B1MobileMessageSendData"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:55:39+00:00"
content_sha256: "6cb084052e436775d850dcba00b3f08e47118127ac511dbe9138bac56630b42f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1mobilemessagesenddata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Runtime data for a mobile message send response, recording the selected answer type and its string. * Optionally stores appointment data when the message is of the Appointment send type.

| PropertyTypeDescriptionMetadataAnswerTypeEB1MobileMessageResponseTypeResponse type (Normal, Positive, or Negative) selected by the receiver.AnswerPoolIndexint32Index into the answer pool array from which the reply string was chosen.AnswerStrIdFStringString table key of the specific answer text that was selected.AppointmentDataFB1AppointmentDataAppointment data associated with this response when the message type is Appointment. |
| --- |
| AnswerTypeEB1MobileMessageResponseTypeResponse type (Normal, Positive, or Negative) selected by the receiver.AnswerPoolIndexint32Index into the answer pool array from which the reply string was chosen.AnswerStrIdFStringString table key of the specific answer text that was selected.AppointmentDataFB1AppointmentDataAppointment data associated with this response when the message type is Appointment. |
| AnswerPoolIndexint32Index into the answer pool array from which the reply string was chosen.AnswerStrIdFStringString table key of the specific answer text that was selected.AppointmentDataFB1AppointmentDataAppointment data associated with this response when the message type is Appointment. |
| AnswerStrIdFStringString table key of the specific answer text that was selected.AppointmentDataFB1AppointmentDataAppointment data associated with this response when the message type is Appointment. |
| AppointmentDataFB1AppointmentDataAppointment data associated with this response when the message type is Appointment. |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoMobile[EB1MobileMessageBaseObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1mobilemessagebaseobject)[MobileMessage Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/mobilemessage)[MobileMessageParties Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/mobilemessageparties)[MobileMessageReward Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/mobilemessagereward)[MobileMessageSystem Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/mobilemessagesystem)[FB1MobileCallTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilecalltablerow)[FB1MobileContactMap](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilecontactmap)[FB1MobileMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessage)[FB1MobileMessageCooltimeMap](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessagecooltimemap)[FB1MobileMessageCustomResponse](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessagecustomresponse)[FB1MobileMessageData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessagedata)[FB1MobileMessageDelayInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessagedelayinfo)
