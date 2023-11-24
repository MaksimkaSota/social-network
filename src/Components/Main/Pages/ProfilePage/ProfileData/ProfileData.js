import classes from './ProfileData.module.scss';
import { Contacts } from '../Contacts/Contacts';
import { Button } from '../../../../Common/Button/Button';
import { useState } from 'react';
import { ProfileDataFormContainer } from '../ProfileDataForm/ProfileDataFormContainer';

export const ProfileData = ({
                              isOwner,
                              data,
                              updateData,
                            }) => {
  const [editModeData, setEditModeData] = useState(false);

  const onActivateEditModeData = () => {
    setEditModeData(true);
  };

  return (
    <div className={classes.dataBlock}>
      {
        editModeData ?
          <ProfileDataFormContainer data={data}
                                    updateData={updateData}
                                    setEditModeData={setEditModeData} /> :
          <>
            {
              isOwner &&
              <div className={classes.updateButtonBlock}>
                <Button text="Edit profile" className={classes.button} onClick={onActivateEditModeData} />
              </div>
            }
            <div className={classes.descriptionBlock}>
              <b className={classes.title}>Full name:</b>
              <p className={classes.text}>{data.fullName}</p>
            </div>
            <div className={classes.descriptionBlock}>
              <b className={classes.title}>Looking for a job:</b>
              <p className={classes.text}>{data.lookingForAJob ? 'yes' : 'no'}</p>
            </div>
            {
              data.lookingForAJob &&
              <div className={classes.descriptionBlock}>
                <b className={classes.title}>My professional skills:</b>
                <p className={classes.text}>{data.lookingForAJobDescription}</p>
              </div>
            }
            <div className={classes.descriptionBlock}>
              <b className={classes.title}>About me:</b>
              <p className={classes.text}>{data.aboutMe}</p>
            </div>
            <Contacts contacts={data.contacts} />
          </>
      }
    </div>
  );
};
