import { isAxiosError } from 'axios';
import { getAuthAPI, getCaptchaUrlAPI, loginAPI, logoutAPI } from '../../api/http/auth';
import {
  resetAuthData,
  setAuthFailure,
  setAuthRequest,
  setAuthSuccessCorrect,
  setAuthSuccessIncorrect,
  setAuthUserPhoto,
  setAuthUserPhotoError,
  setCaptchaUrl,
  setLoginError,
  setLogoutError,
} from '../actions/auth';
import { getProfileAPI } from '../../api/http/profile';
import { getErrorMessage } from '../../utils/helpers/thunksHelpers';
import type { ThunkType } from '../../utils/types/common';
import type { AuthAction } from '../types/auth';
import type { SetFieldTouchedType, SetFieldValueType, SetStatusType, SetSubmittingType } from '../../utils/types/form';
import type { IAuthData, ICaptcha, IResponse } from '../../utils/types/api';
import { FormName, StatusCode } from '../../utils/types/enums';
import { errorText } from '../../utils/languageLocalization/errorText';

export const getAuth = (): ThunkType<AuthAction> => {
  return async (dispatch) => {
    try {
      dispatch(setAuthRequest());
      const dataAuth: IResponse<IAuthData> = await getAuthAPI();
      if (dataAuth.resultCode === StatusCode.success) {
        dispatch(setAuthSuccessCorrect(dataAuth.data));
        dispatch(setAuthSuccessIncorrect(''));
        try {
          const dataProfile = await getProfileAPI(dataAuth.data.id);
          dispatch(setAuthUserPhoto(dataProfile.photos.small));
        } catch (error: unknown) {
          if (isAxiosError(error)) {
            dispatch(setAuthUserPhotoError(getErrorMessage(error), error.response?.status));
          }
        }
      } else if (dataAuth.resultCode === StatusCode.failure) {
        dispatch(setAuthSuccessIncorrect(dataAuth.messages[0]));
      }
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        dispatch(setAuthFailure(getErrorMessage(error), error.response?.status));
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
  setStatus: SetStatusType,
  setSubmitting: SetSubmittingType,
  setFieldValue: SetFieldValueType,
  setFieldTouched: SetFieldTouchedType
): ThunkType<AuthAction> => {
  return async (dispatch, getState) => {
    try {
      const data = await loginAPI(loginData.email, loginData.password, loginData.rememberMe, loginData.captcha);
      if (data.resultCode === StatusCode.success) {
        await dispatch(getAuth());
      } else {
        if (data.resultCode === StatusCode.required_captcha) {
          await dispatch(getCaptchaUrl());
          await setFieldValue(FormName.is_captcha, true);
          await setFieldTouched(FormName.captcha, false);
        }
        const serverError = getState().view.languageMode === 'en' ? data.messages[0] : errorText.incorrectLoginData.ru;
        setStatus(serverError);
      }
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        dispatch(
          setLoginError({
            code: error.response?.status,
            message: getErrorMessage(error),
          })
        );
      }
    }
    setSubmitting(false);
  };
};

export const logout = (): ThunkType<AuthAction> => {
  return async (dispatch) => {
    try {
      const data = await logoutAPI();
      if (data.resultCode === StatusCode.success) {
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
    } catch (error: unknown) {
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
