import { FormikErrors, FormikState } from 'formik';
import { ChangeEvent } from 'react';

export type SetStatusType = (status?: any) => void;
export type SetSubmittingType = (isSubmitting: boolean) => void;
export type SetFieldValueType = (
  field: string,
  value: any,
  shouldValidate?: boolean
) => Promise<void | FormikErrors<any>>;
export type SetFieldTouchedType = (
  field: string,
  isTouched?: boolean,
  shouldValidate?: boolean
) => Promise<void | FormikErrors<any>>;
export type ResetFormType = (nextState?: Partial<FormikState<any>>) => void;
export type HandleChangeType = (event: ChangeEvent<any>) => void;

export type FormikErrorsType = { [field: string]: string | FormikErrorsType };
export type FormikTouchedType = { [field: string]: boolean };

export enum FormName {
  text = 'text',
  full_name = 'fullName',
  job = 'Job',
  looking_for_a_job = 'lookingForAJob',
  looking_for_a_job_description = 'lookingForAJobDescription',
  about_me = 'aboutMe',
  email = 'email',
  password = 'password',
  remember_me = 'rememberMe',
  captcha = 'captcha',
}
