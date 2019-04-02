import * as React from 'react';
import InfoBar from './InfoBar';
import ChatBoard from './ChatBoard';
import ChatBar from './ChatBar';

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

  public render() {
    return (
      <div>
        <InfoBar onlines={0} />
        <ChatBoard />
        <ChatBar send={this.send} />
      </div>
    );
  }
}
