---
document_id: "4abdc752602ac89fb6cff13f0d0e12350facaf1a7c7e21ed41961cb11c1ebdb2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencreatesocialeventpopup"
title: "Execute_OpenCreateSocialEventPopup"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:35+00:00"
content_sha256: "3745d4c7d975fc3d10c97cbc224f35beaee606256ced92d4777434716b99588d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-opencreatesocialeventpopup"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Opens the social event creation popup UI for the player. Collects all available social event templates whose conditions pass and sends them to the UI. The popup can be focused on a specific event category; if S1 is empty all categories are shown.

# Parameters

| ParameterDescriptionBaseObjectThe Zoi character who will host the social event (must be Self).S1Social event category to focus on in the popup. Leave empty for all categories.S2TimeSettingType for the event start time: NextHour, NextNoon, or CurrentHour.F1Event duration information passed to the start-time calculation. |
| --- |
| BaseObjectThe Zoi character who will host the social event (must be Self).S1Social event category to focus on in the popup. Leave empty for all categories.S2TimeSettingType for the event start time: NextHour, NextNoon, or CurrentHour.F1Event duration information passed to the start-time calculation. |
| S1Social event category to focus on in the popup. Leave empty for all categories.S2TimeSettingType for the event start time: NextHour, NextNoon, or CurrentHour.F1Event duration information passed to the start-time calculation. |
| S2TimeSettingType for the event start time: NextHour, NextNoon, or CurrentHour.F1Event duration information passed to the start-time calculation. |
| F1Event duration information passed to the start-time calculation. |

# Examples

| DescriptionBaseObjectCommandOpen the popup showing all social event categoriesSelfOpenCreateSocialEventPopupOpen the popup focused on the Date categorySelfOpenCreateSocialEventPopupOpen the popup focused on Party with fast noon startSelfOpenCreateSocialEventPopup |
| --- |
| Open the popup showing all social event categoriesSelfOpenCreateSocialEventPopupOpen the popup focused on the Date categorySelfOpenCreateSocialEventPopupOpen the popup focused on Party with fast noon startSelfOpenCreateSocialEventPopup |
| Open the popup focused on the Date categorySelfOpenCreateSocialEventPopupOpen the popup focused on Party with fast noon startSelfOpenCreateSocialEventPopup |
| Open the popup focused on Party with fast noon startSelfOpenCreateSocialEventPopup |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoUI, Message & Popup[AddSpeechBubble](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addspeechbubble)[CharacterArrivedPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-characterarrivedpopup)[CustomMobileMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessage)[CustomMobileMessageAll](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageall)[CustomMobileMessageForMeetNow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageformeetnow)[CustomMobileMessagePool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessagepool)[CustomMobileMessageUnknownResidenceFamily](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-custommobilemessageunknownresidencefamily)[OpenChoiceCardPopup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-openchoicecardpopup)[OpenUI](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-openui)[PopupMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-popupmessage)[RemoveSpeechBubble](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removespeechbubble)[SendInsuranceMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-sendinsurancemessage)
