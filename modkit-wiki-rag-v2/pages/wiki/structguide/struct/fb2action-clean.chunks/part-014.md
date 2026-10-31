---
document_id: "cfb0806d2e7e55ee18376969d6742aef7b08c3ca5497314e05c8bb3256c433d6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-clean"
title: "B2Action_Clean"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:31+00:00"
content_sha256: "4437e2d4f71aed215437962494613fd34feff4ea58fa7354156fe9ee6a7ab4ed"
chunk: 14
chunk_count: 14
page_type: "article"
route: "wiki/structguide/struct/fb2action-clean"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

read directly by FB2ActionPlayer for sequencing (the IsWaitFinishAction() getter instead reads Action.IsWaitFinishAction live)AutoInsertTypeEB2ActionAutoInsertTypeType of action that was auto-inserted before this one (e.g. WalkTo, ChangePosture) |
| bMultiFlagboolSet by looping actions (PlayAnim, BookRead, Eat, WaitTalkSequence) once a loop iteration completes; read/reset by FB2ActionPlayer to gate multi-interaction selectionTalkInstanceIdFB1TalkInstanceIdId of the talk instance this action is linked to, set externally by FB2InteractionPlayer::LinkActions()TalkSubjectEntityIdFB1EntityIdEntity id of the talk subject linked to this action, set externally by FB2InteractionPlayer::LinkActions()/OnTalkSpaceParamChanged()bIsWaitFinishEventboolCached copy of Action.IsWaitFinishAction taken at Init(); read directly by FB2ActionPlayer for sequencing (the IsWaitFinishAction() getter instead reads Action.IsWaitFinishAction live)AutoInsertTypeEB2ActionAutoInsertTypeType of action that was auto-inserted before this one (e.g. WalkTo, ChangePosture) |
| TalkInstanceIdFB1TalkInstanceIdId of the talk instance this action is linked to, set externally by FB2InteractionPlayer::LinkActions()TalkSubjectEntityIdFB1EntityIdEntity id of the talk subject linked to this action, set externally by FB2InteractionPlayer::LinkActions()/OnTalkSpaceParamChanged()bIsWaitFinishEventboolCached copy of Action.IsWaitFinishAction taken at Init(); read directly by FB2ActionPlayer for sequencing (the IsWaitFinishAction() getter instead reads Action.IsWaitFinishAction live)AutoInsertTypeEB2ActionAutoInsertTypeType of action that was auto-inserted before this one (e.g. WalkTo, ChangePosture) |
| TalkSubjectEntityIdFB1EntityIdEntity id of the talk subject linked to this action, set externally by FB2InteractionPlayer::LinkActions()/OnTalkSpaceParamChanged()bIsWaitFinishEventboolCached copy of Action.IsWaitFinishAction taken at Init(); read directly by FB2ActionPlayer for sequencing (the IsWaitFinishAction() getter instead reads Action.IsWaitFinishAction live)AutoInsertTypeEB2ActionAutoInsertTypeType of action that was auto-inserted before this one (e.g. WalkTo, ChangePosture) |
| bIsWaitFinishEventboolCached copy of Action.IsWaitFinishAction taken at Init(); read directly by FB2ActionPlayer for sequencing (the IsWaitFinishAction() getter instead reads Action.IsWaitFinishAction live)AutoInsertTypeEB2ActionAutoInsertTypeType of action that was auto-inserted before this one (e.g. WalkTo, ChangePosture) |
| AutoInsertTypeEB2ActionAutoInsertTypeType of action that was auto-inserted before this one (e.g. WalkTo, ChangePosture) |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoF[FAtlasMaterialKey](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fatlasmaterialkey)[FB2Action_ApplyRandomPresetToMannequin](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-applyrandompresettomannequin)[FB2Action_Arrest](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-arrest)[FB2Action_Attack](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-attack)[FB2Action_AutoCraftByCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-autocraftbycategory)[FB2Action_Bargain](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-bargain)[FB2Action_Base](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-base)[FB2Action_Binocular](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-binocular)[FB2Action_BlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-blowcandle)[FB2Action_BlowCandle_Coop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-blowcandle-coop)[FB2Action_BookRead](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-bookread)[FB2Action_Buy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-buy)
