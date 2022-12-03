---
sidebar_position: 1
---

# The shape of a style definition

A style in its most basic form contains a version definition and datasets and visualizations blocks.

The **datasets** block is where information about the data itself is stored. With this block, you can change the attributes that appear on the popup when you click on a feature, format the data itself, replace column names, etc. Take a look at the datasets section below to read more on this.

The **visualizations** block is where you define how the data should be visualized on the map. With this block, you can change colors, add labels, move features from back to front, etc. For more information on this, take a look at the visualizations section below.

```
{
  "version": "1.1",
  "datasets": [ { "id": "this-is-an-example-id" } ],
  "visualizations": []
}
```
Simplified Felt Style definition

