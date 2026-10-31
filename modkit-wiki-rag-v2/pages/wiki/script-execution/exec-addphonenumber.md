---
document_id: "ac0da7c8ca87e0b6de8594999d1b555c555bc2527874a2b28d27ecdd81481959"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addphonenumber"
title: "Execute_AddPhoneNumber"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:08+00:00"
content_sha256: "b488ecf3519759d8e66d33b50c69dc141520176908608319e3f5c466d9fe13dd"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addphonenumber"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Saves the non-BaseObject's phone number into the BaseObject's contact list. A phone number is required to send messages to a character, unless the CustomMobileMessage has bNeedPhoneNumber set to false.

# Parameters

| ParameterDescriptionBaseObjectThe entity that will save the phone number |
| --- |
| BaseObjectThe entity that will save the phone number |

# Examples

| DescriptionBaseObjectCommandSelf saves Target's numberSelfAddPhoneNumberTarget saves Self's numberTargetAddPhoneNumber |
| --- |
| Self saves Target's numberSelfAddPhoneNumberTarget saves Self's numberTargetAddPhoneNumber |
| Target saves Self's numberTargetAddPhoneNumber |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoPhone & Messaging[BlockPhoneNumber](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-blockphonenumber)[ChangeChannel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changechannel)[EventMobileCall](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-eventmobilecall)[PlayMovie](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-playmovie)[PlayVideo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-playvideo)[ReceiveMobileCall](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-receivemobilecall)[RemovePhoneNumber](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removephonenumber)[SendMobileCall](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-sendmobilecall)[StartMic](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-startmic)[StopMic](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-stopmic)[StopMovie](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-stopmovie)[UnblockPhoneNumber](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-unblockphonenumber)
