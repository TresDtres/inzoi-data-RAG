---
document_id: "fbfaf97d11fa4a2fdf2e11278b519a14e07f4a5f3b1260c94ab0fa5520d98c7e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cohabit"
title: "Execute_Cohabit"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:22+00:00"
content_sha256: "5c9c1d34c2d116db5e3ead32c475b58a18d087235685a3ca5de1b8223ceb7c42"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-cohabit"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Sends a move-in or move-out packet request to start or end cohabitation between Self and Target. The action is determined by the CohabitMoveMode specified in S1: CohabitStart to begin cohabitation, CohabitEnd to end it. The packet is rejected if S1 is not a valid CohabitMoveMode.

# Parameters

| ParameterDescriptionBaseObjectThe initiating character who triggers the cohabit requestS1CohabitMoveMode: "CohabitStart" to begin cohabitation, "CohabitEnd" to end it |
| --- |
| BaseObjectThe initiating character who triggers the cohabit requestS1CohabitMoveMode: "CohabitStart" to begin cohabitation, "CohabitEnd" to end it |
| S1CohabitMoveMode: "CohabitStart" to begin cohabitation, "CohabitEnd" to end it |

# Examples

| DescriptionBaseObjectCommandSelf proposes to move in with TargetSelfCohabitSelf ends cohabitation with TargetSelfCohabitTarget initiates moving in with SelfTargetCohabitTarget requests to end cohabitation with SelfTargetCohabit |
| --- |
| Self proposes to move in with TargetSelfCohabitSelf ends cohabitation with TargetSelfCohabitTarget initiates moving in with SelfTargetCohabitTarget requests to end cohabitation with SelfTargetCohabit |
| Self ends cohabitation with TargetSelfCohabitTarget initiates moving in with SelfTargetCohabitTarget requests to end cohabitation with SelfTargetCohabit |
| Target initiates moving in with SelfTargetCohabitTarget requests to end cohabitation with SelfTargetCohabit |
| Target requests to end cohabitation with SelfTargetCohabit |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoFamily & Life Events[AddFamilyMonitoringNotification](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addfamilymonitoringnotification)[Adoption](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adoption)[ChildBirth](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-childbirth)[Death](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-death)[Divorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-divorce)[Marriage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-marriage)[Pregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pregnancy)
