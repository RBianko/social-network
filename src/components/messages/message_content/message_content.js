import React from "react";
import './message_content.css';
import Message from "./message/message";

const MessageContent = (props) => {

    let newMessageForm = React.createRef();

    const addMessage = () => {
        let action = {
            type: 'ADD-MESSAGE'
        }
        newMessageForm.current.value && props.dispatch(action)
        newMessageForm.current.value = ''
    }

    const onMessageChange = () => {
        let text = newMessageForm.current.value
        let action = {
            type: 'ON-MESSAGE-CHANGE',
            messageText: text
        }
        props.dispatch(action)
    }

    let messagesList = props.messagesData
        .map(message => (
            <Message
                key={message.id}
                message={message.message}
                imgId={props.imgId}
            />
        ))

    return (
        <div className="message__container">
            <div className="card message__content">
                {messagesList}
            </div>
            <div className="card message__input">
                <div className="message__input__form">
                        <textarea
                            ref={newMessageForm}
                            onChange={onMessageChange}
                            value={props.newMessageText}
                            placeholder="Type message"
                        />
                    <button
                        onClick={addMessage}
                        className="message__input__form-btn"
                    > send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MessageContent;
