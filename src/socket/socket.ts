import socketIoClient from 'socket.io-client';
import { connectionUrl } from './endpoint';
import { getBase64 } from '../utlis';

const socket = socketIoClient(connectionUrl);

enum Event {
  SEND_MESSAGE = 'send message',
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
