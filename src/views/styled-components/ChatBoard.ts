import styled, { css } from 'styled-components';
import Theme from './Theme';

export const ChatBoardCover = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: scroll;
`;

export const MessageBubble = styled.div`
  max-width: 250px;
  box-sizing: border-box;
  padding: 10px;
  background-color: #ddd;
  border-top-right-radius: ${Theme.APEX_RADIUS};
  border-bottom-right-radius: ${Theme.APEX_RADIUS};
  border-bottom-left-radius: ${Theme.APEX_RADIUS};
`;

export const TextLine = styled.p`
  margin: 0;
`;

export const MessageTime = styled.div`
  font-size: 10px;
  color: #aaa;
  width: 40px;
  text-align: left;
  padding: 5px;
`;

interface MessageCoverProps {
  authorMe?: boolean;
}

export const MessageCover = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  align-items: flex-end;

  ${({ authorMe = false }: MessageCoverProps) =>
    authorMe &&
    css`
      flex-direction: row-reverse;

      ${MessageBubble} {
        background-color: ${Theme.MAIN_COLOR5};
        color: #fff;
        border-top-left-radius: ${Theme.APEX_RADIUS};
        border-top-right-radius: 0;
      }

      ${MessageTime} {
        text-align: right;
      }
    `}
`;
