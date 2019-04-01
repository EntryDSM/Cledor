import * as React from 'react';
import Message from '../entities/Message';
import {
  ChatBoardCover,
  MessageCover,
  MessageBubble,
  MessageTime,
} from './styled-components/ChatBoard';

export interface ChatBoardProps {
  messages?: Message[];
}

const ChatBoard: React.FC<ChatBoardProps> = ({
  messages = [
    {
      content: '대화 내용이 없습니다. 문의사항을 입력해주세요.',
      isAuthorMe: false,
      sendedAt: '',
    },
  ],
}: ChatBoardProps) => {
  const MessageBubbles = messages.map(
    ({ content, isAuthorMe, sendedAt }: Message) => (
      <MessageCover authorMe={isAuthorMe}>
        <MessageBubble>{content}</MessageBubble>
        <MessageTime>{sendedAt}</MessageTime>
      </MessageCover>
    ),
  );
  return <ChatBoardCover>{MessageBubbles}</ChatBoardCover>;
};

export default ChatBoard;
