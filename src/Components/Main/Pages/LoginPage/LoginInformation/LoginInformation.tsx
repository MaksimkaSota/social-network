import { useState } from 'react';
import type { FC, ReactElement } from 'react';
import classes from './LoginInformation.module.scss';
import { RequestString } from '../../../../../utils/types/enums';
import type { Nullable } from '../../../../../utils/types/common';
import { copyTextOnClick } from '../../../../../utils/helpers/componentHelpers';

type PropsType = {
  incorrectAuthText: string;
};

export const LoginInformation: FC<PropsType> = ({ incorrectAuthText }): ReactElement => {
  const [emailStatus, setEmailStatus] = useState<Nullable<string>>(null);
  const [passwordStatus, setPasswordStatus] = useState<Nullable<string>>(null);
  const [isCopiedEmail, setIsCopiedEmail] = useState<boolean>(false);
  const [isCopiedPassword, setIsCopiedPassword] = useState<boolean>(false);

  return (
    <div className={classes.helpBlock}>
      <p className={classes.incorrectAuthText}>{incorrectAuthText}! Log in, please!</p>
      <p className={classes.mainHelpText}>
        To log in get registered{' '}
        <a className={classes.helpLink} href={RequestString.samurai_js} target="_blank" rel="noopener noreferrer">
          here
        </a>{' '}
        or use common test account credentials:
      </p>
      <p className={classes.mainHelpText}>
        Email:{' '}
        {isCopiedEmail ? (
          <span className={classes.copyText}>{emailStatus}</span>
        ) : (
          <span
            className={classes.additionalHelpText}
            title="click to copy"
            aria-hidden
            onClick={() => {
              copyTextOnClick('free@samuraijs.com', setEmailStatus, setIsCopiedEmail);
            }}
          >
            free@samuraijs.com
          </span>
        )}
      </p>
      <p className={classes.mainHelpText}>
        Password:{' '}
        {isCopiedPassword ? (
          <span className={classes.copyText}>{passwordStatus}</span>
        ) : (
          <span
            className={classes.additionalHelpText}
            title="click to copy"
            aria-hidden
            onClick={() => {
              copyTextOnClick('free', setPasswordStatus, setIsCopiedPassword);
            }}
          >
            free
          </span>
        )}
      </p>
    </div>
  );
};
