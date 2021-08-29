import React from "react";
import './side_notifications.css'
import {NavLink} from "react-router-dom";

const SideBar = () => {
    return (
        <div className="card side__bar">
            <div className="side__bar-title">
                <NavLink to="/home/notifications">Recent Notifications</NavLink>
            </div>
            <div className="side__bar__content">
                <ul className="side__bar__content-items">
                    <li>
                        <div className="item-avatar">
                            <a href="#"><img
                                src="https://demo.hasthemes.com/adda-preview/adda/assets/images/profile/profile-small-9.jpg"
                                alt=""/></a>
                        </div>
                        <div className="item-disc">
                            <a href="#">Any one can join us if you want</a><br/>
                            <span>5 min ago</span>
                        </div>
                    </li>
                    <li>
                        <div className="item-avatar">
                            <a href="#"><img
                                src="https://demo.hasthemes.com/adda-preview/adda/assets/images/profile/profile-small-35.jpg"
                                alt=""/></a>
                        </div>
                        <div className="item-disc">
                            <a href="#">Let's go!!</a><br/>
                            <span>12 min ago</span>
                        </div>
                    </li>
                    <li>
                        <div className="item-avatar">
                            <a href="#"><img
                                src="https://demo.hasthemes.com/adda-preview/adda/assets/images/profile/profile-small-15.jpg"
                                alt=""/></a>
                        </div>
                        <div className="item-disc">
                            <a href="#">Can u call me?</a><br/>
                            <span>16 min ago</span>
                        </div>
                    </li>
                    <li>
                        <div className="item-avatar">
                            <a href="#"><img
                                src="https://demo.hasthemes.com/adda-preview/adda/assets/images/profile/profile-small-6.jpg"
                                alt=""/></a>
                        </div>
                        <div className="item-disc">
                            <a href="#">Ok we can try, but if you fail i cant help you u know what i mean..</a><br/>
                            <span>17 min ago</span>
                        </div>
                    </li>
                    <li>
                        <div className="item-avatar">
                            <a href="#"><img
                                src="https://demo.hasthemes.com/adda-preview/adda/assets/images/profile/profile-small-34.jpg"
                                alt=""/></a>
                        </div>
                        <div className="item-disc">
                            <a href="#">Hello! My name is Bruno. I texted you last time but you ain't answer</a><br/>
                            <span>25 min ago</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar;
