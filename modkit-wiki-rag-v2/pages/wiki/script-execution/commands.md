---
document_id: "b717dab553481b735449d5ba4d123a00de753c2f3511b21884222c69ab009696"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands"
title: "Execution Command Finder"
section: "wiki/script-execution"
breadcrumb: ["ModKit Documentation", "Wiki", "Script Execution"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:03+00:00"
content_sha256: "d5de0189d670904de1310a093a484ac19a0ccad3e3d5178526f21d0f8918bf43"
chunk: 1
chunk_count: 1
page_type: "navigation-index"
route: "wiki/script-execution/commands"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

🔍

# Execution Command Finder

Every Execution command on one page. Filter by topic, search names and descriptions together, or narrow down to the commands that take a particular parameter.

How to use this

- **Search** matches the command name *and* its description at once, so `gift` finds `OpenGiftBox`, `SendGiftBox` and anything whose description mentions gifts. Multiple words are combined with AND.
- **Topic** groups the commands by what they change — appearance, inventory, money, site, and so on. The topic names line up with the [Condition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands) finder so you can move between the two.
- **Parameter** narrows the list to commands that actually use a given column.
- **Uses** shows which of `S1` · `S2` · `F1` · `F2` · `Prob` a command reads. Everything also takes `BaseObject`, so that column is left out.

## Reading an Execution row

An Execution is one row of a spreadsheet. `Command` picks which of the commands below runs, and the remaining columns are that command's arguments:

Which columns matter depends entirely on the command, which is what the **Uses** column here is for. Unlike Condition rows, Execution rows have no `CompareType` — they perform an action rather than testing one.

note
