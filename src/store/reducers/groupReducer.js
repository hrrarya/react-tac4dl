import * as Types from "../actions/types";

const init = {
  group: []
};

const groupReducer = (state = init, action) => {
  switch (action.type) {
    case Types.SET_GROUP: {
      return {
        ...state,
        group: [...state.group, action.payload.group]
      };
    }
    case Types.REMOVE_GROUP: {
      return {
        ...state,
        group: state.group.filter(item => item.id !== action.payload.group.id)
      };
    }

    default:
      return state;
  }
};

export default groupReducer;
