---
sidebar_position: 1
---

# Attribute definition

An attribute is defined as a named block that contains information about how this attribute will be used and shown in Felt. In the example below, attribute_name is the name of a field in our dataset.

```
"attribute_name": { "displayName": "Attribute", "format": "x"}
```
Example of a complete attribute block

Each attribute block might contain one of the following fields:

| Field name | Description |
| --- | --- |
| displayName | Optional. How this attribute will be shown in different parts of the Felt UI. |
| format | Optional. A d3-format string that encodes how numeric fields should be shown. |