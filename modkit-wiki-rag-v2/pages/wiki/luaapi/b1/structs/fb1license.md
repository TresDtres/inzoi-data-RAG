---
document_id: "a713f7e723d05bcb46c8b82b90458319599eed06b8b667c9a0e64c5be430724a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1license"
title: "FB1License"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:16+00:00"
content_sha256: "078a5444a8c76003fb2c1e4796067c04f0edb2018542d06ab2e1bdd30211f128"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1license"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Runtime data for a license stored in a component. All licenses (owned/under-review/not-owned) are registered in LicensesMap; the Status field distinguishes the current state.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (9)

| NameTypeDescription`AcquireConditionSatisfiedList``boolean[]`Per-condition satisfaction flags (1:1 mapping with AcquireConditions, same index).`AcquiredTimeTicks``integer`Acquisition time (Ticks).`CompletedOrderCount``integer`Number of completed orders.`CurrentGrade`[`EB1LicenseGrade`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1licensegrade)Current grade.`LicenseId``string`License ID.`ReviewExpireTimeTicks``integer`Review expiry time (valid only when Status == UnderReview).`ReviewStartTimeTicks``integer`Review start time (valid only when Status == UnderReview).`Status`[`EB1FreelanceLicenseStatus`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelancelicensestatus)License status (Owned/UnderReview/Locked/Available).`TrustScore``integer`Trust score (0~100). |
| --- |
| `AcquireConditionSatisfiedList``boolean[]`Per-condition satisfaction flags (1:1 mapping with AcquireConditions, same index).`AcquiredTimeTicks``integer`Acquisition time (Ticks).`CompletedOrderCount``integer`Number of completed orders.`CurrentGrade`[`EB1LicenseGrade`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1licensegrade)Current grade.`LicenseId``string`License ID.`ReviewExpireTimeTicks``integer`Review expiry time (valid only when Status == UnderReview).`ReviewStartTimeTicks``integer`Review start time (valid only when Status == UnderReview).`Status`[`EB1FreelanceLicenseStatus`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelancelicensestatus)License status (Owned/UnderReview/Locked/Available).`TrustScore``integer`Trust score (0~100). |
| `AcquiredTimeTicks``integer`Acquisition time (Ticks).`CompletedOrderCount``integer`Number of completed orders.`CurrentGrade`[`EB1LicenseGrade`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1licensegrade)Current grade.`LicenseId``string`License ID.`ReviewExpireTimeTicks``integer`Review expiry time (valid only when Status == UnderReview).`ReviewStartTimeTicks``integer`Review start time (valid only when Status == UnderReview).`Status`[`EB1FreelanceLicenseStatus`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelancelicensestatus)License status (Owned/UnderReview/Locked/Available).`TrustScore``integer`Trust score (0~100). |
| `CompletedOrderCount``integer`Number of completed orders.`CurrentGrade`[`EB1LicenseGrade`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1licensegrade)Current grade.`LicenseId``string`License ID.`ReviewExpireTimeTicks``integer`Review expiry time (valid only when Status == UnderReview).`ReviewStartTimeTicks``integer`Review start time (valid only when Status == UnderReview).`Status`[`EB1FreelanceLicenseStatus`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelancelicensestatus)License status (Owned/UnderReview/Locked/Available).`TrustScore``integer`Trust score (0~100). |
| `CurrentGrade`[`EB1LicenseGrade`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1licensegrade)Current grade.`LicenseId``string`License ID.`ReviewExpireTimeTicks``integer`Review expiry time (valid only when Status == UnderReview).`ReviewStartTimeTicks``integer`Review start time (valid only when Status == UnderReview).`Status`[`EB1FreelanceLicenseStatus`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelancelicensestatus)License status (Owned/UnderReview/Locked/Available).`TrustScore``integer`Trust score (0~100). |
| `LicenseId``string`License ID.`ReviewExpireTimeTicks``integer`Review expiry time (valid only when Status == UnderReview).`ReviewStartTimeTicks``integer`Review start time (valid only when Status == UnderReview).`Status`[`EB1FreelanceLicenseStatus`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelancelicensestatus)License status (Owned/UnderReview/Locked/Available).`TrustScore``integer`Trust score (0~100). |
| `ReviewExpireTimeTicks``integer`Review expiry time (valid only when Status == UnderReview).`ReviewStartTimeTicks``integer`Review start time (valid only when Status == UnderReview).`Status`[`EB1FreelanceLicenseStatus`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelancelicensestatus)License status (Owned/UnderReview/Locked/Available).`TrustScore``integer`Trust score (0~100). |
| `ReviewStartTimeTicks``integer`Review start time (valid only when Status == UnderReview).`Status`[`EB1FreelanceLicenseStatus`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelancelicensestatus)License status (Owned/UnderReview/Locked/Available).`TrustScore``integer`Trust score (0~100). |
| `Status`[`EB1FreelanceLicenseStatus`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelancelicensestatus)License status (Owned/UnderReview/Locked/Available).`TrustScore``integer`Trust score (0~100). |
| `TrustScore``integer`Trust score (0~100). |
