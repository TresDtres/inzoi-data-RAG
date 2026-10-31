---
document_id: "695e381d9b35071ab4e4a3bca8bb373a8516eda920975d4e12dcc3adb7561e0c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1freelancepenaltyflowstate"
title: "B1FreelancePenaltyFlowState"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:54:48+00:00"
content_sha256: "5bcc21c99a85a6d3e6a6c906f5eccf96bc37eb26a87d690f54134e6904cd41c8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1freelancepenaltyflowstate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

Runtime state tracking for the penalty flow after a delivery order failure/cancellation. Persisted via CBOR for Save/Load support.

| PropertyTypeDescriptionMetadataOwnerEntityIdFB1EntityIdEntity ID of the character this penalty flow belongs to.bActiveboolWhether a penalty flow is currently active.PathEB1FreelancePenaltyPathWhich penalty path (Easy/Normal vs Hard/Expert) is in progress.OrderTemplateIdFNameOrder template ID of the failed/cancelled order that triggered this penalty.TargetItemIdFNameTarget item ID used to compute the breach penalty amount.PenaltyTimeTaskIdFB1TimeTaskIdTime task ID scheduling the next penalty step.NextTriggerTicksint64Timer target tick (used to compute remaining time on Save/Load). |
| --- |
| OwnerEntityIdFB1EntityIdEntity ID of the character this penalty flow belongs to.bActiveboolWhether a penalty flow is currently active.PathEB1FreelancePenaltyPathWhich penalty path (Easy/Normal vs Hard/Expert) is in progress.OrderTemplateIdFNameOrder template ID of the failed/cancelled order that triggered this penalty.TargetItemIdFNameTarget item ID used to compute the breach penalty amount.PenaltyTimeTaskIdFB1TimeTaskIdTime task ID scheduling the next penalty step.NextTriggerTicksint64Timer target tick (used to compute remaining time on Save/Load). |
| bActiveboolWhether a penalty flow is currently active.PathEB1FreelancePenaltyPathWhich penalty path (Easy/Normal vs Hard/Expert) is in progress.OrderTemplateIdFNameOrder template ID of the failed/cancelled order that triggered this penalty.TargetItemIdFNameTarget item ID used to compute the breach penalty amount.PenaltyTimeTaskIdFB1TimeTaskIdTime task ID scheduling the next penalty step.NextTriggerTicksint64Timer target tick (used to compute remaining time on Save/Load). |
| PathEB1FreelancePenaltyPathWhich penalty path (Easy/Normal vs Hard/Expert) is in progress.OrderTemplateIdFNameOrder template ID of the failed/cancelled order that triggered this penalty.TargetItemIdFNameTarget item ID used to compute the breach penalty amount.PenaltyTimeTaskIdFB1TimeTaskIdTime task ID scheduling the next penalty step.NextTriggerTicksint64Timer target tick (used to compute remaining time on Save/Load). |
| OrderTemplateIdFNameOrder template ID of the failed/cancelled order that triggered this penalty.TargetItemIdFNameTarget item ID used to compute the breach penalty amount.PenaltyTimeTaskIdFB1TimeTaskIdTime task ID scheduling the next penalty step.NextTriggerTicksint64Timer target tick (used to compute remaining time on Save/Load). |
| TargetItemIdFNameTarget item ID used to compute the breach penalty amount.PenaltyTimeTaskIdFB1TimeTaskIdTime task ID scheduling the next penalty step.NextTriggerTicksint64Timer target tick (used to compute remaining time on Save/Load). |
| PenaltyTimeTaskIdFB1TimeTaskIdTime task ID scheduling the next penalty step.NextTriggerTicksint64Timer target tick (used to compute remaining time on Save/Load). |
| NextTriggerTicksint64Timer target tick (used to compute remaining time on Save/Load). |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoFreelance[FB1FreelanceActiveOrderData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1freelanceactiveorderdata)[FB1FreelanceCategoryTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1freelancecategorytablerow)[FB1FreelanceClient](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1freelanceclient)[FB1FreelanceClientInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1freelanceclientinfo)[FB1FreelanceClientPool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1freelanceclientpool)[FB1FreelanceClientRequestInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1freelanceclientrequestinfo)[FB1FreelanceCurrencyModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1freelancecurrencymodifier)[FB1FreelanceDecisionAnswerData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1freelancedecisionanswerdata)[FB1FreelanceDecisionFlowState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1freelancedecisionflowstate)[FB1FreelanceDecisionResultText](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1freelancedecisionresulttext)[FB1FreelanceDecisionResultTextPerGrade](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1freelancedecisionresulttextpergrade)[FB1FreelanceDecisionStepData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1freelancedecisionstepdata)
