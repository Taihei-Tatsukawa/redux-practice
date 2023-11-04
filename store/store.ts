import allReducers from "@/reducers";
import { createStore } from "redux";

const store = createStore(
  allReducers,
  typeof window !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

export default store;
