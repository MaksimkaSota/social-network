// eslint-disable-next-line
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppState } from '../redux/reducers/reducers';

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
