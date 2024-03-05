// eslint-disable-next-line
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/reducers/reducers';

export const useTypedDispatch: () => AppDispatch = useDispatch;
