import React from "react";
import './profile.css';

import ProfilePostForm from "./profile_post_form/profile_post_form";
import ProfileBanner from "./profile_banner/profile_banner";
import SideBar from "../side_notifications/side_notifications";
import ProfilePosts from "./profile_posts/profile_posts";
import ProfileFriends from "./profile_friends/profile_friends";

const Profile = (props) => {

    return (
        <div className="content__wrapper">
            <div className="left__content">
                {/*left__content*/}
                <ProfileBanner />
                <ProfileFriends />
            </div>
            <div className="main__content">
                {/*main__content*/}
                <ProfilePostForm
                    newPostText={props.profilePage.newPostText}
                    dispatch={props.dispatch}
                />
                <ProfilePosts
                    postsData={props.profilePage.postsData}
                />
            </div>
            <div className="right__content">
                {/*right__content*/}
                <SideBar />
            </div>
        </div>
    )
}

export default Profile;
