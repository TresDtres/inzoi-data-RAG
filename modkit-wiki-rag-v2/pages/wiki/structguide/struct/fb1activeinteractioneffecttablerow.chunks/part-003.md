---
document_id: "4f2f21b2c3b18f1d3e2065c8a66a754e7ed925ab6c6989d126b436adf8717d28"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1activeinteractioneffecttablerow"
title: "B1ActiveInteractionEffectTableRow"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:48:06+00:00"
content_sha256: "07eebcf528a9068dff7f3fabde797f2a7fbb73d7fba84d153da7004ddb97dd8b"
chunk: 3
chunk_count: 3
page_type: "article"
route: "wiki/structguide/struct/fb1activeinteractioneffecttablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

to the knockback anim either way. NAME_None keeps this row's own scripts. Use it to keep knockdown-only outcomes (long invincibility, heavy damage) off the non-ragdoll hit. Only ScriptIds and PostReactionScriptIds are taken from the fallback row: its HitReactionType is forced to the knockback anim, and AllowedAttackTargets keeps using this row's value (the hit was already gated by it), so setting those on the fallback row has no effect.Category: B1ActiveInteractionEffectTableRow Foreign: ActiveInteractionEffect.IdAllowedAttackTargetsEB1AttackTargetMatrixLiving/ghost status combination (attacker -> victim) for which AttackHit is allowed. Set a single predefined combo alias (e.g. LivingCannotHitGhost). None (unset) means no restriction (all allowed), preserving legacy behavior.Category: B1ActiveInteractionEffectTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| RagdollFailEffectIdFNameEffect whose scripts run instead of this row's when the RagdollProbability roll fails; the reaction is downgraded to the knockback anim either way. NAME_None keeps this row's own scripts. Use it to keep knockdown-only outcomes (long invincibility, heavy damage) off the non-ragdoll hit. Only ScriptIds and PostReactionScriptIds are taken from the fallback row: its HitReactionType is forced to the knockback anim, and AllowedAttackTargets keeps using this row's value (the hit was already gated by it), so setting those on the fallback row has no effect.Category: B1ActiveInteractionEffectTableRow Foreign: ActiveInteractionEffect.IdAllowedAttackTargetsEB1AttackTargetMatrixLiving/ghost status combination (attacker -> victim) for which AttackHit is allowed. Set a single predefined combo alias (e.g. LivingCannotHitGhost). None (unset) means no restriction (all allowed), preserving legacy behavior.Category: B1ActiveInteractionEffectTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| AllowedAttackTargetsEB1AttackTargetMatrixLiving/ghost status combination (attacker -> victim) for which AttackHit is allowed. Set a single predefined combo alias (e.g. LivingCannotHitGhost). None (unset) means no restriction (all allowed), preserving legacy behavior.Category: B1ActiveInteractionEffectTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CommentFStringDev CommentCategory: B1TableRowBase |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoActive[FB1ActiveCalendarEventSchedule](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1activecalendareventschedule)[FB1ActiveInteractionProfileTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1activeinteractionprofiletablerow)[FB1ActivePhysicsParam](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1activephysicsparam)[FB1ActivePhysicsTargetParam](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1activephysicstargetparam)[FB1ActiveWorldCalendarEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1activeworldcalendarevent)
