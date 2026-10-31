---
document_id: "ce685e92e562abc727110424279a558ce3279e4b4dd5f98cb88f7b797c6cb35b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1geneticappearancedataasset"
title: "UB1GeneticAppearanceDataAsset"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:37:38+00:00"
content_sha256: "4b47791d77ef74e8df0f2e58137bb768572eb973a09ae83656892cb8fd22fc25"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1geneticappearancedataasset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data asset storing genetic appearance inheritance parameters used when generating child appearances from parent data, including skin color probabilities and hair defaults.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| Category`classes`Extends`UB1DataAssetBase` |
| Extends`UB1DataAssetBase` |

# Properties (8)

| NameTypeDescription`BodyMassThreshold``number`Body mass threshold above which a child is considered overweight based on parent body mass.`ChestIndices``integer[]`Body shape parameter indices corresponding to chest customization groups.`DefaultAdultHairIdByGender``table<EB1GenderType, string>`Default adult hair IDs assigned by gender when no genetic data is available.`HairLengthProbabilitiesByGender``table<string, FB1HairLengthProbability>`Hair length selection probabilities keyed by gender string.`NoiseValue``number`Random noise applied to inherited appearance values.`OppositeGenderWeights``table<EB1GeneticTraitCategory, number>``SkinColorProbabilities``number[]`Probability weights for each skin color option during generation.`SkinColorWeightOptions``number[]`Weighting ratios for blending mother vs father skin color during inheritance. |
| --- |
| `BodyMassThreshold``number`Body mass threshold above which a child is considered overweight based on parent body mass.`ChestIndices``integer[]`Body shape parameter indices corresponding to chest customization groups.`DefaultAdultHairIdByGender``table<EB1GenderType, string>`Default adult hair IDs assigned by gender when no genetic data is available.`HairLengthProbabilitiesByGender``table<string, FB1HairLengthProbability>`Hair length selection probabilities keyed by gender string.`NoiseValue``number`Random noise applied to inherited appearance values.`OppositeGenderWeights``table<EB1GeneticTraitCategory, number>``SkinColorProbabilities``number[]`Probability weights for each skin color option during generation.`SkinColorWeightOptions``number[]`Weighting ratios for blending mother vs father skin color during inheritance. |
| `ChestIndices``integer[]`Body shape parameter indices corresponding to chest customization groups.`DefaultAdultHairIdByGender``table<EB1GenderType, string>`Default adult hair IDs assigned by gender when no genetic data is available.`HairLengthProbabilitiesByGender``table<string, FB1HairLengthProbability>`Hair length selection probabilities keyed by gender string.`NoiseValue``number`Random noise applied to inherited appearance values.`OppositeGenderWeights``table<EB1GeneticTraitCategory, number>``SkinColorProbabilities``number[]`Probability weights for each skin color option during generation.`SkinColorWeightOptions``number[]`Weighting ratios for blending mother vs father skin color during inheritance. |
| `DefaultAdultHairIdByGender``table<EB1GenderType, string>`Default adult hair IDs assigned by gender when no genetic data is available.`HairLengthProbabilitiesByGender``table<string, FB1HairLengthProbability>`Hair length selection probabilities keyed by gender string.`NoiseValue``number`Random noise applied to inherited appearance values.`OppositeGenderWeights``table<EB1GeneticTraitCategory, number>``SkinColorProbabilities``number[]`Probability weights for each skin color option during generation.`SkinColorWeightOptions``number[]`Weighting ratios for blending mother vs father skin color during inheritance. |
| `HairLengthProbabilitiesByGender``table<string, FB1HairLengthProbability>`Hair length selection probabilities keyed by gender string.`NoiseValue``number`Random noise applied to inherited appearance values.`OppositeGenderWeights``table<EB1GeneticTraitCategory, number>``SkinColorProbabilities``number[]`Probability weights for each skin color option during generation.`SkinColorWeightOptions``number[]`Weighting ratios for blending mother vs father skin color during inheritance. |
| `NoiseValue``number`Random noise applied to inherited appearance values.`OppositeGenderWeights``table<EB1GeneticTraitCategory, number>``SkinColorProbabilities``number[]`Probability weights for each skin color option during generation.`SkinColorWeightOptions``number[]`Weighting ratios for blending mother vs father skin color during inheritance. |
| `OppositeGenderWeights``table<EB1GeneticTraitCategory, number>``SkinColorProbabilities``number[]`Probability weights for each skin color option during generation.`SkinColorWeightOptions``number[]`Weighting ratios for blending mother vs father skin color during inheritance. |
| `SkinColorProbabilities``number[]`Probability weights for each skin color option during generation.`SkinColorWeightOptions``number[]`Weighting ratios for blending mother vs father skin color during inheritance. |
| `SkinColorWeightOptions``number[]`Weighting ratios for blending mother vs father skin color during inheritance. |
