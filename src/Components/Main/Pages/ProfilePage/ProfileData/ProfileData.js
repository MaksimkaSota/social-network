import classes from './ProfileData.module.scss';
import { Contacts } from '../Contacts/Contacts';
import { Button } from '../../../../Common/Button/Button';

export const ProfileData = ({isOwner, fullName, lookingForAJob, lookingForAJobDescription, aboutMe, contacts}) => {
  return (
    <div className={classes.dataBlock}>
      {
        isOwner &&
        <div className={classes.updateButtonBlock}>
          <Button text="Edit profile" className={classes.button} />
        </div>
      }
      <div className={classes.descriptionBlock}>
        <b className={classes.title}>Full name:</b>
        <p className={classes.text}>{fullName}</p>
      </div>
      <div className={classes.descriptionBlock}>
        <b className={classes.title}>Looking for a job:</b>
        <p className={classes.text}>{lookingForAJob ? 'yes' : 'no'}</p>
      </div>
      {
        lookingForAJob &&
        <div className={classes.descriptionBlock}>
          <b className={classes.title}>My professional skills:</b>
          <p className={classes.text}>{lookingForAJobDescription}</p>
        </div>
      }
      <div className={classes.descriptionBlock}>
        <b className={classes.title}>About me:</b>
        <p className={classes.text}>{aboutMe}</p>
      </div>
      <Contacts contacts={contacts} />
    </div>
  );
};
