import { combineReducers } from "redux";
import ProfileReducer from "./profile/reducer";
import { reducerBookFunction } from "./reducer";


export const singlereduce =combineReducers({
    profile:ProfileReducer,
    book:reducerBookFunction
})