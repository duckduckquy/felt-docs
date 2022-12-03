---
sidebar_position: 1
---

# Visualization Reference

The basic block of a visualization has the following shape

```
{
  type: string,
  dataset: ...
  config: ...
  filter: ...
  style: ...
  label: ...
  legend: ...
}
```

Where `type` is the type of visualization, `dataset` contains the set of dataset ids this viz will apply to,
`config` defines the configuration associated with the given viz type (see [config](https://www.notion.so/Felt-Style-Language-1-1-Reference-cdc9c0e90ded4877ab88cc3a0f63ae54)), `filter` is a description of data filtering to be done in `datasets` (see [filtering](https://www.notion.so/Felt-Style-Language-1-1-Reference-cdc9c0e90ded4877ab88cc3a0f63ae54)), `[style](https://www.notion.so/Felt-Style-Language-1-1-Reference-cdc9c0e90ded4877ab88cc3a0f63ae54)`, `[label](https://www.notion.so/Felt-Style-Language-1-1-Reference-cdc9c0e90ded4877ab88cc3a0f63ae54)` define styling and labeling properties and `legend` (see [legend](https://www.notion.so/Felt-Style-Language-1-1-Reference-cdc9c0e90ded4877ab88cc3a0f63ae54)) defines how this visualization should be shown in the legend panel.

We support two types of visualization: `simple`, which uses the defined style for all features in the defined `datasets`, and `categorical`, which maps style and label values to a set of features depending on the values of the attributes defined in the `config` block.