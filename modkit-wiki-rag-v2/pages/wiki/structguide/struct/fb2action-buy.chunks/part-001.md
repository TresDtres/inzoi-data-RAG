---
document_id: "45dfe6595dc8671afd8e47e43ba1d5b03934ab00850531db289cfaeb1b7313fa"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-buy"
title: "B2Action_Buy"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:29+00:00"
content_sha256: "eb259ecf9859eed69cbd0689044e9d73a56e2dc522eb0efa515fcceca7b800fb"
chunk: 1
chunk_count: 10
page_type: "article"
route: "wiki/structguide/struct/fb2action-buy"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Handles acquiring a purchased/saleable game object: plays a pick-up grab animation for carriable objects (or otherwise places it directly into inventory/site storage), then on finish settles currency payment between buyer and seller, applying HouseholdBiz pricing/ledger rules when bought from a business. * =============== * Param: * S1: BuyPolicyType - purchase policy (e.g. Default vs HouseholdBiz), parsed via NAME2ENUM * S2: - * F1: - * F2: - * Note: * OnInit(): parses BuyPolicyType, caches the self character's PostureComponent, and for carriable targets determines hand/grab style and resolves the pick-up montage. * OnPlay(): plays the pick-up montage for carriable objects, or otherwise places the object directly into the buyer's inventory/home site inventory (spawning fake sold-out replacements for grouped children when needed). * OnFinish(): syncs the grab-hold loop animation and posture state, then charges the buyer and pays the seller (or runs the HouseholdBiz currency-transfer/ledger/desire-gauge/quality-evaluation flow when BuyPolicyType is HouseholdBiz), removing the object from sale and spawning fake sold-out replacements. * OnCanceled(): restores posture pick-up context and, if the grab notify had already fired, records the grabbed entity as the last-grabbed object.
