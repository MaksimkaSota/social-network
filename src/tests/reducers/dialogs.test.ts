import { addMessage, deleteMessage, addPost, deletePost } from '../../redux/actions/dialogs';
import { dialogsReducer } from '../../redux/reducers/dialogs';
import type { DialogsState } from '../../redux/types/dialogs';

const state: DialogsState = {
  messages: [
    { id: 1, messageText: 'Hi' },
    { id: 2, messageText: 'Hey' },
    { id: 3, messageText: 'Hello' },
  ],
  posts: [
    { id: 1, postText: 'Hi, Max' },
    { id: 2, postText: 'Hi, Eugene' },
    { id: 3, postText: 'Hi, Yuri' },
  ],
};

describe('Dialogs reducer tests', (): void => {
  it('Messages length should be increment', (): void => {
    const action = addMessage('new message text');
    const newState = dialogsReducer(state, action);

    expect(newState.messages.length).toBe(4);
  });
  it('New message text should be correct', (): void => {
    const action = addMessage('new message text');
    const newState = dialogsReducer(state, action);

    expect(newState.messages[3].messageText).toBe('new message text');
  });
  it('Messages length should be decrement', (): void => {
    const action = deleteMessage(1);
    const newState = dialogsReducer(state, action);

    expect(newState.messages.length).toBe(2);
  });

  it('Posts length should be increment', (): void => {
    const action = addPost('new post text');
    const newState = dialogsReducer(state, action);

    expect(newState.posts.length).toBe(4);
  });
  it('New post text should be correct', (): void => {
    const action = addPost('new post text');
    const newState = dialogsReducer(state, action);

    expect(newState.posts[3].postText).toBe('new post text');
  });
  it('Posts length should be decrement', (): void => {
    const action = deletePost(1);
    const newState = dialogsReducer(state, action);

    expect(newState.posts.length).toBe(2);
  });
});
