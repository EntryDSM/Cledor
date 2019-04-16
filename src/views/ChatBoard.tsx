import * as React from 'react';
import { defaultMessage } from '../config';
import Message from '../entities/Message';
import {
  ChatBoardCover,
  MessageCover,
  MessageBubble,
  TextLine,
  MessageTime,
} from './styled-components/ChatBoard';
import { formatTime } from '../utlis';

interface ChatBoardProps {
  messages: Message[];
}

interface ChatBoardState {
  date: Date;
}

export default class ChatBoard extends React.Component<
  ChatBoardProps,
  ChatBoardState
> {
  constructor(props: ChatBoardProps) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  public render() {
    const { messages } = this.props;
    const toMessageBubbles = (messages: Message[]) =>
      messages.map(({ id, content, isAuthorMe, sendedAt }: Message) => {
        const formatTimeByMillisecond = (millisecond?: number) => {
          if (millisecond) {
            const { date } = this.state;
            date.setTime(millisecond);
            return formatTime(date);
          }
          return '';
        };

        const lines = content.split('\n');

        return (
          <MessageCover key={id} authorMe={isAuthorMe}>
            <MessageBubble>
              {lines.map((line, index) => (
                <TextLine key={index}>{line}</TextLine>
              ))}
            </MessageBubble>
            <MessageTime>{formatTimeByMillisecond(sendedAt)}</MessageTime>
          </MessageCover>
        );
      });

    const messageBubbles =
      messages.length > 0
        ? toMessageBubbles(messages)
        : toMessageBubbles(defaultMessage);
    return <ChatBoardCover>{messageBubbles}</ChatBoardCover>;
  }
}
