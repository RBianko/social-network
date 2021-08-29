import {combineReducers, createStore} from "redux";
import messagesReducer from "./messages_reducer";
import profileReducer from "./profile_reducer";
import usersReducer from "./users_reducer";

let reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
})

let store = createStore(reducers)

export  default store
