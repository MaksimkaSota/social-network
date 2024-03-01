import { Navigate } from 'react-router-dom';
import { isAuthSelector } from '../redux/selectors/auth';
import { ReactElement } from 'react';
import { useTypedSelector } from './useTypedSelector';
import { RoutePath } from '../utils/types/common';

export const useAuthRedirect = (Component: ReactElement): ReactElement => {
  const isAuth = useTypedSelector(isAuthSelector);
  return isAuth ? Component : <Navigate to={RoutePath.login} />;
};
