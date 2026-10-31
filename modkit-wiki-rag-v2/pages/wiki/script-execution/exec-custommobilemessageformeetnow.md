---
document_id: "5f48cdf16155e63b6790e5332194a67d45e9c4349707462ee9c4143d7b46416a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageformeetnow"
title: "Execute_CustomMobileMessageForMeetNow"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:23+00:00"
content_sha256: "ceab563f1f7d653a261ee2a53b5a8bb8fec9edfe1d8aff919956cf42fdb43dbc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-custommobilemessageformeetnow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Sends a custom mobile message with an override schedule that directs the recipient to visit a specified Site upon acceptance.

# Parameters

| ParameterDescriptionBaseObjectReference entity; sender and receiver are determined by MobileMessagePartiesS1CustomMobileMessageId (linked to CustomMobileMessage.json)S2SiteId to visit when the message is acceptedF1Duration in hours to add to the current time for the override schedule (default: 2) |
| --- |
| BaseObjectReference entity; sender and receiver are determined by MobileMessagePartiesS1CustomMobileMessageId (linked to CustomMobileMessage.json)S2SiteId to visit when the message is acceptedF1Duration in hours to add to the current time for the override schedule (default: 2) |
| S1CustomMobileMessageId (linked to CustomMobileMessage.json)S2SiteId to visit when the message is acceptedF1Duration in hours to add to the current time for the override schedule (default: 2) |
| S2SiteId to visit when the message is acceptedF1Duration in hours to add to the current time for the override schedule (default: 2) |
| F1Duration in hours to add to the current time for the override schedule (default: 2) |

# Examples

| DescriptionBaseObjectCommandS1S2F1Invite Self to visit a friend's home for 2 hoursSelfCustomMobileMessageForMeetNowInviteVisit_001Site_FriendHome_012Invite Target to meet at the park for 3 hoursTargetCustomMobileMessageForMeetNowInviteVisit_002Site_Park_013Send a meet-now message with a default 2-hour scheduleSelfCustomMobileMessageForMeetNowMeetNow_001Site_Cafe_01 |
| --- |
| Invite Self to visit a friend's home for 2 hoursSelfCustomMobileMessageForMeetNowInviteVisit_001Site_FriendHome_012Invite Target to meet at the park for 3 hoursTargetCustomMobileMessageForMeetNowInviteVisit_002Site_Park_013Send a meet-now message with a default 2-hour scheduleSelfCustomMobileMessageForMeetNowMeetNow_001Site_Cafe_01 |
| Invite Target to meet at the park for 3 hoursTargetCustomMobileMessageForMeetNowInviteVisit_002Site_Park_013Send a meet-now message with a default 2-hour scheduleSelfCustomMobileMessageForMeetNowMeetNow_001Site_Cafe_01 |
| Send a meet-now message with a default 2-hour scheduleSelfCustomMobileMessageForMeetNowMeetNow_001Site_Cafe_01 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoUI, Message & Popup[AddSpeechBubble](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addspeechbubble)[CharacterArrivedPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-characterarrivedpopup)[CustomMobileMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessage)[CustomMobileMessageAll](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageall)[CustomMobileMessagePool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessagepool)[CustomMobileMessageUnknownResidenceFamily](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageunknownresidencefamily)[OpenChoiceCardPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-openchoicecardpopup)[OpenCreateSocialEventPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencreatesocialeventpopup)[OpenUI](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-openui)[PopupMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-popupmessage)[RemoveSpeechBubble](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removespeechbubble)[SendInsuranceMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-sendinsurancemessage)
