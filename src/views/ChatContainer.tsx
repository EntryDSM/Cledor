import * as React from 'react';
import Message from '../entities/Message';
import InfoBar from './InfoBar';
import ChatBoard from './ChatBoard';
import ChatBar from './ChatBar';
import { ChatContainerCover } from './styled-components/ChatContainer';
import { sendMessage, listenOnReceiveMessage } from '../socket/socket';

interface ChatContainerProps {
  onClose: () => void;
}

interface ChatContainerState {
  messages: Message[];
}

export default class ChatContainer extends React.Component<
  ChatContainerProps,
  ChatContainerState
> {
  constructor(props: ChatContainerProps) {
    super(props);

    this.state = {
      messages: [],
    };

    listenOnReceiveMessage(this.appendMessage);
  }

  send = (content: string, imageData?: File) => {
    sendMessage(content, imageData);
  }

  appendMessage = (message: Message) => {
    const { messages } = this.state;
    this.setState({
      messages: messages.concat(message),
    });
  }

  close = () => {
    const { onClose } = this.props;
    onClose();
  }

  public render() {
    return (
      <ChatContainerCover>
        <InfoBar onlines={0} onClose={this.close} />
        <ChatBoard messages={this.state.messages} />
        <ChatBar send={this.send} />
      </ChatContainerCover>
    );
  }
}
