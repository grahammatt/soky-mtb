import { LOAD_SKYMBA_DATA } from "../utils/actionTypes";

export const trailsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case LOAD_SKYMBA_DATA:
      return payload.trails;
    default:
      return state;
  }
};
