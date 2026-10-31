---
document_id: "c970af5526160da5e70b59476a085e73432988d0768d75199daf7f0f66d20972"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/book"
title: "📘 Book Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:21+00:00"
content_sha256: "8d13989aaf12aa5c57b6f6c4ec49697422882c3dd038666b7b7fef49ab0acb42"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/book"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1BookTableRow

Defines properties and logic tied to books used in gameplay, including skill training and interaction.

### Properties

- **Id** (`FName`): Unique identifier for the book.
- **ObjectId** (`FName`): ID of the physical object representing the book. *(Foreign = "Object.Id")*
- **InteractionTags** (`TArray<FName>`): Tags that categorize the book's interactions. *(Foreign = "Interaction.Tags")*
- **TotalReadTime** (`int32`): Time required to finish reading the book (minutes)
- **SkillId** (`FName`): Skill improved by reading the book. *(Foreign = "Skill.Id")*
- **RequireSkillLevel** (`int32`): Required level of the skill to acquire the skillId. Applies only if the corresponding skillId is valid.
- **TotalSkillExp** (`int32`): Amount of experience awarded upon completion. Applies only if the corresponding skillId is valid.
- **StartScriptId** (`FName`): Script executed when reading begins. *(Foreign = "Script_Book.Id")*
- **TickScriptId** (`FName`): Script executed during reading. *(Foreign = "Script_Book.Id")*
- **FinishScriptId** (`FName`): Script executed upon completion. *(Foreign = "Script_Book.Id")*

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoBook[FB1BookState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1bookstate)[FB1BookTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1booktablerow)
