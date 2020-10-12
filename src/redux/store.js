import messagesReducer from "./messages_reducer";
import profileReducer from "./profile_reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {
                    id: 1,
                    message: "Hello React!",
                    likesCount: 3221
                },
                {
                    id: 2,
                    message: "I'm your fan!",
                    likesCount: 1289
                },
                {
                    id: 3,
                    message: "Keep going ON!!!",
                    likesCount: 4221
                }
            ],
            newPostText: ''
        },
        messagesPage: {
            massagesListData: [
                {
                    id: 1,
                    name: "Roman Bianko",
                    imgId: 9,
                    isActive: true,
                    msgCount: 3
                },
                {
                    id: 2,
                    name: "Bruno Mars",
                    imgId: 13
                },
                {
                    id: 3,
                    name: "Julia Bianko",
                    imgId: 3
                },
                {
                    id: 4,
                    name: "Lea Grey",
                    imgId: 2
                },
                {
                    id: 5,
                    name: "J Boston",
                    imgId: 16
                }
            ],
            messagesData: [
                {
                    id: 1,
                    message: "Let's go!!"
                },
                {
                    id: 2,
                    message: "Ok we can try, but if you fail i cant help you u know what i mean.."
                },
                {
                    id: 3,
                    message: "Any one can join us if you want"
                }
            ],
            newMessageText: ''
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)

        this._callSubscriber(this._state)
    }
}

export default store;
