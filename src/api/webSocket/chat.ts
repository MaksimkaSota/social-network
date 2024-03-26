import { RequestString } from '../../utils/types/enums';
import type {
  ChannelStatus,
  ChannelStatusSubscriber,
  EventsNames,
  MessagesSubscriber,
  Nullable,
  SubscribersType,
} from '../../utils/types/common';

let ws: Nullable<WebSocket> = null;
const subscribers: SubscribersType = {
  receiveMessage: [],
  changeChannelStatus: [],
};

const cleanUp = (): void => {
  window.onoffline = null;

  if (!ws) return;
  ws.onclose = null;
  ws.onmessage = null;
  ws.onopen = null;
};

const notifyAboutChannelStatus = (status: ChannelStatus): void => {
  subscribers.changeChannelStatus.forEach((subscriber: ChannelStatusSubscriber) => subscriber(status));
};

const createChannel = (): void => {
  cleanUp();
  ws?.close();

  ws = new WebSocket(RequestString.samurai_js_web_socket);

  window.onoffline = (): void => {
    notifyAboutChannelStatus('pending');
    createChannel();
  };
  ws.onclose = (): void => {
    notifyAboutChannelStatus('pending');
    setTimeout(createChannel, 3000);
  };
  ws.onmessage = (event: MessageEvent): void => {
    const newMessages = JSON.parse(event.data);
    subscribers.receiveMessage.forEach((subscriber: MessagesSubscriber) => subscriber(newMessages));
  };
  ws.onopen = (): void => {
    notifyAboutChannelStatus('fulfilled');
  };
};

export const chatAPI = {
  start(): void {
    createChannel();
  },
  stop(): void {
    subscribers.receiveMessage = [];
    subscribers.changeChannelStatus = [];
    cleanUp();
    ws?.close();
  },
  subscribe(eventName: EventsNames, callback: MessagesSubscriber | ChannelStatusSubscriber): void {
    // @ts-ignore
    subscribers[eventName].push(callback);
  },
  unsubscribe(eventName: EventsNames, callback: MessagesSubscriber | ChannelStatusSubscriber): void {
    // @ts-ignore
    subscribers[eventName] = subscribers[eventName].filter((subscriber) => subscriber !== callback);
  },
  sendMessage(message: string): void {
    ws?.send(message);
  },
};
