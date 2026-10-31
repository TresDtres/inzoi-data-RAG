---
document_id: "2f63e7696f8b82b28b089157f51ce5e9bc5cf4b7347b9fa4caba14faefb9d5be"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1taskinfo"
title: "B1TaskInfo"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:04+00:00"
content_sha256: "a364aef8dbffc3b0f3d598f9a9f22c79f17a273917fc63b68b2c48494adbf725"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1taskinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Defines a single task step within a cooperative action, including scripts, target filters, and role playing info.

| PropertyTypeDescriptionMetadataStepint32Step index for this task (0-999).Category: B1TaskInfo ClampMax: 999 ClampMin: 0StepScriptInfosTArrayScripts to execute at this step.Category: B1TaskInfoStepTargetFilterIdsTArrayTarget filter IDs applied when selecting targets for this step.Category: B1TaskInfo Foreign: TargetFilter.IdReleaseMainTargetObjectboolWhether to release the main target object after this step.Category: B1TaskInfoRolePlayingInfosTArrayList of role playing info entries executed during this task step.Category: B1TaskInfo |
| --- |
| Stepint32Step index for this task (0-999).Category: B1TaskInfo ClampMax: 999 ClampMin: 0StepScriptInfosTArrayScripts to execute at this step.Category: B1TaskInfoStepTargetFilterIdsTArrayTarget filter IDs applied when selecting targets for this step.Category: B1TaskInfo Foreign: TargetFilter.IdReleaseMainTargetObjectboolWhether to release the main target object after this step.Category: B1TaskInfoRolePlayingInfosTArrayList of role playing info entries executed during this task step.Category: B1TaskInfo |
| StepScriptInfosTArrayScripts to execute at this step.Category: B1TaskInfoStepTargetFilterIdsTArrayTarget filter IDs applied when selecting targets for this step.Category: B1TaskInfo Foreign: TargetFilter.IdReleaseMainTargetObjectboolWhether to release the main target object after this step.Category: B1TaskInfoRolePlayingInfosTArrayList of role playing info entries executed during this task step.Category: B1TaskInfo |
| StepTargetFilterIdsTArrayTarget filter IDs applied when selecting targets for this step.Category: B1TaskInfo Foreign: TargetFilter.IdReleaseMainTargetObjectboolWhether to release the main target object after this step.Category: B1TaskInfoRolePlayingInfosTArrayList of role playing info entries executed during this task step.Category: B1TaskInfo |
| ReleaseMainTargetObjectboolWhether to release the main target object after this step.Category: B1TaskInfoRolePlayingInfosTArrayList of role playing info entries executed during this task step.Category: B1TaskInfo |
| RolePlayingInfosTArrayList of role playing info entries executed during this task step.Category: B1TaskInfo |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)
