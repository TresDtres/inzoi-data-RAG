---
document_id: "06e1c34070f0082e18f946c9047ffdf6b9cd725451a9d5bf1c882e4033a39c03"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-sendinsurancemessage"
title: "Execute_SendInsuranceMessage"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:52+00:00"
content_sha256: "e6b1908c185ab77ca5298ba5735d002c7f07d44a5d8882b66848c8a96b12b0ac"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-sendinsurancemessage"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Sends an insurance-related mobile message with converted string formats. The message content in S1 supports the format tokens: {InsuranceJoiningFee}, {InsuranceRecurringFee}, {InsuranceReward}. Sender and receiver are determined from MobileMessageParties.json.

# Parameters

| ParameterDescriptionBaseObjectThe entity sending the message (Self). Sender/receiver from MobileMessageParties.S1CustomMobileMessage ID (CustomMobileMessage.json).S2Insurance ID (Insurance.json Id). |
| --- |
| BaseObjectThe entity sending the message (Self). Sender/receiver from MobileMessageParties.S1CustomMobileMessage ID (CustomMobileMessage.json).S2Insurance ID (Insurance.json Id). |
| S1CustomMobileMessage ID (CustomMobileMessage.json).S2Insurance ID (Insurance.json Id). |
| S2Insurance ID (Insurance.json Id). |

# Examples

| DescriptionBaseObjectCommandS1S2Send a life insurance promotion messageSelfSendInsuranceMessageInsurance_Ad_DeathInsurance_LifeSend a vehicle insurance promotion messageSelfSendInsuranceMessageInsurance_Ad_CarInsurance_VehicleSend a health insurance fee noticeSelfSendInsuranceMessageInsurance_Fee_NoticeInsurance_HealthSend a life insurance reward notificationSelfSendInsuranceMessageInsurance_RewardInsurance_Life |
| --- |
| Send a life insurance promotion messageSelfSendInsuranceMessageInsurance_Ad_DeathInsurance_LifeSend a vehicle insurance promotion messageSelfSendInsuranceMessageInsurance_Ad_CarInsurance_VehicleSend a health insurance fee noticeSelfSendInsuranceMessageInsurance_Fee_NoticeInsurance_HealthSend a life insurance reward notificationSelfSendInsuranceMessageInsurance_RewardInsurance_Life |
| Send a vehicle insurance promotion messageSelfSendInsuranceMessageInsurance_Ad_CarInsurance_VehicleSend a health insurance fee noticeSelfSendInsuranceMessageInsurance_Fee_NoticeInsurance_HealthSend a life insurance reward notificationSelfSendInsuranceMessageInsurance_RewardInsurance_Life |
| Send a health insurance fee noticeSelfSendInsuranceMessageInsurance_Fee_NoticeInsurance_HealthSend a life insurance reward notificationSelfSendInsuranceMessageInsurance_RewardInsurance_Life |
| Send a life insurance reward notificationSelfSendInsuranceMessageInsurance_RewardInsurance_Life |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoUI, Message & Popup[AddSpeechBubble](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addspeechbubble)[CharacterArrivedPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-characterarrivedpopup)[CustomMobileMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessage)[CustomMobileMessageAll](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageall)[CustomMobileMessageForMeetNow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageformeetnow)[CustomMobileMessagePool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessagepool)[CustomMobileMessageUnknownResidenceFamily](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageunknownresidencefamily)[OpenChoiceCardPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-openchoicecardpopup)[OpenCreateSocialEventPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencreatesocialeventpopup)[OpenUI](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-openui)[PopupMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-popupmessage)[RemoveSpeechBubble](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removespeechbubble)
