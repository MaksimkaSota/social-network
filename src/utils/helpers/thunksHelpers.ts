import type { AxiosError } from 'axios';
import { Language } from '../types/enums';
import { errorText } from '../languageLocalization/errorText';
import type { ObjectType } from '../types/common';

export const fillErrorsObject = (object: ObjectType, key: string, message: string, languageMode: string): void => {
  if (message.toLowerCase().replaceAll(' ', '').includes(key.toLowerCase())) {
    if (languageMode === Language.en) {
      object[key] = message;
    }
    if (languageMode === Language.ru) {
      object[key] = errorText.incorrectData.ru;
    }
  }
};

export const getErrorMessage = (errorObject: AxiosError<any>): string => {
  return errorObject.response?.data.message || errorObject.message;
};
