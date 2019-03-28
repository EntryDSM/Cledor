import * as React from 'react';
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
  send = (_content: String, _imageData: File) => null;

  public render() {
    return (
      <div>
        <ChatBoard />
        <ChatBar send={this.send} />
      </div>
    );
  }
}
