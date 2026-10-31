---
document_id: "99103bf5d8f6fd1c99c19ae2ae2c35376f80fe72483d6dc5a617f910b1d133e9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-talkcontext"
title: "B2Action_TalkContext"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:47+00:00"
content_sha256: "e01e23cdeec1a728729215b9ee892b966401c8b8df72b05ca5b063d1bb1a6cc7"
chunk: 1
chunk_count: 16
page_type: "article"
route: "wiki/structguide/struct/fb2action-talkcontext"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Action that drives a character's talk animation/voice sequence, sourced from the coop Talk action context (FB2ACTalk), including start/finish scripts, look-at target, and forced duration overrides. * =============== * Note: * OnInit(): Resolve the target Entity (self or target depending on BaseObject). * OnPlay(): Skip finishing early if the coop Talk instance is no longer talking, otherwise run OnPlayAction to (re)start the talk sequence. * OnFinish(): Run talk finish scripts, restore hidden grab object visibility, and stop talk voice if voice-only. * OnCanceled(): Restore hidden grab object visibility and stop talk voice if voice-only. * OnTick(): Count down the forced montage duration override and finish the action once it elapses.
