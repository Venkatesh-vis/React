import { legacy_createStore } from "redux";
import { reducerBookFunction } from "./reducer";


export const reduxStore = legacy_createStore(reducerBookFunction)