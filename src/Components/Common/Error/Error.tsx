import type { FC, ReactElement } from 'react';
import cn from 'classnames';
import classes from './Error.module.scss';
import robotError from '../../../assets/images/robot-error.png';
import robot404 from '../../../assets/images/robot-404.png';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { viewSelector } from '../../../redux/selectors/selectors';
import { errorText } from '../../../utils/languageLocalization/errorText';
import { altText } from '../../../utils/languageLocalization/altText';

type PropsType = {
  code?: number;
  message: string;
  isGlobalError?: boolean;
};

export const Error: FC<PropsType> = ({ code, message, isGlobalError = false }): ReactElement => {
  const { languageMode } = useTypedSelector(viewSelector);

  const robot = code === 404 ? robot404 : robotError;

  return (
    <div className={cn(classes.errorPageBlock, { [classes.globalError]: isGlobalError })}>
      <h3 className={classes.errorTitle}>
        {code} {errorText.error[languageMode]}
      </h3>
      <img className={classes.errorImage} src={robot} alt={altText.robot[languageMode]} />
      <p className={classes.errorText}>{message}</p>
    </div>
  );
};
