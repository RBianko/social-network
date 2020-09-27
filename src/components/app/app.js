import React from 'react';
import './app.css';

import Header from "../header/header";
import Profile from "../profile/profile";
import Messages from "../messages/messages";
import {Route, BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="wrapper">
                <Route path='/messages' component={Messages}/>
                <Route path='/home' component={Profile} />
            </div>
        </BrowserRouter>
    );
}

export default App;
