---
sidebar_position: 1
---

# Data filters

Filters have the following form `operand1 operator operand2` where the operator is one of `<`, `>`, `<=`, `>=`, `==`, and `!=`, and operands can be either a numerical value, a string value, or a boolean value. Operators `&&`, `||`, `AND`, and `OR` can be used to chain multiple filters. Parentheses are not supported at this moment. Operands and operators need to be separated by a space.

Feature properties can be referenced using the `$` symbol in front of the attribute's name. 

String values that contain white spaces should be written in-between escaped double quotes

If the same operator is to be applied to multiple operands, you can use the following array notation: `[operand1_1, operand1_2, operand1_3] operator [operand2_1, operand2_2, operand2_3]` This filter is equivalent to `operand1_1 operator operand2_1 AND operand1_2 operator operand2_2 AND operand1_3 operator operand2_3`. 

If one side of the operator is an array and the other isn’t, the single value operator is used multiple times. `operand1 operator [operand2_1, operand2_2]` is equivalent to `operand1 operator operand2_1 AND operand1 operator operand2_2`.

Let’s take a look at some examples:

```
"$acres < 50000" // Will filter out features with a value in the attribute
                 // "acres" higher than 50000
"$acres >= 50000 && $acres <= 70000"// Will filter out features with a value in       
																		// the attribute "acres" not in the [50000, 
																		// 7000] interval
"$class == [rail, tram]"          // Will filter out features that have a
																	// class value of neither "rail" or "tram"
"$class == \"class one\""         // Will filter out features that have a
																	// class value different than "class one"
"true"           // All features will pass this filter check
"false"          // No features will pass this filter check
```

Examples of the filter syntax

The Railway Tracks and Stations layer in Felt uses a visualization-level filter that applies both to style and label blocks.

```
{
	"config": {"labelAttribute": ["name_en", "name"]},
	"filter": "$subway == yes OR $railway == subway_entrance",
  "style": {
    "color": "hsl(220, 10%, 78%)",
    "strokeColor": "hsl(220, 10%, 55%)",
    "strokeWidth": {"linear": [[3, 0.5], [20, 3]]}
  },
	"label": {
    "fontSize": {"linear": [[12, 12], [20, 20]]},
    "offset": [8, 0]
  },
	"legend": {"displayName": "Subway Stations"}
}
```

Usage of a visualization-level filter. Only applies this visualization to features that have a subway attribute with a value of yes or a railway attribute with a value of subway_entrace.

The Earthquakes layer in Felt is a good example of how we can use filters to apply different visualizations to different features

```
{
  "version": "1.1",
  "visualizations": [
    {
      "dataset": 405,
			"config": {},
			"filter": "$mag >= 8",
      "style": {
        "color": "#ab71a4",
        "size": {"linear": [[3, 2.5], [20, 8]]},
        "strokeColor": "#824d7c",
        "strokeWidth": {"linear": [[3, 0.8], [20, 2]]}
      },
			"legend": {"displayName": ">= 8.0", "subtitle": "Magnitude"}
    },
    {
      "dataset": 405,
			"config": {},
			"filter": "$mag >= 7 AND $mag < 8",
      "style": {
        "color": "#d97e99",
        "size": {"linear": [[3, 2.5], [20, 8]]},
        "strokeColor": "#ba587a",
        "strokeWidth": {"linear": [[3, 0.8], [20, 2]]}
      },
			"legend": {"displayName": "7.0 - 7.9"}
    },
    ...
  ],
  "datasets": [ ... ]
}
```

Simplified Earthquakes style. Notice how the two visualization blocks have different filters applied to them. The first one is applied to features with a mag attribute higher or equal to 8 and the second one is applied to features with a mag attribute in the higher or equal to 7 and lower than 8


