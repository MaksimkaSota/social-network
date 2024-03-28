import type { KeyboardEvent } from 'react';
import type { ChannelStatus } from '../types/common';
import type { SubmitFormType } from '../types/form';

export const submitFormOnKeyboardPress = (
  event: KeyboardEvent,
  submitForm: SubmitFormType,
  channelStatus?: ChannelStatus
): void => {
  if (!!channelStatus && channelStatus !== 'received') return;
  if (event.ctrlKey && event.code === 'Enter') {
    submitForm();
  }
};
