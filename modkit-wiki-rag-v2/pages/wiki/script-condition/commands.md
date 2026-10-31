---
document_id: "888243ea26809c8220b461f23cb4edaa2786e2e4f6ff95f2229b81a752bf00ad"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands"
title: "Condition Command Finder"
section: "wiki/script-condition"
breadcrumb: ["ModKit Documentation", "Wiki", "Script Condition"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:44+00:00"
content_sha256: "2bb58191f295335b531546e2f33faf39141d4b3c60a06187af9ce878d1926060"
chunk: 1
chunk_count: 1
page_type: "navigation-index"
route: "wiki/script-condition/commands"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

🔍

# Condition Command Finder

Every Condition command on one page. Filter by topic, search names and descriptions together, or narrow down to the commands that take a particular parameter.

How to use this

- **Search** matches the command name *and* its description at once, so `family spouse` finds `IsFamilyRelationship` even though "spouse" is not in the name. Multiple words are combined with AND.
- **Topic** groups the commands by what they look at — character, family, vehicle, site, and so on. Click a topic in a row to jump to that group.
- **Parameter** narrows the list to commands that actually use a given column. `S1` + `CompareType` gives you the commands you drive with a string value.
- **Uses** shows which of `CompareType` · `S1` · `S2` · `F1` · `F2` · `Prob` a command reads. Everything also takes `BaseObject`, so that column is left out.
- The `Enum` tag means the command's page lists the accepted values.

## Reading a Condition row

A Condition is one row of a spreadsheet. `Command` picks which of the commands below runs, and the remaining columns are that command's arguments:

Listing several rows evaluates them with AND. Which columns matter depends entirely on the command, which is what the **Uses** column here is for.

### CompareType
