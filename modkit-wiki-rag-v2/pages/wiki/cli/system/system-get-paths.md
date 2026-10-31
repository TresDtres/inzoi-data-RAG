---
document_id: "987c958db3a253cba1229a80668491c768a96380baf95a4dd400a84933c8fe5c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/system/system-get-paths"
title: "system.get_paths"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:18+00:00"
content_sha256: "2a85128fef3d35be2684874e5dd7e0a1980ec66ab74deb0c48ecb195d22a0efd"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/system/system-get-paths"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns the filesystem locations of the running game process: where its binary lives, where it writes logs, saved data and screenshots, plus the build configuration and engine version. Every path is absolute and uses forward slashes, resolved from the live process rather than guessed. Use this instead of hardcoding paths: the log and saved directories move with the build configuration (the editor writes under the project's own Saved folder, a staged Development build writes under the packaged folder, and an installed Shipping build is redirected to the per-user application data directory), and the log filename itself can be overridden with -log= on the command line. log_file is the exact file currently being appended to, so an external tool can tail it directly. screenshot_dir is where screenshot.capture drops files when given a bare filename.

# Metadata

| FieldValueDisplayGet Process PathsCategory`system`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayGet Process PathsCategory`system`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`system`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

- This command takes no parameters.

# Usage

```
await inzoi.cli.execute('system.get_paths');
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
