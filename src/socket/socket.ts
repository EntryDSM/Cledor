import socketIoClient from 'socket.io-client';
import { connectionUrl } from './endpoint';

export default socketIoClient(connectionUrl);
