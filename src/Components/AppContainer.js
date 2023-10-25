import { App } from './App';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initialize } from '../redux/thunks/initial';

export const AppContainer = () => {
  const initialized = useSelector((state) => state.initial.initialized);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialize());
  }, []);

  return (
    <App initialized={initialized} />
  );
};
