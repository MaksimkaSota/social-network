import { AxiosError } from 'axios';

type ObjectType = { [field: string]: string | ObjectType };

export const fillErrorsObject = (object: ObjectType, key: string, message: string): void => {
  if (message.toLowerCase().replaceAll(' ', '').includes(key.toLowerCase())) {
    object[key] = message;
  }
};

export const getErrorMessage = (errorObject: AxiosError<any>): string => {
  return errorObject.response?.data.message || errorObject.message;
};
