import { ADD_MESSAGE, SET_MESSAGE } from '../types/messages';

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
  ],
  messageText: 'Message text'
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        messageText: action.payload
      };
    case ADD_MESSAGE:
      const newMessage = {
        id: 6,
        messageText: state.messageText
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        messageText: ''
      };
    default:
      return state;
  }
};
