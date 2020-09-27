import React from "react";
import './header.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="header__wrapper">
                <nav className="menu">
                    <ul>
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/messages">Messages</NavLink></li>
                        <li><NavLink to="/notifications">Notifications</NavLink></li>
                    </ul>
                </nav>
                <div className="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Tumblr_static_memrise_icon_tumblr%281%29.png" alt="logo"/>
                </div>
                <div className="search">
                    <form action="">
                        <input className="search-input" type="text" placeholder="Search"/>
                    </form>
                    <button className="search-button">
                        <i className="fas fa-search"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;
