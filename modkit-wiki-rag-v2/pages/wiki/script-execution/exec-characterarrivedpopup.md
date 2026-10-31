---
document_id: "9af22e9c818ef9b4149510d72f070205d2fb1a677b1888cea3dda09627e2267d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-characterarrivedpopup"
title: "Execute_CharacterArrivedPopup"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:20+00:00"
content_sha256: "3817cff0bb51b1610789fe5a8104ddf6efce915a2f321d32ad37445ed849de80"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-characterarrivedpopup"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Displays a visitor-arrived popup to the currently possessed player entity when a character arrives. Optionally triggers an interaction bag upon popup confirmation.

# Parameters

| ParameterDescriptionBaseObjectThe entity that receives the popup (must be the currently possessed player entity)S1PopupId to display when the character arrivesS2ExecuteInteractionBagId to trigger upon popup confirmation (optional) |
| --- |
| BaseObjectThe entity that receives the popup (must be the currently possessed player entity)S1PopupId to display when the character arrivesS2ExecuteInteractionBagId to trigger upon popup confirmation (optional) |
| S1PopupId to display when the character arrivesS2ExecuteInteractionBagId to trigger upon popup confirmation (optional) |
| S2ExecuteInteractionBagId to trigger upon popup confirmation (optional) |

# Examples

| DescriptionBaseObjectCommandS1S2Show arrived popup to player when visitor arrivesSelfCharacterArrivedPopupPopup_CharacterArrivedShow arrived popup with interaction bag on visitor arrivalSelfCharacterArrivedPopupPopup_CharacterArrivedInteractionBag_OpenDoorShow arrived popup for a friend from Target sideTargetCharacterArrivedPopupPopup_FriendArrived |
| --- |
| Show arrived popup to player when visitor arrivesSelfCharacterArrivedPopupPopup_CharacterArrivedShow arrived popup with interaction bag on visitor arrivalSelfCharacterArrivedPopupPopup_CharacterArrivedInteractionBag_OpenDoorShow arrived popup for a friend from Target sideTargetCharacterArrivedPopupPopup_FriendArrived |
| Show arrived popup with interaction bag on visitor arrivalSelfCharacterArrivedPopupPopup_CharacterArrivedInteractionBag_OpenDoorShow arrived popup for a friend from Target sideTargetCharacterArrivedPopupPopup_FriendArrived |
| Show arrived popup for a friend from Target sideTargetCharacterArrivedPopupPopup_FriendArrived |

NOTE (receiver contract): B1PacketReceiver_UI::S_OpenCharacterArrivedPopup binds the action button by ListKey "btn0". The S1 popup's primary (action) button ListKey MUST be "btn0".

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoUI, Message & Popup[AddSpeechBubble](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addspeechbubble)[CustomMobileMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessage)[CustomMobileMessageAll](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageall)[CustomMobileMessageForMeetNow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageformeetnow)[CustomMobileMessagePool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessagepool)[CustomMobileMessageUnknownResidenceFamily](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageunknownresidencefamily)[OpenChoiceCardPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-openchoicecardpopup)[OpenCreateSocialEventPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencreatesocialeventpopup)[OpenUI](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-openui)[PopupMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-popupmessage)[RemoveSpeechBubble](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removespeechbubble)[SendInsuranceMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-sendinsurancemessage)
