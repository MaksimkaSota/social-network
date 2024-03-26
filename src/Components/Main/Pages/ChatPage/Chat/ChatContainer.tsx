import type { FC, ReactElement } from 'react';
import { useCallback, useEffect } from 'react';
import { Chat } from './Chat';
import { useTypedDispatch } from '../../../../../hooks/useTypedDispatch';
import { sendMessage, startMessagesListening, stopMessagesListening } from '../../../../../redux/thunks/chat';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { channelStatusSelector, messageSelector } from '../../../../../redux/selectors/chat';

export const ChatContainer: FC = (): ReactElement => {
  const messages = useTypedSelector(messageSelector);
  const channelStatus = useTypedSelector(channelStatusSelector);

  const dispatch = useTypedDispatch();
  const sendMessagesCallback = useCallback((message: string) => dispatch(sendMessage(message)), [dispatch]);

  useEffect(() => {
    dispatch(startMessagesListening());

    return () => {
      dispatch(stopMessagesListening());
    };
  }, [dispatch]);

  return <Chat messages={messages} sendMessage={sendMessagesCallback} channelStatus={channelStatus} />;
};
