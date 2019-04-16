import * as React from 'react';
import { defaultMessage } from '../config';
import Message from '../entities/Message';
import {
  ChatBoardCover,
  MessageCover,
  MessageBubble,
  TextLine,
  MessageTime,
  ImageCover,
  StyledImage,
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
      messages.map(
        ({ id, content, encodedImageData, isAuthorMe, sendedAt }: Message) => {
          let formatedTime: string;

          if (sendedAt) {
            const { date } = this.state;
            date.setTime(sendedAt);
            formatedTime = formatTime(date);
          } else {
            formatedTime = '';
          }

          const messageImage = encodedImageData ? (
            <ImageCover>
              <MessageTime>{formatedTime}</MessageTime>
              <StyledImage src={encodedImageData} />
            </ImageCover>
          ) : (
            ''
          );

          const messageText = content ? (
            <>
              <MessageBubble>
                {content.split('\n').map((line, index) => (
                  <TextLine key={index}>{line}</TextLine>
                ))}
              </MessageBubble>
              <MessageTime>{formatedTime}</MessageTime>
            </>
          ) : (
            ''
          );

          return (
            <MessageCover key={id} authorMe={isAuthorMe}>
              {messageImage}
              {messageText}
            </MessageCover>
          );
        },
      );

    const messageBubbles =
      messages.length > 0
        ? toMessageBubbles(messages)
        : toMessageBubbles(defaultMessage);

    return <ChatBoardCover>{messageBubbles}</ChatBoardCover>;
  }
}
