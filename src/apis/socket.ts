import socketIoClient from 'socket.io-client';
import Message from '../entities/Message';
import { connectionUrl } from './endpoint';
import { getBase64 } from '../utlis';
import { Event } from './events';

const socket = socketIoClient(connectionUrl);

export const join = ({ email }: { email: string }) => {
  socket.emit(Event.JOIN, { room: email });
};

export const sendMessage = ({
  email,
  content,
  imageData,
}: {
  email: string;
  content: string;
  imageData?: File;
}) => {
  if (imageData instanceof File) {
    getBase64(imageData).then(encodedImageData => {
      socket.emit(Event.SEND_MESSAGE, {
        content,
        encodedImageData,
        writer: email,
        room: email,
      });
    });
  } else {
    socket.emit(Event.SEND_MESSAGE, {
      content,
      writer: email,
      room: email,
    });
  }
};

export const listenOnReceiveMessage = (
  listener: (message: Message) => void,
) => {
  socket.on(Event.RECEIVE_MESSAGE, listener);
};

export const listenOnChangeOnlineAdminCount = (
  listener: (onlineAdminCount: number) => void,
) => {
  socket.on(Event.ONLINE_ADMIN_COUNT, listener);
};
