import { GET_PROJECTS } from "../action/types";

const initialState = {
  projects: [],
  project: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      console.log(action.payload);
      return {
        ...state,
        project: action.payload
      };
    default:
      return { state };
  }
};
