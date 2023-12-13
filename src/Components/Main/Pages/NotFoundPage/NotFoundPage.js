import classes from './NotFoundPage.module.scss';
import robot from '../../../../assets/images/robot-404.png';
import { useLocation } from 'react-router-dom';

export const NotFoundPage = () => {
  const {pathname} = useLocation();

  return (
    <div className={classes.errorPageBlock}>
      <h3 className={classes.errorTitle}>Not Found Page</h3>
      <img className={classes.errorImage} src={robot} alt="robot-404" />
      <p className={classes.errorText}><b>The requested URL</b> {pathname} <b>was not found on this server!</b></p>
    </div>
  );
};
