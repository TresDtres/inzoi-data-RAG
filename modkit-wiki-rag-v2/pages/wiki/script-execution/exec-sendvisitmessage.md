---
document_id: "8949579d53d6b8712a527920f99d2c1ef8a0df1e2429201c9137c569d46f409b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-sendvisitmessage"
title: "Execute_SendVisitMessage"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:53+00:00"
content_sha256: "702b8d28a290d507fe3287c48744704fd27203d10f4ad99313af3bb4e99f9264"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-sendvisitmessage"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Sends a visit message containing the destination Site name from the BaseObject character to the other character. The message text specified by S1 must include a {SiteName} format parameter which is filled in with the site's localized name.

# Parameters

| ParameterDescriptionBaseObjectDetermines the sender: Self sends to Target; Target sends to SelfS1Text string ID containing a {SiteName} format parameter for the visit destination |
| --- |
| BaseObjectDetermines the sender: Self sends to Target; Target sends to SelfS1Text string ID containing a {SiteName} format parameter for the visit destination |
| S1Text string ID containing a {SiteName} format parameter for the visit destination |

# Examples

| DescriptionBaseObjectCommandS1Self sends a visit announcement message to TargetSelfSendVisitMessageMessage_VisitAnnounce_TextTarget sends a visit reply message back to SelfTargetSendVisitMessageMessage_VisitReply_TextSelf announces imminent arrival at a friend's houseSelfSendVisitMessageMessage_ArrivingSoon_Text |
| --- |
| Self sends a visit announcement message to TargetSelfSendVisitMessageMessage_VisitAnnounce_TextTarget sends a visit reply message back to SelfTargetSendVisitMessageMessage_VisitReply_TextSelf announces imminent arrival at a friend's houseSelfSendVisitMessageMessage_ArrivingSoon_Text |
| Target sends a visit reply message back to SelfTargetSendVisitMessageMessage_VisitReply_TextSelf announces imminent arrival at a friend's houseSelfSendVisitMessageMessage_ArrivingSoon_Text |
| Self announces imminent arrival at a friend's houseSelfSendVisitMessageMessage_ArrivingSoon_Text |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoUI, Message & Popup[AddSpeechBubble](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addspeechbubble)[CharacterArrivedPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-characterarrivedpopup)[CustomMobileMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessage)[CustomMobileMessageAll](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageall)[CustomMobileMessageForMeetNow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageformeetnow)[CustomMobileMessagePool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessagepool)[CustomMobileMessageUnknownResidenceFamily](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageunknownresidencefamily)[OpenChoiceCardPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-openchoicecardpopup)[OpenCreateSocialEventPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencreatesocialeventpopup)[OpenUI](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-openui)[PopupMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-popupmessage)[RemoveSpeechBubble](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removespeechbubble)
