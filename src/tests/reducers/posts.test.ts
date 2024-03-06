import { addPost, deletePost } from '../../redux/actions/posts';
import { postsReducer } from '../../redux/reducers/posts';
import type { PostsState } from '../../redux/types/posts';

const state: PostsState = {
  posts: [
    { id: 1, postText: 'Hi, Max' },
    { id: 2, postText: 'Hi, Eugene' },
    { id: 3, postText: 'Hi, Yuri' },
    { id: 4, postText: 'Hi, Alexei' },
    { id: 5, postText: 'Hi, Andrey' },
  ],
};

describe('Posts reducer tests', () => {
  it('Posts length should be increment', () => {
    const action = addPost('new post text');
    const newState = postsReducer(state, action);

    expect(newState.posts.length).toBe(6);
  });

  it('New post text should be correct', () => {
    const action = addPost('new post text');
    const newState = postsReducer(state, action);

    expect(newState.posts[5].postText).toBe('new post text');
  });

  it('Posts length should be decrement', () => {
    const action = deletePost(1);
    const newState = postsReducer(state, action);

    expect(newState.posts.length).toBe(4);
  });
});
