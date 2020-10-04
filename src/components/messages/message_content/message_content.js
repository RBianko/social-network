import React from "react";
import './message_content.css';
import Message from "./message/message";

const MessageContent = (props) => {

    let newMessageForm = React.createRef();

    const sendMessage = () => {
        let text = newMessageForm.current.value;
        alert(text)
    }

    let messagesList = props.messagesData
        .map( message => (
            <Message
                key={message.id}
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
                    <textarea ref={newMessageForm} placeholder="Type message"/>
                        <button onClick={ sendMessage } className="message__form__form-btn">send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MessageContent;
