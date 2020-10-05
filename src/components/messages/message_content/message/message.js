import React from "react";
import "./message.css"

const Message = (props) => {

    let avatarPath = "https://demo.hasthemes.com/adda-preview/adda/assets/images/profile/profile-small-" + props.imgId + ".jpg";

    return (
        <div className="message__item">
            <div className="message__avatar">
                <a href="#"><img src={avatarPath} alt=""/></a>
            </div>
            <div className="message__item_info">
                <div className="message__item_info_name">
                    <div className="message__name">
                        Roman
                    </div>
                    <div className="message__time">
                        1:30 pm
                    </div>
                </div>
                <div className="message__item_info_text">
                    <p>
                        {props.message}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Message;
