import { FC, ReactElement } from 'react';
import classes from './ProfileDataDescription.module.scss';
import { Preloader } from '../../../../Common/Preloader/Preloader';
import { Contacts } from '../Contacts/Contacts';
import { ErrorType, Nullable } from '../../../../../utils/types/common';
import { IRequestProfile } from '../../../../../utils/types/api';

type PropsType = {
  data: IRequestProfile;
  isFetchingData: boolean;
  dataError: Nullable<ErrorType>;
};

export const ProfileDataDescription: FC<PropsType> = ({ data, isFetchingData, dataError }): ReactElement => {
  if (isFetchingData) {
    return (
      <div className={classes.dataPreloaderWrapper}>
        <Preloader className={classes.dataPreloader} />
      </div>
    );
  }

  return (
    <div className={classes.dataDescriptionBlock}>
      {dataError && <p className={classes.dataError}>Error {dataError.code}, Failed to update data</p>}
      <div className={classes.descriptionBlock}>
        <h5 className={classes.title}>Full name:</h5>
        <p className={classes.text}>{data.fullName}</p>
      </div>
      <div className={classes.descriptionBlock}>
        <h5 className={classes.title}>Looking for a job:</h5>
        <p className={classes.text}>{data.lookingForAJob ? 'yes' : 'no'}</p>
      </div>
      {data.lookingForAJob && (
        <div className={classes.descriptionBlock}>
          <h5 className={classes.title}>My professional skills:</h5>
          <p className={classes.text}>{data.lookingForAJobDescription}</p>
        </div>
      )}
      <div className={classes.descriptionBlock}>
        <h5 className={classes.title}>About me:</h5>
        <p className={classes.text}>{data.aboutMe}</p>
      </div>
      <Contacts contacts={data.contacts} />
    </div>
  );
};
