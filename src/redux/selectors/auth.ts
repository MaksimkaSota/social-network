import { AppState } from '../reducers/reducers';

export const idSelector = (state: AppState) => state.auth.id;
export const loginSelector = (state: AppState) => state.auth.login;
export const isAuthSelector = (state: AppState) => state.auth.isAuth;
export const authUserPhotoSelector = (state: AppState) => state.auth.authUserPhoto;
export const authUserPhotoErrorSelector = (state: AppState) => state.auth.authUserPhotoError;
export const incorrectAuthTextSelector = (state: AppState) => state.auth.incorrectAuthText;
export const captchaUrlSelector = (state: AppState) => state.auth.captchaUrl;
export const logoutErrorSelector = (state: AppState) => state.auth.logoutError;
