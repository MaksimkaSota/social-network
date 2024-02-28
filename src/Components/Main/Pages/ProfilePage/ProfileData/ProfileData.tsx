import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react';
import classes from './ProfileData.module.scss';
import { Button } from '../../../../Common/Button/Button';
import { ProfileDataFormContainer } from '../ProfileDataForm/ProfileDataFormContainer';
import { ProfileDataDescription } from '../ProfileDataDescription/ProfileDataDescription';
import { IRequestProfile } from '../../../../../api/types/profile';
import { Nullable } from '../../../../../utils/types/common';
import { ErrorType } from '../../../../../redux/types/error';
import { SetStatusType, SetSubmittingType } from '../../../../../utils/types/formik';

type PropsType = {
  isOwner: boolean;
  data: IRequestProfile;
  updateData: (
    profileData: IRequestProfile,
    setStatus: SetStatusType,
    setSubmitting: SetSubmittingType,
    setEditModeData: Dispatch<SetStateAction<boolean>>
  ) => void;
  isFetchingData: boolean;
  dataError: Nullable<ErrorType>;
};

export const ProfileData = React.memo<PropsType>(
  ({ isOwner, data, updateData, isFetchingData, dataError }): ReactElement => {
    const [editModeData, setEditModeData] = useState<boolean>(false);

    const onActivateEditModeData = (): void => {
      setEditModeData(true);
    };

    return (
      <div className={classes.dataBlock}>
        {editModeData ? (
          <ProfileDataFormContainer data={data} updateData={updateData} setEditModeData={setEditModeData} />
        ) : (
          <>
            {isOwner && (
              <div className={classes.updateButtonBlock}>
                <Button text="Edit profile" className={classes.button} onClick={onActivateEditModeData} />
              </div>
            )}
            <ProfileDataDescription data={data} isFetchingData={isFetchingData} dataError={dataError} />
          </>
        )}
      </div>
    );
  }
);