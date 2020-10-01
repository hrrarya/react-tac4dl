import * as Types from "./types.js";

export const addContact = (contact) => (dispatch) => {
  dispatch({
    type: Types.SET_CONTACT,
    payload: {
      contact,
    },
  });
};

export const editContact = (contact) => (dispatch) => {
  dispatch({
    type: Types.EDIT_CONTACT,
    payload: {
      contact,
    },
  });
};

export const addFavourite = (contact) => (dispatch) => {
  dispatch({
    type: Types.ADD_FAVOURITE,
    payload: {
      contact,
    },
  });
};

export const addRemovalQueue = (contact) => (dispatch) => {
  dispatch({
    type: Types.ADD_REMOVAL_QUEUE,
    payload: {
      contact,
    },
  });
};

export const undoQueue = (contact) => (dispatch) => {
  dispatch({
    type: Types.QUEUE_UNDO,
    payload: {
      contact,
    },
  });
};

export const cleanQueue = () => (dispatch) => {
  dispatch({
    type: Types.CLEAN_QUEUE,
  });
};

export const selectContact = (contact) => (dispatch) => {
  dispatch({
    type: Types.SELECT_CONTACT,
    payload: {
      contact,
    },
  });
};

export const selectAllContact = (contact) => (dispatch) => {
  dispatch({
    type: Types.SELECT_ALL_CONTACT,
    payload: {
      contact,
    },
  });
};
