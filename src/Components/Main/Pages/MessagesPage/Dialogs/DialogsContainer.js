import { Dialogs } from './Dialogs';
import { useSelector } from 'react-redux';

export const DialogsContainer = () => {
  const dialogs = useSelector((state) => state.messages.dialogs);

  return (
    <Dialogs dialogs={dialogs} />
  );
};
