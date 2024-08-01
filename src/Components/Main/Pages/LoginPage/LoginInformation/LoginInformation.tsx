import { memo, useState } from 'react';
import type { ReactElement } from 'react';
import classes from './LoginInformation.module.scss';
import { Language, RequestString } from '../../../../../utils/types/enums';
import type { Nullable } from '../../../../../utils/types/common';
import { copyTextOnClick } from '../../../../../utils/helpers/componentsHelpers';
import { contentText } from '../../../../../utils/languageLocalization/contentText';
import { errorText } from '../../../../../utils/languageLocalization/errorText';

type PropsType = {
  incorrectAuthText: string;
  languageMode: string;
};

export const LoginInformation = memo<PropsType>(({ incorrectAuthText, languageMode }): ReactElement => {
  const [emailStatus, setEmailStatus] = useState<Nullable<string>>(null);
  const [passwordStatus, setPasswordStatus] = useState<Nullable<string>>(null);
  const [isCopiedEmail, setIsCopiedEmail] = useState<boolean>(false);
  const [isCopiedPassword, setIsCopiedPassword] = useState<boolean>(false);

  const incorrectText = languageMode === Language.en ? incorrectAuthText : errorText.authorization.ru;

  return (
    <div className={classes.helpBlock}>
      <p className={classes.incorrectAuthText}>
        {incorrectText}. {contentText.incorrectAuthText[languageMode]}!
      </p>
      <p className={classes.mainHelpText}>
        {`${contentText.loginTextPt1[languageMode]} `}
        <a className={classes.helpLink} href={RequestString.samurai_js} target="_blank" rel="noopener noreferrer">
          {`${contentText.loginTextPt2[languageMode]} `}
        </a>
        {contentText.loginTextPt3[languageMode]}:
      </p>
      <p className={classes.mainHelpText}>
        {`${contentText.email[languageMode]}: `}
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
        {`${contentText.password[languageMode]}: `}
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
});
