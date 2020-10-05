import React from "react";
import './messages_list_item.css';
import {NavLink} from "react-router-dom";

const MessagesListItem = (props) => {

    let path = "/messages/" + props.id;
    let avatarPath = "https://demo.hasthemes.com/adda-preview/adda/assets/images/profile/profile-small-" + props.imgId + ".jpg";

    return (
        <NavLink to={path}>
            <div className={`messages__list__item card ${props.isActive ? "active" : ""}`}>
                <div className="messages__list__item-avatar">
                    <img src={avatarPath} alt="" className="profileBanner__image"/>
                </div>
                <div className="messages__list__item-info">
                    <div className="messages__list__item-name">
                        {props.name} <br/>
                        <span className="online">Online</span>
                    </div>
                    {props.msgCount > 0 ?
                        <div className="messages__list__item-msg-count">
                            {props.msgCount}
                        </div>
                        : null}

                </div>
            </div>
        </NavLink>
    )
}

export default MessagesListItem;
