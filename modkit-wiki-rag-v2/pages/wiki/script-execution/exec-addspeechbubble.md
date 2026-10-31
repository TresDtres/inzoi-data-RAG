---
document_id: "0176a949070cacc1b6d7839c3d19450baec3001ed9c47a10695554c82e6d4be3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addspeechbubble"
title: "Execute_AddSpeechBubble"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:10+00:00"
content_sha256: "cde4ef81de017abfd952e7afdf3a866ab940712aa992f7ba255044813f7e6d35"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addspeechbubble"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Displays a speech bubble on the specified BaseObject. The speech bubble can appear immediately or after a configurable delay in seconds.

# Parameters

| ParameterDescriptionBaseObjectThe entity that will display the speech bubble (Self or Target).S1The SpeechBubble ID to display.F1Delay time in seconds before the speech bubble appears (0 = instant). |
| --- |
| BaseObjectThe entity that will display the speech bubble (Self or Target).S1The SpeechBubble ID to display.F1Delay time in seconds before the speech bubble appears (0 = instant). |
| S1The SpeechBubble ID to display.F1Delay time in seconds before the speech bubble appears (0 = instant). |
| F1Delay time in seconds before the speech bubble appears (0 = instant). |

# Examples

| DescriptionBaseObjectCommandDisplay a speech bubble on Self immediatelySelfAddSpeechBubbleDisplay a speech bubble on Self after 3 secondsSelfAddSpeechBubbleDisplay a speech bubble on Target after 5 secondsTargetAddSpeechBubble |
| --- |
| Display a speech bubble on Self immediatelySelfAddSpeechBubbleDisplay a speech bubble on Self after 3 secondsSelfAddSpeechBubbleDisplay a speech bubble on Target after 5 secondsTargetAddSpeechBubble |
| Display a speech bubble on Self after 3 secondsSelfAddSpeechBubbleDisplay a speech bubble on Target after 5 secondsTargetAddSpeechBubble |
| Display a speech bubble on Target after 5 secondsTargetAddSpeechBubble |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoUI, Message & Popup[CharacterArrivedPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-characterarrivedpopup)[CustomMobileMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessage)[CustomMobileMessageAll](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageall)[CustomMobileMessageForMeetNow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageformeetnow)[CustomMobileMessagePool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessagepool)[CustomMobileMessageUnknownResidenceFamily](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageunknownresidencefamily)[OpenChoiceCardPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-openchoicecardpopup)[OpenCreateSocialEventPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencreatesocialeventpopup)[OpenUI](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-openui)[PopupMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-popupmessage)[RemoveSpeechBubble](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removespeechbubble)[SendInsuranceMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-sendinsurancemessage)
