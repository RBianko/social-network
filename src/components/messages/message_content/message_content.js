import React from "react";
import './message_content.css';
import Message from "./message/message";

const MessageContent = (props) => {

    let messagesData = [
        {
            message: "Let's go!!"
        },
        {
            message: "Ok we can try, but if you fail i cant help you u know what i mean.."
        },
        {
            message: "Any one can join us if you want"
        }
    ]

    let messages = messagesData
        .map( message => (
            <Message
                message={message.message}
                imgId={props.imgId}
            />
        ))

    return (
        <div className="card message__content">
            {messages}
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
