import * as Types from "./types.js";

export const addContact = contact => dispatch => {
  dispatch({
    type: Types.SET_CONTACT,
    payload: {
      contact
    }
  });
};

export const removeContact = contact => dispatch => {
  dispatch({
    type: Types.REMOVE_CONTACT,
    payload: {
      contact
    }
  });
};

export const editContact = contact => dispatch => {
  dispatch({
    type: Types.EDIT_CONTACT,
    payload: {
      contact
    }
  });
};
