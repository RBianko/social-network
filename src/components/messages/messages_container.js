import './messages.css';
import Messages from "./messages";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/messages_reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        massagesListData: state.messagesPage.massagesListData,
        messagesData: state.messagesPage.messagesData,
        newMessageText: state.messagesPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onMessageChange: (text) => {
            dispatch(onMessageChangeActionCreator(text))
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;
