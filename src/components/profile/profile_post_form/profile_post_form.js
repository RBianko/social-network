import React from "react"
import './profile_post_form.css'

const ProfilePostForm = (props) => {

    let newPostForm = React.createRef()

    const addPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        let text = newPostForm.current.value
        props.onPostChange(text)
    }

    return (
        <div className="card profile_post_form">
            <div className="profile_post_form__avatar">
                <a href="#"><img src="https://demo.hasthemes.com/adda-preview/adda/assets/images/profile/profile-midle-1.jpg" alt=""/></a>
            </div>
            <div className="profile_post_form__form">
                    <textarea
                        ref={ newPostForm }
                        onChange={ onPostChange }
                        value={ props.newPostText }
                        placeholder="New Post"
                    />
                    <button
                        onClick={ addPost }
                        className="profile_post_form__form-btn"
                    > share </button>
            </div>
        </div>
    )
}

export default ProfilePostForm
