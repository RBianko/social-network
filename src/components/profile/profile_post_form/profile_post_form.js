import React from "react"
import './profile_post_form.css'

const ProfilePostForm = (props) => {

    let newPostForm = React.createRef()

    const addPost = () => {
        let action = {
            type: 'ADD-POST'
        }
        newPostForm.current.value && props.dispatch(action)
        newPostForm.current.value = ''
    }

    const onPostChange = () => {
        let text = newPostForm.current.value
        let action = {
            type: 'ON-POST-CHANGE',
            postText: text
        }
        props.dispatch(action)
    }

    return (
        <div className="card profile_post_form">
            <div className="profile_post_form__avatar">
                <a href="#"><img
                    src="https://demo.hasthemes.com/adda-preview/adda/assets/images/profile/profile-midle-1.jpg"
                    alt=""/></a>
            </div>
            <div className="profile_post_form__form">
                    <textarea
                        ref={newPostForm}
                        onChange={onPostChange}
                        value={props.newPostText}
                        placeholder="New Post"
                    />
                <button
                    onClick={addPost}
                    className="profile_post_form__form-btn"
                > share
                </button>
            </div>
        </div>
    )
}

export default ProfilePostForm
