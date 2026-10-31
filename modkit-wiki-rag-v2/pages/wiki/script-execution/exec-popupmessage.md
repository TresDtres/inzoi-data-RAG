---
document_id: "5ab5dc13c4c298f85e7a731daf695d1867152b19bcb8b47004abbd9d15247ad1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-popupmessage"
title: "Execute_PopupMessage"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:39+00:00"
content_sha256: "7191eb62a6477aa9a672f7b9fbf79b75dbb93a529734a3d98ab075c3227f55d8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-popupmessage"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Opens a popup message UI for the player. The popup is shown only when BaseObject is the currently possessed player entity.

# Parameters

| ParameterDescriptionBaseObjectThe entity receiving the popup; only shown if it is the currently possessed entityS1Popup ID (from Popup data)S2Optional extra parameter for the popup (currently used for the 'Category_Ghost' case) |
| --- |
| BaseObjectThe entity receiving the popup; only shown if it is the currently possessed entityS1Popup ID (from Popup data)S2Optional extra parameter for the popup (currently used for the 'Category_Ghost' case) |
| S1Popup ID (from Popup data)S2Optional extra parameter for the popup (currently used for the 'Category_Ghost' case) |
| S2Optional extra parameter for the popup (currently used for the 'Category_Ghost' case) |

# Examples

| DescriptionBaseObjectCommandS1S2Open a popup for the possessed playerSelfPopupMessagePopup_WelcomeOpen a ghost category popup with an extra parameterSelfPopupMessagePopup_GhostCategory_GhostOpen a confirmation popup for the playerSelfPopupMessagePopup_Confirm |
| --- |
| Open a popup for the possessed playerSelfPopupMessagePopup_WelcomeOpen a ghost category popup with an extra parameterSelfPopupMessagePopup_GhostCategory_GhostOpen a confirmation popup for the playerSelfPopupMessagePopup_Confirm |
| Open a ghost category popup with an extra parameterSelfPopupMessagePopup_GhostCategory_GhostOpen a confirmation popup for the playerSelfPopupMessagePopup_Confirm |
| Open a confirmation popup for the playerSelfPopupMessagePopup_Confirm |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoUI, Message & Popup[AddSpeechBubble](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addspeechbubble)[CharacterArrivedPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-characterarrivedpopup)[CustomMobileMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessage)[CustomMobileMessageAll](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageall)[CustomMobileMessageForMeetNow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageformeetnow)[CustomMobileMessagePool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessagepool)[CustomMobileMessageUnknownResidenceFamily](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageunknownresidencefamily)[OpenChoiceCardPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-openchoicecardpopup)[OpenCreateSocialEventPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencreatesocialeventpopup)[OpenUI](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-openui)[RemoveSpeechBubble](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removespeechbubble)[SendInsuranceMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-sendinsurancemessage)
