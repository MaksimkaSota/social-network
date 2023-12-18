import classes from './ProfileDataDescription.module.scss';
import { Preloader } from '../../../../Common/Preloader/Preloader';
import { Contacts } from '../Contacts/Contacts';

export const ProfileDataDescription = ({data, isFetchingData, errorData}) => {
  if (isFetchingData) {
    return (
      <div className={classes.dataPreloaderWrapper}>
        <Preloader className={classes.dataPreloader} />
      </div>
    );
  }

  return (
    <div className={classes.dataDescriptionBlock}>
      {errorData && <p className={classes.dataError}>Error {errorData.code}, Failed to update data</p>}
      <div className={classes.descriptionBlock}>
        <h5 className={classes.title}>Full name:</h5>
        <p className={classes.text}>{data.fullName}</p>
      </div>
      <div className={classes.descriptionBlock}>
        <h5 className={classes.title}>Looking for a job:</h5>
        <p className={classes.text}>{data.lookingForAJob ? 'yes' : 'no'}</p>
      </div>
      {
        data.lookingForAJob &&
        <div className={classes.descriptionBlock}>
          <h5 className={classes.title}>My professional skills:</h5>
          <p className={classes.text}>{data.lookingForAJobDescription}</p>
        </div>
      }
      <div className={classes.descriptionBlock}>
        <h5 className={classes.title}>About me:</h5>
        <p className={classes.text}>{data.aboutMe}</p>
      </div>
      <Contacts contacts={data.contacts} />
    </div>
  );
};
