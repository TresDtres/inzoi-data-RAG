---
document_id: "c3a0c024949b3fd9f4b386f1b110beb7745cadd5c883f4499f4625331b8dc467"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/curseforge/curseforge-verify-code"
title: "curseforge.verify_code"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:55+00:00"
content_sha256: "c7793816fa692f0934f9bc1a32831b573866f1e59fa8c9604d0568c21515139a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/curseforge/curseforge-verify-code"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Verify the 6-digit security code received by email and obtain an auth token. Async; the result is reported via toast. cfcore persists the token internally on success.

# Metadata

| FieldValueDisplayCurseForge Verify CodeCategory`curseforge`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayCurseForge Verify CodeCategory`curseforge`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Category`curseforge`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionemailstringyes—CurseForge account email previously used with curseforge.send_code.codeintyes—6-digit security code received by email. |
| --- |
| emailstringyes—CurseForge account email previously used with curseforge.send_code.codeintyes—6-digit security code received by email. |
| codeintyes—6-digit security code received by email. |

# Usage

```
await inzoi.cli.execute('curseforge.verify_code', {  email: '',  code: 0,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsocurseforge[curseforge.auth_status](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/curseforge/curseforge-auth-status)[curseforge.logout](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/curseforge/curseforge-logout)[curseforge.send_code](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/curseforge/curseforge-send-code)[curseforge.upload_mod_file](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/curseforge/curseforge-upload-mod-file)
