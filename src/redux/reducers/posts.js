import { ADD_POST } from '../types/posts';

const initialState = {
  posts: [
    {id: 1, postText: 'Hi, Max'},
    {id: 2, postText: 'Hi, Eugene'},
    {id: 3, postText: 'Hi, Yuri'},
    {id: 4, postText: 'Hi, Alexei'},
    {id: 5, postText: 'Hi, Andrey'}
  ]
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let lastPostId = state.posts[state.posts.length - 1].id;
      const newPost = {
        id: ++lastPostId,
        postText: action.payload
      };
      return {
        ...state,
        posts: [...state.posts, newPost]
      };
    default:
      return state;
  }
};
