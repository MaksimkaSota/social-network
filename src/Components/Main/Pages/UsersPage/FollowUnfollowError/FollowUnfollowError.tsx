import { FC, ReactElement } from 'react';
import classes from './FollowUnfollowError.module.scss';
import { FollowUnfollowErrorType } from '../../../../../redux/types/users';

type PropsType = {
  errors: Array<FollowUnfollowErrorType>;
  userId: number;
};

export const FollowUnfollowError: FC<PropsType> = ({ errors, userId }): ReactElement | undefined => {
  const currentError = errors.find((error: FollowUnfollowErrorType) => error.id === userId);

  return (
    currentError && (
      <div className={classes.followUnfollowErrorBlock}>
        <p className={classes.followUnfollowError}>
          <b>Error {currentError.code}</b>, {currentError.message}
        </p>
        <p className={classes.followUnfollowError}>Reload the page and try again!</p>
      </div>
    )
  );
};
