import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isAuthSelector } from '../redux/selectors/auth';

export const useAuthRedirect = (Component) => {
  const isAuth = useSelector(isAuthSelector);
  return isAuth ? Component : <Navigate to="/login" />;
};
