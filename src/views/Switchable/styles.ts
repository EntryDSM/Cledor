import styled, { css } from 'styled-components';
import Theme from '../../Theme';

export const SwitchableContainer = styled.div<{ canChat: boolean }>`
  position: fixed;
  bottom: 30px;
  right: 30px;
  box-shadow: ${Theme.DEFAULT_SHADOW};
  border-radius: ${Theme.APEX_RADIUS};
  transition: 0.5s;
  transition-property: width, height, background-color, transform, box-shadow;

  ${({ canChat }) =>
    canChat
      ? css`
          width: 350px;
          height: 500px;
          background-color: #fff;

          ${LauncherButton} {
            display: none;
          }
        `
      : css`
          width: 60px;
          height: 60px;
          background-color: ${Theme.MAIN_COLOR5};
          cursor: pointer;

          &:hover {
            transform: translateY(-5px);
            box-shadow: ${Theme.HOVER_SHADOW};
          }

          ${Content} {
            display: none;
          }
        `}
`;

export const LauncherButton = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
`;
