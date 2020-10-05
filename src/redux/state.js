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
                    name: "Lia Grey",
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

    _addPost() {
        let newPost = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    _onPostChange(postText) {
        this._state.profilePage.newPostText = postText
        this._callSubscriber()
    },
    _addMessage() {
        let newMessage = {
            id: 4,
            message: this._state.messagesPage.newMessageText
        }
        this._state.messagesPage.messagesData.push(newMessage)
        this._state.messagesPage.newMessageText = ''
        this._callSubscriber()
    },
    _onMessageChange(messageText) {
        this._state.messagesPage.newMessageText = messageText
        this._callSubscriber()
    },

    dispatch(action) {
        switch (action.type) {
            case 'ADD-POST':
                this._addPost()
                break
            case 'ON-POST-CHANGE':
                this._onPostChange(action.postText)
                break
            case 'ADD-MESSAGE':
                this._addMessage()
                break
            case 'ON-MESSAGE-CHANGE':
                this._onMessageChange(action.messageText)
                break
            default:
                break
        }
    }
}

export default store;
