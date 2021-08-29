import React from "react";
import './header.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <nav className="menu">
                    <ul>
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/messages">Messages</NavLink></li>
                        <li><NavLink to="/home/friend_list">Friends</NavLink></li>
                        <li><NavLink to="/home/notifications">Notifications</NavLink></li>
                    </ul>
                </nav>
                <div className="logo">
                    <NavLink to="/home"><img src="https://i.pinimg.com/originals/dd/84/b8/dd84b8539d9c755540db2a1491790cec.png" alt='logo'/></NavLink>
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
        </header>
    )
}

export default Header;
