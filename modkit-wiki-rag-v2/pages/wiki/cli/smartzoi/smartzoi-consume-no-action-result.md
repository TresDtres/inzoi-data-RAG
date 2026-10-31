---
document_id: "189bc6900fbecbb09088c38561efc05bb8dc8fc343637bbdd6168e35c11d5aa9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartzoi/smartzoi-consume-no-action-result"
title: "smartzoi.consume_no_action_result"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:16+00:00"
content_sha256: "05a71d44523739e0b52814ebbb2a7ae58450eed7982372d6330c8ec34f118ed5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/smartzoi/smartzoi-consume-no-action-result"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Simulates a successful SmartZoi no-op result without adding an interaction queue.

# Metadata

| FieldValueDisplayConsume SmartZoi NoAction ResultCategory`smartzoi`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayConsume SmartZoi NoAction ResultCategory`smartzoi`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Category`smartzoi`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Owner character entity ID (default: possessed)emptyboolnofalseUse an empty InteractionBagId instead of the explicit {NoAction} token.reasonstringno—Optional SmartZoi no-op reason text. |
| --- |
| entity_identityIdno—Owner character entity ID (default: possessed)emptyboolnofalseUse an empty InteractionBagId instead of the explicit {NoAction} token.reasonstringno—Optional SmartZoi no-op reason text. |
| emptyboolnofalseUse an empty InteractionBagId instead of the explicit {NoAction} token.reasonstringno—Optional SmartZoi no-op reason text. |
| reasonstringno—Optional SmartZoi no-op reason text. |

# Usage

```
await inzoi.cli.execute('smartzoi.consume_no_action_result', {  entity_id: 0, // optional  empty: false, // optional  reason: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
