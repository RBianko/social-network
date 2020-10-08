const ADD_MESSAGE = 'ADD-MESSAGE'
const ON_MESSAGE_CHANGE = 'ON-MESSAGE-CHANGE'

const messagesReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            state.messagesData.push(newMessage)
            state.newMessageText = ''
            return state

        case ON_MESSAGE_CHANGE:
            state.newMessageText = action.newText
            return state

        default:
            return state
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const onMessageChangeActionCreator = (text) => ({
    type: ON_MESSAGE_CHANGE,
    newText: text
})

export default messagesReducer
