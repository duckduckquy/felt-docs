---
sidebar_position: 4
---

# Label

These are the properties available to define label rendering. Anchors can be lines or points, polygons are not supported.

|  | Type | Applies to | Description |
| --- | --- | --- | --- |
| color | string | ValueFunctions (see value functions) | Points and lines | Optional. The label color |
| fontFamily | string | Points and lines | Optional. The font family to use |
| fontSize | number | ValueFunctions (see value functions) | Points and lines | Optional. The font size in pixels |
| fontStyle | normal | italic | oblique | Points and lines | Optional. The font style |
| fontWeight | number | Points and lines | Optional. The font weight |
| haloColor | string | ValueFunctions (see value functions) | Points and lines | Optional. The label halo color |
| haloWidth | number | ValueFunctions (see value functions) | Points and lines | Optional. The label halo width |
| letterSpacing | number | Points and lines | Optional. Horizontal spacing behaviour between text characters |
| lineHeight | number | Points and lines | Optional. Sets the height of a line box |
| maxLineChars | number | ValueFunctions (see value functions) | Points and lines | Optional. Defines the max number of characters before a line break |
| maxZoom | number | Points and lines | Optional. The maximum zoom level at which the label will be shown |
| minZoom | number | Points and lines | Optional. The minimum zoom level at which the label will be shown |
| offset | [number, number] | number | Points and lines | Optional. In the case of points, this value must be an array of two numeric offsets that will be applied on the positive X and Y axis defined by the label placement (i.e. an offset of [3,4] with a label placement of NE moves the label 3pixels to the right and 4 pixels above of the anchor point. An offset of [3,4] with a label placement of SW moves the label 3pixels to the left and 4 pixels below of the anchor point). In case of lines, this value is a single number that moves the label following the label position (i.e. an offset of 3 with a label position of Above will move the label 3 pixels above the line following the line normal. An offset of 3 with a label position of Below will mode the label 3 pixels under the line following the line normal) |
| padding | number | Points and lines | Optional. Adds invisible padding around the label that's used to compute label collisions |
| placement | TextPlacements[| LineLabelPlacement | Points and Lines | Optional. If defined on a points dataset, an array of label placements to test when placing the label. If all the placements collide with already existing labels, the label is not shown. If defined on a lines dataset, the label placement on a line |
| renderAsLines | boolean | Polygons | Optional. Renders labels along lines instead of using the centroids |
| repeatDistance | number | Lines | Optional. The distance in pixels between label repetitions on a line |
| textTransform | capitalize | uppercase | lowercase | Points and lines | Optional. Specifies how to capitalize the label |
| isClickable | boolean | Points, Lines and Polygons | Optional. A flag to tell if labels should be clickable  |

See [default values](https://www.notion.so/Felt-Style-Language-1-1-Reference-cdc9c0e90ded4877ab88cc3a0f63ae54) for the default values of these attributes on each label type.

If using a `categorical` visualization, all the previous properties need to be arrays. If there's a single value in the array, that value is used in all categories. If there are as many values as `categories`, the corresponding value will be used for each category. You can see an example of a `categorical` viz [here](https://www.notion.so/Felt-Style-Language-1-1-Reference-cdc9c0e90ded4877ab88cc3a0f63ae54).