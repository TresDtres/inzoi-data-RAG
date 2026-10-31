---
document_id: "0f52287ff0429e1ef4f6c38b165f161d798e28983faa57ca247bc74412ac71a4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-endbinocularview"
title: "Execute_EndBinocularView"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:27+00:00"
content_sha256: "9e937a7b43fca608f54f4751dd47d1890d6a2d3bf890bc8961a780f6de2ae46c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-endbinocularview"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Restores the camera, time scale and screen filter of the binocular view. The view ends on its own after F1 seconds or on the player's cancel input, so this only covers interactions that end while it is still on. Place on the Finish/CancelScriptIdList of the action that started the view.

# Parameters

| ParameterDescriptionBaseObjectThe entity leaving the view. Must be Self. |
| --- |
| BaseObjectThe entity leaving the view. Must be Self. |

# Examples

| DescriptionBaseObjectCommandLeave the binocular viewSelfEndBinocularView |
| --- |
| Leave the binocular viewSelfEndBinocularView |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoInput & Camera[EmitAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-emitaura)[EnableRagdoll](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-enableragdoll)[StartBinocularView](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-startbinocularview)[StartDualSense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-startdualsense)[StartGyroSensor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-startgyrosensor)[StartTouchPad](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-starttouchpad)[StopDualSense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-stopdualsense)[StopGyroSensor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-stopgyrosensor)[StopTouchPad](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-stoptouchpad)[WithdrawAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-withdrawaura)
