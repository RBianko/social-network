import React from "react";
import "./profile_posts.css"

import Post from "./post/post";

const ProfilePosts = (props) => {

    let postsItems =
        props.postsData.map(postItem =>
            <Post
                key={postItem.id}
                message={postItem.message}
                likesCount={postItem.likesCount}
            />
        )

    return (
        <div className="posts_content">
            {postsItems}
        </div>
    );
}

export default ProfilePosts;
