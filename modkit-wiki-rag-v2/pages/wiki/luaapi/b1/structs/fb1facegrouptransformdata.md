---
document_id: "0a5c69e7d63f6b1022d67d5a137d2500edcd2c1bf2ceef343f8cfe636a730196"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1facegrouptransformdata"
title: "FB1FaceGroupTransformData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:48+00:00"
content_sha256: "0223dd1c1c2572698edb05222d3c67125aa795df8ca0811b3cc92e4cd3edc2ee"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1facegrouptransformdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines face customization transform data for a group, including additive pose data, gizmo axis and transform type, and an optional curve for shaping the transformation.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (10)

| NameTypeDescription`AdditiveData_FaceNegative``FB1AdditiveBoneData[]`Additive bone transforms for the negative direction.`AdditiveData_FacePositive``FB1AdditiveBoneData[]`Additive bone transforms for the positive direction.`GizmoAxis`[`EB1GizmoAxisType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gizmoaxistype)Gizmo axis for this transform group.`GizmoType`[`EB1GizmoTransformType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gizmotransformtype)Gizmo transformation type (translation, rotation, scale).`GroupName``string`Display or grouping name for this transform group.`PoseAsset_FaceNegative``UPoseAsset`Pose asset used to extract additive data for the negative face direction.`PoseAsset_FacePositive``UPoseAsset`Pose asset used to extract additive data for the positive face direction.`ShapeValueCurve``any`Optional curve used to remap shape values.`bExtractPose_FaceNegative``boolean`Click to extract the corresponding pose.`bExtractPose_FacePositive``boolean`Click to extract the corresponding pose. |
| --- |
| `AdditiveData_FaceNegative``FB1AdditiveBoneData[]`Additive bone transforms for the negative direction.`AdditiveData_FacePositive``FB1AdditiveBoneData[]`Additive bone transforms for the positive direction.`GizmoAxis`[`EB1GizmoAxisType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gizmoaxistype)Gizmo axis for this transform group.`GizmoType`[`EB1GizmoTransformType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gizmotransformtype)Gizmo transformation type (translation, rotation, scale).`GroupName``string`Display or grouping name for this transform group.`PoseAsset_FaceNegative``UPoseAsset`Pose asset used to extract additive data for the negative face direction.`PoseAsset_FacePositive``UPoseAsset`Pose asset used to extract additive data for the positive face direction.`ShapeValueCurve``any`Optional curve used to remap shape values.`bExtractPose_FaceNegative``boolean`Click to extract the corresponding pose.`bExtractPose_FacePositive``boolean`Click to extract the corresponding pose. |
| `AdditiveData_FacePositive``FB1AdditiveBoneData[]`Additive bone transforms for the positive direction.`GizmoAxis`[`EB1GizmoAxisType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gizmoaxistype)Gizmo axis for this transform group.`GizmoType`[`EB1GizmoTransformType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gizmotransformtype)Gizmo transformation type (translation, rotation, scale).`GroupName``string`Display or grouping name for this transform group.`PoseAsset_FaceNegative``UPoseAsset`Pose asset used to extract additive data for the negative face direction.`PoseAsset_FacePositive``UPoseAsset`Pose asset used to extract additive data for the positive face direction.`ShapeValueCurve``any`Optional curve used to remap shape values.`bExtractPose_FaceNegative``boolean`Click to extract the corresponding pose.`bExtractPose_FacePositive``boolean`Click to extract the corresponding pose. |
| `GizmoAxis`[`EB1GizmoAxisType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gizmoaxistype)Gizmo axis for this transform group.`GizmoType`[`EB1GizmoTransformType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gizmotransformtype)Gizmo transformation type (translation, rotation, scale).`GroupName``string`Display or grouping name for this transform group.`PoseAsset_FaceNegative``UPoseAsset`Pose asset used to extract additive data for the negative face direction.`PoseAsset_FacePositive``UPoseAsset`Pose asset used to extract additive data for the positive face direction.`ShapeValueCurve``any`Optional curve used to remap shape values.`bExtractPose_FaceNegative``boolean`Click to extract the corresponding pose.`bExtractPose_FacePositive``boolean`Click to extract the corresponding pose. |
| `GizmoType`[`EB1GizmoTransformType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gizmotransformtype)Gizmo transformation type (translation, rotation, scale).`GroupName``string`Display or grouping name for this transform group.`PoseAsset_FaceNegative``UPoseAsset`Pose asset used to extract additive data for the negative face direction.`PoseAsset_FacePositive``UPoseAsset`Pose asset used to extract additive data for the positive face direction.`ShapeValueCurve``any`Optional curve used to remap shape values.`bExtractPose_FaceNegative``boolean`Click to extract the corresponding pose.`bExtractPose_FacePositive``boolean`Click to extract the corresponding pose. |
| `GroupName``string`Display or grouping name for this transform group.`PoseAsset_FaceNegative``UPoseAsset`Pose asset used to extract additive data for the negative face direction.`PoseAsset_FacePositive``UPoseAsset`Pose asset used to extract additive data for the positive face direction.`ShapeValueCurve``any`Optional curve used to remap shape values.`bExtractPose_FaceNegative``boolean`Click to extract the corresponding pose.`bExtractPose_FacePositive``boolean`Click to extract the corresponding pose. |
| `PoseAsset_FaceNegative``UPoseAsset`Pose asset used to extract additive data for the negative face direction.`PoseAsset_FacePositive``UPoseAsset`Pose asset used to extract additive data for the positive face direction.`ShapeValueCurve``any`Optional curve used to remap shape values.`bExtractPose_FaceNegative``boolean`Click to extract the corresponding pose.`bExtractPose_FacePositive``boolean`Click to extract the corresponding pose. |
| `PoseAsset_FacePositive``UPoseAsset`Pose asset used to extract additive data for the positive face direction.`ShapeValueCurve``any`Optional curve used to remap shape values.`bExtractPose_FaceNegative``boolean`Click to extract the corresponding pose.`bExtractPose_FacePositive``boolean`Click to extract the corresponding pose. |
| `ShapeValueCurve``any`Optional curve used to remap shape values.`bExtractPose_FaceNegative``boolean`Click to extract the corresponding pose.`bExtractPose_FacePositive``boolean`Click to extract the corresponding pose. |
| `bExtractPose_FaceNegative``boolean`Click to extract the corresponding pose.`bExtractPose_FacePositive``boolean`Click to extract the corresponding pose. |
| `bExtractPose_FacePositive``boolean`Click to extract the corresponding pose. |
