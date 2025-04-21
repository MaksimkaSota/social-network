import { memo, type ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import classes from './HeaderNotAuthInfo.module.scss';
import { Button } from '../../Common/Button/Button';
import UserPhoto from '../../../assets/images/user.svg';
import { Language, RoutePath } from '../../../utils/types/enums';
import { contentText } from '../../../utils/languageLocalization/contentText';
import { errorText } from '../../../utils/languageLocalization/errorText';
import { altText } from '../../../utils/languageLocalization/altText';

type PropsType = {
  incorrectAuthText: string;
  languageMode: string;
};

export const HeaderNotAuthInfo = memo<PropsType>(({ incorrectAuthText, languageMode }): ReactElement => {
  const incorrectText = languageMode === Language.en ? incorrectAuthText : errorText.authorization.ru;

  return (
    <div className={classes.headerNotAuthInfo}>
      <UserPhoto className={classes.userPhoto} alt={altText.ava[languageMode]} />
      <div className={classes.container}>
        <p className={cn(classes.text, classes.incorrectAuthText)}>{incorrectText}</p>
        <NavLink to={RoutePath.login}>
          <Button text={contentText.loginBtn[languageMode]} />
        </NavLink>
      </div>
    </div>
  );
});
