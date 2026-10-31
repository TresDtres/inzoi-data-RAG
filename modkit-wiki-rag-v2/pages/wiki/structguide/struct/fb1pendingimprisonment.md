---
document_id: "c3fdc4036bf5c3fffa197346ed200111baf40f2667422bd2c7ecb71169f7cbde"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pendingimprisonment"
title: "B1PendingImprisonment"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:55:53+00:00"
content_sha256: "c68bb294a50b02465b33a36db8a2812d13fba2b101eab77ca26a8ca7af48d9cc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1pendingimprisonment"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

An imprisonment that has been decided but cannot be carried out yet, kept until it becomes possible. A Zoi caught while traveling is one case: the jail transfer interaction is blocked in the travel city, so the imprisonment waits here until the Zoi is back in the home city. PlayReason and ApplyScriptId drive execution. CrimeCityName and DeferredTicks are recorded for tracking and must not be used to decide whether the imprisonment can run - that decision belongs to B2CrimeHelper.

| PropertyTypeDescriptionMetadataPlayReasonEB1InteractionPlayReasonPlay reason to use when the deferred imprisonment is finally queued. Invalid means nothing is pending.ApplyScriptIdFNameScript run when the deferred imprisonment is finally queued - the sentence buff, prisoner outfit and such. None means there is nothing to apply, which is also what a save written before this field existed loads as; in that case the script already ran at the moment of the crime, so skipping it is correct.CrimeCityNameFNameCity the crime happened in. Recorded for tracking; execution always uses the currently loaded city.DeferredTicksint64Game ticks at which the imprisonment was deferred. Recorded for tracking. |
| --- |
| PlayReasonEB1InteractionPlayReasonPlay reason to use when the deferred imprisonment is finally queued. Invalid means nothing is pending.ApplyScriptIdFNameScript run when the deferred imprisonment is finally queued - the sentence buff, prisoner outfit and such. None means there is nothing to apply, which is also what a save written before this field existed loads as; in that case the script already ran at the moment of the crime, so skipping it is correct.CrimeCityNameFNameCity the crime happened in. Recorded for tracking; execution always uses the currently loaded city.DeferredTicksint64Game ticks at which the imprisonment was deferred. Recorded for tracking. |
| ApplyScriptIdFNameScript run when the deferred imprisonment is finally queued - the sentence buff, prisoner outfit and such. None means there is nothing to apply, which is also what a save written before this field existed loads as; in that case the script already ran at the moment of the crime, so skipping it is correct.CrimeCityNameFNameCity the crime happened in. Recorded for tracking; execution always uses the currently loaded city.DeferredTicksint64Game ticks at which the imprisonment was deferred. Recorded for tracking. |
| CrimeCityNameFNameCity the crime happened in. Recorded for tracking; execution always uses the currently loaded city.DeferredTicksint64Game ticks at which the imprisonment was deferred. Recorded for tracking. |
| DeferredTicksint64Game ticks at which the imprisonment was deferred. Recorded for tracking. |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)
