import type { FC, ReactElement } from 'react';
import { useCallback, useEffect } from 'react';
import { Chat } from './Chat';
import { useTypedDispatch } from '../../../../../hooks/useTypedDispatch';
import { sendMessage, startMessagesListening, stopMessagesListening } from '../../../../../redux/thunks/chat';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { resetMessages, setChannelStatus } from '../../../../../redux/actions/chat';
import { chatSelector, viewSelector } from '../../../../../redux/selectors/selectors';

export const ChatContainer: FC = (): ReactElement => {
  const { messages, channelStatus } = useTypedSelector(chatSelector);
  const { languageMode } = useTypedSelector(viewSelector);

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

  return (
    <Chat
      messages={messages}
      sendMessage={sendMessagesCallback}
      channelStatus={channelStatus}
      languageMode={languageMode}
    />
  );
};
