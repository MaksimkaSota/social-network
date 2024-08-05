import { useState, memo } from 'react';
import type { Dispatch, ReactElement, SetStateAction } from 'react';
import classes from './ProfileData.module.scss';
import { Button } from '../../../../Common/Button/Button';
import { ProfileDataFormContainer } from '../ProfileDataForm/ProfileDataFormContainer';
import { ProfileDataDescription } from '../ProfileDataDescription/ProfileDataDescription';
import type { ErrorType, Nullable } from '../../../../../utils/types/common';
import type { SetStatusType, SetSubmittingType } from '../../../../../utils/types/form';
import type { IRequestProfile } from '../../../../../utils/types/api';
import { contentText } from '../../../../../utils/languageLocalization/contentText';

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
  languageMode: string;
};

export const ProfileData = memo<PropsType>(
  ({ isOwner, data, updateData, isFetchingData, dataError, languageMode }): ReactElement => {
    const [editModeData, setEditModeData] = useState<boolean>(false);

    const onActivateEditModeData = (): void => {
      setEditModeData(true);
    };

    return (
      <div className={classes.dataBlock}>
        {editModeData ? (
          <ProfileDataFormContainer
            data={data}
            updateData={updateData}
            setEditModeData={setEditModeData}
            languageMode={languageMode}
          />
        ) : (
          <>
            <ProfileDataDescription
              data={data}
              isFetchingData={isFetchingData}
              dataError={dataError}
              languageMode={languageMode}
            />
            {isOwner && (
              <Button
                text={contentText.editDataBtn[languageMode]}
                className={classes.button}
                onClick={onActivateEditModeData}
              />
            )}
          </>
        )}
      </div>
    );
  }
);
