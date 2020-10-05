import React from 'react';
import './app.css';

import Header from "../header/header";
import Profile from "../profile/profile";
import Messages from "../messages/messages";
import {Route} from "react-router-dom";


function App(props) {
    return (
        <div className="app_wrapper">
            <Header/>
            <div className="wrapper">
                <Route path='/messages' render={() =>
                    <Messages
                        messagesPage={props.state.messagesPage}
                        dispatch={props.dispatch}
                    />
                }/>
                <Route path='/home' render={() =>
                    <Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}
                    />
                }/>
            </div>
        </div>
    );
}

export default App;
