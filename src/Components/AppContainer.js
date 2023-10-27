import { App } from './App';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from '../redux/thunks/auth';
import { isFetchingAuthSelector } from '../redux/selectors/loading';
import { useMounted } from '../hooks/useMounted';

export const AppContainer = () => {
  const isFetchingAuth = useSelector(isFetchingAuthSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuth());
  }, []);

  const mounted = useMounted();

  return (
    mounted && <App isFetchingAuth={isFetchingAuth} />
  );
};
