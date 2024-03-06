import { PostsActionType } from '../types/posts';
import type { PostsAction, PostsState } from '../types/posts';
import type { PostType } from '../../utils/types/common';

const initialState: PostsState = {
  posts: [
    { id: 1, postText: 'Hi, Max' },
    { id: 2, postText: 'Hi, Eugene' },
    { id: 3, postText: 'Hi, Yuri' },
    { id: 4, postText: 'Hi, Alexei' },
    { id: 5, postText: 'Hi, Andrey' },
  ],
};

export const postsReducer = (state: PostsState = initialState, action: PostsAction): PostsState => {
  switch (action.type) {
    case PostsActionType.ADD_POSTS_POST: {
      let lastPostId = state.posts[state.posts.length - 1].id;
      const newPost = {
        id: ++lastPostId,
        postText: action.payload,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }
    case PostsActionType.DELETE_POSTS_POST:
      return {
        ...state,
        posts: state.posts.filter((post: PostType): boolean => post.id !== action.payload),
      };
    default:
      return state;
  }
};
