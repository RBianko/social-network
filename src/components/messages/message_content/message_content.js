import React from "react";
import './message_content.css';
import Message from "./message/message";

const MessageContent = (props) => {

    let messagesList = props.messagesData
        .map( message => (
            <Message
                message={message.message}
                imgId={props.imgId}
            />
        ))

    return (
        <div className="card message__content">
            {messagesList}
            <div className="card message__form">
                <div className="message__form__form">
                    <form>
                    <textarea name="newMessage" placeholder="Type message"/>
                        <button className="message__form__form-btn">send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MessageContent;
