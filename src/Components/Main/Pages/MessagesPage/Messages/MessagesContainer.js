import { addMessage, setMessage } from '../../../../../redux/actions/messages';
import { Messages } from './Messages';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  messages: state.messages.messages,
  messageText: state.messages.messageText
});
const mapDispatchToProps = {setMessage, addMessage};

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
