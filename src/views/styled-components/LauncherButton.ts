import styled from 'styled-components';
import Theme from './Theme';

export const LauncherButtonCover = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: ${Theme.MAIN_COLOR5};
  border-radius: 20px;
  box-shadow: ${Theme.DEFAULT_SHADOW};
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${Theme.HOVER_SHADOW};
  }
`;
