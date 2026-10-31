---
document_id: "10913c92140e28a993b28d80495f391662de77c44c13dd02de8bc4b6d11006c3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-sendinsurancestatusmessage"
title: "Execute_SendInsuranceStatusMessage"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:52+00:00"
content_sha256: "ba0c97de3b3bf43db1f478d0888f02f921e6b468f6802dc5f1ce934f3a6532b6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-sendinsurancestatusmessage"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Sends an insurance status message for the household that the entity belongs to. If the household has joined insurances, sends the S1 message (which must include the {JoinedInsurances} format token). If the household has no joined insurances, sends the S2 message instead.

# Parameters

| ParameterDescriptionBaseObjectThe entity whose household insurance status is reported (Self or Target).S1CustomMobileMessage ID to send when the household has joined insurances.S2CustomMobileMessage ID to send when the household has no joined insurances. |
| --- |
| BaseObjectThe entity whose household insurance status is reported (Self or Target).S1CustomMobileMessage ID to send when the household has joined insurances.S2CustomMobileMessage ID to send when the household has no joined insurances. |
| S1CustomMobileMessage ID to send when the household has joined insurances.S2CustomMobileMessage ID to send when the household has no joined insurances. |
| S2CustomMobileMessage ID to send when the household has no joined insurances. |

# Examples

| DescriptionBaseObjectCommandS1S2Send insurance status check message to SelfSelfSendInsuranceStatusMessageInsurance_StatusCheck_2Insurance_StatusCheck_1Send insurance status check message to TargetTargetSendInsuranceStatusMessageInsurance_StatusCheck_2Insurance_StatusCheck_1 |
| --- |
| Send insurance status check message to SelfSelfSendInsuranceStatusMessageInsurance_StatusCheck_2Insurance_StatusCheck_1Send insurance status check message to TargetTargetSendInsuranceStatusMessageInsurance_StatusCheck_2Insurance_StatusCheck_1 |
| Send insurance status check message to TargetTargetSendInsuranceStatusMessageInsurance_StatusCheck_2Insurance_StatusCheck_1 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoUI, Message & Popup[AddSpeechBubble](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addspeechbubble)[CharacterArrivedPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-characterarrivedpopup)[CustomMobileMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessage)[CustomMobileMessageAll](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageall)[CustomMobileMessageForMeetNow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageformeetnow)[CustomMobileMessagePool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessagepool)[CustomMobileMessageUnknownResidenceFamily](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageunknownresidencefamily)[OpenChoiceCardPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-openchoicecardpopup)[OpenCreateSocialEventPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencreatesocialeventpopup)[OpenUI](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-openui)[PopupMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-popupmessage)[RemoveSpeechBubble](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removespeechbubble)
