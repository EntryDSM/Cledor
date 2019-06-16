import styled, { css } from 'styled-components';
import Theme from '../../Theme';

export const SwitchableContainer = styled.div<{ canChat: boolean }>`
  position: fixed;
  bottom: 30px;
  right: 30px;
  box-shadow: ${Theme.DEFAULT_SHADOW};
  border-radius: ${Theme.APEX_RADIUS};
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;
  transition-property: width, height, background-color, transform, box-shadow;

  ${({ canChat }) =>
    canChat
      ? css`
          width: 350px;
          height: 500px;
          background-color: #fff;

          ${Content} {
            display: block;
            opacity: 1;
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

          ${LauncherButton} {
            display: block;
            opacity: 1;
          }
        `}
`;

export const switchingElement = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  opacity: 0;
  transition-property: opacity;
  transition-delay: 0.2s;
  transition-duration: 0.4s;
`;

export const LauncherButton = styled(switchingElement)``;

export const Content = styled(switchingElement)``;
