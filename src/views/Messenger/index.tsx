import * as React from 'react';
import Message from '../../entities/Message';
import StatusBar from '../StatusBar';
import ChatableBar from '../ChatableBar';
import * as S from './styles';
import {
  sendMessage,
  listenOnReceiveMessage,
  join,
  listenOnChangeOnlineAdminCount,
} from '../../apis/socket';
import MessagesBoard from '../MessagesBoard';
import Switchable from '../Switchable';

interface ChatContainerProps {
  appKey: string;
  onClose: () => void;
}

interface ChatContainerState {
  messages: Message[];
  email: string;
  onlineAdminCount: number;
}

export default class Messenger extends React.Component<
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

    listenOnReceiveMessage(message => {
      const { messages } = this.state;
      this.setState({
        messages: messages.concat(message),
      });
    });
    listenOnChangeOnlineAdminCount(onlineAdminCount => {
      this.setState({ onlineAdminCount });
    });
  }

  send = (content: string, imageData?: File) => {
    const { email } = this.state;
    sendMessage({ email, content, imageData });
  }

  handleChangeEmail = (email: string) => {
    this.setState({ email });
    join({ email });
  }

  public render() {
    const { messages, email, onlineAdminCount } = this.state;

    return (
      <Switchable>
        {onClose => (
          <S.Messenger>
            <StatusBar onlines={onlineAdminCount} onClose={onClose} />
            <MessagesBoard messages={messages} />
            <ChatableBar
              send={this.send}
              onChangeEmail={this.handleChangeEmail}
              email={email}
            />
          </S.Messenger>
        )}
      </Switchable>
    );
  }
}
