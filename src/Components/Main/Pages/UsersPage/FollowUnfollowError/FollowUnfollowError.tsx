import type { FC, ReactElement } from 'react';
import classes from './FollowUnfollowError.module.scss';
import { Language } from '../../../../../utils/types/enums';
import type { FollowUnfollowErrorType } from '../../../../../utils/types/common';
import { errorText } from '../../../../../utils/languageLocalization/errorText';

type PropsType = {
  errors: FollowUnfollowErrorType[];
  userId: number;
  languageMode: string;
};

export const FollowUnfollowError: FC<PropsType> = ({ errors, userId, languageMode }): ReactElement | undefined => {
  const currentError = errors.find((error: FollowUnfollowErrorType): boolean => error.id === userId);
  const errorMessage = languageMode === Language.en ? currentError?.message : errorText.followUnfollow[languageMode];

  return (
    currentError && (
      <div className={classes.followUnfollowErrorBlock}>
        <p className={classes.followUnfollowError}>
          <b>
            {currentError.code} {errorText.error[languageMode]}
          </b>
          , {errorMessage}.
        </p>
        <p className={classes.followUnfollowError}>{errorText.reload[languageMode]}!</p>
      </div>
    )
  );
};
