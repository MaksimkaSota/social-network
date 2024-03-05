// eslint-disable-next-line
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import type { AppState } from '../redux/reducers/reducers';

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
