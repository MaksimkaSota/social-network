import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/reducers/reducers';

export const useTypedDispatch: () => AppDispatch = useDispatch;
