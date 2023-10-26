import { App } from './App';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initialize } from '../redux/thunks/initial';
import { initialSelector } from '../redux/selectors/initial';

export const AppContainer = () => {
  const initialized = useSelector(initialSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialize());
  }, []);

  return (
    <App initialized={initialized} />
  );
};
