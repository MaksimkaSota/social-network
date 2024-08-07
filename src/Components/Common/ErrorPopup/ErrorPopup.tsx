import type { FC, ReactElement, MouseEvent, KeyboardEvent } from 'react';
import { useEffect, useRef } from 'react';
import classes from './ErrorPopup.module.scss';
import { Error } from '../Error/Error';
import { Button } from '../Button/Button';
import type { ErrorType, Nullable } from '../../../utils/types/common';
import { KeyboardEventCode, Language } from '../../../utils/types/enums';
import { contentText } from '../../../utils/languageLocalization/contentText';
import { errorText } from '../../../utils/languageLocalization/errorText';

type PropsType = {
  errorObject: Nullable<ErrorType>;
  resetError: (error: Nullable<ErrorType>) => void;
  languageMode: string;
  errorTextKey: string;
};

export const ErrorPopup: FC<PropsType> = ({
  errorObject,
  resetError,
  languageMode,
  errorTextKey,
}): ReactElement | null => {
  const errorPopup = useRef<HTMLDivElement>(null);

  useEffect(() => {
    errorPopup.current?.focus();
  }, []);

  const onButtonClick = (): void => {
    resetError(null);
  };

  const onPopupMouseClick = (event: MouseEvent<HTMLDivElement>): void => {
    if ((event.target as Element).className === errorPopup.current?.className) {
      resetError(null);
    }
  };

  const onKeyboardPress = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.code === KeyboardEventCode.escape) {
      resetError(null);
    }
  };

  return (
    errorObject && (
      <div
        className={classes.errorPopup}
        ref={errorPopup}
        tabIndex={-1}
        onClick={onPopupMouseClick}
        onKeyDown={onKeyboardPress}
      >
        <div className={classes.errorPopupContainer}>
          {languageMode === Language.en && <Error code={errorObject.code} message={errorObject.message} />}
          {languageMode === Language.ru && <Error message={errorText[errorTextKey].ru} />}
          <Button
            text={contentText.closeBtn[languageMode]}
            className={classes.errorPopupButton}
            onClick={onButtonClick}
          />
        </div>
      </div>
    )
  );
};
