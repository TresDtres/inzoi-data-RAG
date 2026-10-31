---
document_id: "d1075432be3b5db2139607b6041ae9837bc3a7a7cab2165ae937f593780afdae"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageall"
title: "Execute_CustomMobileMessageAll"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:23+00:00"
content_sha256: "9b1f1f88aed1236254e989d9f1203f4c9699e776b7dd22d0edee432f0c2c033f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-custommobilemessageall"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Broadcasts a custom mobile message to all active ResidenceFamily characters who are able to receive messages. The message text can include format arguments substituting Self and Target character names.

# Parameters

| ParameterDescriptionBaseObjectReference entity; sender system ID is determined by MobileMessagePartiesS1CustomMobileMessageId (linked to CustomMobileMessage.json) |
| --- |
| BaseObjectReference entity; sender system ID is determined by MobileMessagePartiesS1CustomMobileMessageId (linked to CustomMobileMessage.json) |
| S1CustomMobileMessageId (linked to CustomMobileMessage.json) |

# Examples

| DescriptionBaseObjectCommandS1Send an announcement to all residence family membersSelfCustomMobileMessageAllAnnouncement_001Broadcast a community event notice to all active residentsSelfCustomMobileMessageAllCommunityEvent_NoticeSend a neighborhood alert to all residence family charactersSelfCustomMobileMessageAllNeighborhood_Alert_01 |
| --- |
| Send an announcement to all residence family membersSelfCustomMobileMessageAllAnnouncement_001Broadcast a community event notice to all active residentsSelfCustomMobileMessageAllCommunityEvent_NoticeSend a neighborhood alert to all residence family charactersSelfCustomMobileMessageAllNeighborhood_Alert_01 |
| Broadcast a community event notice to all active residentsSelfCustomMobileMessageAllCommunityEvent_NoticeSend a neighborhood alert to all residence family charactersSelfCustomMobileMessageAllNeighborhood_Alert_01 |
| Send a neighborhood alert to all residence family charactersSelfCustomMobileMessageAllNeighborhood_Alert_01 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoUI, Message & Popup[AddSpeechBubble](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addspeechbubble)[CharacterArrivedPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-characterarrivedpopup)[CustomMobileMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessage)[CustomMobileMessageForMeetNow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageformeetnow)[CustomMobileMessagePool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessagepool)[CustomMobileMessageUnknownResidenceFamily](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageunknownresidencefamily)[OpenChoiceCardPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-openchoicecardpopup)[OpenCreateSocialEventPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencreatesocialeventpopup)[OpenUI](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-openui)[PopupMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-popupmessage)[RemoveSpeechBubble](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removespeechbubble)[SendInsuranceMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-sendinsurancemessage)
