import React from "react";
import "./profile_posts.css"

import Post from "./post/post";

const ProfilePosts = (props) => {

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

    return (
      <div className="posts_inner">
          <Post message = {postsData[0].message} likesCount = {postsData[0].likesCount} />
          <Post message = {postsData[1].message} likesCount = {postsData[1].likesCount}/>
          <Post message = {postsData[2].message} likesCount = {postsData[2].likesCount}/>
      </div>
    );
}

export default ProfilePosts;
