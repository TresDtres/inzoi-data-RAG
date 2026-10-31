---
document_id: "7bfb4de46d02e3ee95434253a7540d2776ea6ff3dddd76b6e9347e00195d97d0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/social-event/social-event-cancel-role-check"
title: "social_event.cancel_role_check"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:17+00:00"
content_sha256: "7974d62cf88c660ea83d353f490d7b4590518cbd4123b9c2b7975347a3a8a251"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/social-event/social-event-cancel-role-check"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Forces re-evaluation of role conditions for all members of a social event, removing or canceling members that fail.

# Metadata

| FieldValueDisplayCancel/Remove If Role Condition FailsCategory`social_event`Access`UserCheat`Scope`B2Authority`Tags—Aliases`CancelOrRemoveIfRoleConditionFails` |
| --- |
| DisplayCancel/Remove If Role Condition FailsCategory`social_event`Access`UserCheat`Scope`B2Authority`Tags—Aliases`CancelOrRemoveIfRoleConditionFails` |
| Category`social_event`Access`UserCheat`Scope`B2Authority`Tags—Aliases`CancelOrRemoveIfRoleConditionFails` |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases`CancelOrRemoveIfRoleConditionFails` |
| Scope`B2Authority`Tags—Aliases`CancelOrRemoveIfRoleConditionFails` |
| Tags—Aliases`CancelOrRemoveIfRoleConditionFails` |
| Aliases`CancelOrRemoveIfRoleConditionFails` |

# Parameters

| NameTypeRequiredDefaultDescriptionsocial_event_idintyes—Runtime SiteEvent id (int64) |
| --- |
| social_event_idintyes—Runtime SiteEvent id (int64) |

# Usage

```
await inzoi.cli.execute('social_event.cancel_role_check', {  social_event_id: 0,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsosocial-event[social_event.apply](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/social-event/social-event-apply)[social_event.debug](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/social-event/social-event-debug)[social_event.debug_by_id](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/social-event/social-event-debug-by-id)
