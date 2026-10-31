---
document_id: "89b38c5edf611ab8610282e5ecf6ba8125ffa64305301e6d635b0d45d8af1e49"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1afterpromchoicecardconfig"
title: "FB1AfterPromChoiceCardConfig"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:09+00:00"
content_sha256: "0801e6179c224a1476728b3ead108995a0e4330729b93b34ce412ffaf1d89d13"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1afterpromchoicecardconfig"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Configures the choice card shown for an after-prom scenario, mapping the speaker's TraitGroup to a specific choice card with a default fallback.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (2)

| NameTypeDescription`DefaultChoiceCardId``string`The default choice card ID used when the speaker's TraitGroup has no mapping.`TraitGroupChoiceCardIds``table<string, string>`The TraitGroup.Id to ChoiceCard.Id mapping; falls back to Default when unmatched. |
| --- |
| `DefaultChoiceCardId``string`The default choice card ID used when the speaker's TraitGroup has no mapping.`TraitGroupChoiceCardIds``table<string, string>`The TraitGroup.Id to ChoiceCard.Id mapping; falls back to Default when unmatched. |
| `TraitGroupChoiceCardIds``table<string, string>`The TraitGroup.Id to ChoiceCard.Id mapping; falls back to Default when unmatched. |
