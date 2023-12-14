import classes from './Error.module.scss';

export const Error = ({code, message, img}) => {
  return (
    <div className={classes.errorPageBlock}>
      <h3 className={classes.errorTitle}>Error {code}</h3>
      <img className={classes.errorImage} src={img} alt="robot-error" />
      <p className={classes.errorText}>{message}</p>
    </div>
  );
};
