import { PostsActionType } from '../types/posts';
import type { AddPostAction, DeletePostAction } from '../types/posts';

export const addPost = (text: string): AddPostAction => ({ type: PostsActionType.ADD_POSTS_POST, payload: text });
export const deletePost = (id: number): DeletePostAction => ({ type: PostsActionType.DELETE_POSTS_POST, payload: id });
