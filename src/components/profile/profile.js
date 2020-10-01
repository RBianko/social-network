import React from "react";
import './profile.css';

import ProfilePostForm from "./profile_post_form/profile_post_form";
import ProfileBanner from "./profile_banner/profile_banner";
import SideBar from "../side_notifications/side_notifications";
import ProfilePosts from "./profile_posts/profile_posts";

const Profile = (props) => {

    return (
        <div className="content__wrapper">
            <div className="left__content">
                <ProfileBanner/>
                {/*left__content*/}
            </div>
            <div className="main__content">
                {/*main__content*/}
                <ProfilePostForm/>
                <ProfilePosts postsData={props.postsData} />
            </div>
            <div className="right__content">
                {/*right__content*/}
                <SideBar />
            </div>
        </div>
    )
}

export default Profile;
