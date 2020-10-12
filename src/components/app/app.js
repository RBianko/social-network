import React from 'react';
import './app.css';

import Header from "../header/header";
import Profile from "../profile/profile";
import MessagesContainer from "../messages/messages_container";
import {Route} from "react-router-dom";

function App() {
    return (
        <div className="app_wrapper">
            <Header/>
            <div className="wrapper">
                <Route path='/messages' render={() =>
                    <MessagesContainer />
                }/>
                <Route path='/home' render={() =>
                    <Profile />
                }/>
            </div>
        </div>
    );
}

export default App;
