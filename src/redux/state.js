import {reRenderEntireTree} from "../render";

let state;
state = {
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
                msgCount: (Math.ceil(Math.random() * 21 + 1))
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
        ]
    }
};

export const addPost = () => {
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        likesCount: 0
    }

    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    reRenderEntireTree(state)
}

export const onPostChange = (postText) => {
    state.profilePage.newPostText = postText
    reRenderEntireTree(state)
}

export default state;
