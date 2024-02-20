export type DialogType = {
  id: number;
  name: string;
};

export type MessageType = {
  id: number;
  messageText: string;
};

export type MessagesState = {
  dialogs: Array<DialogType>;
  messages: Array<MessageType>;
};

export enum MessagesActionType {
  ADD_MESSAGES_MESSAGE = 'ADD_MESSAGES_MESSAGE',
  DELETE_MESSAGES_MESSAGE = 'DELETE_MESSAGES_MESSAGE',
}

export type AddMessageAction = { type: MessagesActionType.ADD_MESSAGES_MESSAGE; payload: string };
export type DeleteMessageAction = { type: MessagesActionType.DELETE_MESSAGES_MESSAGE; payload: number };

export type MessagesAction = AddMessageAction | DeleteMessageAction;
