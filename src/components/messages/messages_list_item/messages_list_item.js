import React from "react";
import './messages_list_item.css';

const MessagesListItem = (props) => {
    return (
        <div className={`messages__list__item card ${props.isActive ? "active" : ""}`}>
            <div className="messages__list__item-avatar">
                <img src="https://demo.hasthemes.com/adda-preview/adda/assets/images/profile/profile-small-9.jpg" alt="" className="profileBanner__image"/>
            </div>
            <div className="messages__list__item-info">
                <div className="messages__list__item-name">
                    Bianko Raman
                </div>
                <div className="messages__list__item-msg-count">
                    3
                </div>
            </div>
        </div>
    )
}

export default MessagesListItem;
