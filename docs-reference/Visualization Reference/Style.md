---
sidebar_position: 3
---

# Style

These are the common properties available in each visualization type

|  | Type | Default | Description |
| --- | --- | --- | --- |
| batch | boolean | true | Optional. Decides if draw call batching should be used in polygons. When the dataset contains overlapping semi-transparent polygons, setting this value to true can produce rendering artifacts where polygons that cross tile boundaries are shown with a color in one tile and a darker one in another tile. This happens because alpha value is computed per draw call, so all polygons in the same one have the same alpha value, even if they overlap. When two overlapping polygons are rendered in different draw calls, the result is the expected one where overlapping areas are darker than non-overlapping ones. Setting it to false incurs in a ~35% increase in rendering times |
| filter | FilterDefinition[] (see filtering) | [] | Optional. A filter to be applied to the datasets |
| maxZoom | number | 22 | Optional. The maximum zoom level at which the visualization will be shown |
| minZoom | number | 0 | Optional. The minimum zoom level at which the visualization will be shown |
| renderAsLines | boolean | false | Optional. Decides if a polygon dataset should be render as lines thus making them render above the basemap. Note that using this requires that the style uses line properties instead of polygon ones. |
| isSandwiched | boolean | true | Optional. A flag to tell if features affected by this visualization need to be rendered below the basemap road and water layers. Only applies to polygon features, point and line features are already rendered on top of the basemap |
| isClickable | boolean | true | Optional. A flag to tell if features should be clickable |

See [default values](https://www.notion.so/Felt-Style-Language-1-1-Reference-cdc9c0e90ded4877ab88cc3a0f63ae54) for the default values of these attributes on each geometry type.

The following properties are available for the `categorical` type visualization. (You can see an example of a `categorical` viz [here](https://www.notion.so/Felt-Style-Language-1-1-Reference-cdc9c0e90ded4877ab88cc3a0f63ae54))

|  | Type | Applies to | Description |
| --- | --- | --- | --- |
| color | string[] | Points, lines and polygons | Optional. The color to be used. Either a single one to be used in all categories or one per each category. |
| dashArray | number[][] | Lines | Optional. The dash line definition. Either a single one to be used in all categories or one per each category. |
| lineCap | ("butt" | "round" | "square")[] | Lines | Optional. The shape used to draw the end points of lines. Either a single one to be used in all categories or one per each category. |
| lineJoin | ("bevel" | "round" | "miter")[] | Lines | Optional. The shape used to join two line segments when they meet. Either a single one to be used in all categories or one per each category. |
| opacity | number[] | InterpolatorFunctions[] (see interpolators) | Points, lines and polygons | Optional. The opacity to use from 0 to 1. Either a single one to be used in all categories or one per each category. |
| size | number[] | InterpolatorFunctions[] (see interpolators) | Points and lines | Optional. Point radius or line width in pixels. Either a single one to be used in all categories or one per each category. |
| showOther | "above" | "below" | Points, lines and polygons |  |
| strokeColor | string[] | InterpolatorFunctions[] (see interpolators) | Points and polygons | Optional. Stroke color. Either a single one to be used in all categories or one per each category. |
| strokeWidth | string[] | InterpolatorFunctions[] (see interpolators) | Points and polygons | Optional. Stroke width in pixels. Either a single one to be used in all categories or one per each category. |