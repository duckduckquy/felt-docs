---
sidebar_position: 1
---

# Felt Style Language Blocks

A Felt Markup Language definition includes a `version` identifier, a `datasets` block that contains an array of `dataset` definitions, and an array of `visualization` objects under the `visualizations` block, which define a set of visualizations to render from top to bottom.

The basic anatomy of a Felt Style definition is the following:

```
{
  "version": "1.1",
  "datasets": [ ... ],
  "visualizations": [ ... ]
}
```