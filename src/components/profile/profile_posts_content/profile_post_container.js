import React from "react";
import ProfilePostForm from "./profile_post_form/profile_post_form";
import ProfilePosts from "./profile_posts/profile_posts";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile_reducer";
import StoreContext from "../../../store_context";

const ProfilePostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState()

                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                const onPostChange = (text) => {
                    store.dispatch(onPostChangeActionCreator(text))
                }

                return <div>
                    <ProfilePostForm
                        addPost={addPost}
                        onPostChange={onPostChange}
                        newPostText={state.profilePage.newPostText}
                    />
                    <ProfilePosts
                        postsData={state.profilePage.postsData}
                    />
                </div>
            }
        }
        </StoreContext.Consumer>
    )
}

export default ProfilePostsContainer;
