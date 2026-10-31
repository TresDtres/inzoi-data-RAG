---
document_id: "c1faa42e392e589e7fd47c7e5e1fd66b0317f53d7b1c8bf169497f6e28387bb6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1customizedrelationshiplevel"
title: "B1CustomizedRelationshipLevel"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:48:41+00:00"
content_sha256: "2f593c0d8c31e166e62b79aad6ced69822271351e37af99421f9a2b3b5f1f6e6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1customizedrelationshiplevel"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Initial relationship level between two customized characters, chosen in the CAZ family tree editor. * Used by both entry points that open that editor: Create (new family) and AddFamilyMember. ** Level is the -3~+3 step defined by the RelationshipCondition table; it is converted to a float stat * value only when the characters are registered (B2RelationshipHelper::ApplyCustomizedRelationshipLevels). ** FamilyRelationships 와 별개의 배열인 이유: 그 배열은 가계도를 세우기 위한 최소 연결 지시서라 * 부모 체인으로 재현되는 관계(부모를 공유하는 형제, 조부모-손자)나 관계 종류가 아예 없는 동거인은 * 항목을 갖지 않는다. 그 조합들도 친밀도는 지정할 수 있어야 하므로 따로 담는다. * 저장은 FamilyRelationships 와 동일하게 양쪽 구성원에 미러링한다.

| PropertyTypeDescriptionMetadataTargetCharacterIdFNameStatic/session-local TempCharacterId of the other member this level applies to.Category: B1CustomizedRelationshipLevelTargetEntityIdFB1EntityIdRuntime entity ID of the other member. Set only when that member already exists in the world * (AddFamilyMember - the simulation cannot resolve a session-local TempCharacterId for them).Category: B1CustomizedRelationshipLevelStatIdFNameThe relationship stat this level applies to.Category: B1CustomizedRelationshipLevel Foreign: RelationshipStat.IdLevelint32Relationship step in the -3~+3 range defined by RelationshipCondition. 0 means neutral (unset).Category: B1CustomizedRelationshipLevel |
| --- |
| TargetCharacterIdFNameStatic/session-local TempCharacterId of the other member this level applies to.Category: B1CustomizedRelationshipLevelTargetEntityIdFB1EntityIdRuntime entity ID of the other member. Set only when that member already exists in the world * (AddFamilyMember - the simulation cannot resolve a session-local TempCharacterId for them).Category: B1CustomizedRelationshipLevelStatIdFNameThe relationship stat this level applies to.Category: B1CustomizedRelationshipLevel Foreign: RelationshipStat.IdLevelint32Relationship step in the -3~+3 range defined by RelationshipCondition. 0 means neutral (unset).Category: B1CustomizedRelationshipLevel |
| TargetEntityIdFB1EntityIdRuntime entity ID of the other member. Set only when that member already exists in the world * (AddFamilyMember - the simulation cannot resolve a session-local TempCharacterId for them).Category: B1CustomizedRelationshipLevelStatIdFNameThe relationship stat this level applies to.Category: B1CustomizedRelationshipLevel Foreign: RelationshipStat.IdLevelint32Relationship step in the -3~+3 range defined by RelationshipCondition. 0 means neutral (unset).Category: B1CustomizedRelationshipLevel |
| StatIdFNameThe relationship stat this level applies to.Category: B1CustomizedRelationshipLevel Foreign: RelationshipStat.IdLevelint32Relationship step in the -3~+3 range defined by RelationshipCondition. 0 means neutral (unset).Category: B1CustomizedRelationshipLevel |
| Levelint32Relationship step in the -3~+3 range defined by RelationshipCondition. 0 means neutral (unset).Category: B1CustomizedRelationshipLevel |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)
