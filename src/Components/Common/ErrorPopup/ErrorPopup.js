import classes from './ErrorPopup.module.scss';
import { useRef } from 'react';
import { Error } from '../Error/Error';
import { Button } from '../Button/Button';

export const ErrorPopup = ({errorObject, resetError}) => {
  const errorPopup = useRef(null);

  const onButtonClick = () => {
    resetError();
  };
  const onPopupClick = (event) => {
    if (event.target.className === errorPopup.current.className) {
      resetError();
    }
  };

  return (
    <div className={classes.errorPopup} ref={errorPopup} onClick={onPopupClick}>
      <div className={classes.errorPopupContainer}>
        <Error code={errorObject.code} message={errorObject.message} />
        <Button text='Close' className={classes.errorPopupButton} onClick={onButtonClick} />
      </div>
    </div>
  );
};
