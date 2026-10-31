---
document_id: "8a58c2ed1f0a3ecb86ae90e7cd647a13d3bacdbb77e734514f8ad02020a5122a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-list"
title: "motion.list"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:09+00:00"
content_sha256: "41262b3dfe3fc2a92a23414c1dfa79113a6fc12a6069fca5cd6cc7081ff29871"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/motion/motion-list"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- List CharacterAnim DataTable row IDs that can be played on a Zoi. IMPORTANT -- filter is effectively REQUIRED: the table holds thousands of rows. Calling motion.list without filter returns a truncated, low-signal sample that wastes tokens. ALWAYS infer a filter keyword from the user's natural-language request and pass filter=. Examples of inference (do this BEFORE calling -- do not call without filter then re-call): 'Make my Zoi dance / show dance motions / 춤추는 모션' -> filter=dance 'Do some yoga / stretching motions / 요가 동작' -> filter=yoga 'Sit down motions / 앉는 모션' -> filter=sit 'Sleep / lie down / 자는 모션 / 눕는 모션' -> filter=sleep (also try: lie, bed) 'Walk / run / move / 걷는 / 달리는' -> filter=walk (or run) 'Cry / sad motion / 우는 모션' -> filter=cry 'Laugh / happy motion / 웃는 모션' -> filter=laugh 'Wave hand / greet / say hi / 인사하는 / 손 흔드는' -> filter=wave (or greet, hi, hello) 'Hug / kiss / romantic / 포옹 / 키스' -> filter=hug (or kiss) 'Eat / drink / 먹는 / 마시는' -> filter=eat (or drink) 'Angry / fight / 화내는 / 싸우는' -> filter=angry (or fight) 'Random / 아무 모션 / 뭐든' -> use motion.play_random instead Only omit filter when the user EXPLICITLY asks 'show me all motions' / '전체 목록 / 전부 / 모든 모션' and is aware the result will be truncated. In that case prefer max= (e.g. 30) and warn the user.

validate=true: only return motions playable by the target character's gender/age/posture. Recommended whenever you plan to call motion.play right after, to avoid 'no valid montage' failures. max=: limit results (default 50, max 500). Smaller is cheaper -- use 20~50 for chat answers. Use the returned anim_id values with motion.play. Metadata FieldValueDisplayList Available MotionsCategory`motion`Access`UserCheat`Scope`B2Authority`Tags—Aliases`MotionList` Parameters NameTypeRequiredDefaultDescriptionfilterstringno—Keyword to filter animation names. STRONGLY recommended -- infer from the user's request (e.g. 'dance motions' -> filter=dance, '요가' -> filter=yoga, '앉는' -> filter=sit). Substring match, case-insensitive.maxintno—Max results (default: 50, max: 500). Use small values (20~50) to keep responses concise.validateboolno—Only return motions playable by the target character (default: false). Set true when you intend to call motion.play next.entity_identityIdno—Target entity ID (used when validate=true; default: possessed) Usage `await inzoi.cli.execute('motion.list', { filter: '', // optional max: 0, // optional validate: false, // optional entity_id: 0, // optional });`

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsomotion[motion.get_current](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-get-current)[motion.get_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-get-info)[motion.play](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-play)[motion.play_random](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-play-random)[motion.stop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-stop)
