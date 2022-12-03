---
sidebar_position: 3
---

# Polygon layer example

```
{
  "version": "1.1",
  "datasets": [
    { "id": 67, "name": "Centroids" },
    { "id": 32, "name": "Polygons" }
  ],
  "visualizations": [
    {
      "dataset": 67,
      "type": "simple",
			"config": { "labelAttribute": ["name"] },
      "label": {
        "minZoom": 4,
        "color": "#804779",
        "haloColor": "#EBD3E8",
        "haloWidth": 1,
        "fontSize": [12, 21]
      },
      "legend": { "displayName": "Fires" }
    },
    {
      "dataset": 32,
      "type": "simple",
			"config": {},
      "style": {
        "color": "#EBD3E8",
        "strokeColor": "#D19ECB",
        "strokeWidth": [0.5, 1],
        "filter": "$type == \"hotspot area\""
      },
      "legend": { "displayName": "Fires" }
    }
  ]
}
```