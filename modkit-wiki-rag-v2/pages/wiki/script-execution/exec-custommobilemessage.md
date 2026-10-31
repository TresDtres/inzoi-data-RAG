---
document_id: "fa542cfa05a1221ba61aa0dd81942fddcff616bcf7b61cd401f755c1913a4d79"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessage"
title: "Execute_CustomMobileMessage"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:23+00:00"
content_sha256: "c23a775b05d6d4bf40fd6f5cfe1776494467223c42dcdcec3f8ed968847c7f3b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-custommobilemessage"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Sends a custom mobile message to the recipient determined by MobileMessageParties data. If no MobileMessageParties data is available, BaseObject is treated as sender and the other entity as receiver.

# Parameters

| ParameterDescriptionBaseObjectReference entity; sender and receiver are determined by MobileMessagePartiesS1CustomMobileMessageId (linked to id in CustomMobileMessage.json)S2UseDeathReason to inject the death cause into the body, otherwise None |
| --- |
| BaseObjectReference entity; sender and receiver are determined by MobileMessagePartiesS1CustomMobileMessageId (linked to id in CustomMobileMessage.json)S2UseDeathReason to inject the death cause into the body, otherwise None |
| S1CustomMobileMessageId (linked to id in CustomMobileMessage.json)S2UseDeathReason to inject the death cause into the body, otherwise None |
| S2UseDeathReason to inject the death cause into the body, otherwise None |

S2=UseDeathReason only has an effect on a script run from the death distribution task, which is what carries the cause; anywhere else the cause is empty and the body prints without it. The message body must contain a {DeathReason} placeholder for the cause to appear.

# Examples

| DescriptionBaseObjectCommandS1S2Send a donation thank-you text messageSelfCustomMobileMessageAtm_Donation_ResultNoneSend a birthday greeting messageSelfCustomMobileMessageBirthday_GreetingNoneSend a welcome message from a friendTargetCustomMobileMessageWelcome_Message_01NoneSend the obituary with the death causeTargetCustomMobileMessageDead_MessageUseDeathReason |
| --- |
| Send a donation thank-you text messageSelfCustomMobileMessageAtm_Donation_ResultNoneSend a birthday greeting messageSelfCustomMobileMessageBirthday_GreetingNoneSend a welcome message from a friendTargetCustomMobileMessageWelcome_Message_01NoneSend the obituary with the death causeTargetCustomMobileMessageDead_MessageUseDeathReason |
| Send a birthday greeting messageSelfCustomMobileMessageBirthday_GreetingNoneSend a welcome message from a friendTargetCustomMobileMessageWelcome_Message_01NoneSend the obituary with the death causeTargetCustomMobileMessageDead_MessageUseDeathReason |
| Send a welcome message from a friendTargetCustomMobileMessageWelcome_Message_01NoneSend the obituary with the death causeTargetCustomMobileMessageDead_MessageUseDeathReason |
| Send the obituary with the death causeTargetCustomMobileMessageDead_MessageUseDeathReason |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoUI, Message & Popup[AddSpeechBubble](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addspeechbubble)[CharacterArrivedPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-characterarrivedpopup)[CustomMobileMessageAll](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageall)[CustomMobileMessageForMeetNow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageformeetnow)[CustomMobileMessagePool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessagepool)[CustomMobileMessageUnknownResidenceFamily](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageunknownresidencefamily)[OpenChoiceCardPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-openchoicecardpopup)[OpenCreateSocialEventPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencreatesocialeventpopup)[OpenUI](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-openui)[PopupMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-popupmessage)[RemoveSpeechBubble](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removespeechbubble)[SendInsuranceMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-sendinsurancemessage)
