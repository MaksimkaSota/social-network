import type { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useTypedSelector } from './useTypedSelector';
import { RoutePath } from '../utils/types/enums';
import { authSelector } from '../redux/selectors/selectors';

export const useAuthRedirect = (Component: ReactElement): ReactElement => {
  const { isAuth } = useTypedSelector(authSelector);
  return isAuth ? Component : <Navigate to={RoutePath.login} />;
};
