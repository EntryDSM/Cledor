import styled, { css } from 'styled-components';
import Theme from '../../Theme';

export const EmailInputForm = styled.form`
  padding: 10px;
`;

export const GuidingMessage = styled.div`
  margin: 0 70px 10px 10px;
  border: 1px ${Theme.MAIN_COLOR4} solid;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: ${Theme.APEX_RADIUS};
  border-bottom-left-radius: 0;
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
