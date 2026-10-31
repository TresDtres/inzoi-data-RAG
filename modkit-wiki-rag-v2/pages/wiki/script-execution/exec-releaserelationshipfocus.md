---
document_id: "552c4de34daffd753ccdc858f29b075c68f4f06154f2f77322e85efd3a7e9337"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-releaserelationshipfocus"
title: "Execute_ReleaseRelationshipFocus"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:44+00:00"
content_sha256: "6089fa4533345cb8b9d62e9481b2b1dadd5459bb3c27febb87c645a07da6e217"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-releaserelationshipfocus"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Releases the relationship stat focus between Self and Target for the specified stat. Before releasing focus, the stat value is equalized between both parties. After releasing focus, the given F1 value is added to the stat.

# Parameters

| ParameterDescriptionBaseObjectAlways Self for this actionS1Relationship stat ID to equalize and release focus forF1Value to add to the relationship stat after focus is released |
| --- |
| BaseObjectAlways Self for this actionS1Relationship stat ID to equalize and release focus forF1Value to add to the relationship stat after focus is released |
| S1Relationship stat ID to equalize and release focus forF1Value to add to the relationship stat after focus is released |
| F1Value to add to the relationship stat after focus is released |

# Examples

| DescriptionBaseObjectCommandS1F1Release Romance focus and add 10 points between Self and TargetSelfReleaseRelationshipFocusRomance10Release Friendship focus and add 5 pointsSelfReleaseRelationshipFocusFriendship5Release Romance focus and subtract 20 pointsSelfReleaseRelationshipFocusRomance-20Release Business focus and add 0 points (equalize only)SelfReleaseRelationshipFocusBusiness0 |
| --- |
| Release Romance focus and add 10 points between Self and TargetSelfReleaseRelationshipFocusRomance10Release Friendship focus and add 5 pointsSelfReleaseRelationshipFocusFriendship5Release Romance focus and subtract 20 pointsSelfReleaseRelationshipFocusRomance-20Release Business focus and add 0 points (equalize only)SelfReleaseRelationshipFocusBusiness0 |
| Release Friendship focus and add 5 pointsSelfReleaseRelationshipFocusFriendship5Release Romance focus and subtract 20 pointsSelfReleaseRelationshipFocusRomance-20Release Business focus and add 0 points (equalize only)SelfReleaseRelationshipFocusBusiness0 |
| Release Romance focus and subtract 20 pointsSelfReleaseRelationshipFocusRomance-20Release Business focus and add 0 points (equalize only)SelfReleaseRelationshipFocusBusiness0 |
| Release Business focus and add 0 points (equalize only)SelfReleaseRelationshipFocusBusiness0 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoRelationship & Romance[AddRabbitHoleRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrabbitholerelationship)[AddRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrelationship)[AddRelationshipFlag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrelationshipflag)[AddRelationshipName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrelationshipname)[MakeRabbitHoleRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-makerabbitholerelationship)[RelationshipTalkRecord](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-relationshiptalkrecord)[RemoveRelationshipFlag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removerelationshipflag)[RemoveRelationshipName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removerelationshipname)[SetRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setrelationship)[UpdateMainRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-updatemainrelationship)
