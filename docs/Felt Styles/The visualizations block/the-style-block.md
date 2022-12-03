---
sidebar_position: 2
---

# The style block

The style block defines how feature geometries are rendered.

Some of the most common style properties are in the table below. For a comprehensive list of all the properties supported take a look at the Felt Style Language specification here

| Field name | Description |
| --- | --- |
| color | Fill color. Accepts named color, hex, rgb(a), hsl(a). Works on lines, points, and polygons. |
| strokeColor | Outline color. Accepts named color, hex, rgb(a), hsl(a). Works on points, and polygons. |
| strokeWidth | Outline width in pixels. Works on points and polygons. |
| opacity | The opacity value applied to both color and strokeColor. A number from 0 to 1. Works on points, polygons and lines. |
| size | Point radius or line width in pixels. |
| lineCap | The shape used to draw the end points of lines. Can be “butt”, “round” or “square”. Works on lines. |
| lineJoin | The shape used to join two line segments when they meet. Can be “bevel”, “round”, “miter”. Works on lines. |
| isSandwiched | A boolean telling if a polygon layer should be rendered below (true) or above (false) basemap roads and water bodies. Defaults to true, rendering polygons below basemap roads and water bodies. |
| isClickable | A boolean that defines whether or not clicking a feature opens a popup. Defaults to true. |