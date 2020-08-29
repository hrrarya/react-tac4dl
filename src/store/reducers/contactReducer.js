import * as Types from "../actions/types.js";

const init = {
  contact: []
};

const contactReducer = (state = init, action) => {
  switch (action.type) {
    case Types.SET_CONTACT: {
      return {
        ...state,
        contact: [...state.contact, action.payload.contact]
      };
    }
    case Types.REMOVE_CONTACT: {
      return {
        ...state,
        contact: state.contact.filter(
          item => item.id !== action.payload.contact.id
        )
      };
    }

    default:
      return state;
  }
};

export default contactReducer;
