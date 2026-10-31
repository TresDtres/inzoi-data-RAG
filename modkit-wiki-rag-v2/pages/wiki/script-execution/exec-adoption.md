---
document_id: "e05b865ca90fcb8addeadf5e8af17c326a41fc8f89bb42be0f249e9454d631c1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adoption"
title: "Execute_Adoption"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:12+00:00"
content_sha256: "41a8a1cf9b52c4227ca360f5dfdce17b3d9019afc923c2b1e783a4e58ff628f2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-adoption"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Initiates the adoption process for the entity specified by BaseObject. Sends adoption data to the server and starts the adoption process of the type specified by S1. Only triggers for the possessed (player-controlled) entity, and is skipped if the household is already at maximum member capacity.

# Parameters

| ParameterDescriptionBaseObjectThe entity requesting adoption (typically Self).S1Adoption type (e.g., PhysicalAdoption, MedicalAdoption). |
| --- |
| BaseObjectThe entity requesting adoption (typically Self).S1Adoption type (e.g., PhysicalAdoption, MedicalAdoption). |
| S1Adoption type (e.g., PhysicalAdoption, MedicalAdoption). |

# Examples

| DescriptionBaseObjectCommandS1Start a physical adoption processSelfAdoptionPhysicalAdoptionStart a medical adoption processSelfAdoptionMedicalAdoption |
| --- |
| Start a physical adoption processSelfAdoptionPhysicalAdoptionStart a medical adoption processSelfAdoptionMedicalAdoption |
| Start a medical adoption processSelfAdoptionMedicalAdoption |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoFamily & Life Events[AddFamilyMonitoringNotification](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addfamilymonitoringnotification)[ChildBirth](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-childbirth)[Cohabit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cohabit)[Death](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-death)[Divorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-divorce)[Marriage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-marriage)[Pregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pregnancy)
