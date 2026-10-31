---
document_id: "54bf29258b2d08c749112aa89f10f2a9cd613c819471aa3dc7005caf712008d5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/social-event/social-event-debug"
title: "social_event.debug"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:17+00:00"
content_sha256: "a6e1e084892ea1c3b0899a0a94d0074a372ae7c6c1a3e5ca0cb0a1fc664a8b6d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/social-event/social-event-debug"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Prints on-screen debug summary/roles of the social event the given entity participates in. Defaults to possessed character.

# Metadata

| FieldValueDisplayDebug Social Event (Entity)Category`social_event`Access`Public`Scope`B2Authority`Tags—Aliases`DebugSocialEvent` |
| --- |
| DisplayDebug Social Event (Entity)Category`social_event`Access`Public`Scope`B2Authority`Tags—Aliases`DebugSocialEvent` |
| Category`social_event`Access`Public`Scope`B2Authority`Tags—Aliases`DebugSocialEvent` |
| Access`Public`Scope`B2Authority`Tags—Aliases`DebugSocialEvent` |
| Scope`B2Authority`Tags—Aliases`DebugSocialEvent` |
| Tags—Aliases`DebugSocialEvent` |
| Aliases`DebugSocialEvent` |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno0Target entity id (0 or omitted = possessed) |
| --- |
| entity_identityIdno0Target entity id (0 or omitted = possessed) |

# Usage

```
await inzoi.cli.execute('social_event.debug', {  entity_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsosocial-event[social_event.apply](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/social-event/social-event-apply)[social_event.cancel_role_check](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/social-event/social-event-cancel-role-check)[social_event.debug_by_id](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/social-event/social-event-debug-by-id)
