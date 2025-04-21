import type { FC, ReactElement } from 'react';
import classes from './ProfileStatusText.module.scss';
import { Preloader } from '../../../../Common/Preloader/Preloader';
import { ConnectionError } from '../../../../Common/ConnectionError/ConnectionError';
import { ServerError } from '../../../../Common/ServerError/ServerError';
import { TextKey } from '../../../../../utils/types/enums';
import type { ErrorType, Nullable } from '../../../../../utils/types/common';
import { contentText } from '../../../../../utils/languageLocalization/contentText';

type PropsType = {
  status: string;
  localStatus: string;
  incorrectStatusText: string;
  isFetchingStatus: boolean;
  statusError: Nullable<ErrorType>;
  languageMode: string;
};

export const ProfileStatusText: FC<PropsType> = ({
  status,
  localStatus,
  incorrectStatusText,
  isFetchingStatus,
  statusError,
  languageMode,
}): ReactElement => {
  if (isFetchingStatus && status !== localStatus) {
    return (
      <div className={classes.statusPreloaderWrapper}>
        <Preloader className={classes.statusPreloader} />
      </div>
    );
  }

  return (
    <div className={classes.statusTextBlock}>
      <p className={classes.statusText}>{status || contentText.noStatus[languageMode]}</p>
      <ConnectionError
        error={statusError}
        errorTextKey={TextKey.status}
        languageMode={languageMode}
        className={classes.statusTextError}
      />
      <ServerError
        incorrectText={incorrectStatusText}
        incorrectTextKey={TextKey.incorrectStatus}
        languageMode={languageMode}
        className={classes.statusTextError}
      />
    </div>
  );
};
