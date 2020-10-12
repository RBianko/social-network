import React from "react";
import './profile.css';

import ProfileBanner from "./profile_banner/profile_banner";
import SideBar from "../side_notifications/side_notifications";
import ProfileFriends from "./profile_friends/profile_friends";
import ProfilePostsContainer from "./profile_posts_content/profile_post_container";

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
                <ProfilePostsContainer />
            </div>
            <div className="right__content">
                {/*right__content*/}
                <SideBar />
            </div>
        </div>
    )
}

export default Profile;
