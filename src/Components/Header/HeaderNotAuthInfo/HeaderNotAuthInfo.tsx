import type { FC, ReactElement } from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import classes from './HeaderNotAuthInfo.module.scss';
import userPhoto from '../../../assets/images/user.png';
import { Button } from '../../Common/Button/Button';
import { RoutePath } from '../../../utils/types/enums';
import { textContent } from '../../../utils/languageLocalization/textContent';
import { errorText } from '../../../utils/languageLocalization/errorText';

type PropsType = {
  incorrectAuthText: string;
  languageMode: string;
};

export const HeaderNotAuthInfo: FC<PropsType> = ({ incorrectAuthText, languageMode }): ReactElement => {
  const incorrectText = languageMode === 'en' ? incorrectAuthText : errorText.authorization.ru;

  return (
    <div className={classes.headerNotAuthInfo}>
      <img className={classes.userPhoto} src={userPhoto} alt="avatar" />
      <div className={classes.container}>
        <p className={cn(classes.text, classes.incorrectAuthText)}>{incorrectText}</p>
        <NavLink to={RoutePath.login}>
          <Button text={textContent.loginBtn[languageMode]} />
        </NavLink>
      </div>
    </div>
  );
};
