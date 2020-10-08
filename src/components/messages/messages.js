import React from "react";
import './messages.css';
import MessagesListItem from "./messages_list_item/messages_list_item";
import MessageContent from "./message_content/message_content";
import SideBar from "../side_notifications/side_notifications";

const Messages = (props) => {

    let massagesListItems = props.messagesPage.massagesListData
        .map( messageItem =>
            <MessagesListItem
                name={messageItem.name}
                id={messageItem.id}
                imgId={messageItem.imgId}
                msgCount={messageItem.msgCount}
                isActive={messageItem.isActive}
            />
        )

    return (
        <div className="content__wrapper">
            <div className="left__content">
                <div className="message__list">
                    <div className="messages card">
                        <div className="messages__title">
                            <h2>Messages</h2>
                        </div>
                    </div>
                    {massagesListItems}
                </div>
            </div>
            <div className="main__content">
                <MessageContent
                    messagesPage={props.messagesPage}
                    dispatch={props.dispatch}
                    imgId={props.messagesPage.massagesListData[0].imgId}
                />
            </div>
            <div className="right__content">
                <SideBar/>
            </div>
        </div>
    )
}

export default Messages;
