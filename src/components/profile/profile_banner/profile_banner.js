import React from "react";
import './profile_banner.css';

const Profile = () => {
    return (
        <div className="profileBanner card">
            <div className="profileBanner__background">
                <img src="https://demo.hasthemes.com/adda-preview/adda/assets/images/banner/banner-small.jpg" alt=""/>
                <div className="profileBanner__avatar">
                    <a href="#"><img
                        src="https://demo.hasthemes.com/adda-preview/adda/assets/images/profile/profile-midle-1.jpg"
                        alt="" className="profileBanner__image"/></a>
                </div>
            </div>
            <div className="profileBanner__info">
                <div className="profileBanner__info-title">
                    <a href="#">Bianko Raman</a>
                </div>
                <div className="profileBanner__info-disc">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, porro!</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;
