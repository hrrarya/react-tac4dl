import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducers";
import thunk from "redux-thunk";

const middleware = [thunk];

const saveToLocalStorage = state => {
  try {
    const contact = JSON.stringify(state);
    localStorage.setItem("contact", contact);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export const loadFromLocalStorage = () => {
  try {
    const contact = localStorage.getItem("contact");
    if (contact === null) return undefined;
    return JSON.parse(contact);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
const persist = loadFromLocalStorage();
const store = createStore(
  rootReducer,
  persist,
  compose(applyMiddleware(...middleware))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
