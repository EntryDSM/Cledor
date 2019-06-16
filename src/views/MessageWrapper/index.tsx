import * as React from 'react';
import * as S from './styles';
import { formatMillisecond } from '../../utlis';

interface MessageWrapperProps {
  content?: string;
  sendedAt: number;
  isAdmin: boolean;
  encodedImageData?: string;
}

const MessageWrapper: React.FunctionComponent<MessageWrapperProps> = ({
  content,
  sendedAt,
  isAdmin,
  encodedImageData,
}) => {
  const formattedTime = formatMillisecond(sendedAt);

  const imageMessage = encodedImageData ? (
    <S.MessageWrapper>
      <S.StyledImage src={encodedImageData} />
      <S.MessageTime>{formattedTime}</S.MessageTime>
    </S.MessageWrapper>
  ) : (
    ''
  );

  const textMessage = content ? (
    <S.MessageWrapper>
      <S.MessageBubble>
        {content.split('\n').map((line, index) => (
          <S.TextLine key={index}>{line}</S.TextLine>
        ))}
      </S.MessageBubble>
      <S.MessageTime>{formattedTime}</S.MessageTime>
    </S.MessageWrapper>
  ) : (
    ''
  );

  return (
    <S.MessagesDirector authorMe={!isAdmin}>
      {imageMessage}
      {textMessage}
    </S.MessagesDirector>
  );
};

export default MessageWrapper;
