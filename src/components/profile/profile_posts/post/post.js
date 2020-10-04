import React from "react";
import './post.css';

const Post = (props) => {
    return (
        <div className="card post">
            <div className="post__title">
                <div className="post__avatar">
                    <a href="#"><img src="https://demo.hasthemes.com/adda-preview/adda/assets/images/profile/profile-midle-1.jpg" alt=""/></a>
                </div>
                <div className="post__name">
                    <a href="#">Roman Bianko</a><br/>
                    <span className="post__time">20 min ago</span>
                </div>
                <div className="post__settings">
                    <span/>
                    <span/>
                    <span/>
                    <div className="post__settings__menu">
                        <ul>
                            <li>Edit Post</li>
                            <li>Copy Post Link</li>
                            <li>Add Tag</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="post__content">
                <p>{props.message}</p>
                <div className="post__meta">
                    <div className="post__meta-like">
                        <button >
                            <i className="far fa-heart"/>
                        </button>
                        <span>{props.likesCount} people like this</span>
                    </div>
                    <div className="post__meta-share">
                        <button >
                            <i className="far fa-share-square"/>
                        </button>
                        <span>211</span>
                    </div>
                    <div className="post__meta-comment">
                        <button >
                            <i className="far fa-comment-dots"/>
                        </button>
                        <span>312</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;
