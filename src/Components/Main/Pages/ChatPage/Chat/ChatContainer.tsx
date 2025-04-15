import { type FC, type ReactElement, useCallback, useEffect } from 'react';
import { Chat } from './Chat';
import { useViewParameters } from '../../../../../hooks/useViewParameters';
import { useTypedDispatch } from '../../../../../hooks/useTypedDispatch';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { chatSelector, viewSelector } from '../../../../../redux/selectors/selectors';
import { resetMessages, setChannelStatus } from '../../../../../redux/actions/chat';
import { sendMessage, startMessagesListening, stopMessagesListening } from '../../../../../redux/thunks/chat';

export const ChatContainer: FC = (): ReactElement => {
  const { messages, channelStatus } = useTypedSelector(chatSelector);
  const { languageMode, themeMode } = useTypedSelector(viewSelector);

  const dispatch = useTypedDispatch();
  const sendMessagesCallback = useCallback((message: string) => dispatch(sendMessage(message)), [dispatch]);

  useEffect(() => {
    dispatch(startMessagesListening());

    return () => {
      dispatch(stopMessagesListening());
      dispatch(resetMessages());
      dispatch(setChannelStatus('pending'));
    };
  }, [dispatch]);

  useEffect(() => {
    if (channelStatus === 'fulfilled') {
      dispatch(resetMessages());
    }
  }, [channelStatus, dispatch]);

  useViewParameters(languageMode, themeMode);

  return (
    <Chat
      messages={messages}
      sendMessage={sendMessagesCallback}
      channelStatus={channelStatus}
      languageMode={languageMode}
    />
  );
};
