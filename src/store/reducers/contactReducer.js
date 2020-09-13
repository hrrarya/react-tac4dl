import * as Types from "../actions/types.js";

const init = {
  contact: [
    {
      email: "hrrarya6@gmail.com",
      fname: "Hridoy",
      lname: "Mozumder",
      id: "one",
      gname: "group-id-here",
      phone: "01777488806",
      workplace: "Zone7",
      favourite: true
    }
  ]
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

    case Types.EDIT_CONTACT: {
      const index = state.contact.findIndex(
        item => item.id === action.payload.contact.id
      );

      const newContact = [...state.contact];

      newContact[index] = action.payload.contact;
      return {
        ...state,
        contact: newContact
      };
    }

    case Types.ADD_FAVOURITE: {
      const index = state.contact.findIndex(
        item => item.id === action.payload.contact.id
      );

      const changedContact = state.contact[index];

      changedContact.favourite = !action.payload.contact.fav;

      const newContact = [...state.contact];
      newContact[index] = changedContact;
      return {
        ...state,
        contact: newContact
      };
    }

    default:
      return state;
  }
};

export default contactReducer;
