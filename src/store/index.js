import { createStore } from "redux";
import { catsReducer } from "./catsReducer";

export const store = createStore(catsReducer);
