import React from "react";
import "./message.css"

const Message = (props) => {

    let avatarPath = "https://demo.hasthemes.com/adda-preview/adda/assets/images/profile/profile-small-" + props.imgId + ".jpg";

    return (
        <div className="message__item">
            <div className="message__avatar">
                <a href="#"><img src={avatarPath} alt=""/></a>
            </div>
            <div className="message__inner">
                <div className="message__name-time">
                    Raman
                    <span>1:30 pm</span>
                </div>
                <p>{props.message}</p>
            </div>
        </div>
    )
}

export default Message;
