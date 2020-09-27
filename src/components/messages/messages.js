import React from "react";
import './messages.css';
import MessagesListItem from "./messages_list_item/messages_list_item";
import {NavLink} from "react-router-dom";

const MessagesList = (props) => {
    return (
        <div className="message__list">
            <div className="messages card">
                <div className="messages__title">
                    <h2>Messages</h2>
                </div>
            </div>
            <NavLink to="/messages/0"><MessagesListItem isActive="true" /></NavLink>
            <NavLink to="/messages/1"><MessagesListItem /></NavLink>
            <NavLink to="/messages/2"><MessagesListItem /></NavLink>
            <NavLink to="/messages/3"><MessagesListItem /></NavLink>
            <NavLink to="/messages/4"><MessagesListItem /></NavLink>
        </div>
    )
}

export default MessagesList;
