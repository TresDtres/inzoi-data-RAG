---
document_id: "17b54b660bc4fea18d4685301aaa7eff2e47b3e0b652b252d9979a9fda86a646"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/curseforge/curseforge-send-code"
title: "curseforge.send_code"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:54+00:00"
content_sha256: "b4238a9bba95b3f87c61a17fd9f7df687bd2ada4bb1186457c3062bd2cc2d969"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/curseforge/curseforge-send-code"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Send a 6-digit passwordless login code to the given email. Async; the result (success or error description) is reported via a system toast.

# Metadata

| FieldValueDisplayCurseForge Send CodeCategory`curseforge`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayCurseForge Send CodeCategory`curseforge`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Category`curseforge`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionemailstringyes—Target CurseForge account email. |
| --- |
| emailstringyes—Target CurseForge account email. |

# Usage

```
await inzoi.cli.execute('curseforge.send_code', {  email: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsocurseforge[curseforge.auth_status](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/curseforge/curseforge-auth-status)[curseforge.logout](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/curseforge/curseforge-logout)[curseforge.upload_mod_file](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/curseforge/curseforge-upload-mod-file)[curseforge.verify_code](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/curseforge/curseforge-verify-code)
