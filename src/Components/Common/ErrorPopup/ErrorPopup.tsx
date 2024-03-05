import type { FC, ReactElement, MouseEvent, KeyboardEvent } from 'react';
import { useEffect, useRef } from 'react';
import classes from './ErrorPopup.module.scss';
import { Error } from '../Error/Error';
import { Button } from '../Button/Button';
import type { ErrorType, Nullable } from '../../../utils/types/common';

type PropsType = {
  errorObject: Nullable<ErrorType>;
  resetError: (error: Nullable<ErrorType>) => void;
};

export const ErrorPopup: FC<PropsType> = ({ errorObject, resetError }): ReactElement => {
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

  const onPopupKeyboardClick = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.code === 'Escape') {
      resetError(null);
    }
  };

  return (
    <div
      className={classes.errorPopup}
      ref={errorPopup}
      tabIndex={-1}
      onClick={onPopupMouseClick}
      onKeyDown={onPopupKeyboardClick}
    >
      <div className={classes.errorPopupContainer}>
        <Error code={errorObject!.code} message={errorObject!.message} />
        <Button text="Close" className={classes.errorPopupButton} onClick={onButtonClick} />
      </div>
    </div>
  );
};
