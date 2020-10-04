import React from "react";
import './profile_banner.css';

const ProfileBanner = () => {
    return (
        <div className="profile__banner card">
            <div className="profile__banner__background">
                <img src="https://demo.hasthemes.com/adda-preview/adda/assets/images/banner/banner-small.jpg" alt=""/>
                <div className="profile__banner__avatar">
                    <a href="#"><img
                        src="https://demo.hasthemes.com/adda-preview/adda/assets/images/profile/profile-midle-1.jpg"
                        alt="" className="profile__banner__image"/></a>
                </div>
            </div>
            <div className="profile__banner__info">
                <div className="profile__banner__info-title">
                    <a href="#">Roman Bianko</a>
                </div>
                <div className="profile__banner__info-disc">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, porro!</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileBanner;
