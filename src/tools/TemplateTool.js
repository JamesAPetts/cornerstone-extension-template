import cornerstoneTools from "cornerstone-tools";

// Chose one of these base tools to start with:

// BaseTool is useful for building tools that don't have associated annotation data,
// Or complex annotation tools that don't follow the typical "handles" paradigm in cornerstoneTools.
// BaseTool can stil have a renderToolData function, it just has less inbuilt helpers than BaseAnnotationTool.
const BaseTool = cornerstoneTools.importInternal("base/BaseTool");

// BaseAnnotationTool contains a set of helpers that help you build handle-based annotation tools.
// const BaseAnnotationTool = cornerstoneTools.importInternal("base/BaseTool");

// BaseAnnotationTool contains a set of helpers that help you labelmap-based annotation tools.
// const BaseBrushTool = cornerstoneTools.importInternal("base/BaseBrushTool");

/**
 * @public
 * @class TemplateTool
 * @memberof Tools
 * @extends Tools.Base.BaseTool
 */
export default class TemplateTool extends BaseTool {
  /** @inheritdoc */
  constructor(props = {}) {
    const defaultProps = {
      name: "Template",
      configuration: {},
      supportedInteractionTypes: ["Mouse"],
      // Add in any mixins.
      // REMOVE this if you decide not to use mixins!
      mixins: ["templateMixin"]
    };

    super(props, defaultProps);

    // I like to cache modules used by the tool here, this gives the tool's
    // Methods easy access to encapsulated cross-tool state.
    // REMOVE this if you decide not to use modules!
    this._module = cornerstoneTools.getModule("templateModule");
  }

  postMouseDownCallback(evt) {
    alert("HELLO TOOL!");
  }
}
