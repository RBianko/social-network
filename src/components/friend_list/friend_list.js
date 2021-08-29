import React from "react";
import FriendListItem from "./friend_list_item/friend_list_item";
import './friend_list.css'
import * as axios from "axios";

class FriendList extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                }
            )
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setCurrentPage(response.data.items)
            })
    }

    render() {
        let usersList = this.props.users
            .map(user =>
                <FriendListItem
                    name={user.name}
                    key={user.id}
                    id={user.id}
                    followed={user.followed}
                    sttus={user.status}
                    avatarS={user.photos.small}
                    avatarL={user.photos.large}
                    //city={user.location.city}
                    //country={user.location.country}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />
            )

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = this.props.currentPage; i <= this.props.currentPage + 3; i++) {
            pages.push(i)
        }

        let lastPage = () => {
            if (this.props.currentPage + 3 < pagesCount) {
                return <div
                    className="page card"
                    onClick={() => this.onPageChanged(pagesCount)}>
                    {pagesCount}
                </div>
            }
        }

        let prevArrow = () => {
            if (this.props.currentPage !== 1) {
                return <div
                    className="page card"
                    onClick={() => this.onPageChanged(pagesCount)}>
                    <div
                        className="page card"
                        onClick={() => this.onPageChanged(this.props.currentPage - 1)}>
                        &#8636;
                    </div>
                </div>
            }
            return <div
                className="page card passive">
                &#8636;
            </div>
        }
        let nextArrow = () => {
            if (this.props.currentPage !== pagesCount) {
                return <div
                    className="page card"
                    onClick={() => this.onPageChanged(this.props.currentPage + 1)}>
                    &#8640;
                </div>
            }
            return <div
                className="page card passive">
                &#8640;
            </div>
        }


        return (
            <div className="friend_list__wrapper">
                <div className="friend_list__content">
                    <div className="friend_list card">
                        <div className="friend_list__title">
                            <h2>Friend List</h2>
                        </div>
                    </div>
                    <div className="pages">
                        {prevArrow()}
                        {pages.map(page => <div
                                className={"page card " + (this.props.currentPage === page && `selected`)}
                                onClick={() => this.onPageChanged(page)}>
                                {page}</div>
                        )}
                        <div className="page card">...</div>
                        {lastPage()}
                        {nextArrow()}
                    </div>
                    <div className="friend_list__items">
                        {/*{usersList}*/}
                    </div>
                </div>
            </div>
        )
    }
}

export default FriendList;
