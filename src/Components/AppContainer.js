import { App } from './App';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from '../redux/thunks/auth';
import { isFetchingAuthSelector } from '../redux/selectors/loading';

export const AppContainer = () => {
  const isFetchingAuth = useSelector(isFetchingAuthSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuth());
  }, []);

  return (
    <App isFetchingAuth={isFetchingAuth} />
  );
};
