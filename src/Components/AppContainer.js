import { App } from './App';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from '../redux/thunks/auth';
import { isFetchingAuthSelector } from '../redux/selectors/loading';
import { errorAuthSelector } from '../redux/selectors/error';

export const AppContainer = () => {
  const isFetchingAuth = useSelector(isFetchingAuthSelector);
  const errorAuth = useSelector(errorAuthSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuth());
  }, []);

  return (
    <App isFetchingAuth={isFetchingAuth} errorAuth={errorAuth} />
  );
};
