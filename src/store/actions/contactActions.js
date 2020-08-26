import * as Types from './types.js';


export const addContact = contact => dispatch => {
  dispatch({
    type: Types.SET_CONTACT,
    payload: {
      contact
    }
  });
}