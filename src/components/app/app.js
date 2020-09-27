import React from 'react';
import './app.css';

import Header from "../header/header";
import ProfileBanner from "../profile_banner/profile_banner";
import Content from "../content/content";
import ContentForm from "../content/content_form/content_form";
import SideBar from "../side_notifications/side_notifications";
import MessagesList from "../messages/messages";
import MessageContent from "../messages/message_content/message_content";
import {Route, BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="wrapper">
                <div className="content__wrapper">
                    <div className="left__content">
                        <Route path='/home' component={ProfileBanner} />
                        <Route path='/messages' component={MessagesList}/>
                    </div>
                    <div className="main__content">
                        <Route path='/home' component={ContentForm} />
                        <Route path='/home' component={Content} />
                        <Route path='/messages' component={MessageContent}/>
                    </div>
                    <div className="right__content">
                        <SideBar />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
