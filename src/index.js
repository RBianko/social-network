import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux_store";
import StoreContext from "./store_context";

const reRenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

reRenderEntireTree();

store.subscribe(() => {
    reRenderEntireTree()
})
