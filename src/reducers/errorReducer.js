import { GET_ERRORS } from "../action/types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      console.log(action.payload);
      return action.payload;

    default:
      return state;
  }
};
