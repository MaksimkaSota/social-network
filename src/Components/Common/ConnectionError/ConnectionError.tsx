import type { FC, ReactElement } from 'react';
import cn from 'classnames';
import type { ErrorType, Nullable } from '../../../utils/types/common';
import classes from './ConnectionError.module.scss';
import { errorText } from '../../../utils/languageLocalization/errorText';

type PropsType = {
  error: Nullable<ErrorType>;
  errorTextKey: string;
  languageMode: string;
  className: string;
};

export const ConnectionError: FC<PropsType> = ({
  error,
  errorTextKey,
  languageMode,
  className,
}): ReactElement | null => {
  return (
    error && (
      <p className={cn(classes.connectionError, className)}>
        {error.code || errorText.some[languageMode]} {errorText.error[languageMode]}.
        <br />
        {errorText[errorTextKey][languageMode]}!
      </p>
    )
  );
};
