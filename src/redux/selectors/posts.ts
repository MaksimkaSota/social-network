import type { AppState } from '../reducers/reducers';

export const postsSelector = (state: AppState) => state.posts.posts;
