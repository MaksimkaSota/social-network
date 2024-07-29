import { PublicationsActionType } from '../types/publications';
import type { PublicationsAction, PublicationsState } from '../types/publications';
import type { PublicationType } from '../../utils/types/common';

const initialState: PublicationsState = {
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

export const publicationsReducer = (
  state: PublicationsState = initialState,
  action: PublicationsAction
): PublicationsState => {
  switch (action.type) {
    case PublicationsActionType.ADD_PUBLICATIONS_MESSAGE: {
      let lastMessageId = state.messages[state.messages.length - 1].id;
      const newMessage = {
        id: ++lastMessageId,
        text: action.payload,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    }
    case PublicationsActionType.DELETE_PUBLICATIONS_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter((message: PublicationType): boolean => message.id !== action.payload),
      };
    case PublicationsActionType.ADD_PUBLICATIONS_POST: {
      let lastPostId = state.posts[state.posts.length - 1].id;
      const newPost = {
        id: ++lastPostId,
        text: action.payload,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }
    case PublicationsActionType.DELETE_PUBLICATIONS_POST:
      return {
        ...state,
        posts: state.posts.filter((post: PublicationType): boolean => post.id !== action.payload),
      };
    default:
      return state;
  }
};
