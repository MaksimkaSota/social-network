import type { FC, ReactElement } from 'react';
import { ProfileInfoContainer } from './ProfileInfo/ProfileInfoContainer';
import { Preloader } from '../../../Common/Preloader/Preloader';
import { Error } from '../../../Common/Error/Error';
import { Language } from '../../../../utils/types/enums';
import type { ErrorType, Nullable } from '../../../../utils/types/common';
import type { IResponseProfile } from '../../../../utils/types/api';
import { errorText } from '../../../../utils/languageLocalization/errorText';

type PropsType = {
  isFetchingProfile: boolean;
  profileError: Nullable<ErrorType>;
  profile: Nullable<IResponseProfile>;
  isOwner: boolean;
  languageMode: string;
};

export const ProfilePage: FC<PropsType> = ({
  isFetchingProfile,
  profileError,
  profile,
  isOwner,
  languageMode,
}): ReactElement => {
  if (isFetchingProfile && !profile) {
    return <Preloader />;
  }

  if (profileError) {
    const message = languageMode === Language.en ? profileError.message : errorText.profile.ru;
    return <Error code={profileError.code} message={message} />;
  }

  return <ProfileInfoContainer profile={profile} isOwner={isOwner} />;
};
