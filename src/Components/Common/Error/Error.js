import cn from 'classnames';
import classes from './Error.module.scss';
import robotError from '../../../assets/images/robot-error.png';
import robot404 from '../../../assets/images/robot-404.png';

export const Error = ({ code, message, isGlobalError = false }) => {
  const robot = code === 404 ? robot404 : robotError;

  return (
    <div className={cn(classes.errorPageBlock, { [classes.globalError]: isGlobalError })}>
      <h3 className={classes.errorTitle}>Error {code}</h3>
      <img className={classes.errorImage} src={robot} alt="robot" />
      <p className={classes.errorText}>{message}</p>
    </div>
  );
};
