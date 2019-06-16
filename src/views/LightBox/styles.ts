import styled, { css } from 'styled-components';
import downloadPng from '../assets/download.png';
import closePng from '../assets/close.png';
import zoom_inPng from '../assets/zoom_in.png';
import zoom_outPng from '../assets/zoom_out.png';

export const LightBox = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  flex-flow: column;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ToolBar = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: flex-end;
  padding: 10px 50px;
`;

const ToolButton = styled.button`
  height: 20px;
  width: 20px;
  display: block;
  cursor: pointer;
  margin-left: 20px;
  border: none;
  outline: none;
`;

export const DownloadButton = styled.a`
  background: url(${downloadPng}) no-repeat;
  background-position: center center;
  background-size: cover;

  height: 20px;
  width: 20px;
  display: block;
  cursor: pointer;
  margin-left: 20px;
`;

export const ZoomInButton = styled(ToolButton)`
  background: url(${zoom_inPng}) no-repeat;
  background-position: center center;
  background-size: cover;
`;

export const ZoomOutButton = styled(ToolButton)`
  background: url(${zoom_outPng}) no-repeat;
  background-position: center center;
  background-size: cover;
`;

export const CloseButton = styled(ToolButton)`
  background: url(${closePng}) no-repeat;
  background-position: center center;
  background-size: cover;
`;

export const ImageFlexContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img<{ magnification: number }>`
  ${({ magnification }) => css`
    max-height: ${magnification * 10}vh;
    max-width: ${magnification * 10}vw;
  `}
`;
