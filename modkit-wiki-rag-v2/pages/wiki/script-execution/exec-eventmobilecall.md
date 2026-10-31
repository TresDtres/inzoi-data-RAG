---
document_id: "d30ebca38ec0689168bd1bcd58a20006ada66d670a01695fa990dc5ec9ee8cbc"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-eventmobilecall"
title: "Execute_EventMobileCall"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:27+00:00"
content_sha256: "8a85f88230c3996e8cf9065c0ee41a07087b005f6cc386b0f22eccdb89bd9c2e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-eventmobilecall"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Opens a ChoiceCard popup for a specified Event-type MobileCall. Succeeds only when BaseObject is the currently possessed player entity. S1 specifies the call direction (Send or Receive).

# Parameters

| ParameterDescriptionBaseObjectThe entity involved in the callS1Call direction: "Send" (BaseObject calls) or "Receive" (BaseObject receives)S2MobileCall ID (from MobileCall data table, must be of Event type) |
| --- |
| BaseObjectThe entity involved in the callS1Call direction: "Send" (BaseObject calls) or "Receive" (BaseObject receives)S2MobileCall ID (from MobileCall data table, must be of Event type) |
| S1Call direction: "Send" (BaseObject calls) or "Receive" (BaseObject receives)S2MobileCall ID (from MobileCall data table, must be of Event type) |
| S2MobileCall ID (from MobileCall data table, must be of Event type) |

# Examples

| DescriptionBaseObjectCommandS1S2Open a send-direction event call ChoiceCard for SelfSelfEventMobileCallSendEventCall_001Open a receive-direction event call ChoiceCard for SelfSelfEventMobileCallReceiveEventCall_002 |
| --- |
| Open a send-direction event call ChoiceCard for SelfSelfEventMobileCallSendEventCall_001Open a receive-direction event call ChoiceCard for SelfSelfEventMobileCallReceiveEventCall_002 |
| Open a receive-direction event call ChoiceCard for SelfSelfEventMobileCallReceiveEventCall_002 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoPhone & Messaging[AddPhoneNumber](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addphonenumber)[BlockPhoneNumber](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-blockphonenumber)[ChangeChannel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changechannel)[PlayMovie](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-playmovie)[PlayVideo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-playvideo)[ReceiveMobileCall](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-receivemobilecall)[RemovePhoneNumber](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removephonenumber)[SendMobileCall](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-sendmobilecall)[StartMic](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-startmic)[StopMic](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-stopmic)[StopMovie](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-stopmovie)[UnblockPhoneNumber](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-unblockphonenumber)
