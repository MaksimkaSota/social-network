import { SET_PROFILE_SUCCESS, SET_STATUS_SUCCESS, ADD_POST } from '../types/profile';

const initialState = {
  posts: [
    {id: 1, postText: 'Hi, Max'},
    {id: 2, postText: 'Hi, Eugene'},
    {id: 3, postText: 'Hi, Yuri'},
    {id: 4, postText: 'Hi, Alexei'},
    {id: 5, postText: 'Hi, Andrey'}
  ],
  profile: {},
  status: '',
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload
      };
    case SET_STATUS_SUCCESS:
      return {
        ...state,
        status: action.payload
      };
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
