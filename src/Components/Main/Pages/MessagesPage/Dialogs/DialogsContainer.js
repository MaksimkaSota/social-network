import { Dialogs } from './Dialogs';
import { useContext } from 'react';
import { StoreContext } from '../../../../Common/Context/StoreContext';

export const DialogsContainer = () => {
  const store = useContext(StoreContext);
  const state = store.getState();

  return (
    <Dialogs dialogs={state.messages.dialogs} />
  );
};
