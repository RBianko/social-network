import {combineReducers, createStore} from "redux";
import messagesReducer from "./messages_reducer";
import profileReducer from "./profile_reducer";

let reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer
})

let store = createStore(reducers)

export  default store
