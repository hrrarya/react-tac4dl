import * as Types from "../actions/types";

const init = {
  group: [],
  groupName: ""
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

    case Types.GET_GROUP: {
      console.log(
        state.group.find(item => item.id === action.payload.id).gname
      );
      return {
        ...state,
        groupName: state.group.find(item => item.id === action.payload.id).gname
      };
    }
    default:
      return state;
  }
};

export default groupReducer;
