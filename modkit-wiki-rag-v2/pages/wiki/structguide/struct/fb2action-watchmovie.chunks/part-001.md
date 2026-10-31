---
document_id: "3fbcec494059ab90a79004b26176bb99e021c724cee90a47bb82f8de07234b58"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-watchmovie"
title: "B2Action_WatchMovie"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:53+00:00"
content_sha256: "326110e27dfaed6468d599fdacbda97f1105f8f3ad2496d615f498032c1a99ae"
chunk: 1
chunk_count: 11
page_type: "article"
route: "wiki/structguide/struct/fb2action-watchmovie"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Plays a movie-watching animation while registering the character as an audience member of the target movie screen for the action's duration. * =============== * Note: * OnPlay(): Registers the character as current audience of the movie screen. * OnFinish(): Unregisters the character from the movie screen's audience before finishing. * OnCanceled(): Stops only the action's montage (preserving the seated posture montage), unregisters from the audience, and skips the base EndSection playback to avoid breaking the seated pose.
