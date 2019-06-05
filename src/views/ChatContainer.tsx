import * as React from 'react';
import Message from '../entities/Message';
import InfoBar from './InfoBar';
import MessageWrapper from './MessageWrapper';
import ChatBar from './ChatBar';
import {
  ChatContainerCover,
  ChatBoardCover,
} from './styled-components/ChatContainer';
import { sendMessage, listenOnReceiveMessage, join } from '../socket/socket';
import EmailInput from './EmailInput';

interface ChatContainerProps {
  onClose: () => void;
}

interface ChatContainerState {
  messages: Message[];
  email: string;
}

export default class ChatContainer extends React.Component<
  ChatContainerProps,
  ChatContainerState
> {
  constructor(props: ChatContainerProps) {
    super(props);

    this.state = {
      messages: [],
      email: '',
    };

    listenOnReceiveMessage(this.appendMessage);
  }

  send = (content: string, imageData?: File) => {
    const { email } = this.state;
    sendMessage({ email, content, imageData });
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

  handleEmailSubmit = (email: string) => {
    this.setState({ email });
    join({ email });
  }

  public render() {
    const { messages, email } = this.state;

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
        {email === '' ? (
          <EmailInput onSubmit={this.handleEmailSubmit} />
        ) : (
          <ChatBar send={this.send} />
        )}
      </ChatContainerCover>
    );
  }
}
