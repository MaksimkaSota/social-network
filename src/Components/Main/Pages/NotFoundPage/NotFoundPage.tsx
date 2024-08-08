import type { FC, ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { Error } from '../../../Common/Error/Error';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { viewSelector } from '../../../../redux/selectors/selectors';
import { errorText } from '../../../../utils/languageLocalization/errorText';

export const NotFoundPage: FC = (): ReactElement => {
  const { languageMode } = useTypedSelector(viewSelector);

  const { pathname } = useLocation();
  const message = `${errorText.notFoundPt1[languageMode]} "${pathname}" ${errorText.notFoundPt2[languageMode]}!`;

  return <Error code={404} message={message} />;
};
