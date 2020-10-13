const ADD_MESSAGE = 'ADD-MESSAGE'
const ON_MESSAGE_CHANGE = 'ON-MESSAGE-CHANGE'

let initialState = {
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


const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''
            }

        case ON_MESSAGE_CHANGE:
            return {
                ...state,
                newMessageText: action.newText
            }

        default:
            return state
    }
}

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
})
export const onMessageChangeActionCreator = (text) => ({
    type: ON_MESSAGE_CHANGE,
    newText: text
})

export default messagesReducer
