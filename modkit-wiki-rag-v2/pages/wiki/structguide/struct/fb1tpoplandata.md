---
document_id: "ba330e6074674529f71b97e69d81735708d12cde23aac50655a92c37d5ff8280"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1tpoplandata"
title: "B1TPOPlanData"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:50:12+00:00"
content_sha256: "9e4537c033c5ca860c03e6d71de53c5c0bfbf6fe8230a02ea89e2ca8e3de71ef"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1tpoplandata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- TPO Plan data owned by a single site, including base plans and user edits.

| PropertyTypeDescriptionMetadataPlanIdFNamePlan identifier within this site. Base and Override plans use the source TPOPlan row ID.TypeEB1TPOPlanTypeWhether this plan uses base data, overrides a base plan, or is a custom plan.bEnabledboolWhether this plan is enabled for autonomous plan selection.AgingConditionFlagsint32Bitmask of growth stages that can select this plan (EB1GrowthStep).StepsTArrayRequired interaction steps, executed in array order. |
| --- |
| PlanIdFNamePlan identifier within this site. Base and Override plans use the source TPOPlan row ID.TypeEB1TPOPlanTypeWhether this plan uses base data, overrides a base plan, or is a custom plan.bEnabledboolWhether this plan is enabled for autonomous plan selection.AgingConditionFlagsint32Bitmask of growth stages that can select this plan (EB1GrowthStep).StepsTArrayRequired interaction steps, executed in array order. |
| TypeEB1TPOPlanTypeWhether this plan uses base data, overrides a base plan, or is a custom plan.bEnabledboolWhether this plan is enabled for autonomous plan selection.AgingConditionFlagsint32Bitmask of growth stages that can select this plan (EB1GrowthStep).StepsTArrayRequired interaction steps, executed in array order. |
| bEnabledboolWhether this plan is enabled for autonomous plan selection.AgingConditionFlagsint32Bitmask of growth stages that can select this plan (EB1GrowthStep).StepsTArrayRequired interaction steps, executed in array order. |
| AgingConditionFlagsint32Bitmask of growth stages that can select this plan (EB1GrowthStep).StepsTArrayRequired interaction steps, executed in array order. |
| StepsTArrayRequired interaction steps, executed in array order. |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)
