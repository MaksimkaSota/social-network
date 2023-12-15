import classes from './ProfileData.module.scss';
import { Contacts } from '../Contacts/Contacts';
import { Button } from '../../../../Common/Button/Button';
import { useState } from 'react';
import { ProfileDataFormContainer } from '../ProfileDataForm/ProfileDataFormContainer';
import { Preloader } from '../../../../Common/Preloader/Preloader';

export const ProfileData = ({
                              isOwner,
                              data,
                              updateData,
                              isFetchingData,
                              errorData
                            }) => {
  const [editModeData, setEditModeData] = useState(false);

  const onActivateEditModeData = () => {
    setEditModeData(true);
  };

  return (
    <div className={classes.dataBlock}>
      {
        editModeData ?
          <ProfileDataFormContainer
            data={data}
            updateData={updateData}
            setEditModeData={setEditModeData}
          /> :
          <>
            {
              isOwner &&
              <div className={classes.updateButtonBlock}>
                <Button text="Edit profile" className={classes.button} onClick={onActivateEditModeData} />
              </div>
            }
            {
              isFetchingData ?
                <Preloader className={classes.dataPreloader} /> :
                <>
                  {
                    errorData &&
                    <p className={classes.dataError}>Error {errorData.code}, Failed to update data</p>
                  }
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
                </>
            }
          </>
      }
    </div>
  );
};
