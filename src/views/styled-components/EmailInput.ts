import styled from 'styled-components';
import Theme from './Theme';

export const EmailInputForm = styled.form`
  padding: 10px;
`;

export const EmailInput = styled.input.attrs({
  type: 'email',
})`
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

  &::placeholder {
    color: #777;
    font-size: 15px;
  }
`;
