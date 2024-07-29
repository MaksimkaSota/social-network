import { addMessage, deleteMessage, addPost, deletePost } from '../../redux/actions/publications';
import { publicationsReducer } from '../../redux/reducers/publications';
import type { PublicationsState } from '../../redux/types/publications';

const state: PublicationsState = {
  messages: [
    { id: 1, text: 'Hi' },
    { id: 2, text: 'Hey' },
    { id: 3, text: 'Hello' },
  ],
  posts: [
    { id: 1, text: 'Hi, Max' },
    { id: 2, text: 'Hi, Eugene' },
    { id: 3, text: 'Hi, Yuri' },
  ],
};

describe('Publications reducer tests', (): void => {
  it('Messages length should be increment', (): void => {
    const action = addMessage('new message text');
    const newState = publicationsReducer(state, action);

    expect(newState.messages.length).toBe(4);
  });
  it('New message text should be correct', (): void => {
    const action = addMessage('new message text');
    const newState = publicationsReducer(state, action);

    expect(newState.messages[3].text).toBe('new message text');
  });
  it('Messages length should be decrement', (): void => {
    const action = deleteMessage(1);
    const newState = publicationsReducer(state, action);

    expect(newState.messages.length).toBe(2);
  });

  it('Posts length should be increment', (): void => {
    const action = addPost('new post text');
    const newState = publicationsReducer(state, action);

    expect(newState.posts.length).toBe(4);
  });
  it('New post text should be correct', (): void => {
    const action = addPost('new post text');
    const newState = publicationsReducer(state, action);

    expect(newState.posts[3].text).toBe('new post text');
  });
  it('Posts length should be decrement', (): void => {
    const action = deletePost(1);
    const newState = publicationsReducer(state, action);

    expect(newState.posts.length).toBe(2);
  });
});
