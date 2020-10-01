import React from 'react';
import './app.css';

import Header from "../header/header";
import Profile from "../profile/profile";
import Messages from "../messages/messages";
import {Route, BrowserRouter} from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <Header/>
            <div className="wrapper">
                <Route path='/messages' render={() =>
                    <Messages messagesData={props.messagesData} massagesListData={props.massagesListData} />
                }/>
                <Route path='/home' render={() =>
                    <Profile postsData={props.postsData} />
                }/>
            </div>
        </BrowserRouter>
    );
}

export default App;
