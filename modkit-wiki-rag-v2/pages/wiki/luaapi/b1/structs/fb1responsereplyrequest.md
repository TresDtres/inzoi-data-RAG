---
document_id: "ec2e0d119a54266a3d3935c3af9495ef769c6e5e6c56c7b12dc0a8aa2a13339e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1responsereplyrequest"
title: "FB1ResponseReplyRequest"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:16+00:00"
content_sha256: "845502d24ca88682c1e059864facdc4d89d4d6b77052ee39796e1b551238182e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1responsereplyrequest"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Request payload for triggering a reply to a received mobile message response. Carries the sender, receiver, response type, and the script to execute for the reply.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`InvitationExpiredAnswerReplyStrId``string`Expired invitation reply text captured when the response is accepted.`MessageResponseScriptIds``string[]`IDs of the scripts to execute as the reply to the response.`Receiver`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character receiving the message.`Sender`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character sending the message.`SenderSystemId``string`System ID of the sender when the sender is a system entity rather than a character.`Type`[`EB1MobileMessageResponseType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1mobilemessageresponsetype)Type of response (Normal, Positive, or Negative) selected by the receiver. |
| --- |
| `InvitationExpiredAnswerReplyStrId``string`Expired invitation reply text captured when the response is accepted.`MessageResponseScriptIds``string[]`IDs of the scripts to execute as the reply to the response.`Receiver`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character receiving the message.`Sender`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character sending the message.`SenderSystemId``string`System ID of the sender when the sender is a system entity rather than a character.`Type`[`EB1MobileMessageResponseType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1mobilemessageresponsetype)Type of response (Normal, Positive, or Negative) selected by the receiver. |
| `MessageResponseScriptIds``string[]`IDs of the scripts to execute as the reply to the response.`Receiver`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character receiving the message.`Sender`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character sending the message.`SenderSystemId``string`System ID of the sender when the sender is a system entity rather than a character.`Type`[`EB1MobileMessageResponseType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1mobilemessageresponsetype)Type of response (Normal, Positive, or Negative) selected by the receiver. |
| `Receiver`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character receiving the message.`Sender`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character sending the message.`SenderSystemId``string`System ID of the sender when the sender is a system entity rather than a character.`Type`[`EB1MobileMessageResponseType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1mobilemessageresponsetype)Type of response (Normal, Positive, or Negative) selected by the receiver. |
| `Sender`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character sending the message.`SenderSystemId``string`System ID of the sender when the sender is a system entity rather than a character.`Type`[`EB1MobileMessageResponseType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1mobilemessageresponsetype)Type of response (Normal, Positive, or Negative) selected by the receiver. |
| `SenderSystemId``string`System ID of the sender when the sender is a system entity rather than a character.`Type`[`EB1MobileMessageResponseType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1mobilemessageresponsetype)Type of response (Normal, Positive, or Negative) selected by the receiver. |
| `Type`[`EB1MobileMessageResponseType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1mobilemessageresponsetype)Type of response (Normal, Positive, or Negative) selected by the receiver. |
