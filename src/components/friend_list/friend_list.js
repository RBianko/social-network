import React from "react";
import FriendListItem from "./friend_list_item/friend_list_item";

let FriendList = (props) => {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    if (props.currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
            pages.push(i)
        }
    } else if (props.currentPage === pagesCount) {
        for (let i = props.currentPage - 2; i <= props.currentPage; i++) {
            pages.push(i)
        }
    } else {
        for (let i = props.currentPage - 1; i <= props.currentPage + 1; i++) {
            pages.push(i)
        }
    }

    let lastPage = () => {
        if (props.currentPage + 3 <= pagesCount) {
            return <div
                className="page card"
                onClick={() => props.onPageChanged(pagesCount)}>
                {pagesCount}
            </div>
        }
    }

    let prevArrow = () => {
        if (props.currentPage !== 1) {
            return <div
                className="page card"
                onClick={() => props.onPageChanged(props.currentPage - 1)}>
                &#8636;
            </div>
        }
        return <div
            className="page card passive">
            &#8636;
        </div>
    }
    
    let nextArrow = () => {
        if (props.currentPage !== pagesCount) {
            return <div
                className="page card"
                onClick={() => props.onPageChanged(props.currentPage + 1)}>
                &#8640;
            </div>
        }
        return <div
            className="page card passive">
            &#8640;
        </div>
    }

    let usersList = props.users
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
            follow={props.follow}
            unfollow={props.unfollow}
        />
    )

    return  <div className="friend_list__wrapper">
                <div className="friend_list__content">
                    <div className="friend_list card">
                        <div className="friend_list__title">
                            <h2>Friend List</h2>
                        </div>
                    </div>
                    <div className="pages">
                        {prevArrow()}
                        {props.currentPage > 4 ? <div
                                className={"page card"}
                                onClick={() => props.onPageChanged(1)}>
                                1</div>
                                : null}
                        {props.currentPage <= 4 ? null : <div className="page card">...</div>}
                        {pages.map(page => <div
                                className={"page card" + (props.currentPage === page ? " selected" : "")}
                                onClick={() => props.onPageChanged(page)}>
                                {page}</div>
                        )}
                        {pagesCount <= (props.currentPage + 2) ? null : <div className="page card">...</div>}
                        {lastPage()}
                        {nextArrow()}
                    </div>
                    <div className="friend_list__items">
                        {/*{usersList}*/}
                    </div>
                </div>
            </div>
}

export default FriendList;