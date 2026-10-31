---
document_id: "e4f3b85bfe3c73735232cbefa9364a1185eb211362e72df2875d03c1c838e078"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasaggro"
title: "Condition_HasAggro"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:01+00:00"
content_sha256: "a5338c9945d2833688db58e72a315d9b46297cc0230f425c3e7cf2888a8d724c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasaggro"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether BaseObject (the Source) currently holds any aggro. This is a Source-only check and does not inspect NonBaseObject — unlike Condition_IsAggroTarget which answers a Source->counterpart relation.

S1 selects the check mode:

- S1 == NAME_None -> presence check. True when Source holds at least one aggro entry, regardless of Reason (B2AggroHelper::HasActiveAggro).
- S1 == AggroReason -> reason check. True only when Source holds an aggro bucket whose Reason matches S1 (B2AggroHelper::HasAggroByReason).

S1, when set, must be an Aggro.json row Id (e.g. AttackedByOther).

# Parameters

| ParameterDescriptionBaseObjectThe Source character whose aggro is inspectedCompareTypeEqual: true when the (mode) condition holds. NotEqual: true when it does not.S1NAME_None: any aggro presence. Else: AggroReason (Aggro.json Id) to look for. |
| --- |
| BaseObjectThe Source character whose aggro is inspectedCompareTypeEqual: true when the (mode) condition holds. NotEqual: true when it does not.S1NAME_None: any aggro presence. Else: AggroReason (Aggro.json Id) to look for. |
| CompareTypeEqual: true when the (mode) condition holds. NotEqual: true when it does not.S1NAME_None: any aggro presence. Else: AggroReason (Aggro.json Id) to look for. |
| S1NAME_None: any aggro presence. Else: AggroReason (Aggro.json Id) to look for. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1If Self currently holds any aggroSelfHasAggroEqualIf Self currently holds no aggroSelfHasAggroNotEqualIf Self holds AttackedByOther aggroSelfHasAggroEqualAttackedByOther |
| --- |
| If Self currently holds any aggroSelfHasAggroEqualIf Self currently holds no aggroSelfHasAggroNotEqualIf Self holds AttackedByOther aggroSelfHasAggroEqualAttackedByOther |
| If Self currently holds no aggroSelfHasAggroNotEqualIf Self holds AttackedByOther aggroSelfHasAggroEqualAttackedByOther |
| If Self holds AttackedByOther aggroSelfHasAggroEqualAttackedByOther |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCrime, Loan & Insurance[CanPayInsuranceFee](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpayinsurancefee)[CriminalBehaviorCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-criminalbehaviorcount)[HasInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasinsurance)[HasMortgageLoan](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmortgageloan)[HasUsuryLoan](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasusuryloan)[ImprisonmentCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-imprisonmentcount)[IsAggroTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isaggrotarget)[IsDelayInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isdelayinsurance)[LoanOverdueCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-loanoverduecount)
