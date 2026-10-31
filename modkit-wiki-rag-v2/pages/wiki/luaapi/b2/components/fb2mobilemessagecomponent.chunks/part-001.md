---
document_id: "cf3ea78199d532615ad0d56e9125cb608aeefe5efa9fa7465ec98612aa56997c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2mobilemessagecomponent"
title: "FB2MobileMessageComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:14+00:00"
content_sha256: "4a174371bcb41a323069c910e1e2becdee677808bf4ca36e285dc18100044557"
chunk: 1
chunk_count: 65
page_type: "article"
route: "wiki/luaapi/b2/components/fb2mobilemessagecomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Component that manages mobile messages.

# Metadata

| FieldValueKind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2MobileMessageComponent')` |
| --- |
| Kind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2MobileMessageComponent')` |
| EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2MobileMessageComponent')` |
| Category`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2MobileMessageComponent')` |
| Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2MobileMessageComponent')` |
| Require`require('Components.B2MobileMessageComponent')` |

# Properties (11)

| NameTypeDescription`ContactMap`[`FB1MobileContactMap`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1mobilecontactmap)Key: target entity id; Value: whether owner has blocked target.`CurrentTimeTaskIds``FB1TimeTaskId[]``GlobalSentOnceMessageList`[`FB1SentOnceMessageList`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1sentoncemessagelist)`MessageCooltime`[`FB1MobileMessageCooltimeMap`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1mobilemessagecooltimemap)key : owner id`MessageList`[`FB1MobileMessageListMap`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1mobilemessagelistmap)key : owner id`MessageListBySystem`[`FB1MobileMessageListBySystemMap`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/fb1mobilemessagelistbysystemmap)key : owner id`PendingResponseReply``FB1ResponseReplyRequest[]``SendMessageHour``integer``SendMessageMinute``integer``bSendMessage``boolean``bSetMessageTime``boolean` |
| --- |
| `ContactMap`[`FB1MobileContactMap`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1mobilecontactmap)Key: target entity id; Value: whether owner has blocked target.`CurrentTimeTaskIds``FB1TimeTaskId[]``GlobalSentOnceMessageList`[`FB1SentOnceMessageList`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1sentoncemessagelist)`MessageCooltime`[`FB1MobileMessageCooltimeMap`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1mobilemessagecooltimemap)key : owner id`MessageList`[`FB1MobileMessageListMap`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1mobilemessagelistmap)key : owner id`MessageListBySystem`[`FB1MobileMessageListBySystemMap`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/fb1mobilemessagelistbysystemmap)key : owner id`PendingResponseReply``FB1ResponseReplyRequest[]``SendMessageHour``integer``SendMessageMinute``integer``bSendMessage``boolean``bSetMessageTime``boolean` |
| `CurrentTimeTaskIds``FB1TimeTaskId[]``GlobalSentOnceMessageList`[`FB1SentOnceMessageList`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1sentoncemessagelist)`MessageCooltime`[`FB1MobileMessageCooltimeMap`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1mobilemessagecooltimemap)key : owner id`MessageList`[`FB1MobileMessageListMap`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1mobilemessagelistmap)key : owner id`MessageListBySystem`[`FB1MobileMessageListBySystemMap`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/fb1mobilemessagelistbysystemmap)key : owner id`PendingResponseReply``FB1ResponseReplyRequest[]``SendMessageHour``integer``SendMessageMinute``integer``bSendMessage``boolean``bSetMessageTime``boolean` |
| `GlobalSentOnceMessageList`[`FB1SentOnceMessageList`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1sentoncemessagelist)`MessageCooltime`[`FB1MobileMessageCooltimeMap`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1mobilemessagecooltimemap)key : owner id`MessageList`[`FB1MobileMessageListMap`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1mobilemessagelistmap)key : owner id`MessageListBySystem`[`FB1MobileMessageListBySystemMap`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/fb1mobilemessagelistbysystemmap)key : owner id`PendingResponseReply``FB1ResponseReplyRequest[]``SendMessageHour``integer``SendMessageMinute``integer``bSendMessage``boolean``bSetMessageTime``boolean` |
| `MessageCooltime`[`FB1MobileMessageCooltimeMap`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1mobilemessagecooltimemap)key : owner id`MessageList`[`FB1MobileMessageListMap`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1mobilemessagelistmap)key : owner id`MessageListBySystem`[`FB1MobileMessageListBySystemMap`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/fb1mobilemessagelistbysystemmap)key : owner id`PendingResponseReply``FB1ResponseReplyRequest[]``SendMessageHour``integer``SendMessageMinute``integer``bSendMessage``boolean``bSetMessageTime``boolean` |
| `MessageList`[`FB1MobileMessageListMap`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1mobilemessagelistmap)key : owner id`MessageListBySystem`[`FB1MobileMessageListBySystemMap`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/fb1mobilemessagelistbysystemmap)key : owner id`PendingResponseReply``FB1ResponseReplyRequest[]``SendMessageHour``integer``SendMessageMinute``integer``bSendMessage``boolean``bSetMessageTime``boolean` |
| `MessageListBySystem`[`FB1MobileMessageListBySystemMap`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/fb1mobilemessagelistbysystemmap)key : owner id`PendingResponseReply``FB1ResponseReplyRequest[]``SendMessageHour``integer``SendMessageMinute``integer``bSendMessage``boolean``bSetMessageTime``boolean` |
| `PendingResponseReply``FB1ResponseReplyRequest[]``SendMessageHour``integer``SendMessageMinute``integer``bSendMessage``boolean``bSetMessageTime``boolean` |
| `SendMessageHour``integer``SendMessageMinute``integer``bSendMessage``boolean``bSetMessageTime``boolean` |
| `SendMessageMinute``integer``bSendMessage``boolean``bSetMessageTime``boolean` |
| `bSendMessage``boolean``bSetMessageTime``boolean` |
| `bSetMessageTime``boolean` |

# Functions (59)
