---
document_id: "cbb40b21b9476a06acea7460e01979f7db15fe8381a891c1fd7fcecb36aa3a3e"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/04-animation"
title: "Animation"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "Vehicle"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:40+00:00"
content_sha256: "822110443505fc9209c4a59069c074faf14ccf7064df0e0ab0e2d09a137592e2"
chunk: 2
chunk_count: 3
page_type: "article"
route: "modkit/project/vehicle/04-animation"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

Typing or picking an Id saves normally from that point. Leaving a field blank writes nothing, so an untouched field cannot wipe the vehicle's existing animation.

---

### 09. Common issues and fixes

| IssueCauseFixPart does not move at all**Mesh Name** is emptySet it from the mesh listNo Animation sectionThe vehicle has neither animatable parts nor seatsNothing to do - a few test vehicles are like thisMotion plays but ends in the wrong placeDelta was measured from the open poseDeltas are relative to **closed**Curve edits do not show in the previewCurve was edited elsewhere while the workspace was openReopen the workspaceDoor closes wronglyTrying to author Close separatelyAuthor **Open** only; Close is its reverseAnother vehicle changed tooTemplate still sharedAuthor one motion to trigger the split, or duplicate the template firstA passenger field is empty although the vehicle clearly animatesThe shipped ObjectBP data predates these fieldsType or pick the Id; it saves from then onA moving Id is missing entirelyIt does not exist on this vehicle typeCars have steering only; ships have no reverseChanging a passenger Id changed another vehicleThe Id was sharedUse **Clone** to get your own copy, then point the field at it |
| --- |
| Part does not move at all**Mesh Name** is emptySet it from the mesh listNo Animation sectionThe vehicle has neither animatable parts nor seatsNothing to do - a few test vehicles are like thisMotion plays but ends in the wrong placeDelta was measured from the open poseDeltas are relative to **closed**Curve edits do not show in the previewCurve was edited elsewhere while the workspace was openReopen the workspaceDoor closes wronglyTrying to author Close separatelyAuthor **Open** only; Close is its reverseAnother vehicle changed tooTemplate still sharedAuthor one motion to trigger the split, or duplicate the template firstA passenger field is empty although the vehicle clearly animatesThe shipped ObjectBP data predates these fieldsType or pick the Id; it saves from then onA moving Id is missing entirelyIt does not exist on this vehicle typeCars have steering only; ships have no reverseChanging a passenger Id changed another vehicleThe Id was sharedUse **Clone** to get your own copy, then point the field at it |
| No Animation sectionThe vehicle has neither animatable parts nor seatsNothing to do - a few test vehicles are like thisMotion plays but ends in the wrong placeDelta was measured from the open poseDeltas are relative to **closed**Curve edits do not show in the previewCurve was edited elsewhere while the workspace was openReopen the workspaceDoor closes wronglyTrying to author Close separatelyAuthor **Open** only; Close is its reverseAnother vehicle changed tooTemplate still sharedAuthor one motion to trigger the split, or duplicate the template firstA passenger field is empty although the vehicle clearly animatesThe shipped ObjectBP data predates these fieldsType or pick the Id; it saves from then onA moving Id is missing entirelyIt does not exist on this vehicle typeCars have steering only; ships have no reverseChanging a passenger Id changed another vehicleThe Id was sharedUse **Clone** to get your own copy, then point the field at it |
| Motion plays but ends in the wrong placeDelta was measured from the open poseDeltas are relative to **closed**Curve edits do not show in the previewCurve was edited elsewhere while the workspace was openReopen the workspaceDoor closes wronglyTrying to author Close separatelyAuthor **Open** only; Close is its reverseAnother vehicle changed tooTemplate still sharedAuthor one motion to trigger the split, or duplicate the template firstA passenger field is empty although the vehicle clearly animatesThe shipped ObjectBP data predates these fieldsType or pick the Id; it saves from then onA moving Id is missing entirelyIt does not exist on this vehicle typeCars have steering only; ships have no reverseChanging a passenger Id changed another vehicleThe Id was sharedUse **Clone** to get your own copy, then point the field at it |
| Curve edits do not show in the previewCurve was edited elsewhere while the workspace was openReopen the workspaceDoor closes wronglyTrying to author Close separatelyAuthor **Open** only; Close is its reverseAnother vehicle changed tooTemplate still sharedAuthor one motion to trigger the split, or duplicate the template firstA passenger field is empty although the vehicle clearly animatesThe shipped ObjectBP data predates these fieldsType or pick the Id; it saves from then onA moving Id is missing entirelyIt does not exist on this vehicle typeCars have steering only; ships have no reverseChanging a passenger Id changed another vehicleThe Id was sharedUse **Clone** to get your own copy, then point the field at it |
| Door closes wronglyTrying to author Close separatelyAuthor **Open** only; Close is its reverseAnother vehicle changed tooTemplate still sharedAuthor one motion to trigger the split, or duplicate the template firstA passenger field is empty although the vehicle clearly animatesThe shipped ObjectBP data predates these fieldsType or pick the Id; it saves from then onA moving Id is missing entirelyIt does not exist on this vehicle typeCars have steering only; ships have no reverseChanging a passenger Id changed another vehicleThe Id was sharedUse **Clone** to get your own copy, then point the field at it |
| Another vehicle changed tooTemplate still sharedAuthor one motion to trigger the split, or duplicate the template firstA passenger field is empty although the vehicle clearly animatesThe shipped ObjectBP data predates these fieldsType or pick the Id; it saves from then onA moving Id is missing entirelyIt does not exist on this vehicle typeCars have steering only; ships have no reverseChanging a passenger Id changed another vehicleThe Id was sharedUse **Clone** to get your own copy, then point the field at it |
| A passenger field is empty although the vehicle clearly animatesThe shipped ObjectBP data predates these fieldsType or pick the Id; it saves from then onA moving Id is missing entirelyIt does not exist on this vehicle typeCars have steering only; ships have no reverseChanging a passenger Id changed another vehicleThe Id was sharedUse **Clone** to get your own copy, then point the field at it |
| A moving Id is missing entirelyIt does not exist on this vehicle typeCars have steering only; ships have no reverseChanging a passenger Id changed another vehicleThe Id was sharedUse **Clone** to get your own copy, then point the field at it |
| Changing a passenger Id changed another vehicleThe Id was sharedUse **Clone** to get your own copy, then point the field at it |

---

### 10. Chapter summary

| ChecklistDoneIs **Mesh Name** filled in for every part I animated?✅Did I author only the **Open** state?✅Are my deltas measured from the closed pose?✅Did I preview the motion rather than trusting the numbers?✅ |
| --- |
| Is **Mesh Name** filled in for every part I animated?✅Did I author only the **Open** state?✅Are my deltas measured from the closed pose?✅Did I preview the motion rather than trusting the numbers?✅ |
| Did I author only the **Open** state?✅Are my deltas measured from the closed pose?✅Did I preview the motion rather than trusting the numbers?✅ |
| Are my deltas measured from the closed pose?✅Did I preview the motion rather than trusting the numbers?✅ |
| Did I preview the motion rather than trusting the numbers?✅ |

---

### 11. What the MCP tools cover
