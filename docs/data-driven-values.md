---
sidebar_position: 6
---

# Data-driven values

Data-driven values can be useful when you want a style or label property to depend on the feature data. 

Data-driven values are defined as an object with the following syntax: `{ dataFilter: value }` where data filters are what we defined here.

```
"fontSize": {
	"$acres > 50000": 20,
  "$acres > 20000": 18,
  "$acres > 5000": 16,
  "$acres > 100": 14,
  "$acres > 0": 12
}
```

Features with an acres attribute value higher than 50000 will use a fontSize of 20. Features with an acres attribute value lower or equal to 50000 and higher than 20000 will use a fontSize of 18, etc.

Currently, it can only be used on the `fontSize` label property.