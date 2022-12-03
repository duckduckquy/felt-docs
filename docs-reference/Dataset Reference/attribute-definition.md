---
sidebar_position: 2
---

# Attribute definition

Each attribute is defined as follows:

| Field name | Description |
| --- | --- |
| displayName | Optional. How this attribute will be shown in different parts of the Felt UI. |
| format | Optional. A d3-format string that encodes how numeric fields should be shown. |

```
{
  "id": "dataset-id",
  "name": "My dataset",
  "attributes": {
    "A": { "displayName": "First attribute", },
    "B": { "displayName": "Numeric attribute", "format": ".2f" },
    "C": { "displayName": "Text attribute" }
  },
  "keyAttributes": ["A", "B"],
	"titleAttribute": "A"
}
```

Dataset Definition