import React from "react";
import './content.css';
import Post from "./post/post";

const Content = () => {
    return (
        <div className="content__inner">
            <Post
                message="Hello React"
                likesCount="3221"
            />
            <Post
                message="Welcome!"
                likesCount="1312"
            />
        </div>
    )
}

export default Content;
