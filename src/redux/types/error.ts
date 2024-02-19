import { Nullable } from '../../utils/types/common';

export type ErrorType = {
  code?: number;
  message: string;
};

export type ErrorState = {
  SET_USERS: Nullable<ErrorType>;
  SET_PROFILE: Nullable<ErrorType>;
  SET_PROFILE_STATUS: Nullable<ErrorType>;
  SET_PROFILE_PHOTO: Nullable<ErrorType>;
  SET_PROFILE_DATA: Nullable<ErrorType>;
  SET_AUTH: Nullable<ErrorType>;
};
