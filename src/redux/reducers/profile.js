import { ADD_POST, SET_POST } from '../types/profile';

const initialState = {
  posts: [
    {id: 1, postText: 'Hi, Max'},
    {id: 2, postText: 'Hi, Eugene'},
    {id: 3, postText: 'Hi, Yuri'},
    {id: 4, postText: 'Hi, Alexei'},
    {id: 5, postText: 'Hi, Andrey'}
  ],
  postText: 'Post text'
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST:
      return {
        ...state,
        postText: action.payload
      };
    case ADD_POST:
      const newPost = {
        id: 6,
        postText: state.postText
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        postText: ''
      };
    default:
      return state;
  }
};
