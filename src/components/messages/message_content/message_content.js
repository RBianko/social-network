import React from "react";
import './message_content.css';

const MessageContent = (props) => {
    return (
        <div className="card message__content">
            <div className="message__item">
                <div className="message__avatar">
                    <a href="#"><img src="https://demo.hasthemes.com/adda-preview/adda/assets/images/profile/profile-midle-1.jpg" alt=""/></a>
                </div>
                <div className="message__inner">
                    <div className="message__name-time">
                        Raman
                        <span>1:30 pm</span>
                    </div>
                    <p>Hello how are you</p>
                </div>
            </div>
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
