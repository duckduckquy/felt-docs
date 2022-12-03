"use strict";(self.webpackChunkfelt_docs=self.webpackChunkfelt_docs||[]).push([[99],{6443:e=>{e.exports=JSON.parse('{"pluginId":"docs-reference","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Felt Style Language Blocks","href":"/docs-reference/intro","docId":"intro"},{"type":"category","label":"Dataset Reference","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Dataset Reference","href":"/docs-reference/Dataset Reference/dataset-reference","docId":"Dataset Reference/dataset-reference"},{"type":"link","label":"Attribute definition","href":"/docs-reference/Dataset Reference/attribute-definition","docId":"Dataset Reference/attribute-definition"}],"href":"/docs-reference/category/dataset-reference"},{"type":"category","label":"Examples","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Minimal visualization","href":"/docs-reference/Examples/minimal-visualization","docId":"Examples/minimal-visualization"},{"type":"link","label":"Point layer example","href":"/docs-reference/Examples/point-layer-example","docId":"Examples/point-layer-example"},{"type":"link","label":"Polygon layer example","href":"/docs-reference/Examples/polygon-layer-example","docId":"Examples/polygon-layer-example"},{"type":"link","label":"Line layer example","href":"/docs-reference/Examples/line-layer-example","docId":"Examples/line-layer-example"},{"type":"link","label":"Color category","href":"/docs-reference/Examples/color-category","docId":"Examples/color-category"}]},{"type":"category","label":"Visualization Reference","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Visualization Reference","href":"/docs-reference/Visualization Reference/visualization-reference","docId":"Visualization Reference/visualization-reference"},{"type":"link","label":"Config","href":"/docs-reference/Visualization Reference/Config","docId":"Visualization Reference/Config"},{"type":"link","label":"Style","href":"/docs-reference/Visualization Reference/Style","docId":"Visualization Reference/Style"},{"type":"link","label":"Label","href":"/docs-reference/Visualization Reference/Label","docId":"Visualization Reference/Label"},{"type":"link","label":"Legend","href":"/docs-reference/Visualization Reference/Legend","docId":"Visualization Reference/Legend"},{"type":"link","label":"Filters","href":"/docs-reference/Visualization Reference/Filters","docId":"Visualization Reference/Filters"},{"type":"category","label":"Interpolator","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Step","href":"/docs-reference/Visualization Reference/Interpolators/step","docId":"Visualization Reference/Interpolators/step"},{"type":"link","label":"Linear","href":"/docs-reference/Visualization Reference/Interpolators/linear","docId":"Visualization Reference/Interpolators/linear"},{"type":"link","label":"Exponential","href":"/docs-reference/Visualization Reference/Interpolators/exponential","docId":"Visualization Reference/Interpolators/exponential"},{"type":"link","label":"Cubic Bezier","href":"/docs-reference/Visualization Reference/Interpolators/cubic-bezier","docId":"Visualization Reference/Interpolators/cubic-bezier"}],"href":"/docs-reference/category/interpolator"},{"type":"category","label":"Value functions","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Data-driven values","href":"/docs-reference/Visualization Reference/Value functions/data-driven-values","docId":"Visualization Reference/Value functions/data-driven-values"}],"href":"/docs-reference/category/value-functions"},{"type":"category","label":"Default values","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Style properties","href":"/docs-reference/Visualization Reference/Default values/style-properties","docId":"Visualization Reference/Default values/style-properties"},{"type":"link","label":"Label properties","href":"/docs-reference/Visualization Reference/Default values/label-properties","docId":"Visualization Reference/Default values/label-properties"}]}]}]},"docs":{"Dataset Reference/attribute-definition":{"id":"Dataset Reference/attribute-definition","title":"Attribute definition","description":"Each attribute is defined as follows:","sidebar":"tutorialSidebar"},"Dataset Reference/dataset-reference":{"id":"Dataset Reference/dataset-reference","title":"Dataset Reference","description":"A dataset block defines which data is shown in the popup and how it\'s shown. It contains the following properties:","sidebar":"tutorialSidebar"},"Examples/color-category":{"id":"Examples/color-category","title":"Color category","description":"","sidebar":"tutorialSidebar"},"Examples/line-layer-example":{"id":"Examples/line-layer-example","title":"Line layer example","description":"","sidebar":"tutorialSidebar"},"Examples/minimal-visualization":{"id":"Examples/minimal-visualization","title":"Minimal visualization","description":"","sidebar":"tutorialSidebar"},"Examples/point-layer-example":{"id":"Examples/point-layer-example","title":"Point layer example","description":"","sidebar":"tutorialSidebar"},"Examples/polygon-layer-example":{"id":"Examples/polygon-layer-example","title":"Polygon layer example","description":"","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Felt Style Language Blocks","description":"A Felt Markup Language definition includes a version identifier, a datasets block that contains an array of dataset definitions, and an array of visualization objects under the visualizations block, which define a set of visualizations to render from top to bottom.","sidebar":"tutorialSidebar"},"Visualization Reference/Config":{"id":"Visualization Reference/Config","title":"Config","description":"The config block is a block that contains configuration options for a given visualization.","sidebar":"tutorialSidebar"},"Visualization Reference/Default values/label-properties":{"id":"Visualization Reference/Default values/label-properties","title":"Label properties","description":"| Name | Points | Lines | Centroids |","sidebar":"tutorialSidebar"},"Visualization Reference/Default values/style-properties":{"id":"Visualization Reference/Default values/style-properties","title":"Style properties","description":"| Name | Points | Polygons | Lines |","sidebar":"tutorialSidebar"},"Visualization Reference/Filters":{"id":"Visualization Reference/Filters","title":"Filters","description":"Filters are defined as strings and always return a boolean value. If that value is true, the feature is rendered.","sidebar":"tutorialSidebar"},"Visualization Reference/Interpolators/cubic-bezier":{"id":"Visualization Reference/Interpolators/cubic-bezier","title":"Cubic Bezier","description":"{ \\"cubicbezier\\" Interpolates using the bezier curve defined by the curve control points.","sidebar":"tutorialSidebar"},"Visualization Reference/Interpolators/exponential":{"id":"Visualization Reference/Interpolators/exponential","title":"Exponential","description":"{ \\"exp\\" Exponentially interpolates between output stop values less than or equal and greater than the input value. The base parameter controls the rate at which output increases where higher values increase the output value towards the end of the range, lower values increase the output value towards the start of the range, and a base 1 interpolates linearly.","sidebar":"tutorialSidebar"},"Visualization Reference/Interpolators/linear":{"id":"Visualization Reference/Interpolators/linear","title":"Linear","description":"{ \\"linear\\" Linearly interpolates between stop values less than or equal and greater than the input value","sidebar":"tutorialSidebar"},"Visualization Reference/Interpolators/step":{"id":"Visualization Reference/Interpolators/step","title":"Step","description":"{ \\"step\\" Computes discrete results by evaluating a piecewise-constant function defined by stops on a given input. Returns the output value of the stop with a stop input value just less than the input one. If the input value is less than the input of the first stop, output0 is returned.","sidebar":"tutorialSidebar"},"Visualization Reference/Label":{"id":"Visualization Reference/Label","title":"Label","description":"These are the properties available to define label rendering. Anchors can be lines or points, polygons are not supported.","sidebar":"tutorialSidebar"},"Visualization Reference/Legend":{"id":"Visualization Reference/Legend","title":"Legend","description":"The legend block describes how this visualization should be shown in the legend panel and contains the following properties:","sidebar":"tutorialSidebar"},"Visualization Reference/Style":{"id":"Visualization Reference/Style","title":"Style","description":"These are the common properties available in each visualization type","sidebar":"tutorialSidebar"},"Visualization Reference/Value functions/data-driven-values":{"id":"Visualization Reference/Value functions/data-driven-values","title":"Data-driven values","description":"The first value of these types of value definitions is a filter expression and the second value is either a single value or a zoom-based interpolator","sidebar":"tutorialSidebar"},"Visualization Reference/visualization-reference":{"id":"Visualization Reference/visualization-reference","title":"Visualization Reference","description":"The basic block of a visualization has the following shape","sidebar":"tutorialSidebar"}}}')}}]);