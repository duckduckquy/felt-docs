---
sidebar_position: 4
---

# The legend block

The legend block contains information on how the legend will be displayed for this visualization.

Take a look at the legends section below to see how it works.

These are the fields that each legend block can contain: 

| Field name | Description |
| --- | --- |
| displayName | Optional. Used both in simple and categorical visualizations. A single string that defines the title for the legend item in simple visualizations or a dictionary that maps from each category to what will be displayed on the legend in categorical visualizations.
If more than one visualization defines a legend block with the same displayName, toggling that legend item on/off will show/hide all the visualizations that share it. |
| subtitle | Mandatory. Used in categorical visualizations. The attribute that contains the categories that will be used. |