import React from "react";
import './messages.css';
import Messages from "./messages";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/messages_reducer";
import StoreContext from "../../store_context";

const MessagesContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    const addMessage = () => {
                        store.dispatch(addMessageActionCreator())
                    }

                    const onMessageChange = (text) => {
                        store.dispatch(onMessageChangeActionCreator(text))
                    }

                    return <Messages
                        massagesListData={state.messagesPage.massagesListData}
                        messagesData={state.messagesPage.messagesData}
                        newMessageText={state.messagesPage.newMessageText}
                        addMessage={addMessage}
                        onMessageChange={onMessageChange}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}

export default MessagesContainer;
