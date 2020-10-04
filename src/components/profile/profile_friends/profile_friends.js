import React from "react";
import './profile_friends.css';

const ProfileFriends = () => {
    return (
        <div className="friends__banner card">
            <div className="side__bar-title">
                <a href="">friend list</a>
            </div>
            <div className="side__bar__content">
                <ul className="side__bar__content-items">
                    <li>
                        <div className="item-avatar">
                            <a href="#"><img src="https://demo.hasthemes.com/adda-preview/adda/assets/images/profile/profile-small-9.jpg" alt=""/></a>
                        </div>
                        <div className="item-disc">
                            <a href="#">Roman Bianko</a><br/>
                            <span className="online">Online</span>
                        </div>
                    </li>
                    <li>
                        <div className="item-avatar">
                            <a href="#"><img src="https://demo.hasthemes.com/adda-preview/adda/assets/images/profile/profile-small-35.jpg" alt=""/></a>
                        </div>
                        <div className="item-disc">
                            <a href="#">Bruno Mars</a><br/>
                            <span className="online">Online</span>
                        </div>
                    </li>
                    <li>
                        <div className="item-avatar">
                            <a href="#"><img src="https://demo.hasthemes.com/adda-preview/adda/assets/images/profile/profile-small-15.jpg" alt=""/></a>
                        </div>
                        <div className="item-disc">
                            <a href="#">Julia Bianko</a><br/>
                            <span className="online">Online</span>
                        </div>
                    </li>
                    <li>
                        <div className="item-avatar">
                            <a href="#"><img src="https://demo.hasthemes.com/adda-preview/adda/assets/images/profile/profile-small-6.jpg" alt=""/></a>
                        </div>
                        <div className="item-disc">
                            <a href="#">Lia Grey</a><br/>
                            <span>17 min ago</span>
                        </div>
                    </li>
                    <li>
                        <div className="item-avatar">
                            <a href="#"><img src="https://demo.hasthemes.com/adda-preview/adda/assets/images/profile/profile-small-34.jpg" alt=""/></a>
                        </div>
                        <div className="item-disc">
                            <a href="#">J Boston</a><br/>
                            <span>25 min ago</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileFriends;
