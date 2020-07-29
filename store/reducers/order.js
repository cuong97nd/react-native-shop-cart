import { GET_ORDER, REMOVE_ORDER } from "../actions/types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER:
      return action.payload;
    case REMOVE_ORDER:
      return [];

    default:
      return state;
  }
};
