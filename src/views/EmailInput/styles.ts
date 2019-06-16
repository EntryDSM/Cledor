import styled, { css, keyframes } from 'styled-components';
import Theme from '../../Theme';

export const EmailInputForm = styled.form`
  padding: 10px;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    transform: translateY(0);
  }

  60% {
    opacity: 0;
  }

  75% {
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const GuidingMessage = styled.div`
  margin: 0 70px 20px 10px;
  border: 1px ${Theme.MAIN_COLOR4} solid;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: ${Theme.APEX_RADIUS};
  border-bottom-left-radius: 0;
  animation: ${fadeIn} 1.5s ease-in-out;
`;

export const EmailInput = styled.input<{ hasError: boolean }>`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-size: 15px;
  min-height: 30px;
  padding: 10px 20px;
  line-height: 20px;
  resize: none;
  outline: none;
  border: none;
  border-radius: ${Theme.APEX_RADIUS};
  background-color: ${Theme.MAIN_COLOR1};
  transition: background-color 0.2s;

  &::placeholder {
    color: #777;
    font-size: 15px;
  }

  ${({ hasError }) =>
    hasError &&
    css`
      background-color: ${Theme.MAIN_COLOR4};
    `}
`;
