import { MESSAGES_ADD_MESSAGE, MESSAGES_DELETE_MESSAGE } from '../types/messages';

const initialState = {
  dialogs: [
    {id: 1, name: 'Max'},
    {id: 2, name: 'Eugene'},
    {id: 3, name: 'Yuri'},
    {id: 4, name: 'Alexei'},
    {id: 5, name: 'Andrey'}
  ],
  messages: [
    {id: 1, messageText: 'Hi'},
    {id: 2, messageText: 'Hey'},
    {id: 3, messageText: 'Hello'}
  ]
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGES_ADD_MESSAGE:
      let lastMessageId = state.messages[state.messages.length - 1].id;
      const newMessage = {
        id: ++lastMessageId,
        messageText: action.payload
      };
      return {
        ...state,
        messages: [...state.messages, newMessage]
      };
    case MESSAGES_DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter((message) => message.id !== action.payload)
      };
    default:
      return state;
  }
};
