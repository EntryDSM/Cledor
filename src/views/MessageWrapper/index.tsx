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
    <S.MessageCover>
      <S.StyledImage src={encodedImageData} />
      <S.MessageTime>{formattedTime}</S.MessageTime>
    </S.MessageCover>
  ) : (
    ''
  );

  const textMessage = content ? (
    <S.MessageCover>
      <S.MessageBubble>
        {content.split('\n').map((line, index) => (
          <S.TextLine key={index}>{line}</S.TextLine>
        ))}
      </S.MessageBubble>
      <S.MessageTime>{formattedTime}</S.MessageTime>
    </S.MessageCover>
  ) : (
    ''
  );

  return (
    <S.Component authorMe={!isAdmin}>
      {imageMessage}
      {textMessage}
    </S.Component>
  );
};

export default MessageWrapper;
