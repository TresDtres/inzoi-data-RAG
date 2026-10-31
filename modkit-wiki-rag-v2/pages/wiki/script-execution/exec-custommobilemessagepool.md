---
document_id: "627eec4240c28f6b93dd284fa6b35af67df47cf7a789c88dd88f4a93740342c1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessagepool"
title: "Execute_CustomMobileMessagePool"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:23+00:00"
content_sha256: "2b46b3d7653309029d25bccb3645fea0a5c519fd81bda204f732dfa8a93e1e77"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-custommobilemessagepool"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Randomly selects and sends a CustomMobileMessage from a pool. Messages on cooldown are skipped; if all are on cooldown, the least recently sent message is chosen (excluding the very latest).

# Parameters

| ParameterDescriptionBaseObjectReference entity; sender and receiver are determined by MobileMessagePartiesS1CustomMobileMessagePoolId (linked to CustomMobileMessagePool.json) |
| --- |
| BaseObjectReference entity; sender and receiver are determined by MobileMessagePartiesS1CustomMobileMessagePoolId (linked to CustomMobileMessagePool.json) |
| S1CustomMobileMessagePoolId (linked to CustomMobileMessagePool.json) |

# Examples

| DescriptionBaseObjectCommandS1Send a random message from the daily conversation poolSelfCustomMobileMessagePoolDailyChat_Pool_001Send a random greeting message from the greeting poolSelfCustomMobileMessagePoolGreeting_Pool_01Send a random event message from the event message poolSelfCustomMobileMessagePoolEventMessage_Pool_01 |
| --- |
| Send a random message from the daily conversation poolSelfCustomMobileMessagePoolDailyChat_Pool_001Send a random greeting message from the greeting poolSelfCustomMobileMessagePoolGreeting_Pool_01Send a random event message from the event message poolSelfCustomMobileMessagePoolEventMessage_Pool_01 |
| Send a random greeting message from the greeting poolSelfCustomMobileMessagePoolGreeting_Pool_01Send a random event message from the event message poolSelfCustomMobileMessagePoolEventMessage_Pool_01 |
| Send a random event message from the event message poolSelfCustomMobileMessagePoolEventMessage_Pool_01 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoUI, Message & Popup[AddSpeechBubble](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addspeechbubble)[CharacterArrivedPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-characterarrivedpopup)[CustomMobileMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessage)[CustomMobileMessageAll](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageall)[CustomMobileMessageForMeetNow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageformeetnow)[CustomMobileMessageUnknownResidenceFamily](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageunknownresidencefamily)[OpenChoiceCardPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-openchoicecardpopup)[OpenCreateSocialEventPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencreatesocialeventpopup)[OpenUI](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-openui)[PopupMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-popupmessage)[RemoveSpeechBubble](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removespeechbubble)[SendInsuranceMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-sendinsurancemessage)
