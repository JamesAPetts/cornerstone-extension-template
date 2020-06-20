const configuration = {
  /*
  Variables which are used to configure an extension.
  As opposed to tool configuration, these can be used
  to share common config across a group of tools.
  */
};

const state = {
  /*
  This can be used to hold data/metadata for a tool. This is useful for associating
  toolState to some larger entity, e.g. multiple contours in one 3D segment.
  */
};

const getters = {
  /*
  Getter methods for state. Usually for more complex queries.

  The pattern is up to you, you can ignore getters and
  touch state directly if your state has a very simple shape.
  */
};

const setters = {
  /*
  Setter methods for state. Usually for more complex setters.

  The pattern is up to you, you can ignore setters and
  touch state directly if your state has a very simple shape.
  */
};

function onRegisterCallback(name) {
  /*
  Called once when the module is registered to cornerstoneTools.
  The name passed in is the name registered.
  */
}

function enabledElementCallback(enabledElement) {
  /*
  Called when an element is enabled, incase you need to initialise some state per element.
  */
}

function removeEnabledElementCallback(enabledElement) {
  /*
  Called when an element is removed, incase you need to clean up some state.
  */
}

export default {
  getters,
  setters,
  state,
  configuration,
  onRegisterCallback,
  enabledElementCallback,
  removeEnabledElementCallback
};
