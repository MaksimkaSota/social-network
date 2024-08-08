import { memo } from 'react';
import type { ReactElement } from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import classes from './HeaderNotAuthInfo.module.scss';
import userPhoto from '../../../assets/images/user.png';
import { Button } from '../../Common/Button/Button';
import { Language, RoutePath } from '../../../utils/types/enums';
import { contentText } from '../../../utils/languageLocalization/contentText';
import { errorText } from '../../../utils/languageLocalization/errorText';

type PropsType = {
  incorrectAuthText: string;
  languageMode: string;
};

export const HeaderNotAuthInfo = memo<PropsType>(({ incorrectAuthText, languageMode }): ReactElement => {
  const incorrectText = languageMode === Language.en ? incorrectAuthText : errorText.authorization.ru;

  return (
    <div className={classes.headerNotAuthInfo}>
      <img className={classes.userPhoto} src={userPhoto} alt="avatar" />
      <div className={classes.container}>
        <p className={cn(classes.text, classes.incorrectAuthText)}>{incorrectText}</p>
        <NavLink to={RoutePath.login}>
          <Button text={contentText.loginBtn[languageMode]} />
        </NavLink>
      </div>
    </div>
  );
});
