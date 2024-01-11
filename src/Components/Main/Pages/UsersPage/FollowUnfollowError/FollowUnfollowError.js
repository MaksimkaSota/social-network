import classes from './FollowUnfollowError.module.scss';

export const FollowUnfollowError = ({errors, userId}) => {
  const currentError = errors.find((error) => error.id === userId);
  if (currentError) {
    return (
      <div className={classes.followUnfollowErrorBlock}>
        <p className={classes.followUnfollowError}><b>Error {currentError.code}</b>, {currentError.message}</p>
        <p className={classes.followUnfollowError}>Reload the page and try again!</p>
      </div>
    );
  }
};
