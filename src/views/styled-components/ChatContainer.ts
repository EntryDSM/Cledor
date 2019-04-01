import styled from 'styled-components';
import Theme from './Theme';

export const ChatContainerCover = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-shadow: ${Theme.DEFAULT_SHADOW};
  border-radius: ${Theme.APEX_RADIUS};
  display: flex;
  flex-direction: column;
`;
