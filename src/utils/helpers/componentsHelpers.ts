import type { KeyboardEvent, RefObject } from 'react';
import type { ChannelStatus, Nullable } from '../types/common';
import type { SubmitFormType } from '../types/form';
import { KeyboardEventCode } from '../types/enums';

export const submitFormOnKeyboardPress = (
  event: KeyboardEvent,
  submitForm: SubmitFormType,
  channelStatus?: ChannelStatus
): void => {
  if (!!channelStatus && channelStatus !== 'received') return;
  if (event.ctrlKey && event.code === KeyboardEventCode.enter) {
    submitForm();
  }
};

export const scrollToBottom = (ref: RefObject<HTMLDivElement>): void => {
  ref.current?.scrollTo({
    top: ref.current.scrollHeight,
    behavior: 'smooth',
  });
};

export const copyTextOnClick = async (
  text: string,
  setStatus: (status: Nullable<string>) => void,
  setIsCopied: (isCopied: boolean) => void
): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
    setStatus('successful copying');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  } catch {
    setStatus('failed copying');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  }
};
