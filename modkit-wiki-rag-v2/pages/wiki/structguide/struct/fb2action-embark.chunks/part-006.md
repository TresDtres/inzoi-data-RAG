---
document_id: "42694f04328fee01c20baac64520cd6b336999c14e196a085fe14db00a7bbb52"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-embark"
title: "B2Action_Embark"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:34+00:00"
content_sha256: "9b8aecea5b02ff7341aafcbd387f3a75deca8c21f70be7000f1c462102e92728"
chunk: 6
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-embark"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

sWaitFinishAction() getter instead reads Action.IsWaitFinishAction live)AutoInsertTypeEB2ActionAutoInsertTypeType of action that was auto-inserted before this one (e.g. WalkTo, ChangePosture) |
| bMultiFlagboolSet by looping actions (PlayAnim, BookRead, Eat, WaitTalkSequence) once a loop iteration completes; read/reset by FB2ActionPlayer to gate multi-interaction selectionTalkInstanceIdFB1TalkInstanceIdId of the talk instance this action is linked to, set externally by FB2InteractionPlayer::LinkActions()TalkSubjectEntityIdFB1EntityIdEntity id of the talk subject linked to this action, set externally by FB2InteractionPlayer::LinkActions()/OnTalkSpaceParamChanged()bIsWaitFinishEventboolCached copy of Action.IsWaitFinishAction taken at Init(); read directly by FB2ActionPlayer for sequencing (the IsWaitFinishAction() getter instead reads Action.IsWaitFinishAction live)AutoInsertTypeEB2ActionAutoInsertTypeType of action that was auto-inserted before this one (e.g. WalkTo, ChangePosture) |
| TalkInstanceIdFB1TalkInstanceIdId of the talk instance this action is linked to, set externally by FB2InteractionPlayer::LinkActions()TalkSubjectEntityIdFB1EntityIdEntity id of the talk subject linked to this action, set externally by FB2InteractionPlayer::LinkActions()/OnTalkSpaceParamChanged()bIsWaitFinishEventboolCached copy of Action.IsWaitFinishAction taken at Init(); read directly by FB2ActionPlayer for sequencing (the IsWaitFinishAction() getter instead reads Action.IsWaitFinishAction live)AutoInsertTypeEB2ActionAutoInsertTypeType of action that was auto-inserted before this one (e.g. WalkTo, ChangePosture) |
| TalkSubjectEntityIdFB1EntityIdEntity id of the talk subject linked to this action, set externally by FB2InteractionPlayer::LinkActions()/OnTalkSpaceParamChanged()bIsWaitFinishEventboolCached copy of Action.IsWaitFinishAction taken at Init(); read directly by FB2ActionPlayer for sequencing (the IsWaitFinishAction() getter instead reads Action.IsWaitFinishAction live)AutoInsertTypeEB2ActionAutoInsertTypeType of action that was auto-inserted before this one (e.g. WalkTo, ChangePosture) |
| bIsWaitFinishEventboolCached copy of Action.IsWaitFinishAction taken at Init(); read directly by FB2ActionPlayer for sequencing (the IsWaitFinishAction() getter instead reads Action.IsWaitFinishAction live)AutoInsertTypeEB2ActionAutoInsertTypeType of action that was auto-inserted before this one (e.g. WalkTo, ChangePosture) |
| AutoInsertTypeEB2ActionAutoInsertTypeType of action that was auto-inserted before this one (e.g. WalkTo, ChangePosture) |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoF[FAtlasMaterialKey](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fatlasmaterialkey)[FB2Action_ApplyRandomPresetToMannequin](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-applyrandompresettomannequin)[FB2Action_Arrest](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-arrest)[FB2Action_Attack](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-attack)[FB2Action_AutoCraftByCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-autocraftbycategory)[FB2Action_Bargain](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-bargain)[FB2Action_Base](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-base)[FB2Action_Binocular](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-binocular)[FB2Action_BlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-blowcandle)[FB2Action_BlowCandle_Coop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-blowcandle-coop)[FB2Action_BookRead](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-bookread)[FB2Action_Buy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-buy)
