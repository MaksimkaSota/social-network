import { getAuthAPI, getCaptchaUrlAPI, loginAPI, logoutAPI } from '../../api/auth';
import {
  setAuthRequest,
  setAuthSuccessCorrect,
  setAuthSuccessIncorrect,
  setAuthFailure,
  setAuthUserPhoto,
  setAuthUserPhotoError,
  resetAuthData,
  setCaptchaUrl,
  setLogoutError,
} from '../actions/auth';
import { getProfileAPI } from '../../api/profile';
import { getErrorMessage } from '../../utils/helpers/thunksHelpers';
import { ThunkType } from '../../utils/types/common';
import { AuthAction } from '../types/auth';
import { isAxiosError } from 'axios';
import { IResponse } from '../../api/types/http';
import { IAuthData, ICaptcha } from '../../api/types/auth';
import { FormikErrors } from 'formik';

export const getAuth = (): ThunkType<AuthAction> => {
  return async (dispatch) => {
    try {
      dispatch(setAuthRequest());
      const dataAuth: IResponse<IAuthData> = await getAuthAPI();
      if (dataAuth.resultCode === 0) {
        dispatch(setAuthSuccessCorrect(dataAuth.data));
        dispatch(setAuthSuccessIncorrect(''));
        try {
          const dataProfile = await getProfileAPI(dataAuth.data.id);
          dispatch(setAuthUserPhoto(dataProfile.photos.small));
        } catch (error) {
          if (isAxiosError(error)) {
            dispatch(setAuthUserPhotoError(error.response?.status, getErrorMessage(error)));
          }
        }
      } else if (dataAuth.resultCode === 1) {
        dispatch(setAuthSuccessIncorrect(dataAuth.messages[0]));
      }
    } catch (error) {
      if (isAxiosError(error)) {
        dispatch(setAuthFailure(error.response?.status, getErrorMessage(error)));
      }
    }
  };
};

export const getCaptchaUrl = (): ThunkType<AuthAction> => {
  return async (dispatch) => {
    const data: ICaptcha = await getCaptchaUrlAPI();
    dispatch(setCaptchaUrl(data.url));
  };
};

export const login = (
  loginData: { email: string; password: string; rememberMe: boolean; captcha: string },
  setStatus: (status?: any) => void,
  setSubmitting: (isSubmitting: boolean) => void,
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => Promise<void | FormikErrors<any>>,
  setFieldTouched: (field: string, isTouched?: boolean, shouldValidate?: boolean) => Promise<void | FormikErrors<any>>
): ThunkType<AuthAction> => {
  return async (dispatch) => {
    try {
      const data = await loginAPI(loginData.email, loginData.password, loginData.rememberMe, loginData.captcha);
      if (data.resultCode === 0) {
        await dispatch(getAuth());
      } else {
        if (data.resultCode === 10) {
          await dispatch(getCaptchaUrl());
          await setFieldValue('isCaptcha', true);
          await setFieldTouched('captcha', false);
        }
        const message = data.messages[0] || 'Some error';
        setStatus(message);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        const message = `Error ${error.response?.status}, ${getErrorMessage(error)}`;
        setStatus(message);
      }
    }
    setSubmitting(false);
  };
};

export const logout = (): ThunkType<AuthAction> => {
  return async (dispatch) => {
    try {
      const data = await logoutAPI();
      if (data.resultCode === 0) {
        dispatch(
          resetAuthData({
            id: null,
            email: null,
            login: null,
            isAuth: false,
            authUserPhoto: '',
            captchaUrl: '',
          })
        );
        dispatch(setAuthSuccessIncorrect('You are not authorized'));
      }
    } catch (error) {
      if (isAxiosError(error)) {
        dispatch(
          setLogoutError({
            code: error.response?.status,
            message: getErrorMessage(error),
          })
        );
      }
    }
  };
};
