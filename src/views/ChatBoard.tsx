import * as React from 'react';
import Message from '../entities/Message';
import {
  ChatBoardCover,
  MessageCover,
  MessageBubble,
  MessageTime,
} from './styled-components/ChatBoard';

interface ChatBoardProps {
  messages?: Message[];
}

const ChatBoard: React.FC<ChatBoardProps> = ({
  messages = [
    {
      id: '0',
      content: '대화 내용이 없습니다. 문의사항을 입력해주세요.',
      isAuthorMe: false,
      sendedAt: '',
    },
  ],
}) => {
  const MessageBubbles = messages.map(
    ({ id, content, isAuthorMe, sendedAt }: Message) => (
      <MessageCover key={id} authorMe={isAuthorMe}>
        <MessageBubble>{content}</MessageBubble>
        <MessageTime>{sendedAt}</MessageTime>
      </MessageCover>
    ),
  );
  return <ChatBoardCover>{MessageBubbles}</ChatBoardCover>;
};

export default ChatBoard;
