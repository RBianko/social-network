import React from "react";
import './content_form.css';

const ContentForm = () => {
    return (
        <div className="card content__form">
            <div className="content__form__avatar">
                <a href="#"><img src="https://demo.hasthemes.com/adda-preview/adda/assets/images/profile/profile-midle-1.jpg" alt=""/></a>
            </div>
            <div className="content__form__form">
                <form>
                    <textarea name="newPost" placeholder="New Post">
                    </textarea>
                    <button className="content__form__form-btn">share</button>
                </form>
            </div>
        </div>
    )
}

export default ContentForm;
