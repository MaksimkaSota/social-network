import { Dialogs } from './Dialogs';
import { useSelector } from 'react-redux';
import { dialogsSelector } from '../../../../../redux/selectors/messages';

export const DialogsContainer = () => {
  const dialogs = useSelector(dialogsSelector);

  return (
    <Dialogs dialogs={dialogs} />
  );
};
