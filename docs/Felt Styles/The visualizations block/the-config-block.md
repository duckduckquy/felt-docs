---
sidebar_position: 1
---

# The config block

The config block contains configuration options for a given visualization.

These are the fields that each config block can contain:

| Field name | Description |
| --- | --- |
| labelAttribute | Optional. Used both in simple and categorical visualizations. Defines which dataset attribute or attributes to be used for labeling. If multiple values are provided, the first available one will be used. |
| categoricalAttribute | Mandatory. Used in categorical visualizations. The attribute that contains the categories that will be used. |
| categories | Mandatory. Used in categorical visualizations. An array of the values that will be used as categories. Categories will be rendered from top to bottom following the definition order. The same order will be used in the legend. |
| showOther | Optional. Used in categorical visualizations. If this field is set to true it will show all features that do not match any of the defined categories and add an extra entry as the last item in the legend. |
| otherOrder | Optional. Used in categorical visualizations. It can be set to either “below” or “above” to make features that do not match any of the defined categories render below or above the other ones. The default position is “below”. |

```
"config": [
	{
    "labelAttribute": ["Wikipedia", "faa"],
		"categoricalAttribute": "faa",
		"categories": [ "faa-code-1", "faa-code-2", "faa-code-3"],
		"showOther": true,
		"otherOrder": "above"
	}
]
```
Example of a complete config block
   

