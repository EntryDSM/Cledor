import * as React from 'react';
import Message from '../entities/Message';
import InfoBar from './InfoBar';
import MessageWrapper from './MessageWrapper';
import ChatBar from './ChatBar';
import {
  ChatContainerCover,
  ChatBoardCover,
} from './styled-components/ChatContainer';
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
    const { messages } = this.state;
    const wrappedMessages = messages.map(
      ({ content, encodedImageData, isAdmin, id, sendedAt }) => {
        return (
          <MessageWrapper
            key={id}
            sendedAt={sendedAt}
            isAdmin={isAdmin}
            encodedImageData={encodedImageData}
            content={content}
          />
        );
      },
    );
    return (
      <ChatContainerCover>
        <InfoBar onlines={0} onClose={this.close} />
        <ChatBoardCover>{wrappedMessages}</ChatBoardCover>
        <ChatBar send={this.send} />
      </ChatContainerCover>
    );
  }
}
