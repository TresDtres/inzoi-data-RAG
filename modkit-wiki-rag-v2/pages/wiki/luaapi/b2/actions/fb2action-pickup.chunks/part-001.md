---
document_id: "2e93a1e38051fc8c259a9a077ed9eea52cf7aa31a66e5c82e51ed9a0fd52dfc9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-pickup"
title: "FB2Action_PickUp"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:04+00:00"
content_sha256: "69c32b8a8ac84a0e2832cbfd2e4cf6b1a7e3658517f0fdd8fa069adf54cf4622"
chunk: 1
chunk_count: 2
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-pickup"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Pick-up action. Used in various contexts such as PreparedBakery_TakeServedHand (taking a piece), FridgeEatFood_Soup (taking food from the fridge), and PickUp_RightHand (picking up a selected object). Self plays the PickUp command; S1 is the GrabId and S2 the AnimId, with Notify script Ids driving the actual attach/spawn, and TargetEntityId being the source object (fridge, served food, selected object, etc.).

# Metadata

| FieldValueKind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_PickUp')` |
| --- |
| Kind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_PickUp')` |
| EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_PickUp')` |
| Category`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_PickUp')` |
| Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_PickUp')` |
| Require`require('Actions.B2Action_PickUp')` |

# Properties (9)

| NameTypeDescription`AnimMontageName``string`Resolved montage asset name used to play/track the pick-up animation`CarryHandStyle`[`EB1CarryHandStyle`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1carryhandstyle)Carry style (one-hand/two-hand/assist-control) of the object being picked up, drives animation selection and hand attachment`CurrentAnimTime``number`Elapsed time of pick-up anim montage playback (reset to 0 on OnPlay)`GrabId``string`Grab table row id resolved from Action.S1, the target object, or notify scripts; identifies how the object is carried`GrabLoopAnimId``string`Looping carry animation id (from the grab table's LoopAnimId, hand-converted) applied once the object is attached`PickUpAnimId``string`Resolved pick-up montage animation id used to play the grab motion`SelectedHand`[`EB1HandType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1handtype)Hand chosen to carry the picked-up object, determined by hand availability, crafting state, and baby-in-hand rules`TotalPlayLength``number`Total play length of pick-up anim montage (from montage table row)`bUseLeftHand``boolean`Whether to prefer the left hand when both hands are free, set externally via SetUseLeftHand |
| --- |
| `AnimMontageName``string`Resolved montage asset name used to play/track the pick-up animation`CarryHandStyle`[`EB1CarryHandStyle`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1carryhandstyle)Carry style (one-hand/two-hand/assist-control) of the object being picked up, drives animation selection and hand attachment`CurrentAnimTime``number`Elapsed time of pick-up anim montage playback (reset to 0 on OnPlay)`GrabId``string`Grab table row id resolved from Action.S1, the target object, or notify scripts; identifies how the object is carried`GrabLoopAnimId``string`Looping carry animation id (from the grab table's LoopAnimId, hand-converted) applied once the object is attached`PickUpAnimId``string`Resolved pick-up montage animation id used to play the grab motion`SelectedHand`[`EB1HandType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1handtype)Hand chosen to carry the picked-up object, determined by hand availability, crafting state, and baby-in-hand rules`TotalPlayLength``number`Total play length of pick-up anim montage (from montage table row)`bUseLeftHand``boolean`Whether to prefer the left hand when both hands are free, set externally via SetUseLeftHand |
| `CarryHandStyle`[`EB1CarryHandStyle`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1carryhandstyle)Carry style (one-hand/two-hand/assist-control) of the object being picked up, drives animation selection and hand attachment`CurrentAnimTime``number`Elapsed time of pick-up anim montage playback (reset to 0 on OnPlay)`GrabId``string`Grab table row id resolved from Action.S1, the target object, or notify scripts; identifies how the object is carried`GrabLoopAnimId``string`Looping carry animation id (from the grab table's LoopAnimId, hand-converted) applied once the object is attached`PickUpAnimId``string`Resolved pick-up montage animation id used to play the grab motion`SelectedHand`[`EB1HandType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1handtype)Hand chosen to carry the picked-up object, determined by hand availability, crafting state, and baby-in-hand rules`TotalPlayLength``number`Total play length of pick-up anim montage (from montage table row)`bUseLeftHand``boolean`Whether to prefer the left hand when both hands are free, set externally via SetUseLeftHand |
| `CurrentAnimTime``number`Elapsed time of pick-up anim montage playback (reset to 0 on OnPlay)`GrabId``string`Grab table row id resolved from Action.S1, the target object, or notify scripts; identifies how the object is carried`GrabLoopAnimId``string`Looping carry animation id (from the grab table's LoopAnimId, hand-converted) applied once the object is attached`PickUpAnimId``string`Resolved pick-up montage animation id used to play the grab motion`SelectedHand`[`EB1HandType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1handtype)Hand chosen to carry the picked-up object, determined by hand availability, crafting state, and baby-in-hand rules`TotalPlayLength``number`Total play length of pick-up anim montage (from montage table row)`bUseLeftHand``boolean`Whether to prefer the left hand when both hands are free, set externally via SetUseLeftHand |
| `GrabId``string`Grab table row id resolved from Action.S1, the target object, or notify scripts; identifies how the object is carried`GrabLoopAnimId``string`Looping carry animation id (from the grab table's LoopAnimId, hand-converted) applied once the object is attached`PickUpAnimId``string`Resolved pick-up montage animation id used to play the grab motion`SelectedHand`[`EB1HandType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1handtype)Hand chosen to carry the picked-up object, determined by hand availability, crafting state, and baby-in-hand rules`TotalPlayLength``number`Total play length of pick-up anim montage (from montage table row)`bUseLeftHand``boolean`Whether to prefer the left hand when both hands are free, set externally via SetUseLeftHand |
| `GrabLoopAnimId``string`Looping carry animation id (from the grab table's LoopAnimId, hand-converted) applied once the object is attached`PickUpAnimId``string`Resolved pick-up montage animation id used to play the grab motion`SelectedHand`[`EB1HandType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1handtype)Hand chosen to carry the picked-up object, determined by hand availability, crafting state, and baby-in-hand rules`TotalPlayLength``number`Total play length of pick-up anim montage (from montage table row)`bUseLeftHand``boolean`Whether to prefer the left hand when both hands are free, set externally via SetUseLeftHand |
| `PickUpAnimId``string`Resolved pick-up montage animation id used to play the grab motion`SelectedHand`[`EB1HandType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1handtype)Hand chosen to carry the picked-up object, determined by hand availability, crafting state, and baby-in-hand rules`TotalPlayLength``number`Total play length of pick-up anim montage (from montage table row)`bUseLeftHand``boolean`Whether to prefer the left hand when both hands are free, set externally via SetUseLeftHand |
| `SelectedHand`[`EB1HandType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1handtype)Hand chosen to carry the picked-up object, determined by hand availability, crafting state, and baby-in-hand rules`TotalPlayLength``number`Total play length of pick-up anim montage (from montage table row)`bUseLeftHand``boolean`Whether to prefer the left hand when both hands are free, set externally via SetUseLeftHand |
| `TotalPlayLength``number`Total play length of pick-up anim montage (from montage table row)`bUseLeftHand``boolean`Whether to prefer the left hand when both hands are free, set externally via SetUseLeftHand |
| `bUseLeftHand``boolean`Whether to prefer the left hand when both hands are free, set externally via SetUseLeftHand |

# Functions (6)
