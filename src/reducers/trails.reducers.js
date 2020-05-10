export const trailsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "LOAD_SKYMBA_DATA":
      return payload.library;
    default:
      return state;
  }
};
