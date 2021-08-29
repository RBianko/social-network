import React from "react";
import {NavLink} from "react-router-dom";
import './freind_list_item.css'

const FriendListItem = (props) => {

    let path = "/friends/" + props.id;

    const follow = (id) => {
        props.follow(id)
    }

    const unfollow = (id) => {
        props.unfollow(id)
    }

    return (
        <div className="friend_list__item card">
            <NavLink to={path}>
                <div className="friend_list__item-avatar">
                    {props.avatarS ?
                        <img src={props.avatarS} alt="" className="messages__list__item-avatar"/> :
                        <img src="https://repetitor.com.ua/sites/default/files/default_images/avatar.png" alt="" className="messages__list__item-avatar"/>
                    }
                </div>
            </NavLink>
            <div className="friend_list__item-content">
                <div className="friend_list__item-info">
                        <NavLink className="name" to={path}>
                            {props.name}
                        </NavLink>
                    {props.status ?
                        <span className="online">Online</span> :
                        <span className="offline">Offline</span>}
                        <span className="location">{"props.city"}, {"props.country"}</span>
                </div>
                {props.followed ?
                    <button
                        onClick={ () => unfollow(props.id) }
                        className="follow_btn unfollow">
                        Unfollow</button> :
                    <button
                        onClick={ () => follow(props.id) }
                        className="follow_btn">
                        Follow</button>}
            </div>
        </div>
    )
}

export default FriendListItem;
