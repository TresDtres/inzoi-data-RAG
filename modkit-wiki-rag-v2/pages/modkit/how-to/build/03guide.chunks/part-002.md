---
document_id: "86882e86d1b2345f2853f8b3d64989ac1e0167ec4372e72a85025a7e75d46470"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/build/03guide"
title: "Asset Editor"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Build"]
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:36+00:00"
content_sha256: "8d26a0651ce068f7b7b53fb4fa1b2a506203372945fe3ee55df405a287f0aa4a"
chunk: 2
chunk_count: 2
page_type: "article"
route: "modkit/how-to/build/03guide"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

### Behavior

Rows in other data tables that this object points at — placement rules, interactions, sounds and carry behaviour.

Each Id field gives you three controls:

- A **dropdown** listing the rows you can choose from. The value currently in use is always in the list.
- **Clone**: Copies the referenced row into a row only this object uses, then points the field at your copy. Use this before changing anything, because the original row is shared with every other object that references it.
- **Open Data Editor**: Opens that table at that row.

The contents of a referenced row are edited in the Data Editor, not here.

---

### Components

Every component on the object in one tree, with the object itself at the top.

- **Select** a row to highlight that component in the viewport and get its gizmo. Its values appear below the tree.
- **Drag** a row onto another to make it a child. Drop it on the object row to move it back to the top level.
- **Right-click** a row to rename, duplicate or delete it. A component with children must have its children removed first.
- **Add Component**: Every component type this workspace can create.
- Rows drawn in grey are created by the engine and cannot be renamed, moved or deleted. You can still select them to see where they sit.

Move a component with the gizmo or type its transform here — both are saved to the object's data.

---

### Tools

- **Open Data Editor**: Opens the data editor for this object's rows.
- **Open Resource Import Tool**: Opens the drag-and-drop tool for meshes and textures.
- **Restore from Included Assets**: Restores modified content back to the state it was in when the workspace was created. Appears only when the workspace was created with included assets. Your browser does not support the video tag.
