import * as React from 'react';
import InfoBar from './InfoBar';
import ChatBoard from './ChatBoard';
import ChatBar from './ChatBar';
import { ChatContainerCover } from './styled-components/ChatContainer';

export interface ChatContainerProps {}

export interface ChatContainerState {}

export default class ChatContainer extends React.Component<
  ChatContainerProps,
  ChatContainerState
> {
  constructor(props: ChatContainerProps) {
    super(props);

    this.state = {};
  }

  // tslint:disable-next-line: variable-name
  send = (_content: string, _imageData: File) => null;

  close = () => null;

  public render() {
    return (
      <ChatContainerCover>
        <InfoBar onlines={0} onClose={this.close} />
        <ChatBoard />
        <ChatBar send={this.send} />
      </ChatContainerCover>
    );
  }
}
