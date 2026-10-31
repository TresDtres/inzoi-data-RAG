---
document_id: "bb087d65ad3bad5d41748f57251b78e1aa1d297f9aaf53e4a74a75f4b77b2cf4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-startbinocularview"
title: "Execute_StartBinocularView"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:59+00:00"
content_sha256: "43264460caa01be369ac7407ba19c37cdd85c03f32d9ed4046e5f86dfe7e9f08"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-startbinocularview"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Starts the binocular view on the possessed entity. Does nothing otherwise, so autonomy and zoi group play the same montage without any camera change. Place on the NotifyScriptIds of the action that plays the binocular montage, with a RunScript notify at the start of its Loop section.

# Parameters

| ParameterDescriptionBaseObjectThe entity entering the view. Must be Self.F1View duration in real seconds. Must be above 0. |
| --- |
| BaseObjectThe entity entering the view. Must be Self.F1View duration in real seconds. Must be above 0. |
| F1View duration in real seconds. Must be above 0. |

# Examples

| DescriptionBaseObjectCommandF1Observe for 10 real secondsSelfStartBinocularView10 |
| --- |
| Observe for 10 real secondsSelfStartBinocularView10 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoInput & Camera[EmitAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-emitaura)[EnableRagdoll](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-enableragdoll)[EndBinocularView](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-endbinocularview)[StartDualSense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-startdualsense)[StartGyroSensor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-startgyrosensor)[StartTouchPad](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-starttouchpad)[StopDualSense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-stopdualsense)[StopGyroSensor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-stopgyrosensor)[StopTouchPad](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-stoptouchpad)[WithdrawAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-withdrawaura)
