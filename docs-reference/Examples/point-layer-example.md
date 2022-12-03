---
sidebar_position: 2
---

# Point layer example

```
{
  "version": "1.1",
  "datasets": [{ "id": 8, "name": "Wineries" }],
  "visualizations": [
    {
      "dataset": 8,
      "type": "simple",
			"config": { "labelAttribute": ["oper_cln", "owner_cln"] },
      "style": {
        "color": "#8F7EBF",
        "strokeColor": "#CEC5E8"
      },
      "label": {
        "haloColor": "#E9E4F7",
        "color": "#8F7EBF"
      },
      "legend": { "displayName": "Locations" }
    }
  ]
}
```