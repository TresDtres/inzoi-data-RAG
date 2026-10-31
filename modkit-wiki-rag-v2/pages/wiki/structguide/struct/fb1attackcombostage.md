---
document_id: "98aac1ec6720ad9f649c639e1ec213492ed7a11177e1a28a9fcfc56131f14b88"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1attackcombostage"
title: "B1AttackComboStage"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:25+00:00"
content_sha256: "e955d3da00d8463dc1308f006b02cd3e4befcc18eac423ffbbc85e7b6ca6dcf3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1attackcombostage"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- One stage of an attack combo. Pairs the attack animation with the AttackHit effect its strike applies to the victim. * The stage is picked by combo index (% Num); anim and effect are always kept together so their indices never drift apart.

| PropertyTypeDescriptionMetadataAnimIdFNameAttack animation for this combo stage.Category: B1AttackComboStage Foreign: AnimCharacter_Interaction.IdHitEffectIdFNameAttackHit effect this stage's strike applies to the victim; the single source of the per-stage effect (required). e.g. a jab stage points to a weak Animation effect, a finisher stage to a Ragdoll / long-invincibility effect.Category: B1AttackComboStage Foreign: ActiveInteractionEffect.Id |
| --- |
| AnimIdFNameAttack animation for this combo stage.Category: B1AttackComboStage Foreign: AnimCharacter_Interaction.IdHitEffectIdFNameAttackHit effect this stage's strike applies to the victim; the single source of the per-stage effect (required). e.g. a jab stage points to a weak Animation effect, a finisher stage to a Ragdoll / long-invincibility effect.Category: B1AttackComboStage Foreign: ActiveInteractionEffect.Id |
| HitEffectIdFNameAttackHit effect this stage's strike applies to the victim; the single source of the per-stage effect (required). e.g. a jab stage points to a weak Animation effect, a finisher stage to a Ragdoll / long-invincibility effect.Category: B1AttackComboStage Foreign: ActiveInteractionEffect.Id |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)
