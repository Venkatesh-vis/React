import { legacy_createStore } from "redux";
import { singlereduce } from "./singlereducer";


export const reduxStore = legacy_createStore(singlereduce)