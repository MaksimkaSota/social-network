export type PostType = {
  id: number;
  postText: string;
};

export type PostsState = {
  posts: Array<PostType>;
};

export enum PostsActionType {
  ADD_POSTS_POST = 'ADD_POSTS_POST',
  DELETE_POSTS_POST = 'DELETE_POSTS_POST',
}

export type AddPostAction = { type: PostsActionType.ADD_POSTS_POST; payload: string };
export type DeletePostAction = { type: PostsActionType.DELETE_POSTS_POST; payload: number };

export type PostsAction = AddPostAction | DeletePostAction;
