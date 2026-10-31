---
document_id: "a70fdfc780410102abe580002b4257539bee321376875e30e9309255892ed410"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isaggrotarget"
title: "Condition_IsAggroTarget"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:19+00:00"
content_sha256: "4da96fd095b13861c318baa2ece8e4de40c5af012a0fb62077096dd411569b06"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isaggrotarget"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether NonBaseObject (the counterpart) is held as an aggro entry by BaseObject (the Source). With BaseObject == Self this answers "is the counterpart in my aggro list". Both checks look at the Source->Target direction only (not the reverse Target->Source).

S1 selects the check mode:

- S1 == NAME_None → presence check. True when the counterpart is anywhere in Source's aggro list (B2AggroHelper::IsAggroTargetOf).
- S1 == "Top" → top-target check. True only when the counterpart is Source's current highest-aggro (chase) target (B2AggroHelper::GetTopTarget).

"Top" is a literal sentinel string (case-sensitive), not an Aggro.json row Id.

# Parameters

| ParameterDescriptionBaseObjectThe Source character whose aggro list is inspectedNonBaseObjectThe counterpart character to look for (resolved automatically as the opposite of BaseObject)CompareTypeEqual: true when the (mode) condition holds. NotEqual: true when it does not.S1NAME_None: presence in the aggro list. "Top": is the highest-aggro target. |
| --- |
| BaseObjectThe Source character whose aggro list is inspectedNonBaseObjectThe counterpart character to look for (resolved automatically as the opposite of BaseObject)CompareTypeEqual: true when the (mode) condition holds. NotEqual: true when it does not.S1NAME_None: presence in the aggro list. "Top": is the highest-aggro target. |
| NonBaseObjectThe counterpart character to look for (resolved automatically as the opposite of BaseObject)CompareTypeEqual: true when the (mode) condition holds. NotEqual: true when it does not.S1NAME_None: presence in the aggro list. "Top": is the highest-aggro target. |
| CompareTypeEqual: true when the (mode) condition holds. NotEqual: true when it does not.S1NAME_None: presence in the aggro list. "Top": is the highest-aggro target. |
| S1NAME_None: presence in the aggro list. "Top": is the highest-aggro target. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1If the counterpart is in Self's aggro listSelfIsAggroTargetEqualIf the counterpart is not in Self's aggro listSelfIsAggroTargetNotEqualIf the counterpart is Self's highest-aggro targetSelfIsAggroTargetEqualTop |
| --- |
| If the counterpart is in Self's aggro listSelfIsAggroTargetEqualIf the counterpart is not in Self's aggro listSelfIsAggroTargetNotEqualIf the counterpart is Self's highest-aggro targetSelfIsAggroTargetEqualTop |
| If the counterpart is not in Self's aggro listSelfIsAggroTargetNotEqualIf the counterpart is Self's highest-aggro targetSelfIsAggroTargetEqualTop |
| If the counterpart is Self's highest-aggro targetSelfIsAggroTargetEqualTop |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCrime, Loan & Insurance[CanPayInsuranceFee](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpayinsurancefee)[CriminalBehaviorCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-criminalbehaviorcount)[HasAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasaggro)[HasInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasinsurance)[HasMortgageLoan](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmortgageloan)[HasUsuryLoan](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasusuryloan)[ImprisonmentCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-imprisonmentcount)[IsDelayInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isdelayinsurance)[LoanOverdueCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-loanoverduecount)
