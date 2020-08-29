import * as Types from "./types";

export const addGroup = group => dispatch => {
  dispatch({
    type: Types.SET_GROUP,
    payload: {
      group
    }
  });
};

export const removeGroup = group => dispatch => {
  dispatch({
    type: Types.REMOVE_GROUP,
    payload: {
      group
    }
  });
};
