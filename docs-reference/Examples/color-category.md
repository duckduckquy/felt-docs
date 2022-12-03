---
sidebar_position: 5
---

# Color category

```
{
  "version": "1.1",
  "datasets": [{ "id": 90, "name": "Droughts" }],
  "visualizations": [
    {
      "dataset": 90,
      "type": "categorical",
      "config": {
        "categoryAttribute": "primary_fu",
        "categories": ["Oil", "Coal", "Gas", "Hydro", "Wind", "Solar"]
      },
      "style": {
        "color": [
          "#EB9360",
          "#AD7B68",
          "#A4B170",
          "#7AB6C2",
          "#8F99CC",
          "#E5C550"
        ],
        "strokeColor": [
          "#FFC8A8",
          "#D4D4D4",
          "#CBD79D",
          "#A3D6E0",
          "#BCC3E5",
          "#F2DB85"
        ],
        "size": [[1.5, 6]],
        "strokeWidth": [[0.25, 2]]
      },
      "label": {
        "minZoom": 12,
        "placements": ["E", "W"],
        "color": [
          "#DE7D45",
          "#946E59",
          "#7E8C46",
          "#5B99A6",
          "#6270B2",
          "#CCA929"
        ],
        "haloColor": [
          "#FAEAE1",
          "#F2E9E4",
          "#EDF2DA",
          "#D8ECF0",
          "#E4E7F7",
          "#F2E8C2"
        ],
        "lineHeight": [1.2],
        "fontSize": [
          {
            "linear": [
              [12, 10],
              [20, 20]
            ]
          }
        ]
      }
    }
  ]
}
```