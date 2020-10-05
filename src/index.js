import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";

const reRenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

reRenderEntireTree();

store.subscribe(reRenderEntireTree)
