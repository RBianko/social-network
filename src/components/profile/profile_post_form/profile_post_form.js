import React from "react";
import './profile_post_form.css';

const ProfilePostForm = () => {
    return (
        <div className="card profile_post_form">
            <div className="profile_post_form__avatar">
                <a href="#"><img src="https://demo.hasthemes.com/adda-preview/adda/assets/images/profile/profile-midle-1.jpg" alt=""/></a>
            </div>
            <div className="profile_post_form__form">
                <form>
                    <textarea name="newPost" placeholder="New Post">
                    </textarea>
                    <button className="profile_post_form__form-btn">share</button>
                </form>
            </div>
        </div>
    )
}

export default ProfilePostForm;
