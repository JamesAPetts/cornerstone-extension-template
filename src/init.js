import cornerstoneTools from "cornerstone-tools";
import templateModule from "./modules/templateModule";
import templateMixin from "./mixins/templateMixin";

cornerstoneTools.registerSome([
  {
    type: "mixin",
    name: "templateMixin",
    item: templateMixin
  },
  {
    type: "module",
    name: "templateModule",
    item: templateModule
  }
]);
