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
  if (group.id === "fabourite-group-id-i-am-arya") {
    alert("Non Deletable");
    return false;
  }
  dispatch({
    type: Types.REMOVE_GROUP,
    payload: {
      group
    }
  });
};

export const getGroup = id => dispatch => {
  dispatch({
    type: Types.GET_GROUP,
    payload: {
      id
    }
  });
};

export const editGroup = group => dispatch => {
  dispatch({
    type: Types.EDIT_GROUP,
    payload: {
      group
    }
  });
};
