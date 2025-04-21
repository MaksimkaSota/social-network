import type { FC, ReactElement } from 'react';
import cn from 'classnames';
import classes from './ServerError.module.scss';
import { Language } from '../../../utils/types/enums';
import { errorText } from '../../../utils/languageLocalization/errorText';

type PropsType = {
  incorrectText: string;
  incorrectTextKey: string;
  languageMode: string;
  className: string;
};

export const ServerError: FC<PropsType> = ({
  incorrectText,
  incorrectTextKey,
  languageMode,
  className,
}): ReactElement => {
  return (
    <>
      {incorrectText && languageMode === Language.en && (
        <p className={cn(classes.serverError, className)}>{incorrectText}!</p>
      )}
      {incorrectText && languageMode === Language.ru && (
        <p className={cn(classes.serverError, className)}>{errorText[incorrectTextKey].ru}!</p>
      )}
    </>
  );
};
