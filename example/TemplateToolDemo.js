import React from "react";
import CornerstoneViewport from "react-cornerstone-viewport";
import { TemplateTool } from "@template-tool";

export default class TemplateToolDemo extends React.Component {
  constructor(props = {}) {
    super(props);
  }

  state = {
    exampleData: null
  };

  componentDidMount() {
    // You could point at a PACs here to get different data to test on.
    const imageIds = ["example://1", "example://2"];

    const tools = [
      {
        name: "Template",
        toolClass: TemplateTool,
        mode: "active",
        modeOptions: { mouseButtonMask: 1, isTouchActive: false }
      },
      {
        name: "Zoom",
        mode: "active",
        modeOptions: { mouseButtonMask: 2 }
      },
      {
        name: "Pan",
        mode: "active",
        modeOptions: { mouseButtonMask: 4 }
      },

      // Scroll
      { name: "StackScrollMouseWheel", mode: "active" }
    ];

    this.setState({ imageIds, tools });
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1>Cornerstone Template Tool</h1>
          <div />
          <div>
            {this.state.imageIds ? (
              <CornerstoneViewport
                tools={this.state.tools}
                imageIds={this.state.imageIds}
                style={{ minWidth: "100%", height: "600px", flex: "1" }}
              />
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
        </div>
      </div>
    );
  }
}
