import { type FC, memo, type ReactElement } from 'react';
import UserPhoto from '../../../assets/images/user.svg';
import type { Nullable } from '../../../utils/types/common';
import { altText } from '../../../utils/languageLocalization/altText';

type PropsType = {
  avatar: Nullable<string>;
  className: string;
  languageMode: string;
};

export const Avatar: FC<PropsType> = memo(({ avatar, className, languageMode }): ReactElement => {
  return avatar ? (
    <img className={className} src={avatar} alt={altText.ava[languageMode]} />
  ) : (
    <UserPhoto className={className} alt={altText.ava[languageMode]} />
  );
});
