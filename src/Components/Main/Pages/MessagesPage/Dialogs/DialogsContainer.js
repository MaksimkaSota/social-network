import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  dialogs: state.messages.dialogs
});

export const DialogsContainer = connect(mapStateToProps)(Dialogs);
