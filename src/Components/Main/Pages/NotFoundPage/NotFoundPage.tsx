import { useLocation } from 'react-router-dom';
import { Error } from '../../../Common/Error/Error';
import { FC, ReactElement } from 'react';

export const NotFoundPage: FC = (): ReactElement => {
  const { pathname } = useLocation();
  const message: string = `The requested URL "${pathname}" was not found on this server!`;

  return <Error code={404} message={message} />;
};
