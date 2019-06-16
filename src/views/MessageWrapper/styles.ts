import styled, { css } from 'styled-components';
import Theme from '../../Theme';

export const MessagesDirector = styled.div<{ authorMe: boolean }>`
  ${({ authorMe }) =>
    authorMe &&
    css`
      ${MessageWrapper} {
        flex-direction: row-reverse;
      }

      ${MessageBubble} {
        background-color: ${Theme.MAIN_COLOR5};
        color: #fff;
        border-top-left-radius: 20px;
        border-top-right-radius: 0;
      }
    `}
`;

export const MessageWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: flex-end;
`;

export const StyledImage = styled.img`
  max-width: 250px;
`;

export const MessageBubble = styled.div`
  max-width: 250px;
  padding: 10px;
  background-color: #ddd;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const TextLine = styled.p`
  line-height: 20px;
  margin: 0;
`;

export const MessageTime = styled.div`
  font-size: 10px;
  color: #aaa;
  padding: 0 5px;
`;
