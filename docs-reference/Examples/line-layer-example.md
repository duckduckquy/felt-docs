---
sidebar_position: 4
---

# Line layer example

```
{
  "version": "1.1",
  "datasets": [{ "id": 26, "name": "Rivers" }],
  "visualizations": [
    {
      "dataset": 26,
      "type": "simple",
			"config": { "labelAttribute": ["WSR_RIVER_"] },
      "style": {
        "color": "hsl(217, 80%, 40%)"
      },
      "label": {
        "color": "hsl(217, 80%, 40%)",
        "fontStyle": "italic",
        "repeatDistance": 200
      }
    }
  ]
}
```