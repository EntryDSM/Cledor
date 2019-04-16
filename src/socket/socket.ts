import socketIoClient from 'socket.io-client';
import Message from '../entities/Message';
import { connectionUrl } from './endpoint';
import { getBase64 } from '../utlis';

const socket = socketIoClient(connectionUrl);

enum Event {
  SEND_MESSAGE = 'send message',
  RECEIVE_MESSAGE = 'receive message',
}

export const sendMessage = (content: string, imageData?: File) => {
  if (imageData instanceof File) {
    getBase64(imageData).then(encodedImageData => {
      socket.emit(Event.SEND_MESSAGE, content, encodedImageData);
    });
  } else {
    socket.emit(Event.SEND_MESSAGE, content);
  }
};

export const listenOnReceiveMessage = (
  listener: (message: Message) => void,
) => {
  socket.on(Event.RECEIVE_MESSAGE, listener);
};
