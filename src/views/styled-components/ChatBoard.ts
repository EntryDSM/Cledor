import styled, { css } from 'styled-components';
import Theme from './Theme';

export const ChatBoardCover = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: scroll;
`;

export const ImageCover = styled.div`
  width: 100%;
`;

export const StyledImage = styled.img`
  max-width: 250px;
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
  padding: 5px;
  box-sizing: border-box;
  display: inline-block;
`;

interface MessageCoverProps {
  authorMe?: boolean;
}

export const MessageCover = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  align-items: flex-end;
  flex-wrap: wrap;

  ${({ authorMe = false }: MessageCoverProps) =>
    authorMe &&
    css`
      flex-direction: row-reverse;

      ${ImageCover} {
        text-align: right;
      }

      ${MessageBubble} {
        background-color: ${Theme.MAIN_COLOR5};
        color: #fff;
        border-top-left-radius: ${Theme.APEX_RADIUS};
        border-top-right-radius: 0;
      }
    `}
`;
