import { addMessage, deleteMessage } from '../../redux/actions/messages';
import { messagesReducer } from '../../redux/reducers/messages';
import type { MessagesState } from '../../redux/types/messages';

const state: MessagesState = {
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

describe('Messages reducer tests', (): void => {
  it('Messages length should be increment', (): void => {
    const action = addMessage('new message text');
    const newState = messagesReducer(state, action);

    expect(newState.messages.length).toBe(4);
  });

  it('New message text should be correct', (): void => {
    const action = addMessage('new message text');
    const newState = messagesReducer(state, action);

    expect(newState.messages[3].messageText).toBe('new message text');
  });

  it('Messages length should be decrement', (): void => {
    const action = deleteMessage(1);
    const newState = messagesReducer(state, action);

    expect(newState.messages.length).toBe(2);
  });
});
