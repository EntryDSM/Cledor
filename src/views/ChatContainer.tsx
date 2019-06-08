import * as React from 'react';
import Message from '../entities/Message';
import InfoBar from './InfoBar';
import MessageWrapper from './MessageWrapper';
import ChatBar from './ChatBar';
import {
  ChatContainerCover,
  ChatBoardCover,
} from './styled-components/ChatContainer';
import {
  sendMessage,
  listenOnReceiveMessage,
  join,
  listenOnChangeOnlineAdminCount,
} from '../socket/socket';
import EmailInput from './EmailInput';

interface ChatContainerProps {
  onClose: () => void;
}

interface ChatContainerState {
  messages: Message[];
  email: string;
  onlineAdminCount: number;
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
      onlineAdminCount: 0,
    };

    listenOnReceiveMessage(this.appendMessage);
    listenOnChangeOnlineAdminCount(this.changeOnlineAdminCount);
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

  changeOnlineAdminCount = (onlineAdminCount: number) => {
    this.setState({ onlineAdminCount });
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
    const { messages, email, onlineAdminCount } = this.state;

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
        <InfoBar onlines={onlineAdminCount} onClose={this.close} />
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
