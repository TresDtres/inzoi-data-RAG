---
document_id: "3fee884b26265c36befbd5eff98dc44ff447250f1516270cd234fa9a9b09c4e9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1activeinteractionprofiletablerow"
title: "FB1ActiveInteractionProfileTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:09+00:00"
content_sha256: "76d6c82da6f532df0c8d7951199986986e927c9b898760b2ec2767f6a187442d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1activeinteractionprofiletablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Per-object active interaction profile. Resolved via Object.GrabDtId -> Grab.ActiveProfileId. When empty/unmatched, command default animations and policies are used.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (5)

| NameTypeDescription`AttackCombo``FB1AttackComboStage[]`Attack combo stages. Index cycles per consecutive Attack input (% Num). Each stage pairs an attack anim with an AttackHit effect. (Attack is right-hand only for now.)`AttackStartEffectId``string`Effect applied when an attack interaction is successfully queued.`ThrowHandAnimId``string`Throw HandAnim id. Resolver applies B2AnimationHelper::ConvertHandAnimId with the throwing hand.`ThrowHitEffectId``string`Effect applied to a character struck by this object while it is thrown (in active-physics flight). Resolved by object id at hit time (the object has already left the hand), and object-tag override still applies (e.g. frying pan). Optional: when unset, a thrown object hitting a character produces no effect.`ThrowHitRagdollDropEffectId``string`Effect applied instead of ThrowHitEffectId when the object was launched by the automatic hand-emptying throw on ragdoll entry. That path blames the character who dropped it, i.e. the victim of the original attack, so it must stay free of assault crime, police response and aggro. The object-tag override is not applied on this path either (those rows are attack-flavored). Optional: when unset, a ragdoll-dropped object only plays the hit reaction motion with no effect. |
| --- |
| `AttackCombo``FB1AttackComboStage[]`Attack combo stages. Index cycles per consecutive Attack input (% Num). Each stage pairs an attack anim with an AttackHit effect. (Attack is right-hand only for now.)`AttackStartEffectId``string`Effect applied when an attack interaction is successfully queued.`ThrowHandAnimId``string`Throw HandAnim id. Resolver applies B2AnimationHelper::ConvertHandAnimId with the throwing hand.`ThrowHitEffectId``string`Effect applied to a character struck by this object while it is thrown (in active-physics flight). Resolved by object id at hit time (the object has already left the hand), and object-tag override still applies (e.g. frying pan). Optional: when unset, a thrown object hitting a character produces no effect.`ThrowHitRagdollDropEffectId``string`Effect applied instead of ThrowHitEffectId when the object was launched by the automatic hand-emptying throw on ragdoll entry. That path blames the character who dropped it, i.e. the victim of the original attack, so it must stay free of assault crime, police response and aggro. The object-tag override is not applied on this path either (those rows are attack-flavored). Optional: when unset, a ragdoll-dropped object only plays the hit reaction motion with no effect. |
| `AttackStartEffectId``string`Effect applied when an attack interaction is successfully queued.`ThrowHandAnimId``string`Throw HandAnim id. Resolver applies B2AnimationHelper::ConvertHandAnimId with the throwing hand.`ThrowHitEffectId``string`Effect applied to a character struck by this object while it is thrown (in active-physics flight). Resolved by object id at hit time (the object has already left the hand), and object-tag override still applies (e.g. frying pan). Optional: when unset, a thrown object hitting a character produces no effect.`ThrowHitRagdollDropEffectId``string`Effect applied instead of ThrowHitEffectId when the object was launched by the automatic hand-emptying throw on ragdoll entry. That path blames the character who dropped it, i.e. the victim of the original attack, so it must stay free of assault crime, police response and aggro. The object-tag override is not applied on this path either (those rows are attack-flavored). Optional: when unset, a ragdoll-dropped object only plays the hit reaction motion with no effect. |
| `ThrowHandAnimId``string`Throw HandAnim id. Resolver applies B2AnimationHelper::ConvertHandAnimId with the throwing hand.`ThrowHitEffectId``string`Effect applied to a character struck by this object while it is thrown (in active-physics flight). Resolved by object id at hit time (the object has already left the hand), and object-tag override still applies (e.g. frying pan). Optional: when unset, a thrown object hitting a character produces no effect.`ThrowHitRagdollDropEffectId``string`Effect applied instead of ThrowHitEffectId when the object was launched by the automatic hand-emptying throw on ragdoll entry. That path blames the character who dropped it, i.e. the victim of the original attack, so it must stay free of assault crime, police response and aggro. The object-tag override is not applied on this path either (those rows are attack-flavored). Optional: when unset, a ragdoll-dropped object only plays the hit reaction motion with no effect. |
| `ThrowHitEffectId``string`Effect applied to a character struck by this object while it is thrown (in active-physics flight). Resolved by object id at hit time (the object has already left the hand), and object-tag override still applies (e.g. frying pan). Optional: when unset, a thrown object hitting a character produces no effect.`ThrowHitRagdollDropEffectId``string`Effect applied instead of ThrowHitEffectId when the object was launched by the automatic hand-emptying throw on ragdoll entry. That path blames the character who dropped it, i.e. the victim of the original attack, so it must stay free of assault crime, police response and aggro. The object-tag override is not applied on this path either (those rows are attack-flavored). Optional: when unset, a ragdoll-dropped object only plays the hit reaction motion with no effect. |
| `ThrowHitRagdollDropEffectId``string`Effect applied instead of ThrowHitEffectId when the object was launched by the automatic hand-emptying throw on ragdoll entry. That path blames the character who dropped it, i.e. the victim of the original attack, so it must stay free of assault crime, police response and aggro. The object-tag override is not applied on this path either (those rows are attack-flavored). Optional: when unset, a ragdoll-dropped object only plays the hit reaction motion with no effect. |
