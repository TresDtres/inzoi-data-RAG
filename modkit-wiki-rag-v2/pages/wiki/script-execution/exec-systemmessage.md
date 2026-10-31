---
document_id: "9d446abc84adaecf0019668d4d6464ee041f1a929824ddc392f6bbf47342c23b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-systemmessage"
title: "Execute_SystemMessage"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:03+00:00"
content_sha256: "a8d6c5cde38d5e6d01d1b6d1d1d087a43e8a1a45eb0172c0d0ea1839c1df0c05"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-systemmessage"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Displays a toast/system message to the player for the specified duration. The toast message ID should be built from a Text_* ID by using the text type as a prefix and '_Text' as a suffix. For example, for Text_Message.json's 'Interaction_FailReason_WalkTo', use 'Message_Interaction_FailReason_WalkTo_Text'.

# Parameters

| ParameterDescriptionBaseObjectThe entity for which the message is displayedS1Toast message ID (text type prefix + key + "_Text" suffix)F1Duration in seconds the toast message is displayed |
| --- |
| BaseObjectThe entity for which the message is displayedS1Toast message ID (text type prefix + key + "_Text" suffix)F1Duration in seconds the toast message is displayed |
| S1Toast message ID (text type prefix + key + "_Text" suffix)F1Duration in seconds the toast message is displayed |
| F1Duration in seconds the toast message is displayed |

# Examples

| DescriptionBaseObjectCommandS1F1Display "WalkTo failed reason" text for 2 secondsSelfSystemMessageMessage_Interaction_FailReason_WalkTo_Text2Display a notification message for 3 secondsSelfSystemMessageMessage_Notification_Text3 |
| --- |
| Display "WalkTo failed reason" text for 2 secondsSelfSystemMessageMessage_Interaction_FailReason_WalkTo_Text2Display a notification message for 3 secondsSelfSystemMessageMessage_Notification_Text3 |
| Display a notification message for 3 secondsSelfSystemMessageMessage_Notification_Text3 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoUI, Message & Popup[AddSpeechBubble](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addspeechbubble)[CharacterArrivedPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-characterarrivedpopup)[CustomMobileMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessage)[CustomMobileMessageAll](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageall)[CustomMobileMessageForMeetNow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageformeetnow)[CustomMobileMessagePool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessagepool)[CustomMobileMessageUnknownResidenceFamily](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageunknownresidencefamily)[OpenChoiceCardPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-openchoicecardpopup)[OpenCreateSocialEventPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencreatesocialeventpopup)[OpenUI](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-openui)[PopupMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-popupmessage)[RemoveSpeechBubble](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removespeechbubble)
