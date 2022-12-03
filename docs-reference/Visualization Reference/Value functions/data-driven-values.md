---
sidebar_position: 1
---

# Data-driven values

The first value of these types of value definitions is a filter expression and the second value is either a single value or a zoom-based interpolator

A data-driven value that defines a fontSize value depending on the value of a feature acres property is defined as follows:

```
"fontSize": {
	"$acres > 50000": 20,
  "$acres > 20000": 18,
  "$acres > 5000": 16,
  "$acres > 100": 14,
  "$acres > 0": 12
}
```

Currently, it can only be used on the `fontSize` label property