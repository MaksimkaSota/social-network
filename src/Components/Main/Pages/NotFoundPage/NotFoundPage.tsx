import type { FC, ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { Error } from '../../../Common/Error/Error';

export const NotFoundPage: FC = (): ReactElement => {
  const { pathname } = useLocation();
  const message = `The requested URL "${pathname}" was not found on this server!`;

  return <Error code={404} message={message} />;
};
