import React from "react";
import './messages.css';
import MessagesListItem from "./messages_list_item/messages_list_item";
import {Route} from "react-router-dom";
import MessageContent from "./message_content/message_content";
import SideBar from "../side_notifications/side_notifications";

const Messages = (props) => {

    let massagesItemsData = [
        {
            id: 1,
            name: "Raman Bianko",
            imgId: 9
        },
        {
            id: 2,
            name: "Bruno Mars",
            imgId: 13
        },
        {
            id: 3,
            name: "Julia Bianko",
            imgId: 3
        },
        {
            id: 4,
            name: "Lia Grey",
            imgId: 2
        },
        {
            id: 5,
            name: "J Boston",
            imgId: 16
        }
    ]

    let massagesListItems = massagesItemsData
        .map( messageItem =>
            <MessagesListItem
                name={messageItem.name}
                id={messageItem.id}
                imgId={messageItem.imgId}
                msgCout={Math.ceil(Math.random()*10 + 1)}
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
                <MessageContent imgId={massagesItemsData[0].imgId} />
            </div>
            <div className="right__content">
                <SideBar/>
            </div>
        </div>
    )
}

export default Messages;
