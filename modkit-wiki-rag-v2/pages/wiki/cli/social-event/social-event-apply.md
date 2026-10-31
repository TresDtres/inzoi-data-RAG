---
document_id: "caee0737e61f80bc24142fcd6b1c724ac492342e36f9b391f52246526d0ad412"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/social-event/social-event-apply"
title: "social_event.apply"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:17+00:00"
content_sha256: "3a2c7a517459ddbba51486be98aafa415be1faec43a1977717c2d06711d9a8ff"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/social-event/social-event-apply"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Cheat-creates a social event (SiteEvent) at the possessed character's site using the given template id. Mirrors UB2CheatManager::B2ApplySocialEvent.

# Metadata

| FieldValueDisplayApply Social EventCategory`social_event`Access`UserCheat`Scope`B2Authority`Tags—Aliases`ApplySocialEvent` |
| --- |
| DisplayApply Social EventCategory`social_event`Access`UserCheat`Scope`B2Authority`Tags—Aliases`ApplySocialEvent` |
| Category`social_event`Access`UserCheat`Scope`B2Authority`Tags—Aliases`ApplySocialEvent` |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases`ApplySocialEvent` |
| Scope`B2Authority`Tags—Aliases`ApplySocialEvent` |
| Tags—Aliases`ApplySocialEvent` |
| Aliases`ApplySocialEvent` |

# Parameters

| NameTypeRequiredDefaultDescriptionsocial_event_idnameyes—SiteEvent TableRow id (e.g. SocialEvent_BirthdayParty)group_typenameno—Candidate scope. Empty uses relationships; all/all_characters/all_citizens uses every loaded character.site_idnameno—Optional event site id. Empty uses the possessed character's current site. |
| --- |
| social_event_idnameyes—SiteEvent TableRow id (e.g. SocialEvent_BirthdayParty)group_typenameno—Candidate scope. Empty uses relationships; all/all_characters/all_citizens uses every loaded character.site_idnameno—Optional event site id. Empty uses the possessed character's current site. |
| group_typenameno—Candidate scope. Empty uses relationships; all/all_characters/all_citizens uses every loaded character.site_idnameno—Optional event site id. Empty uses the possessed character's current site. |
| site_idnameno—Optional event site id. Empty uses the possessed character's current site. |

# Usage

```
await inzoi.cli.execute('social_event.apply', {  social_event_id: '',  group_type: '', // optional  site_id: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsosocial-event[social_event.cancel_role_check](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/social-event/social-event-cancel-role-check)[social_event.debug](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/social-event/social-event-debug)[social_event.debug_by_id](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/social-event/social-event-debug-by-id)
