import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import classes from './HeaderNotAuthInfo.module.scss';
import userPhoto from '../../../assets/images/user.png';
import { Button } from '../../Common/Button/Button';

export const HeaderNotAuthInfo = ({ incorrectAuthText }) => {
  return (
    <div className={classes.headerNotAuthInfo}>
      <img className={classes.userPhoto} src={userPhoto} alt="avatar" />
      <p className={cn(classes.text, classes.incorrectAuthText)}>{incorrectAuthText}</p>
      <NavLink to="/login">
        <Button text="Login" />
      </NavLink>
    </div>
  );
};
