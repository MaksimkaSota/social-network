import {
  ADD_POST,
  SET_PROFILE,
  SET_STATUS,
  TOGGLE_IS_FETCHING_PROFILE,
  TOGGLE_IS_FETCHING_STATUS
} from '../types/profile';

const initialState = {
  posts: [
    {id: 1, postText: 'Hi, Max'},
    {id: 2, postText: 'Hi, Eugene'},
    {id: 3, postText: 'Hi, Yuri'},
    {id: 4, postText: 'Hi, Alexei'},
    {id: 5, postText: 'Hi, Andrey'}
  ],
  profile: {},
  isFetchingProfile: false,
  status: '',
  isFetchingStatus: false
};

export const profileReducer = (state = initialState, action) => {
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
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    case TOGGLE_IS_FETCHING_PROFILE:
      return {
        ...state,
        isFetchingProfile: action.payload
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.payload
      };
    case TOGGLE_IS_FETCHING_STATUS:
      return {
        ...state,
        isFetchingStatus: action.payload
      }
    default:
      return state;
  }
};
