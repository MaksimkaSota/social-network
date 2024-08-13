import type { KeyboardEvent, RefObject } from 'react';
import type { ChannelStatus, Nullable } from '../types/common';
import type { SubmitFormType } from '../types/form';
import { KeyboardEventCode } from '../types/enums';
import { contentText } from '../languageLocalization/contentText';

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
  setIsCopied: (isCopied: boolean) => void,
  languageMode: string
): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
    setStatus(contentText.successfulCopying[languageMode]);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  } catch {
    setStatus(contentText.failedCopying[languageMode]);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  }
};
