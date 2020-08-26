import * as Types from "../actions/types.js";

const init = {
  contact: []
}

const contactReducer = (state=init, action) => {
  switch(action.type) {
    case Types.SET_CONTACT: {
      return {
        ...state,
        contact: [...state.contact, action.payload.contact]
      }
    }

    default : return state;
  }
}


export default contactReducer;