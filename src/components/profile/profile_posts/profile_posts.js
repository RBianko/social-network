import React from "react";
import "./profile_posts.css"

import Post from "./post/post";

const ProfilePosts = (props) => {

    let postsItems = props.postsData
        .map( postItem =>
            <Post
                message={postItem.message}
                likesCount={postItem.likesCount}
            />
        )

    return (
        <div className="posts_inner">
            {postsItems}
        </div>
    );
}

export default ProfilePosts;
