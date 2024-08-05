import type { FC, ReactElement } from 'react';
import classes from './ProfileStatusText.module.scss';
import { Preloader } from '../../../../Common/Preloader/Preloader';
import type { ErrorType, Nullable } from '../../../../../utils/types/common';
import { contentText } from '../../../../../utils/languageLocalization/contentText';
import { errorText } from '../../../../../utils/languageLocalization/errorText';
import { Language } from '../../../../../utils/types/enums';

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
      {statusError && (
        <p className={classes.statusTextError}>
          {statusError.code || errorText.some[languageMode]} {errorText.error[languageMode]}.
          <br />
          {errorText.status[languageMode]}!
        </p>
      )}
      {incorrectStatusText && languageMode === Language.en && (
        <p className={classes.statusTextError}>{incorrectStatusText}!</p>
      )}
      {incorrectStatusText && languageMode === Language.ru && (
        <p className={classes.statusTextError}>{errorText.incorrectStatusText.ru}!</p>
      )}
    </div>
  );
};
