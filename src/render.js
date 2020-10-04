import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import {addPost, onPostChange} from './redux/state';
import {BrowserRouter} from "react-router-dom";

export const reRenderEntireTree = (state) => {
    ReactDOM.render(
            <BrowserRouter>
                <App
                    state={state}
                    onPostChange={onPostChange}
                    addPost={addPost}
                />
            </BrowserRouter>,
        document.getElementById('root')
    );
}
