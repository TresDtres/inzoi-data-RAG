---
document_id: "b9b66cb172c469b8167f88b12b8a99b773c9880c0e12dbc196f1a0e27ec526eb"
source: "faq"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/faq"
title: "FAQ"
section: "faq/_index"
breadcrumb: ["ModKit Documentation"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:21+00:00"
content_sha256: "2eee1a77670336fdba1c70ac2201d1a1209d4d135a76f6b297ed31abfec473e8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "faq"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

🛟

# FAQ

Frequently asked questions and issues you may hit while using the ModKit. For bug reports, feature requests, and general inquiries, please use the inZOI Support Center.

[Mod Error Codes](https://mod-docs.playinzoi.com/docs/modkit-docs/mod-errors)

- [Error code list](https://mod-docs.playinzoi.com/docs/modkit-docs/mod-errors#1-error-code-list)[Causes and solutions](https://mod-docs.playinzoi.com/docs/modkit-docs/mod-errors#2-detailed-descriptions)[Mod states (EB1ModState)](https://mod-docs.playinzoi.com/docs/modkit-docs/mod-errors#3-mod-states-eb1modstate)

[Mod Management](https://mod-docs.playinzoi.com/docs/modkit-docs/mod-page)

- [Open the management screen](https://mod-docs.playinzoi.com/docs/modkit-docs/mod-page#step-1-accessing-the-mod-management-screen)[View installed mods](https://mod-docs.playinzoi.com/docs/modkit-docs/mod-page#step-2-viewing-installed-mods)[Activate and validate](https://mod-docs.playinzoi.com/docs/modkit-docs/mod-page#step-3-activating-and-managing-mods)

Support & Bug Report

- [Bug report](https://support.playinzoi.com/hc/ko)[Feature request](https://support.playinzoi.com/hc/ko)[General inquiry](https://support.playinzoi.com/hc/ko)

## Frequently asked questions

[My mod shows "Validation Required" and cannot be activated](https://mod-docs.playinzoi.com/docs/modkit-docs/mod-page#step-3-activating-and-managing-mods)

Mod Management

This is normal right after installing a mod or after a game update. Select the checkbox on the mod card and run **Validate** from the management panel at the bottom. Once validation completes the badge changes to **Normal** and you can turn on the activation toggle.

[Validation failed with an error popup. What does the code mean?](https://mod-docs.playinzoi.com/docs/modkit-docs/mod-errors#1-error-code-list)

Mod Errors

Look the code up in the [error code list](https://mod-docs.playinzoi.com/docs/modkit-docs/mod-errors#1-error-code-list), then read the matching entry in [causes and solutions](https://mod-docs.playinzoi.com/docs/modkit-docs/mod-errors#2-detailed-descriptions). `ConfigError` is fatal — it blocks Manifest saving and mod activation.

[I get an error saying the mod was built with an outdated ModKit](https://mod-docs.playinzoi.com/docs/modkit-docs/mod-errors#oldmodkitversion)

Mod Errors

`OldModKitVersion` occurs when the second digit (changelist) of the mod version is below the minimum requirement (`11246`). Repackage with the latest ModKit. This check only applies to UE 5.6+ builds.

[My installed mod does not appear in the list](https://mod-docs.playinzoi.com/docs/modkit-docs/mod-page#step-2-viewing-installed-mods)

Mod Management

Reset the filters at the top of the mod management screen and clear the search box. If it still does not show up, verify that the `.pak` / `.ucas` / `.utoc` files all exist.

[Where do I report a bug?](https://support.playinzoi.com/hc/ko)

Support

Submit it through the [inZOI Support Center](https://support.playinzoi.com/hc/ko). Include the mod name, the ModKit build version, and the error message shown in the mod management screen.

💬Ask a new questionIf your problem is not listed above, post it here. Threads are kept per documentation page.[inZOI Support CenterBug reports, feature requests and general enquiries](https://support.playinzoi.com/hc/ko)To let people post questions and answers on this site, connect [giscus](https://giscus.app). Enable Discussions on your GitHub repository, then fill the values from giscus.app into `customFields.giscus` in `docusaurus.config.ts`.
