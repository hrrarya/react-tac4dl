import * as Types from "../actions/types";

const init = {
  group: [{ id: "fabourite-group-id-i-am-arya", gname: "Favourite" }],
  queue: [],
};

const groupReducer = (state = init, action) => {
  switch (action.type) {
    case Types.SET_GROUP: {
      return {
        ...state,
        group: [...state.group, action.payload.group],
      };
    }

    case Types.GET_GROUP: {
      return {
        ...state,
        groupName: state.group.find((item) => item.id === action.payload.id),
      };
    }

    case Types.EDIT_GROUP: {
      const index = state.group.findIndex(
        (item) => item.id === action.payload.group.id
      );

      const newGroup = [...state.group];

      newGroup[index] = action.payload.group;

      return {
        ...state,
        group: newGroup,
      };
    }

    case Types.ADD_REMOVAL_QUEUE_GROUP: {
      return {
        ...state,
        queue: [...state.queue, action.payload.group],
      };
    }

    case Types.QUEUE_UNDO_GROUP: {
      return {
        ...state,
        queue: state.queue.filter(
          (item) => item.id !== action.payload.group.id
        ),
      };
    }

    case Types.CLEAN_QUEUE_GROUP: {
      return {
        ...state,
        group: state.group.filter((item) => !state.queue.includes(item)),
        queue: [],
      };
    }

    default:
      return state;
  }
};

export default groupReducer;
