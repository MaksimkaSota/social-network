import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const useAuthRedirect = (Component) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return isAuth ? Component : <Navigate to="/login" />;
};
