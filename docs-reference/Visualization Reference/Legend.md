---
sidebar_position: 5
---

# Legend

The legend block describes how this visualization should be shown in the legend panel and contains the following properties:

| Field name | Description |
| --- | --- |
| displayName | Optional. Used both in simple and categorical visualizations. A single string that defines the title for the legend item in simple visualizations or a dictionary that maps from each category to what will be displayed on the legend in categorical visualizations.
If more than one visualization defines a legend block with the same displayName, toggling that legend item on/off will show/hide all the visualizations that share it. |
| subtitle | Mandatory. Used in categorical visualizations. The attribute that contains the categories that will be used. |

Simple visualizations only show a single item on the legend. If multiple visualizations use the same displayName attribute, all of them will be shown/hidden when the legend item is toggled on/off

```
// This is a simple visualization legend
{
  "legend": {
    "displayName": "Area",
    "subtitle": "In squared meters"
  }
}
```

Categorical visualizations can define a mapping from each category name to a string to customize how those are shown in the legend.

```
// This is a categorical visualization legend
// that renames categories A and B to 1 and 2
// on the legend
{
  "legend": {
    "displayName": {
      "A": "1",
      "B": "2"
    },
    "subtitle": "In squared meters"
  }
}
```