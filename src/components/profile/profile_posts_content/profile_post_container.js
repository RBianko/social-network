import ProfilePostForm from "./profile_post_form/profile_post_form";
import ProfilePosts from "./profile_posts/profile_posts";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile_reducer";
import {connect} from "react-redux";

const mapStateToPropsForm = (state) => ({
        newPostText: state.profilePage.newPostText
})

const mapStateToProps = (state) => ({
    postsData: state.profilePage.postsData
})

const mapDispatchToProps = (dispatch) => ({
    addPost: () => {
        dispatch(addPostActionCreator())
    },
    onPostChange: (text) => {
        dispatch(onPostChangeActionCreator(text))
    }
})

export const ProfilePostsFormContainer = connect(mapStateToPropsForm, mapDispatchToProps)(ProfilePostForm)
export const ProfilePostsContainer = connect(mapStateToProps, {})(ProfilePosts)
