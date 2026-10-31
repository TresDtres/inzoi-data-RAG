---
document_id: "b7c6ab9c0a29394e2c713d1834b62b2c487263f1c25192e0c24c06244ee29144"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1mobilemessagesenddata"
title: "FB1MobileMessageSendData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:30+00:00"
content_sha256: "fa22b04752e4c32d031ed682b69f96f730ff94c763147dd90b5c96b36117112a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1mobilemessagesenddata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Runtime data for a mobile message send response, recording the selected answer type and its string. Optionally stores appointment data when the message is of the Appointment send type.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`AnswerPoolIndex``integer`Index into the answer pool array from which the reply string was chosen.`AnswerStrId``string`String table key of the specific answer text that was selected.`AnswerType`[`EB1MobileMessageResponseType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1mobilemessageresponsetype)Response type (Normal, Positive, or Negative) selected by the receiver.`AppointmentData`[`FB1AppointmentData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appointmentdata)appointment Appointment data associated with this response when the message type is Appointment. |
| --- |
| `AnswerPoolIndex``integer`Index into the answer pool array from which the reply string was chosen.`AnswerStrId``string`String table key of the specific answer text that was selected.`AnswerType`[`EB1MobileMessageResponseType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1mobilemessageresponsetype)Response type (Normal, Positive, or Negative) selected by the receiver.`AppointmentData`[`FB1AppointmentData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appointmentdata)appointment Appointment data associated with this response when the message type is Appointment. |
| `AnswerStrId``string`String table key of the specific answer text that was selected.`AnswerType`[`EB1MobileMessageResponseType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1mobilemessageresponsetype)Response type (Normal, Positive, or Negative) selected by the receiver.`AppointmentData`[`FB1AppointmentData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appointmentdata)appointment Appointment data associated with this response when the message type is Appointment. |
| `AnswerType`[`EB1MobileMessageResponseType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1mobilemessageresponsetype)Response type (Normal, Positive, or Negative) selected by the receiver.`AppointmentData`[`FB1AppointmentData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appointmentdata)appointment Appointment data associated with this response when the message type is Appointment. |
| `AppointmentData`[`FB1AppointmentData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appointmentdata)appointment Appointment data associated with this response when the message type is Appointment. |
