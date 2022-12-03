---
sidebar_position: 3
---

# The label block

The label block defines how feature labels are rendered.

Some of the most common label properties are in the table below. For a comprehensive list of all the properties supported take a look at the Felt Style Language specification here

| Field name | Description |
| --- | --- |
| minZoom | The minimum zoom level the labels will be visible at. A number ranging from 3 to 20. Lower means that labels will be shown from a more zoomed out view. |
| color | Label fill color. Accepts named color, hex, rgb(a), hsl(a). Works on lines, points, and polygons. |
| haloColor | Label halo color. Accepts named color, hex, rgb(a), hsl(a). Works on lines, points, and polygons. |
| fontSize | Label font size in pixels. |
| fontWeight | Label font weight. |
| fontStyle | Font style. Can be normal, italic, oblique. |
| offset | Label offset from the anchor point. For labels anchored to a point this is a two integer array that defines the x and y offset in pixels. For labels anchored to lines this is a single integer value that defines the offset in pixels from the line itself.  |
| placement | Label placement. For labels anchored to a point it’s one of “N”, “NE”, “E”, “SE”, “S”, “SW”, “W”, “NW” or “Center”. For labels anchored to lines it can be one of “Above”, “Center” or “Below” |
| isClickable | A boolean that defines whether or not clicking a labels opens a popup. Defaults to true. |