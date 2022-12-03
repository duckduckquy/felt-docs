---
sidebar_position: 2
---

# Zoom-based filters

Zoom-based filters are used when you want to filter data depending on the zoom level.

Zoom-based filters are defined as an object with the following form: `{ zoomDefinition: dataFilter, zoomDefinition2: dataFilter2, …}` where data filters are what we defined in the previous section, and zoom definitions can be one of the following: `“i”`, `“i-j”`, `“-j”`, `“i-”`, `“[i, j]”`, `“(i, j]”`, `“[i, j)”`, `“(i, j)”` where i and j are integer numbers. 

<li>
“i” will only apply when the map is at the zoom level i
</li>
<li>
“i-j” and “[i, j]” are equivalent and will apply when the zoom level is between i and j inclusive
</li>
<li>
“-j” will apply to all zoom levels lower than or equal to j
</li>
<li>
“i-” will apply to all zoom levels greater than or equal to i
</li>
<li>
“[i, j]”, “(i, j]”, “[i, j)”, “(i, j)” follow interval notation 
</li>

```
{
	"-5": "$acres > 100000", // Applies to zoom levels lower than or equal to 5
	"6": "$acres > 50000",   // Applies to zoom level 6
	"7-10": "$acres > 20000",// Applies to zoom levels 7 to 10 inclusive
	"11-": "$acres > 10000", // Applies to zoom levels greater than or equal to 11
	"(12, 15)": "$acres > 0",// Applies to zoom levels between 12 and 15 exclusive
}
```

Example of a zoom-based filter

The Wildfires, 2021 layer in Felt uses zoom-based filters to show different elements depending on the zoom level

```
{
  "dataset": 20,
  "config": {},
	"filter": {
    "6": "$acres > 50000",
    "7-8": "$acres > 20000",
    "9-10": "$acres > 500",
    "11-12": "$acres > 75",
    "13-": "$acres > 0"
  },
  "style": {
    "batch": false,
    "color": "#F1B3B0",
    "minZoom": 6,
    "strokeColor": "#E08984"
  },
	"legend": {"displayName": "Burned Areas"}
}
```

Wildfires, 2021 visualization example. At zoom level 6, only features with an acres attribute value higher than 50000 will be shown. At zoom levels 7 and 8, only features with an acres attribute value higher than 2000 will be shown, etc.

You can also use filters on categorical data. The example below shows how to draw only certain categories at a given zoom level