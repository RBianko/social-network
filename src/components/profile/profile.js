import React from "react";
import './profile.css';

import ProfileBanner from "./profile_banner/profile_banner";
import SideBar from "../side_notifications/side_notifications";
import ProfileFriends from "./profile_friends/profile_friends";
import {ProfilePostsContainer, ProfilePostsFormContainer} from "./profile_posts_content/profile_post_container";
import {FriendListContainer} from "../friend_list/friend_list_container";
import {Route} from "react-router-dom";

const Profile = () => {
    return (
        <div className="content__wrapper">
            <div className="left__content">
                {/*left__content*/}
                <ProfileBanner />
                <ProfileFriends />
            </div>
            <div className="main__content">
                {/*main__content*/}
                <Route exact path='/home/friend_list' render={() =>
                    <FriendListContainer />
                }/>
                <Route exact path='/home' render={() =>
                    <div>
                        <ProfilePostsFormContainer />
                        <ProfilePostsContainer />
                    </div>
                }/>
            </div>
            <div className="right__content">
                {/*right__content*/}
                <SideBar />
            </div>
        </div>
    )
}

export default Profile;
