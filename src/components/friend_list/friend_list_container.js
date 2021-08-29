import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/users_reducer";
import FriendList from "./friend_list";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
})

const mapDispatchToProps = (dispatch) => ({
    follow: (userID) => {
        dispatch(followAC(userID))
    },
    unfollow: (userID) => {
        dispatch(unfollowAC(userID))
    }, setUsers: (users) => {
        dispatch(setUsersAC(users))
    },
    setCurrentPage: (currentPage) => {
        dispatch(setCurrentPageAC(currentPage))
    },
    setTotalUsersCount: (totalCount) => {
        dispatch(setTotalUsersCountAC(totalCount))
    }
})

export const FriendListContainer = connect(mapStateToProps,mapDispatchToProps)(FriendList)
