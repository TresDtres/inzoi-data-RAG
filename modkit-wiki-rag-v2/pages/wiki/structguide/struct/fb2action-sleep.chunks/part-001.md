---
document_id: "f6eaaae531be2f8da1ec11cb63d057280a42580ffaf9b70d00f9162a4669093a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-sleep"
title: "B2Action_Sleep"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:46+00:00"
content_sha256: "4d8d5b0447f5a979887b0ee62fc9005e293a57e21c38e74ab9ca2eb5f923bebf"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/structguide/struct/fb2action-sleep"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Puts self character to sleep, computing a wake-up time based on time of day and current Sleep stat, and fills the Sleep stat over time until wake-up or an interrupt condition (e.g. low Toilet stat) is met. * =============== * Note: * OnInit(): Caches SelfCharacter/StatComponent, canceling the interaction if either lookup fails. * OnPlay(): Records SleepBeginTime, computes WakeUpTime and initial ProgressTime, marks the possessed household as sleeping, and applies the Sleep buff. * OnFinish(): Clears the household sleeping flag, removes the Sleep buff, and queues a Stand interaction if self's queue is empty. * OnCanceled(): Clears the household sleeping flag, force-removes the Sleep buff, then finishes with no failure reason. * OnTick(): Finishes once WakeUpTime passes or CheckWakeUpCondition() is met; otherwise adds Sleep stat via script each tick (doubled between 1am-4am).
