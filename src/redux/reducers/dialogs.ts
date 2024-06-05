import { DialogsActionType } from '../types/dialogs';
import type { DialogsAction, DialogsState } from '../types/dialogs';
import type { MessageType, PostType } from '../../utils/types/common';

const initialState: DialogsState = {
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

export const dialogsReducer = (state: DialogsState = initialState, action: DialogsAction): DialogsState => {
  switch (action.type) {
    case DialogsActionType.ADD_DIALOGS_MESSAGE: {
      let lastMessageId = state.messages[state.messages.length - 1].id;
      const newMessage = {
        id: ++lastMessageId,
        messageText: action.payload,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    }
    case DialogsActionType.DELETE_DIALOGS_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter((message: MessageType): boolean => message.id !== action.payload),
      };
    case DialogsActionType.ADD_DIALOGS_POST: {
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
    case DialogsActionType.DELETE_DIALOGS_POST:
      return {
        ...state,
        posts: state.posts.filter((post: PostType): boolean => post.id !== action.payload),
      };
    default:
      return state;
  }
};
