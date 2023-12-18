import classes from './ProfileData.module.scss';
import { Button } from '../../../../Common/Button/Button';
import { useState } from 'react';
import { ProfileDataFormContainer } from '../ProfileDataForm/ProfileDataFormContainer';
import { ProfileDataDescription } from '../ProfileDataDescription/ProfileDataDescription';

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
            <ProfileDataDescription data={data} isFetchingData={isFetchingData} errorData={errorData}/>
          </>
      }
    </div>
  );
};
