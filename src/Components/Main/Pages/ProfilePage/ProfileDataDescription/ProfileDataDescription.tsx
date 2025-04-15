import type { FC, ReactElement } from 'react';
import classes from './ProfileDataDescription.module.scss';
import { Preloader } from '../../../../Common/Preloader/Preloader';
import { Contacts } from '../Contacts/Contacts';
import { ConnectionError } from '../../../../Common/ConnectionError/ConnectionError';
import { TextKey } from '../../../../../utils/types/enums';
import type { ErrorType, Nullable } from '../../../../../utils/types/common';
import type { IRequestProfile } from '../../../../../utils/types/api';
import { contentText } from '../../../../../utils/languageLocalization/contentText';

type PropsType = {
  data: IRequestProfile;
  isFetchingData: boolean;
  dataError: Nullable<ErrorType>;
  languageMode: string;
};

export const ProfileDataDescription: FC<PropsType> = ({
  data,
  isFetchingData,
  dataError,
  languageMode,
}): ReactElement => {
  if (isFetchingData) {
    return (
      <div className={classes.dataPreloaderWrapper}>
        <Preloader className={classes.dataPreloader} />
      </div>
    );
  }

  return (
    <div className={classes.dataDescriptionBlock}>
      <ConnectionError
        error={dataError}
        errorTextKey={TextKey.data}
        languageMode={languageMode}
        className={classes.dataError}
      />
      <div className={classes.descriptionBlock}>
        <h5 className={classes.title}>{contentText.fullName[languageMode]}:</h5>
        <p className={classes.text}>{data.fullName}</p>
      </div>
      <div className={classes.descriptionBlock}>
        <h5 className={classes.title}>{contentText.job[languageMode]}:</h5>
        <p className={classes.text}>
          {data.lookingForAJob ? contentText.yes[languageMode] : contentText.no[languageMode]}
        </p>
      </div>
      {data.lookingForAJob && (
        <div className={classes.descriptionBlock}>
          <h5 className={classes.title}>{contentText.jobDescription[languageMode]}:</h5>
          <p className={classes.text}>{data.lookingForAJobDescription}</p>
        </div>
      )}
      <div className={classes.descriptionBlock}>
        <h5 className={classes.title}>{contentText.me[languageMode]}:</h5>
        <p className={classes.text}>{data.aboutMe}</p>
      </div>
      <Contacts contacts={data.contacts} languageMode={languageMode} />
    </div>
  );
};
