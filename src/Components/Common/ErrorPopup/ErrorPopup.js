import { useEffect, useRef } from 'react';
import classes from './ErrorPopup.module.scss';
import { Error } from '../Error/Error';
import { Button } from '../Button/Button';

export const ErrorPopup = ({ errorObject, resetError }) => {
  const errorPopup = useRef(null);

  useEffect(() => {
    errorPopup.current.focus();
  }, []);

  const onButtonClick = () => {
    resetError(null);
  };

  const onPopupMouseClick = (event) => {
    if (event.target.className === errorPopup.current.className) {
      resetError(null);
    }
  };

  const onPopupKeyboardClick = (event) => {
    if (event.code === 'Escape') {
      resetError(null);
    }
  };

  return (
    <div
      className={classes.errorPopup}
      ref={errorPopup}
      tabIndex="-1"
      onClick={onPopupMouseClick}
      onKeyDown={onPopupKeyboardClick}
    >
      <div className={classes.errorPopupContainer}>
        <Error code={errorObject.code} message={errorObject.message} />
        <Button text="Close" className={classes.errorPopupButton} onClick={onButtonClick} />
      </div>
    </div>
  );
};
