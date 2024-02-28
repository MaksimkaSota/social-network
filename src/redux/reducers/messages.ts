import { MessagesAction, MessagesActionType, MessagesState } from '../types/messages';

const initialState: MessagesState = {
  dialogs: [
    { id: 1, name: 'Max' },
    { id: 2, name: 'Eugene' },
    { id: 3, name: 'Yuri' },
    { id: 4, name: 'Alexei' },
    { id: 5, name: 'Andrey' },
  ],
  messages: [
    { id: 1, messageText: 'Hi' },
    { id: 2, messageText: 'Hey' },
    { id: 3, messageText: 'Hello' },
  ],
};

export const messagesReducer = (state: MessagesState = initialState, action: MessagesAction): MessagesState => {
  switch (action.type) {
    case MessagesActionType.ADD_MESSAGES_MESSAGE: {
      let lastMessageId = state.messages[state.messages.length - 1].id;
      const newMessage = {
        id: ++lastMessageId,
        messageText: action.payload,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    }
    case MessagesActionType.DELETE_MESSAGES_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter((message) => message.id !== action.payload),
      };
    default:
      return state;
  }
};