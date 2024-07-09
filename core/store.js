import { combineReducers, createStore } from "redux";
import chatsReducer from "./chatsSlice";

const rootReducer = combineReducers({
  chats: chatsReducer,
});

export const store = createStore(rootReducer);
