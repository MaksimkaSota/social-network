import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../redux/actions/actions';

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actionCreators, dispatch)
}
