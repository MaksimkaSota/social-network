import { FormikErrors } from 'formik';

export type SetStatusType = (status?: any) => void;
export type SetSubmittingType = (isSubmitting: boolean) => void;
export type SetFieldValueType = (field: string, value: any, shouldValidate?: boolean) => Promise<void | FormikErrors<any>>;
export type SetFieldTouchedType = (field: string, isTouched?: boolean, shouldValidate?: boolean) => Promise<void | FormikErrors<any>>;
