import * as React from 'react';
import * as S from './styles';
import Message from '../../entities/Message';
import MessageWrapper from '../MessageWrapper';

interface MessagesBoardProps {
  messages: Message[];
}

const MessagesBoard: React.FunctionComponent<MessagesBoardProps> = ({
  messages,
}) => {
  const wrappedMessages = messages.map(
    ({ content, encodedImageData, isAdmin, _id, sendedAt }) => {
      return (
        <MessageWrapper
          key={_id}
          sendedAt={sendedAt}
          isAdmin={isAdmin}
          encodedImageData={encodedImageData}
          content={content}
        />
      );
    },
  );

  return (
    <S.ChatBoardCover>
      {wrappedMessages}
      <S.BottomOfBoard />
    </S.ChatBoardCover>
  );
};

export default MessagesBoard;
