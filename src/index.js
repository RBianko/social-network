import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';

let msgCountGenerator = Math.ceil(Math.random()*21 + 1)

let massagesListData = [
    {
        id: 1,
        name: "Raman Bianko",
        imgId: 9,
        isActive: true,
        msgCount: msgCountGenerator
    },
    {
        id: 2,
        name: "Bruno Mars",
        imgId: 13
    },
    {
        id: 3,
        name: "Julia Bianko",
        imgId: 3
    },
    {
        id: 4,
        name: "Lia Grey",
        imgId: 2
    },
    {
        id: 5,
        name: "J Boston",
        imgId: 16
    }
]

let messagesData = [
    {
        message: "Let's go!!"
    },
    {
        message: "Ok we can try, but if you fail i cant help you u know what i mean.."
    },
    {
        message: "Any one can join us if you want"
    }
]

let postsData = [
    {
        message: "Hello React!",
        likesCount: 3221
    },
    {
        message: "I'm your fan!",
        likesCount: 1289
    },
    {
        message: "Keep going ON!!!",
        likesCount: 4221
    }
]

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} messagesData={messagesData} massagesListData={massagesListData} />
  </React.StrictMode>,
  document.getElementById('root')
);
