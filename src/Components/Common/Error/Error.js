import classes from './Error.module.scss';
import robotError from '../../../assets/images/robot-error.png';
import robot404 from '../../../assets/images/robot-404.png';

export const Error = ({code, message}) => {
  const robot = code === 404 ? robot404 : robotError;

  return (
    <div className={classes.errorPageBlock}>
      <h3 className={classes.errorTitle}>Error {code}</h3>
      <img className={classes.errorImage} src={robot} alt="robot" />
      <p className={classes.errorText}>{message}</p>
    </div>
  );
};
